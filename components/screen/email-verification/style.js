import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

export const VerificationScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`

export const Header = styled.h3`
  font-size: 16px;
  color: ${({ theme }) => theme.customPalette.colors.secondary};
  margin: 30px 0 0;
`

export const Information = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 1.7;
  margin: 25px 0;
`

export const Email = styled.span`
  display: block;
`
export const StyledButton = withStyles({
  root: {
    textTransform: 'none',
    fontSize: 12,
    padding: '8px 5px',
    borderRadius: '40px',
    fontWeight: 'bold',
    marginTop: '20px',
    width: '80%'
  }
})(Button)
