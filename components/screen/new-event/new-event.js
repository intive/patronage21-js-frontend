import { useRouter } from 'next/router'
import { Subtitle } from '../home-page/style'
import { API } from '../../../helpers/api'
import FormEvent from '../../elements/form-event'
import styled from 'styled-components'
import Button from '../../elements/button'

export const ReturnButton = styled(Button)`
  width: 80%;
  margin: 10px auto;
  @media (min-width: 1280px) {
    width: 30%;
    margin: 10px 0;
  }
`

export default function FormNewEvent () {
  const router = useRouter()
  const dayjs = require('dayjs')
  const today = dayjs().format('YYYY-MM-DD')
  const currentData = {
    currentTitle: '',
    currentDate: today,
    currentStartTime: '08:00',
    currentEndTime: '09:00',
    currentDescription: ''
  }
  const api = (data) => API.post('events', { body: data })
  const successText = 'Dodano wydarzenie do kalendarza'

  return (
    <>
      <Subtitle>Nowe wydarzenie:</Subtitle>
      <FormEvent
        currentData={currentData}
        api={api}
        successAlert={successText}
        buttonTitle='Dodaj do kalendarza'
      />
      <ReturnButton color='secondary' onClick={() => router.push('/kalendarz')}>
        Wróć do kalendarza
      </ReturnButton>
    </>
  )
}
