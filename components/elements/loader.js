import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'

const StyledLoader = styled(CircularProgress)`
    color=${({ theme }) => theme.customPalette.colors.primary}
`

export default function Loader (props) {
  const loader = (
    <StyledLoader {...props} />
  )
  return loader
}
