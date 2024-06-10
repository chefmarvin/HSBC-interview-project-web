import {useContext, useState} from 'react'
import { useParams } from "react-router-dom"
import { genaiAnalysis } from '../api'
import { GenAiAnalysisAnalysisByGenAiSymbolGetData, IGenAIReport } from "../idl"
import DataContext from "../DataContext.tsx"

const SymbolAnalysis = () => {
  const { id } = useParams()
  const { cursoredSymbol, cursoredSymbolHistory } = useContext(DataContext)
  const [analysis, setAnalysis] = useState<IGenAIReport | undefined>(undefined)

  const fetchAnalysis = async () => {
    console.log(cursoredSymbol, cursoredSymbolHistory) // todo: use these two data
    const data: GenAiAnalysisAnalysisByGenAiSymbolGetData = { symbol: cursoredSymbol?.metadata?.symbol || id! }
    const result = await genaiAnalysis(data)
    setAnalysis(result)
  };

  return (
    <div>
      <button onClick={fetchAnalysis}>AI Analysis</button>
      {analysis && (
        <>
          <h2>Analysis Report</h2>
          <pre>{JSON.stringify(analysis.report)}</pre>
        </>
      )}
    </div>
  )
}

export default SymbolAnalysis