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
  Logo,
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

export default function FormRegistration () {
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
      console.log(values)
    }
  })

  const buttonIsDisabled = () => {
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

  return (
    <>
      <LogoContainer>
        <Logo src='/logo.jpg' alt='logo' />
      </LogoContainer>
      <Subtitle>Zgłoś się do programu Patronative już dziś!</Subtitle>
      <Text>Wystarczy, że wypełnisz poniższy formularz zgłoszeniowy.</Text>
      <Form onSubmit={formik.handleSubmit}>
        <StyledFormControl variant='outlined' size='small'>
          <InputLabel id='title-label' color='secondary'>Tytuł</InputLabel>
          <Select
            name='title'
            onChange={formik.handleChange}
            value={formik.values.title}
            label='Tytuł'
            labelId='title-select-label'
            id='title-select'
            color='secondary'
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
                key={tech}
                control={<Checkbox
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name='technologies'
                  value={tech}
                  checkedIcon={<CheckBoxOutlinedIcon />}
                         />}
                label={tech}
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
          disabled={buttonIsDisabled()}
        >
          Załóż konto
        </SubmitButton>
      </Form>
    </>
  )
}
