import { TextField } from '@material-ui/core'
import styled from 'styled-components'
import Button from '../../elements/button'

export const StyledTextArea = styled(TextField)`
    width: 100%;
    @media (min-width: 1280px) {
        width: 40%;
    }
`

export const ReturnButton = styled(Button)`
  width: 80%;
  margin: 10px auto;
  @media (min-width: 1280px) {
    width: 30%;
    margin: 10px 0;
  }
`
