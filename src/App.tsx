import { useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import DataContext from "./DataContext.tsx"
import HomePage from "./pages/HomePage.tsx"
import DetailPage from "./pages/Detail.tsx"
import ErrorPage from "./pages/Error.tsx"
import {IYFinanceGenericData, IYFinanceHistoryData} from "./idl";

function App() {
  // const data = useContext(DataContext)
  // const {
  //   defaultSymbolList,
  //   setDefaultSymbolList,
  //   searchedSymbol,
  //   setSearchedSymbol,
  //   cursoredSymbol,
  //   setCursoredSymbol,
  //   cursoredSymbolHistory,
  //   setCursoredSymbolHistory
  // } = data

  const [defaultData, setDefaultData] = useState<IYFinanceGenericData[]>([])
  const [searchedSymbol, setSearchedSymbol] = useState<IYFinanceGenericData | undefined>()
  const [cursoredSymbol, setCursoredSymbol] = useState<IYFinanceGenericData | undefined>()
  const [cursoredSymbolHistory, setCursoredSymbolHistory] = useState<IYFinanceHistoryData[] | undefined>()

  return (
    <Router>
      <DataContext.Provider value={{
        defaultSymbolList: defaultData,
        setDefaultSymbolList: setDefaultData,
        searchedSymbol: searchedSymbol,
        setSearchedSymbol: setSearchedSymbol,
        cursoredSymbol: cursoredSymbol,
        setCursoredSymbol: setCursoredSymbol,
        cursoredSymbolHistory: cursoredSymbolHistory,
        setCursoredSymbolHistory: setCursoredSymbolHistory
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
