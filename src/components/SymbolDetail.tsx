import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import EChartsReactCore from 'echarts-for-react/lib/core'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, TitleComponent, ToolboxComponent, DataZoomComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import DataContext from '../DataContext.tsx'
import { historyBySymbol, searchBySymbol } from "../api.tsx"
import { transformYFinanceData } from "../utils.ts"
import {format} from "date-fns";
import styled from "styled-components"

const DetailWrapper = styled.div`
  min-width: 80vw;
  .basic-info {
    margin: 16px 0;
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
    .basic-right {
      text-align: right;
      display: flex;
      justify-content: flex-end;
      .price {
        font-size: 24px;
        font-weight: 800;
      }
      .compare {
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
        margin-right: 0px;
        padding: 2px 8px;
        border-radius: 8px;
      }
      p {
        margin: 4px 0;
      }
    }
    .basic-left {
      text-align: left;
      .symbol {
        font-size: 28px;
        font-weight: 1000;
      }
      .name {
        font-size: 18px;
        font-weight: 500;
        color: #666;
      }
      .quote-type {
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
        margin-left: 0;
        padding: 2px 8px;
        border-radius: 8px;
        background-color: #213547;
      }
      .currency {
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
        margin-left: 0;
        padding: 2px 8px;
        border-radius: 8px;
        background-color: #888888;        
      }
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        margin: 4px 0;
        span {
          margin: 0 8px;
        }
      }
    }
  }
  .more-data {
    margin: 16px 0;
    display: flex;
    flex-direction: row;
    .left {
      width: 50%;
      text-align: left;
      font-size: 14px;
      div {
        border-bottom: 1px solid #666666;
      }
    }
    .right {
      width: 50%;
      text-align: right;
      font-size: 14px;
      div {
        border-bottom: 1px solid #666666;
      }
    }
  }
`

// Register the required components
echarts.use(
  [ LineChart, CanvasRenderer, GridComponent, TooltipComponent, TitleComponent, ToolboxComponent, DataZoomComponent ]
);

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
        period: 'max'
      })
      history && setCursoredSymbolHistory && setCursoredSymbolHistory(history)
    };

    fetchData()
  }, [id])

  return (
    <DetailWrapper>
      {cursoredSymbol && (
        <div className="basic-info">
          <div className="basic-left">
            <p className="symbol">{cursoredSymbol.info?.symbol}</p>
            <p className="name">{cursoredSymbol.info?.longName}</p>
            <p>
              <span className="quote-type">{cursoredSymbol.info?.quoteType}</span>
              <span className="currency">{cursoredSymbol.info?.currency}</span>
            </p>
          </div>
          <div className="basic-right">
            <p className="price">{cursoredSymbol.metadata?.regularMarketPrice}</p>
            <p>
              <span className="compare" style={{
                backgroundColor: cursoredSymbol.info && cursoredSymbol.metadata && (cursoredSymbol.metadata.regularMarketPrice! - cursoredSymbol.info.previousClose!)! < 0 ? 'green' : 'red'
              }}>
                {cursoredSymbol.info && cursoredSymbol.metadata && (cursoredSymbol.metadata.regularMarketPrice! - cursoredSymbol.info.previousClose!).toFixed(2)}
              </span>
              <span className="compare" style={{
                backgroundColor: cursoredSymbol.info && cursoredSymbol.metadata && (cursoredSymbol.metadata.regularMarketPrice! - cursoredSymbol.info.previousClose!)! < 0 ? 'green' : 'red'
              }}>
                {cursoredSymbol.info && cursoredSymbol.metadata && (((cursoredSymbol.metadata.regularMarketPrice! - cursoredSymbol.info.previousClose!) / cursoredSymbol.info.previousClose!) * 100).toFixed(2)}%
              </span>
            </p>
          </div>
        </div>
      )}
      {cursoredSymbolHistory && (
        <div>
          <EChartsReactCore
            echarts={echarts}
            option={{
              tooltip: {
                trigger: 'axis',
                formatter: function (params: any[]) {
                  const data = params[0].data
                  return `
                    <div>
                      Date: ${data[0]}<br/>
                      Open: ${parseFloat(data[1]).toFixed(2)}<br/>
                      Close: ${parseFloat(data[2]).toFixed(2)}<br/>
                      Low: ${parseFloat(data[3]).toFixed(2)}<br/>
                      High: ${parseFloat(data[4]).toFixed(2)}
                    </div>
                  `
                },
                position: (pt: number[]) => [pt[0], '10%']
              },
              xAxis: {
                type: 'time',
                boundaryGap: false
              },
              yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
              },
              dataZoom: [
                {
                  type: 'inside',
                  start: 80,
                  end: 100
                },
                {
                  start: 80,
                  end: 100
                }
              ],
              grid: [{
                show: false,
                z: 0,
                left: "60px",
                top: "70px",
                right: "0px",
                bottom: "70px",
                containLabel: false,
                backgroundColor: "#000000",
                borderWidth: 1,
                borderColor: "#ccc",
              }],
              series: [
                {
                  name: 'Close Price Trend',
                  type: 'line',
                  smooth: true,
                  symbol: 'none',
                  areaStyle: {},
                  data: cursoredSymbolHistory?.map(item => [
                    format(new Date(item.Date!), 'yyyy-MM-dd'),
                    item.Open,
                    item.Close,
                    item.Low,
                    item.High
                  ])
                }
              ]
            }}
            notMerge={true}
            lazyUpdate={true}
            onChartReady={() => console.log('ready')}
          />
        </div>
      )}
      <div className="more-data">
        <div className="left">
          <div>52 Week Low: {cursoredSymbol?.info?.fiftyTwoWeekLow}</div>
          <div>52 Week High: {cursoredSymbol?.info?.fiftyTwoWeekHigh}</div>
          <div>Yield: {cursoredSymbol?.info?.yield || '-'}</div>
        </div>
        <div className="right">
          <div>Beta: {cursoredSymbol?.info?.beta || '-'}</div>
          {cursoredSymbol?.info?.quoteType === 'MUTUALFUND' && (
            <>
              <div>MorningStarRiskRating: {cursoredSymbol?.info?.morningStarRiskRating}</div>
              <div>MorningStarOverallRating: {cursoredSymbol?.info?.morningStarOverallRating}</div>
            </>
          )}
          {cursoredSymbol?.info?.quoteType !== 'MUTUALFUND' && (
            <>
              <div>Today's Low: {cursoredSymbol?.info?.dayLow}</div>
              <div>Today's High: {cursoredSymbol?.info?.dayHigh}</div>
            </>
          )}

        </div>
      </div>
      <></>
    </DetailWrapper>
  )
}

export default SymbolDetail