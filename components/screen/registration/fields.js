import { TextField } from '@material-ui/core'
import { StyledFormControl } from './style'

export const titles = ['Pan', 'Pani']
export const userDataFields = [
  {
    label: 'Imię *',
    pattern: '[a-zA-Z]'
  },
  {
    label: 'Nazwisko *',
    pattern: '[a-zA-Z]'
  },
  {
    label: 'Adres e-mail *',
    type: 'email'
  },
  {
    label: 'Numer telefonu *',
    pattern: '[0-9]{9}'
  }
]

export const userPasswordFields = [
  {
    label: 'Hasło *',
    type: 'password'
  },
  {
    label: 'Powtórz hasło *',
    type: 'password'
  }
]

export const technologies = ['JavaScript', 'Java', 'QA', 'Mobile(Android)']
export const requiredCheckboxText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. *'
export const regulations =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Regulamin'

export const renderField = ({ label, pattern, type }) => {
  return (
    <StyledFormControl>
      <TextField
        id='outlined-input'
        variant='outlined'
        label={label}
        pattern={pattern}
        type={type}
        color='secondary'
      />
    </StyledFormControl>
  )
}
