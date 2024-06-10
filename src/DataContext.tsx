import React from 'react'
import {IYFinanceGenericData, IYFinanceHistoryData} from "./idl"

export type AppContextType = {
  defaultSymbolList: IYFinanceGenericData[]
  cursoredSymbol?: IYFinanceGenericData
  setCursoredSymbol?: (symbol: IYFinanceGenericData) => void
  cursoredSymbolHistory?: IYFinanceHistoryData[]
  setCursoredSymbolHistory?: (symbol: IYFinanceHistoryData[]) => void
  searchedSymbol?: IYFinanceGenericData
  setSearchedSymbol?: (symbol: IYFinanceGenericData) => void
}

const DataContext = React.createContext<AppContextType>({} as AppContextType)

export default DataContext