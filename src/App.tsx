import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { defaultList } from './api'
import './App.css'
import DataContext from "./DataContext.tsx"
import {IYFinanceGenericData, IYFinanceHistoryData } from "./idl"
import { groupYFinanceDataInOrder, transformYFinanceData } from "./utils.ts"
import HomePage from "./pages/HomePage.tsx"
import DetailPage from "./pages/Detail.tsx"
import ErrorPage from "./pages/Error.tsx"

function App() {

  const [defaultData, setDefaultData] = useState<IYFinanceGenericData[]>([])
  const [searchedSymbol, setSearchedSymbol] = useState<IYFinanceGenericData | undefined>()
  const [cursoredSymbol, setCursoredSymbol] = useState<IYFinanceGenericData | undefined>()
  const [cursoredSymbolHistory, setCursoredSymbolHistory] = useState<IYFinanceHistoryData[] | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await defaultList()
      if (data) {
        const groupedYFinanceData = groupYFinanceDataInOrder(transformYFinanceData(data))
        data && setDefaultData(groupedYFinanceData)
      } else {
        // todo: error
      }
    }

    fetchData()
  }, [])

  return (
    <Router>
      <DataContext.Provider value={{
        defaultSymbolList: defaultData,
        searchedSymbol,
        setSearchedSymbol,
        cursoredSymbol,
        setCursoredSymbol,
        cursoredSymbolHistory,
        setCursoredSymbolHistory
      }}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/symbol/:id" element={<DetailPage />}/>
          <Route path="/error/:errorCode" element={<ErrorPage/>}/>
        </Routes>
      </DataContext.Provider>
    </Router>
  )
}

export default App
