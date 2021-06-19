import { useState } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import Link from 'next/link'
import { Divider } from '@material-ui/core'
import { API } from '../../../helpers/api'
import { validationSchema } from './validation-schema'
import Alert from '../../elements/alert'

import { Form, FormButton, LogInWrapper, Header, StyledLink, Input, Text } from './style'

export default function LogInForm () {
  const [alert, setAlert] = useState({})

  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      login: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: ({ login, password }) => {
      const data = {
        login,
        password
      }
      signIn(data)
    }
  })

  const handleApiErrors = apiErrors => {
    Object.keys(apiErrors).map(field => {
      return formik.setFieldError(field, apiErrors[field])
    })
  }

  const signIn = async (data) => {
    setAlert({})
    try {
      const res = await API.post('signIn', { body: data })
      if (res.ok) {
        router.push('/')
      } else if (res.status === 404) {
        handleApiErrors(res.body.fields)
      } else console.log(res.body.general[0])
    } catch (err) {
      setAlert({
        title: 'BŁĄD',
        text: 'Logowanie nie powiodło się'
      })
    }
  }

  return (
    <LogInWrapper>
      <Header>Zaloguj się</Header>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          name='login'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.login}
          label={formik.touched.login && formik.errors.login ? formik.errors.login : 'Login'}
          error={formik.touched.login && Boolean(formik.errors.login)}
        />
        <Input
          name='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          label={formik.touched.password && formik.errors.password ? formik.errors.password : 'Hasło'}
          error={formik.touched.password && Boolean(formik.errors.password)}
        />
        <FormButton type='submit'>Zaloguj</FormButton>
        <Divider />
        <Text>Jeśli nie masz jeszcze konta,
          <Link href='/rejestracja'>
            <StyledLink> zarejestruj się.</StyledLink>
          </Link>
        </Text>
      </Form>
      {Object.keys(alert).length !== 0 && <Alert alert={alert} />}
    </LogInWrapper>
  )
}
