import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

export const SuccessPageWrapper = styled.div``
export const Title = styled.h3`
    color: ${({ theme }) => theme.customPalette.colors.secondary};
    font-size: 20px;
`
export const Description = styled.div`
    font-size: 16px;
    margin-bottom: 25px;
`
export const SuccessButton = withStyles({
  root: {
    textTransform: 'capitalize',
    borderRadius: '40px',
    fontSize: 14,
    fontWeight: 'bold',
    padding: '10px 30px'
  }
})(Button)
