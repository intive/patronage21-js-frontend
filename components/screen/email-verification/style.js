import styled from 'styled-components'
import { InputLabel } from '@material-ui/core'
import Button from '../../elements/button'

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

export const StyledButton = styled(Button)`
    margin-top: 20px;
    width: 80%;
`

export const Label = styled(InputLabel)`
 color:${({ theme }) => theme.customPalette.input.label};
 &.Mui-focused {
   color: ${({ theme }) => theme.customPalette.input.label};
 }
`
