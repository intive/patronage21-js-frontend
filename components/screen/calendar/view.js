import { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { fade } from '@material-ui/core/styles'
import { DateContext } from './calendar'
import dayjs from 'dayjs'
import { SubmitButton } from '../registration/style'
import { API } from '../../../helpers/api'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(4, 1fr);
  gap: 15px;
  grid-template-areas:
    ". . . . . . ."
    ". . . . . . ."
    ". . . . . . ."
    ". . . . . . .";
`

const Text = styled.p`
  margin: 0;
`

const Cell = styled.div`
  width: 100%;
  height: 100px;
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  background: ${props => {
    if (props.isSelected) return fade(props.theme.palette.secondary.main, 0.2)
    return props.isCurrent ? props.theme.palette.secondary.main : 'none'
  }};
  color: ${props => {
    if (props.isSelected) return props.theme.palette.secondary.main
    if (props.isCurrent) return 'white'
    return props.isDisabled ? 'grey' : 'black'
  }};
  cursor: ${({ isDisabled }) => isDisabled ? 'not-allowed' : 'pointer'};
  ${Text} {
    color: ${props => {
      if (props.isCurrent) {
        return ({ theme }) => theme.palette.primary.contrastText
      } else {
        return ({ theme }) => theme.customPalette.text.secondary
      }
    }}
  }
`

const Ul = styled('div')`
  ${({ theme }) => `
  display:flex;
  font-size: 16px;
  flex-direction: row;
  // margin: 20px 0;
  padding:20px 0;
  border-bottom: 1px solid ${fade(theme.customPalette.input.label, 0.3)};
    `}
`
const Li = styled.div`
  width: 100%;
  list-style-type: none;
  padding: 15px;
  height: 10px;
`

const EventsList = styled.div`
  font-size: 11px;
  padding: 5px;
  margin: auto 0;
`

const Event = styled.div`
  margin: 2px 0;
`

const Details = styled.p`
  margin: 0;
  text-overflow: ellipsis; 
  overflow: hidden;
  white-space: nowrap;
`

const weekDays = 'Pn, Wt, Śr, Cz, Pt, Sb, Nd'.split(', ')

export default function View () {
  const router = useRouter()
  const { state, setState } = useContext(DateContext)
  const { currentDate: date } = state
  const [events, setEvents] = useState([])

  const mapWeekDay = [6, 0, 1, 2, 3, 4, 5]
  const getPrev = (value = 1) => date.subtract(value, 'month')
  const dayObj = state.currentDate
  const thisYear = dayObj.year()
  const thisMonth = dayObj.month()
  const firstDay = dayjs(`${thisYear}-${thisMonth + 1}-1`)
  const day = mapWeekDay[firstDay.day()]
  const daysAfter = []
  const daysBefore = []
  for (let i = -day; i <= 42 - day; i++) {
    if (i < 0) {
      daysBefore.push(dayjs(`${thisYear}-${getPrev().month() + 1}-${getPrev().daysInMonth() - (i + day)}`))
    }

    if (i > 0) {
      daysAfter.push(dayjs(`${thisYear}-${thisMonth + 1}-${i}`))
    }
  }

  daysBefore.sort((a, b) => a.unix() - b.unix())

  const days = [...daysBefore, ...daysAfter]

  useEffect(() => {
    const fetchEvents = async () => {
      const firstDay = days[0]
      const lastDay = days[days.length - 1]
      const res = await API.get(`events/list/${firstDay}/${lastDay}`)
      const listOfEvents = res.ok ? res.body : []
      setEvents(listOfEvents)
    }
    fetchEvents()
  }, [date])

  const handleSelect = day => () => {
    if (day.month() !== state.currentDate.month()) return
    setState(prev => ({
      ...prev,
      selectedDay: day
    }))
  }

  const handleDetail = day => () => {
    router.push(`/kalendarz/${day.format('YYYY-MM-DD')}`)
  }

  const handleAdd = () => {
    router.push('/kalendarz/nowe-wydarzenie')
  }

  const eventTime = (start, end) => {
    const startTime = dayjs(start).format('HH:mm')
    const endTime = dayjs(end).format('HH:mm')
    const time = `${startTime}-${endTime}`
    return time
  }

  const isThereAnEvent = day => {
    return events.some(event => {
      const date = dayjs(event.startDate).format('YYYY-MM-DD')
      return dayjs(date).isSame(day, 'day')
    })
  }

  const filterList = day => {
    const filteredList = events.filter(event => {
      const date = dayjs(event.startDate).format('YYYY-MM-DD')
      return date === day
    })
    return filteredList
  }

  const renderEventList = day => {
    if (isThereAnEvent(day)) {
      const filteredList = filterList(day)
      return (
        <>
          <Event>
            <Details>{eventTime(filteredList[0].startDate, filteredList[0].endDate)}</Details>
            <Details>{filteredList[0].title}</Details>
          </Event>
          {filteredList.length > 1 && <Details>+ więcej wydarzeń</Details>}
        </>
      )
    } else {
      return <Text>Brak wydarzeń</Text>
    }
  }

  const renderDays = () => {
    return days.map((date, i) => (
      <Cell
        key={i}
        isCurrent={date.isToday()}
        isSelected={date.isSame(state.selectedDay)}
        isDisabled={date.month() !== state.currentDate.month()}
        onClick={handleSelect(date)}
        onDoubleClick={handleDetail(date)}
      >
        {date.format('DD')}
        <EventsList>
          {renderEventList(date.format('YYYY-MM-DD'))}
        </EventsList>
      </Cell>
    ))
  }

  const weekdays = () => {
    return (
      <Ul>
        {weekDays.map(weekday => (
          <Li key={weekday}>{weekday}</Li>
        ))}
      </Ul>
    )
  }

  return (
    <Wrapper>
      {weekdays()}
      <Grid>
        {renderDays()}
      </Grid>
      <SubmitButton
        type='text'
        color='primary'
        onClick={handleAdd}
      > Dodaj nowe wydarzenie
      </SubmitButton>
    </Wrapper>
  )
}
