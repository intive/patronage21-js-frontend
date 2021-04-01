import {
  InputLabel,
  Checkbox,
  FormControlLabel,
  Select
} from '@material-ui/core'
import {
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
  renderField,
  userPasswordFields,
  technologies,
  titles,
  requiredCheckboxText,
  regulations
} from './fields'
import { ExpandMore } from '@material-ui/icons'

export default function FormRegistration () {
  const isDisabled = true

  return (
    <>
      <LogoContainer>
        <Logo src='/logo.jpg' alt='logo' />
      </LogoContainer>
      <Subtitle>Zgłoś się do programu Patronative już dziś!</Subtitle>
      <Text>Wystarczy, że wypełnisz poniższy formularz zgłoszeniowy.</Text>
      <Form autoComplete='off'>
        <StyledFormControl variant='outlined'>
          <InputLabel id='title-label' color='secondary'>Tytuł</InputLabel>
          <Select
            labelId='title-select-label'
            id='title-select'
            label='titles'
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
        {userDataFields.map((field) => {
          return renderField({
            label: field.label,
            pattern: field.pattern,
            type: field.type
          })
        })}
        <Span>
          Jestem zainteresowany/-na udziałem w grupie (wybierz maksymalnie 3 technologie) *
        </Span>
        <StyledFormGroup>
          {technologies.map((tech) => {
            return (
              <FormControlLabel
                key={tech}
                control={<Checkbox name={tech} />}
                label={tech}
              />
            )
          })}
        </StyledFormGroup>
        {userPasswordFields.map((field) => {
          return renderField({ label: field.label, type: field.type })
        })}
        <StyledFormGroup>
          <StyledFormControlLabel
            control={<StyledCheckbox name='required-checkbox' required />}
            label={requiredCheckboxText}
          />
          <StyledFormControlLabel
            control={<StyledCheckbox name='regulations' />}
            label={regulations}
          />
        </StyledFormGroup>
        <SubmitButton
          type='submit'
          variant='contained'
          color='primary'
          disabled={isDisabled}
        >
          Załóż konto
        </SubmitButton>
      </Form>
    </>
  )
}
