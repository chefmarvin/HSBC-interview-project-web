import React from 'react'
import SymbolDetail from '../components/SymbolDetail'
import SymbolAnalysis from '../components/SymbolAnalysis'

const DetailPage: React.FC = () => {
  return (
    <div>
      <SymbolDetail />
      <SymbolAnalysis />
    </div>
  )
}

export default DetailPage