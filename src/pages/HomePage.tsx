import React, { useContext, useEffect } from 'react'
import SearchSymbol from '../components/SearchSymbol'
import SymbolSummaryList from '../components/SymbolSummaryList'
import styled from "styled-components";
import {defaultList} from "../api.tsx";
import {groupYFinanceDataInOrder, transformYFinanceData} from "../utils.ts";
import DataContext from "../DataContext.tsx";

const SectionWrapper = styled.div`
  margin: 16px 0px;
`

const PageWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 30px;
  .project-name {
    font-family: 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
    font-size: 44px;
    margin-bottom: 48px;
  }
`

const HomePage: React.FC = () => {
  const { setDefaultSymbolList} = useContext(DataContext)

  useEffect(() => {
    const fetchData = async () => {
      const data = await defaultList()
      if (data) {
        const groupedYFinanceData = groupYFinanceDataInOrder(transformYFinanceData(data))
        data && setDefaultSymbolList!(groupedYFinanceData)
      } else {
        // todo: error
      }
    }

    fetchData()
  }, [])

  return (
    <PageWrapper>
      <p className="project-name">Mutual Funds & Stocks</p>
      <SectionWrapper>
        <SearchSymbol />
      </SectionWrapper>
      <SectionWrapper>
        <SymbolSummaryList />
      </SectionWrapper>
    </PageWrapper>
  )
}

export default HomePage