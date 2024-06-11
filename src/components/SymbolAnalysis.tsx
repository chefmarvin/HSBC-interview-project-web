import {useContext, useState} from 'react'
import { useParams } from "react-router-dom"
import { genaiAnalysis } from '../api'
import { GenAiAnalysisAnalysisByGenAiSymbolGetData, IGenAIReport } from "../idl"
import DataContext from "../DataContext.tsx"
import styled from "styled-components";

const AnalysisWrapper = styled.div`
  .trigger-analyze {
    display: flex;
    justify-content: right;
  }
  .report {
    width: 100%;
    max-width: 80vw;
    display: block;
    white-space: pre-line;
    word-wrap: break-word;
  }
`

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
    <AnalysisWrapper>
      <div className="trigger-analyze">
        <button onClick={fetchAnalysis}>AI Analysis</button>
      </div>
      {analysis && (
        <div className="report">
          <div>{analysis.report}</div>
        </div>
      )}
    </AnalysisWrapper>
  )
}

export default SymbolAnalysis