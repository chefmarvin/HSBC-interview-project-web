import { useMemo, useCallback, useContext } from 'react'
import DataContext from '../DataContext'
import SymbolSummary from './SymbolSummary'
import {
  FocusZone,
  FocusZoneDirection,
  List,
  ITheme,
  mergeStyleSets,
  getFocusStyle,
  useTheme,
  initializeIcons,
  Depths
} from '@fluentui/react'
import { IYFinanceGenericData } from "../idl"

const generateStyles = (theme: ITheme) => {
  const { palette, semanticColors } = theme
  return mergeStyleSets({
    itemCell: [
      getFocusStyle(theme, { inset: -1 }),
      {
        minHeight: 54,
        padding: 6,
        boxSizing: 'border-box',
        borderBottom: `1px solid ${semanticColors.bodyDivider}`,
        display: 'flex',
        selectors: {
          '&:hover': {
            cursor: "pointer",
            background: palette.neutralLighterAlt
          },
        },
      },
    ],
  })
}

initializeIcons()

const SymbolSummaryList = () => {
  const theme = useTheme()
  const classNames = useMemo(() => generateStyles(theme), [theme])
  const data = useContext(DataContext)
  const { searchedSymbol, defaultSymbolList } = data

  const onRenderCell = useCallback(
    (item: IYFinanceGenericData | undefined, index?: number | undefined): JSX.Element => {
      return (
        <div className={classNames.itemCell} style={{
          marginBottom: 10,
          boxShadow: Depths.depth0
        }} data-is-scrollable={true}>
          <SymbolSummary key={index} data={item!}/>
        </div>
      );
    },
    [classNames],
  )

  return (
    <>
      <FocusZone direction={FocusZoneDirection.vertical}>
        <div data-is-scrollable={true}>
          {searchedSymbol && <List items={[searchedSymbol]} onRenderCell={onRenderCell} />}
        </div>
        <div data-is-scrollable={true}>
          <List items={defaultSymbolList} onRenderCell={onRenderCell} />
        </div>
      </FocusZone>
      {/*<div>*/}
      {/*  {searchedSymbol && <SymbolSummary data={searchedSymbol}/>}*/}
      {/*  {defaultSymbolList && defaultSymbolList.map((item, index) => (*/}
      {/*    <SymbolSummary key={index} data={item}/>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </>
  )
}

export default SymbolSummaryList