import { useState } from 'react'
import {
  Form,
  StyledFormControl,
  SubmitButton,
  ErrorText
} from '../screen/registration/style'
import { TextField } from '@material-ui/core'
import { useFormik } from 'formik'
import { validationSchema } from './validation-schema'
import Alert from './alert'
import styled from 'styled-components'

export const StyledTextArea = styled(TextField)`
    width: 100%;
    @media (min-width: 1280px) {
        width: 40%;
    }
`
const dayjs = require('dayjs')

export default function FormEvent ({
  currentData: {
    currentTitle,
    currentDate,
    currentStartTime,
    currentEndTime,
    currentDescription
  },
  api,
  successAlert,
  buttonTitle
}) {
  const [error, setError] = useState('')
  const [alert, setAlert] = useState({ title: '', text: '' })

  const handleSubmit = async (data) => {
    try {
      const res = await api(data)
      if (res.ok) {
        setAlert({
          title: 'Sukces!',
          text: successAlert
        })
        formik.resetForm()
        setError(null)
      } else if (res.status === 400) {
        handleApiErrors(res.body.fields)
        setError('Błąd - proszę poprawić pola zaznaczone na czerwono')
      } else {
        setAlert({
          title: 'Błąd',
          text: res.body.general[0]
        })
      }
    } catch (err) {
      setError('Błąd serwera - spróbuj ponownie')
    }
  }

  const formik = useFormik({
    initialValues: {
      title: currentTitle,
      dateEvent: currentDate,
      startTime: currentStartTime,
      endTime: currentEndTime,
      description: currentDescription
    },
    validationSchema: validationSchema,
    onSubmit: ({ title, dateEvent, startTime, endTime }) => {
      const submitData = {
        title: title,
        startDate: dayjs(dateEvent + ' ' + startTime),
        endDate: dayjs(dateEvent + ' ' + endTime)
      }
      handleSubmit(submitData)
    }
  })

  const isDisabled = !(
    Object.keys(formik.errors).length === 0 &&
    Object.keys(formik.touched).length !== 0
  )

  const handleApiErrors = (apiErrors) => {
    Object.keys(apiErrors).map((field) => {
      return formik.setFieldError(field, apiErrors[field])
    })
  }

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <StyledFormControl>
          <TextField
            name='title'
            id='title'
            label={
              formik.touched.title && formik.errors.title
                ? formik.errors.title
                : 'Tytuł'
            }
            error={formik.touched.title && Boolean(formik.errors.title)}
            type='text'
            color='secondary'
            size='small'
            variant='outlined'
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </StyledFormControl>
        <StyledFormControl>
          <TextField
            name='dateEvent'
            id='dateEvent'
            label={
              formik.touched.dateEvent && formik.errors.dateEvent
                ? formik.errors.dateEvent
                : 'Data'
            }
            error={formik.touched.dateEvent && Boolean(formik.errors.dateEvent)}
            type='date'
            color='secondary'
            size='small'
            variant='outlined'
            InputLabelProps={{
              shrink: true
            }}
            value={formik.values.dateEvent}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </StyledFormControl>
        <StyledFormControl>
          <TextField
            name='startTime'
            id='startTime'
            label={
              formik.touched.startTime && formik.errors.startTime
                ? formik.errors.startTime
                : 'Godzina rozpoczęcia'
            }
            error={formik.touched.startTime && Boolean(formik.errors.startTime)}
            type='time'
            color='secondary'
            size='small'
            variant='outlined'
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 900
            }}
            value={formik.values.startTime}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </StyledFormControl>
        <StyledFormControl>
          <TextField
            name='endTime'
            id='endTime'
            label={
              formik.touched.endTime && formik.errors.endTime
                ? formik.errors.endTime
                : 'Godzina zakończenia'
            }
            error={formik.touched.endTime && Boolean(formik.errors.endTime)}
            type='time'
            color='secondary'
            size='small'
            variant='outlined'
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 900
            }}
            value={formik.values.endTime}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </StyledFormControl>
        <StyledTextArea
          name='description'
          id='description'
          label='Krótki opis'
          color='secondary'
          multiline
          rows={4}
          variant='outlined'
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        <SubmitButton type='submit' color='primary' disabled={isDisabled}>
          {buttonTitle}
        </SubmitButton>
      </Form>
      {alert.title === 'Sukces!' && <Alert alert={alert} />}
      {alert.title === 'Błąd' && <Alert alert={alert} />}
      {error && <ErrorText>{error}</ErrorText>}
    </>
  )
}
