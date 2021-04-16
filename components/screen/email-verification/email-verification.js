import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FormControl, OutlinedInput } from '@material-ui/core'
import { Email, ErrorText, Header, Information, Label, StyledButton, Text, VerificationScreenWrapper } from './style'
import { useRouter } from 'next/router'
import { API } from '../../../helpers/api'

export default function EmailVerification ({ email }) {
  const [code, setCode] = useState('')
  const [isDisable, setIsDisable] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  useEffect(() => {
    setIsDisable(code.length !== 8)
  }, [code])

  const handleInput = (e) => {
    const code = e.target.value

    code.length <= 8 && !isNaN(code) && setCode(code)
    code.length < 8 ? setErrorMsg('Wprowadzony kod jest zbyt krótki') : setErrorMsg('')
  }

  const handleSubmit = async () => {
    setMessage('')

    try {
      const res = await API.post('verification-code', { body: { email: email, code: +code } })
      res.ok ? router.push('/rejestracja-sukces') : setErrorMsg(res.body.message)
    } catch {
      setErrorMsg('Błąd podczas wysyłania kodu, spróbuj ponwnie')
    }
  }

  const handleResend = async () => {
    setErrorMsg('')
    setCode('')

    try {
      const res = await API.post('resend-code', { body: { email: email } })
      res.ok ? setMessage(res.body.message) : setMessage('Błąd podczas ponownego wysyłania kodu')
    } catch {
      setErrorMsg('Błąd podczas wysyłania kodu, spróbuj ponwnie')
    }
  }

  return (
    <VerificationScreenWrapper>
      <Header>Weryfikacja adresu e-mail</Header>

      <Information>
        Wpisz 8-cyfrowy kod, który został wysłany na adres: <Email>{email}</Email>
      </Information>

      <FormControl variant='outlined' size='small'>
        <Label htmlFor='outlined-adornment-password'>Kod *</Label>
        <OutlinedInput
          id='outlined-adornment-password'
          type='text'
          value={code}
          onChange={handleInput}
          color='secondary'
          fullWidth
          labelWidth={40}
        />

        {errorMsg.length > 0 && <ErrorText>{errorMsg}</ErrorText>}
        {message.length > 0 && <Text>{message}</Text>}

        <StyledButton
          color='primary'
          disabled={isDisable}
          onClick={handleSubmit}
        >
          Zatwierdź kod
        </StyledButton>
        <StyledButton
          color='secondary'
          onClick={handleResend}
        >
          Nie otrzymałem/am kodu
        </StyledButton>
      </FormControl>
    </VerificationScreenWrapper>
  )
}

EmailVerification.propTypes = {
  email: PropTypes.string
}

EmailVerification.defaultProps = {
  email: ''
}
