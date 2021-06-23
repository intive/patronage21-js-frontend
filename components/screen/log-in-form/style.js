import styled from 'styled-components'
import Button from '../../elements/button'
import { TextField, FormControl } from '@material-ui/core'

export const LogInWrapper = styled.div`
  width: 100%;
  @media (min-width: 600px) {
    min-width: 600px;
    width: 40%;
    min-width: 400px;
  }
`

export const Header = styled.h2`
  font-size: 18px;
  color: ${({ theme }) => theme.customPalette.colors.secondary};
`

export const Text = styled.p`
  margin: 10px 0;
  font-size: 14px;
  align-self: center;
  @media (min-width: 600px) {
    align-self: flex-start;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const StyledFormControl = styled(FormControl).attrs({
  variant: 'outlined',
  size: 'small'
})`
  margin: 12px 0;
`

export const Input = styled(TextField).attrs({
  color: 'secondary',
  size: 'small',
  variant: 'outlined'
})` 
  width: 100%;
`

export const FormButton = styled(Button).attrs({
  color: 'primary'
})`
  margin: 15px 0 25px;
  width: 80%;
  align-self: center;
  @media (min-width: 600px) {
    align-self: flex-start;
  }
`

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.customPalette.colors.primary};
  text-decoration: none;
  cursor: pointer;
`
