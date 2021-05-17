import styled from 'styled-components'
import Button from '../../elements/button'
import { TextField } from '@material-ui/core'

export const Wrapper = styled.div`
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled(TextField).attrs({
  color: 'secondary',
  size: 'small',
  variant: 'outlined'
})` 
  margin: 12px 0;
  width: 100%;
`

export const FormButton = styled(Button)`
  margin: 10px 0;
  width: 80%;
  align-self: center;
  @media (min-width: 600px) {
    align-self: flex-start;
  }
`
