import { DefaultSymbolsListDefaultSymbolsListGetResponse, IYFinanceGenericData } from "./idl"

export const transformYFinanceData = (data: DefaultSymbolsListDefaultSymbolsListGetResponse): IYFinanceGenericData[] => {
  return Object.values(data)
}

export const groupYFinanceDataInOrder = (data: IYFinanceGenericData[]): IYFinanceGenericData[] => {
  const indexes: IYFinanceGenericData[] = data.filter((item) => item.info && item.info.quoteType === "INDEX")
  const mutualFunds: IYFinanceGenericData[] = data.filter((item) => item.info && item.info.quoteType === "MUTUALFUND")
  const entities: IYFinanceGenericData[] = data.filter((item) => item.info && item.info.quoteType === "EQUITY")
  return [...indexes, ...mutualFunds, ...entities]
}