import {useContext, useState} from 'react'
import { useParams } from "react-router-dom"
import { genaiAnalysis } from '../api'
import { GenAiAnalysisAnalysisByGenAiSymbolGetData, IGenAIReport } from "../idl"
import DataContext from "../DataContext.tsx"
import styled from "styled-components";
import LoadingComponent from "./Loading.tsx";

const AnalysisWrapper = styled.div`
  .trigger-analyze {
    display: flex;
    justify-content: right;
    margin-bottom: 20px;
  }
  .report {
    width: 100%;
    max-width: 80vw;
    display: block;
    white-space: pre-line;
    word-wrap: break-word;
    margin-bottom: 20px;
  }
`

const SymbolAnalysis = () => {
  const { id } = useParams()
  const { cursoredSymbol  } = useContext(DataContext)
  const [analysis, setAnalysis] = useState<IGenAIReport | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const fetchAnalysis = async () => {
    setIsLoading(true)
    const data: GenAiAnalysisAnalysisByGenAiSymbolGetData = { symbol: cursoredSymbol?.metadata?.symbol || id! }
    const result = await genaiAnalysis(data)
    setAnalysis(result)
    setIsLoading(false)
  };

  return (
    <AnalysisWrapper>
      <div className="trigger-analyze">
        <button onClick={fetchAnalysis}>AI Analysis</button>
      </div>
      {isLoading ? (
        <LoadingComponent />
      ) : analysis && (
        <>
          <div className="report">
            <div>{analysis.report}...</div>
          </div>
          <div>Subscribe for full information</div>
        </>
      )}
    </AnalysisWrapper>
  )
}

export default SymbolAnalysis