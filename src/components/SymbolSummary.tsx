import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { IYFinanceGenericData } from "../idl"
import DataContext from "../DataContext.tsx"
import styled from "styled-components";

interface SymbolSummaryProps {
  data: IYFinanceGenericData
}

const SymbolSummaryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  p {
    margin: 12px 0 0 0;
  }
  .names {
    .symbol {
      font-size: 20px;
      font-weight: bold;
      text-align: left;
    }
    .short-name {
      font-size: 12px;
      font-weight: lighter;
    }
  }
  .numbers {
    .price {
      font-size: 18px;
      font-weight: bold;
    }
    .change {
      border-radius: 8px;
      padding: 6px;
      color: white;
      font-weight: bold;
      font-size: 12px;
    }
  }
`

const SymbolSummary: React.FC<SymbolSummaryProps> = ({ data }) => {
  const navigate = useNavigate()
  const { setCursoredSymbol } = useContext(DataContext)
  const symbol = data.info && data.info.symbol
  const shortName = data.info && data.info.shortName
  const regularMarketPrice = data.metadata && data.metadata.regularMarketPrice
  const delta = data.info && data.metadata && (data.metadata.regularMarketPrice! - data.info.previousClose!)
  const ratio = data.info && (delta! / data.info.previousClose!)

  const handleChooseSymbol = () => {
    console.log(data)
    setCursoredSymbol && setCursoredSymbol(data)
    navigate(`/symbol/${data.info && data.info.symbol}`)
  }

  return (
    <SymbolSummaryWrapper onClick={handleChooseSymbol}>
      <div className="names">
        <p className="symbol">{symbol}</p>
        <p className="short-name">{shortName}</p>
      </div>
      <div className="numbers">
        <p className="price">{regularMarketPrice}</p>
        <p className="change" style={{ backgroundColor: delta! < 0 ? 'green' : 'red' }}>
          <span>{delta?.toFixed(2)}</span>
          <span>({(ratio as number * 100).toFixed(2)}%)</span>
        </p>
      </div>
    </SymbolSummaryWrapper>
  )
}

export default SymbolSummary