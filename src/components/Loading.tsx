import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner'
import { IStackProps, Stack } from '@fluentui/react/lib/Stack'
import styled from "styled-components"

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingComponent = () => {
  const rowProps: IStackProps = { horizontal: true, verticalAlign: 'center' }
  const tokens = {
    sectionStack: {
      childrenGap: 10,
    },
    spinnerStack: {
      childrenGap: 20,
    },
  }

  return (
    <LoadingWrapper>
      <Stack tokens={tokens.sectionStack}>
        <Stack {...rowProps} tokens={tokens.spinnerStack}>
          <Spinner size={SpinnerSize.large} />
        </Stack>
      </Stack>
    </LoadingWrapper>
  )
}

export default LoadingComponent;