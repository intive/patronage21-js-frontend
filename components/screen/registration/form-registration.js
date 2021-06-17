import { useFormik } from 'formik'
import {
  InputLabel,
  Checkbox,
  FormControlLabel,
  Select,
  TextField
} from '@material-ui/core'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined'
import { validationSchema } from './validation-schema'
import {
  ErrorText,
  Subtitle,
  Text,
  Form,
  Span,
  SubmitButton,
  StyledFormControl,
  StyledFormGroup,
  StyledFormControlLabel,
  StyledCheckbox,
  StyledMenuItem,
  LogoWrapper,
  LogoContainer
} from './style'
import {
  userDataFields,
  userPasswordFields,
  technologies,
  titles,
  requiredCheckboxText,
  regulations
} from './fields'
import { ExpandMore } from '@material-ui/icons'
import { API } from '../../../helpers/api'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Patrocat from '../../elements/patrocat'

export default function FormRegistration () {
  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = async (data) => {
    const { email } = data
    try {
      const res = await API.post('register', { body: data })
      if (res.ok) {
        router.push({ pathname: '/weryfikacja', query: { email: email, id: res.body._id } })
      } else if (res.status === 400) {
        handleApiErrors(res.body.fields)
        setError('Błąd rejestracji - proszę poprawić pola zaznaczone na czerwono')
      } else {
        setError('Nieudana rejestracja - błąd wewnętrzny serwera')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      githubLink: '',
      technologies: [],
      login: '',
      password: '',
      passwordConfirm: '',
      regulations: false,
      information: false
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const {
        passwordConfirm,
        regulations,
        information,
        phone,
        ...rest
      } = values
      rest.phone = +phone
      handleSubmit(rest)
    }
  })

  const handleApiErrors = apiErrors => {
    Object.keys(apiErrors).map(field => {
      return formik.setFieldError(field, apiErrors[field])
    })
  }

  const isButtonDisabled = () => {
    if (
      Object.keys(formik.errors).length === 0 &&
      Object.keys(formik.touched).length !== 0) {
      return false
    } else {
      return true
    }
  }

  const showTechnologyRelatedError =
    formik.touched.technologies && formik.errors.technologies
      ? <ErrorText>{formik.errors.technologies}</ErrorText>
      : null

  const showRegulationsRelatedError =
    formik.touched.regulations && formik.errors.regulations
      ? <ErrorText>{formik.errors.regulations}</ErrorText>
      : null

  const showInformationsRelatedError =
    formik.touched.information && formik.errors.information
      ? <ErrorText>{formik.errors.information}</ErrorText>
      : null

  const labelForTitleField = formik.touched.title && formik.errors.title ? formik.errors.title : 'Tytuł'

  return (
    <>
      <LogoContainer>
        <LogoWrapper>
          <Patrocat width='400' height='400' />
        </LogoWrapper>
      </LogoContainer>
      <Subtitle>Zgłoś się do programu Patronative już dziś!</Subtitle>
      <Text>Wystarczy, że wypełnisz poniższy formularz zgłoszeniowy.</Text>
      <Form onSubmit={formik.handleSubmit}>
        <StyledFormControl
          variant='outlined'
          size='small'
          error={formik.touched.title && Boolean(formik.errors.title)}
        >
          <InputLabel id='title-label' color='secondary'>{labelForTitleField}</InputLabel>
          <Select
            name='title'
            onChange={formik.handleChange}
            value={formik.values.title}
            onBlur={formik.handleBlur}
            label={labelForTitleField}
            labelId='title-label'
            id='title-select'
            color='secondary'
            inputProps={{ MenuProps: { disableScrollLock: true } }}
            IconComponent={ExpandMore}
          >
            {titles.map((option) => {
              return (
                <StyledMenuItem key={option} value={option}>
                  {option}
                </StyledMenuItem>
              )
            })}
          </Select>
        </StyledFormControl>
        {userDataFields.map(({ name, label, type }) => {
          return (
            <StyledFormControl key={name}>
              <TextField
                name={name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                label={formik.touched[name] && formik.errors[name] ? formik.errors[name] : label}
                error={formik.touched[name] && Boolean(formik.errors[name])}
                type={type}
                color='secondary'
                size='small'
                variant='outlined'
              />
            </StyledFormControl>
          )
        })}
        {showTechnologyRelatedError}
        <Span>
          Jestem zainteresowany/-na udziałem w grupie (wybierz maksymalnie 3 technologie) *
        </Span>
        <StyledFormGroup>
          {technologies.map((tech) => {
            return (
              <FormControlLabel
                key={tech.name}
                control={<Checkbox
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name='technologies'
                  value={tech.value}
                  checkedIcon={<CheckBoxOutlinedIcon />}
                         />}
                label={tech.name}
                style={{ width: 'fit-content' }}
              />
            )
          })}
        </StyledFormGroup>
        {userPasswordFields.map(({ name, label, type }) => {
          return (
            <StyledFormControl key={name}>
              <TextField
                name={name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                label={formik.touched[name] && formik.errors[name] ? formik.errors[name] : label}
                error={formik.touched[name] && Boolean(formik.errors[name])}
                type={type}
                color='secondary'
                size='small'
                variant='outlined'
              />
            </StyledFormControl>
          )
        })}
        <StyledFormGroup>
          {showRegulationsRelatedError}
          <StyledFormControlLabel
            control={<StyledCheckbox
              name='regulations'
              checkedIcon={<CheckBoxOutlinedIcon />}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.regulations}
                     />}
            label={regulations}
          />
          {showInformationsRelatedError}
          <StyledFormControlLabel
            control={<StyledCheckbox
              name='information'
              checkedIcon={<CheckBoxOutlinedIcon />}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.information}
                     />}
            label={requiredCheckboxText}
          />
        </StyledFormGroup>
        <SubmitButton
          type='submit'
          color='primary'
          disabled={isButtonDisabled()}
        >
          Załóż konto
        </SubmitButton>
        {error && <ErrorText>{error}</ErrorText>}
      </Form>
    </>
  )
}
