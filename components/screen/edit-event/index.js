import { useState } from 'react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { API } from '../../../helpers/api'
import { validationSchema } from '../new-event/validation-schema'
import Alert from '../../elements/alert'
import { Form, FormButton, Wrapper, Header, Input } from './style'

export default function FormEditEvent ({ event }) {
  const [alert, setAlert] = useState({})

  const router = useRouter()
  const startTime = dayjs(event.startDate).format('HH:mm')
  const endTime = dayjs(event.endDate).format('HH:mm')
  const date = dayjs(event.startDate).format('YYYY-MM-DD')

  const editEvent = async (data) => {
    setAlert({})
    try {
      const res = await API.patch(`events/${event._id}`, { body: data })
      if (res.ok) {
        router.back()
      } else if (res.status === 400) {
        handleApiErrors(res.body.fields)
      } else {
        setAlert({
          title: 'BŁĄD',
          text: res.body.general[0]
        })
      }
    } catch {
      setAlert({
        title: 'BŁĄD',
        text: 'Zaktualizowanie wydarzenia nie powiodło się.'
      })
    }
  }

  const handleApiErrors = (apiErrors) => {
    Object.keys(apiErrors).map((field) => {
      return formik.setFieldError(field, apiErrors[field])
    })
  }

  const formik = useFormik({
    initialValues: {
      title: event.title,
      dateEvent: date,
      startTime: startTime,
      endTime: endTime,
      description: event.description
    },
    validationSchema: validationSchema,
    onSubmit: ({ title, dateEvent, startTime, endTime, description }) => {
      const data = {
        title: title,
        startDate: dayjs(`${dateEvent} ${startTime}`).format(),
        endDate: dayjs(`${dateEvent} ${endTime}`).format(),
        description: description
      }
      editEvent(data)
    }
  })

  const isButtonDisabled = Object.keys(formik.errors).length !== 0

  return (
    <Wrapper>
      <Header>Edytuj wydarzenie:</Header>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          name='title'
          label={
            formik.touched.title && formik.errors.title
              ? formik.errors.title
              : 'Tytuł'
          }
          error={formik.touched.title && Boolean(formik.errors.title)}
          type='text'
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          name='dateEvent'
          label={
            formik.touched.dateEvent && formik.errors.dateEvent
              ? formik.errors.dateEvent
              : 'Data'
          }
          error={formik.touched.dateEvent && Boolean(formik.errors.dateEvent)}
          type='date'
          InputLabelProps={{
            shrink: true
          }}
          value={formik.values.dateEvent}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Input
          name='startTime'
          label={
            formik.touched.startTime && formik.errors.startTime
              ? formik.errors.startTime
              : 'Godzina rozpoczęcia'
          }
          error={formik.touched.startTime && Boolean(formik.errors.startTime)}
          type='time'
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            step: 300
          }}
          value={formik.values.startTime}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          name='endTime'
          label={
            formik.errors.endTime
              ? formik.errors.endTime
              : 'Godzina zakończenia'
          }
          error={Boolean(formik.errors.endTime)}
          type='time'
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
        <Input
          name='description'
          label={
            formik.touched.description && formik.errors.description
              ? formik.errors.description
              : 'Opis wydarzenia'
          }
          error={formik.touched.description && Boolean(formik.errors.description)}
          type='text'
          multiline
          rows={5}
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormButton type='submit' color='primary' disabled={isButtonDisabled}>
          Zaktualizuj wydarzenie
        </FormButton>
        <FormButton color='secondary' onClick={() => router.back()}>
          Wróć do listy wydarzeń
        </FormButton>
      </Form>
      {Object.keys(alert).length !== 0 && <Alert alert={alert} />}
    </Wrapper>
  )
}
