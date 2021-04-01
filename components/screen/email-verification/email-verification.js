import { useState } from 'react'
import { FormControl, InputAdornment, IconButton, OutlinedInput } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { Email, Header, Information, Label, StyledButton, VerificationScreenWrapper } from './style'

export default function EmailVerification ({ email }) {
  const [code, setCode] = useState('')
  const [showCode, setShowCode] = useState(false)

  const handleInputField = (e) => {
    const code = parseInt(e.target.value)
    if (isNaN(code)) {
      setCode('')
    } else {
      setCode(code)
    }
  }

  const handleClickShowPassword = () => {
    setShowCode(!showCode)
  }

  const isDisabled = code.toString().length !== 8

  return (
    <VerificationScreenWrapper>
      <Header>Weryfikacja adresu e-mail</Header>
      <Information>
        Wpisz 8-cyfrowy kod, który został wysłany na adres:
        <Email>{email}</Email>
      </Information>
      <FormControl variant='outlined' size='small'>
        <Label htmlFor='outlined-adornment-password'>Kod *</Label>
        <OutlinedInput
          id='outlined-adornment-password'
          type={showCode ? 'text' : 'password'}
          value={code}
          onChange={handleInputField}
          color='secondary'
          fullWidth
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                edge='end'
                size='small'
              >
                {showCode ? <Visibility fontSize='small' /> : <VisibilityOff fontSize='small' />}
              </IconButton>
            </InputAdornment>
        }
          labelWidth={40}
        />
        <StyledButton
          color='primary'
          disabled={isDisabled}
        >
          Zatwierdź kod
        </StyledButton>
        <StyledButton
          color='secondary'
        >
          Nie otrzymałem/am kodu
        </StyledButton>
      </FormControl>
    </VerificationScreenWrapper>
  )
}
