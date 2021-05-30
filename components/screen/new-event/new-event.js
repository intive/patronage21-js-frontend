import { useState } from 'react'
import { useRouter } from 'next/router'
import { Subtitle } from '../home-page/style'
import {
  Form,
  StyledFormControl,
  SubmitButton,
  ErrorText
} from '../registration/style'
import { TextField } from '@material-ui/core'
import { ReturnButton, StyledTextArea } from './style'
import { useFormik } from 'formik'
import { validationSchema } from './validation-schema'
import { API } from '../../../helpers/api'
import Swal from 'sweetalert2'

export default function FormNewEvent ({ date }) {
  const dayjs = require('dayjs')
  const currentDate = dayjs().format('YYYY-MM-DD')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (data) => {
    try {
      const res = await API.post('events', { body: data })
      if (res.ok) {
        console.log(res)
        Swal.fire({
          icon: 'success',
          title: 'Sukces!',
          text: 'Dodano wydarzenie do kalendarza',
          confirmButtonColor: '#2ab6fb'
        })
        formik.resetForm()
        setError(null)
      } else if (res.status === 400) {
        handleApiErrors(res.body.fields)
        setError('Dodanie wydarzenia nie powiodło się - proszę poprawić pola zaznaczone na czerwono')
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Błąd',
          text: `${res.body.general[0]}`,
          confirmButtonColor: '#2ab6fb'
        })
      }
    } catch (err) {
      setError('Dodanie wydarzenia nie powiodło się')
    }
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      dateEvent: date || currentDate,
      startTime: '08:00',
      endTime: '09:00',
      description: ''
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

  const handleApiErrors = (apiErrors) => {
    Object.keys(apiErrors).map((field) => {
      return formik.setFieldError(field, apiErrors[field])
    })
  }

  const isDisabled =
    !(Object.keys(formik.errors).length === 0 &&
    Object.keys(formik.touched).length !== 0)

  return (
    <>
      <Subtitle>Nowe wydarzenie:</Subtitle>
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
          onBlur={formik.handleBlur}
        />
        <SubmitButton type='submit' color='primary' disabled={isDisabled}>
          Dodaj do kalendarza
        </SubmitButton>
        <ReturnButton color='secondary' onClick={() => router.push('/kalendarz')}>
          Wróć do kalendarza
        </ReturnButton>
      </Form>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  )
}
