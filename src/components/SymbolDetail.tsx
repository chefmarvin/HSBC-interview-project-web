import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../DataContext.tsx'
import { historyBySymbol, searchBySymbol } from "../api.tsx"
import { transformYFinanceData } from "../utils.ts"

const SymbolDetail = () => {
  const { id } = useParams()
  const {
    cursoredSymbol,
    setCursoredSymbol,
    cursoredSymbolHistory,
    setCursoredSymbolHistory
  } = useContext(DataContext)

  useEffect(() => {
    const fetchData = async () => {
      if (!cursoredSymbol) {
        const result = await searchBySymbol({ symbol: id! })
        if (result && result[id!]) {
          const searchResult = transformYFinanceData(result)
          setCursoredSymbol && setCursoredSymbol(searchResult[0])
        } else {
          // todo: error
        }
      }

      const history = await historyBySymbol({
        symbol: cursoredSymbol?.metadata?.symbol || id!,
        period: (cursoredSymbol?.metadata?.validRanges && cursoredSymbol?.metadata?.validRanges[0]) || '1mo'
      })
      history && setCursoredSymbolHistory && setCursoredSymbolHistory(history)
    };

    fetchData()
  }, [id])

  return (
    <div>
      <h1>Symbol Detail: {id}</h1>
      {cursoredSymbol && (
        <div>
          <h2>Cursored Symbol</h2>
          <p>{JSON.stringify(cursoredSymbol)}</p>
        </div>
      )}
      {cursoredSymbolHistory && (
        <div>
          <h2>History Data</h2>
          <p>{JSON.stringify(cursoredSymbolHistory)}</p>
        </div>
      )}
    </div>
  )
}

export default SymbolDetail