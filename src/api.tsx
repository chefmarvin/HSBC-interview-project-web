import axios from 'axios';
import {
  DefaultSymbolsListDefaultSymbolsListGetResponse,
  GenAiAnalysisAnalysisByGenAiSymbolGetData,
  GenAiAnalysisAnalysisByGenAiSymbolGetResponse,
  HistoryBySymbolHistoryBySymbolSymbolGetData,
  HistoryBySymbolHistoryBySymbolSymbolGetResponse,
  SearchBySymbolSearchBySymbolSymbolGetData,
  SearchBySymbolSearchBySymbolSymbolGetResponse,
} from "./idl";

const baseURL = import.meta.env.DEV ? import.meta.env.VITE_API_URL_DEV : import.meta.env.VITE_API_URL_PROD;
const headers = {
  "Access-Control-Allow-Origin": "*",
};

export const defaultList = async (): Promise<DefaultSymbolsListDefaultSymbolsListGetResponse | undefined>  => {
  try {
    const data = await axios({
      method: "get",
      url: baseURL + `/default-symbols-list/`,
      withCredentials: true,
      timeout: 10000,
      headers
    })
    return data.data
  } catch (error) {
    console.error(error)
  }
};

export const searchBySymbol = async (data: SearchBySymbolSearchBySymbolSymbolGetData): Promise<SearchBySymbolSearchBySymbolSymbolGetResponse | undefined>  => {
  try {
    const res = await axios({
      method: "get",
      url: baseURL + `/search/by-symbol/${data.symbol}/`,
      withCredentials: true,
      timeout: 5000,
      headers
    })
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export const historyBySymbol = async (data: HistoryBySymbolHistoryBySymbolSymbolGetData): Promise<HistoryBySymbolHistoryBySymbolSymbolGetResponse | undefined>  => {
    try {
      const res = await axios({
        method: "get",
        url: baseURL + `/history/by-symbol/${data.symbol}/?period=${data.period || '1mo'}`,
        withCredentials: true,
        timeout: 10000,
        headers
      })
      return res.data
    } catch (error) {
        console.error(error)
    }
}

export const genaiAnalysis = async (data: GenAiAnalysisAnalysisByGenAiSymbolGetData): Promise<GenAiAnalysisAnalysisByGenAiSymbolGetResponse | undefined>  => {
  try {
    const res = await axios({
      method: "get",
      url: baseURL + `/analysis/by-genAI/${data.symbol}/`,
      withCredentials: true,
      timeout: 20000,
      headers
    })
    return res.data
  } catch (error) {
    console.error(error)
  }
}