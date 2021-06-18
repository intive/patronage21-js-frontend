import { useState } from 'react'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import localePl from 'dayjs/locale/pl'
import Event from './event'
import { Divider } from '@material-ui/core'
import {
  ConfirmButton,
  EventsListWrapper,
  EventWrapper,
  Header,
  List,
  Text
} from './style'

export default function CalendarDay ({ events, date }) {
  const [eventsList, setEventsList] = useState(events)

  const day = dayjs(date)
    .locale(localePl)
    .format('dddd')
  const dayName = day.substring(0, 1).toUpperCase() + day.substring(1)

  const router = useRouter()

  const backToCalendar = () => router.push('/kalendarz')

  const deleteEvent = (id) => {
    const events = [...eventsList]
    const index = events.findIndex(event => event._id === id)
    events.splice(index, 1)
    setEventsList(events)
  }

  const generateEventList = eventsList.map((event, index) => {
    return (
      <EventWrapper key={event._id}>
        <Event
          id={event._id}
          title={event.title}
          description={event.description}
          startDate={event.startDate}
          endDate={event.endDate}
          deleteEvent={deleteEvent}
        />
        {index !== eventsList.length - 1 && <Divider />}
      </EventWrapper>
    )
  })

  return (
    <EventsListWrapper>
      <Header>
        {dayName}, {date}
      </Header>
      <List>
        {eventsList.length === 0
          ? <Text className='grayText'>Brak zaplanowanych wydarzeń</Text>
          : generateEventList}
      </List>
      <ConfirmButton onClick={backToCalendar}>
        Wróć do kalendarza
      </ConfirmButton>
    </EventsListWrapper>
  )
}
