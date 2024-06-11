import React, {useContext, useEffect, useState} from 'react'
import SearchSymbol from '../components/SearchSymbol'
import SymbolSummaryList from '../components/SymbolSummaryList'
import styled from "styled-components";
import {defaultList} from "../api.tsx";
import {groupYFinanceDataInOrder, transformYFinanceData} from "../utils.ts";
import DataContext from "../DataContext.tsx";
import LoadingComponent from "../components/Loading.tsx";

const SectionWrapper = styled.div`
  margin: 16px 0px;
`

const PageWrapper = styled.div`
  display: block;
  width: 80vw;
  margin: 0 30px;
  .project-name {
    font-family: 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
    font-size: 44px;
    margin-bottom: 48px;
  }
`

const HomePage: React.FC = () => {
  const { setDefaultSymbolList} = useContext(DataContext)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const data = await defaultList()
      if (data) {
        const groupedYFinanceData = groupYFinanceDataInOrder(transformYFinanceData(data))
        data && setDefaultSymbolList!(groupedYFinanceData)
      } else {
        // todo: error
      }
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return (
    <PageWrapper>
      <p className="project-name">Mutual Funds & Stocks</p>
      <SectionWrapper>
        <SearchSymbol />
      </SectionWrapper>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <SectionWrapper>
          <SymbolSummaryList />
        </SectionWrapper>
      )}
    </PageWrapper>
  )
}

export default HomePage