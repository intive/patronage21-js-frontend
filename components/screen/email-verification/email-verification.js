import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FormControl, OutlinedInput } from '@material-ui/core'
import { Email, ErrorText, Header, Information, Label, StyledButton, Text, VerificationScreenWrapper } from './style'
import { useRouter } from 'next/router'
import { API } from '../../../helpers/api'

export default function EmailVerification ({ email, id }) {
  const [code, setCode] = useState('')
  const [isDisable, setIsDisable] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  useEffect(() => {
    setIsDisable(code.length !== 8)
  }, [code])

  const isCharValid = (code) => code.length <= 8 && !code.match(' ') && !isNaN(code)

  const handleInput = (e) => {
    const code = e.target.value

    isCharValid(code) && setCode(code)
    code.length < 8 ? setErrorMsg('Wprowadzony kod jest zbyt krótki') : setErrorMsg('')
  }

  const handleSubmit = async () => {
    setMessage('')

    try {
      const res = await API.put('activate', { body: { email: email, activationCode: +code } })

      if (res.ok) {
        setMessage(res.body)
        router.push('/rejestracja-sukces')
      } else setErrorMsg(typeof res.body === 'string' ? res.body : res.body.fields.activationCode)
    } catch {
      setErrorMsg('Błąd podczas wysyłania kodu, spróbuj ponownie')
    }
  }

  const handleResend = async () => {
    setErrorMsg('')
    setCode('')

    try {
      const res = await API.post(`sendActivationCode/${id}`)
      res.ok ? setMessage(res.body) : setErrorMsg(res.body)
    } catch {
      setErrorMsg('Błąd podczas wysyłania kodu, spróbuj ponownie')
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

        {errorMsg?.length > 0 && <ErrorText>{errorMsg}</ErrorText>}
        {message?.length > 0 && <Text>{message}</Text>}

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
  email: PropTypes.string,
  id: PropTypes.string
}

EmailVerification.defaultProps = {
  email: '',
  id: ''
}
