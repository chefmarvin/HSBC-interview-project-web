import { useState, useContext } from 'react'
import _ from 'lodash'
import { searchBySymbol } from '../api'
import DataContext from "../DataContext.tsx"
import { SearchBySymbolSearchBySymbolSymbolGetData } from "../idl"
import { transformYFinanceData } from "../utils.ts"
import { SearchBox, Stack, IStackTokens, initializeIcons } from '@fluentui/react'

initializeIcons()
const stackTokens: Partial<IStackTokens> = { childrenGap: 20 }

const SearchSymbol = () => {
  const [symbol, setSymbol] = useState('')
  const { setSearchedSymbol } = useContext(DataContext)

  const handleSearch = async () => {
    setSearchedSymbol && setSearchedSymbol({})
    const data: SearchBySymbolSearchBySymbolSymbolGetData = { symbol }
    const result = await searchBySymbol(data)
    if (result && result[symbol]) {
      const searchResult = transformYFinanceData(result)
      setSearchedSymbol && setSearchedSymbol(searchResult[0])
      console.log(searchResult)
    } else {
      // todo: error
    }
  }

  return (
    <div>
      <Stack tokens={stackTokens}>
        <SearchBox
          placeholder="Only input the symbol, eg. VTSAX"
          onChange={e => e && setSymbol(_.trim(e.target.value))}
          onSearch={handleSearch}
        />
      </Stack>
    </div>
  )
}

export default SearchSymbol