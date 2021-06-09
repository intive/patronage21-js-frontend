import { useContext } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { fade } from '@material-ui/core/styles'
import { DateContext } from './calendar'
import dayjs from 'dayjs'
import { SubmitButton } from '../screen/registration/style'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 15px;
  grid-template-areas:
    ". . . . . . ."
    ". . . . . . ."
    ". . . . . . ."
    ". . . . . . .";
`

const Cell = styled.div`
  width: 100%;
  height: 100px;
  padding: 15px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  color: ${({ isDisabled }) => isDisabled ? 'grey' : 'black'};
  background: ${props => {
    if (props.isSelected) return fade(props.theme.palette.secondary.main, 0.2)

    return props.isCurrent ? props.theme.palette.secondary.main : 'none'
  }};
  cursor: ${({ isDisabled }) => isDisabled ? 'not-allowed' : 'pointer'};
  //border: 1px solid red;
`

const Ul = styled.div`
  display:flex;
  font-size: 16px;
  flex-direction: row;
  margin: 20px 0;
`
const Li = styled.div`
  width: 100%;
  list-style-type: none; 
  padding: 15px;
  height: 10px;
`

const weekDays = 'Pn, Wt, Śr, Cz, Pt, Sb, Nd'.split(', ')

export default function View () {
  const router = useRouter()
  const { state, setState } = useContext(DateContext)
  const { currentDate: date } = state

  const getPrev = (value = 1) => date.subtract(value, 'month')

  const handleSelect = day => () => {
    if (day.month() !== state.currentDate.month()) return
    setState(prev => ({
      ...prev,
      selectedDay: day
    }))
  }

  const handleDetail = day => () => {
    router.push(`/#${day.format('DD-MM-YYYY')}`)
  }

  const handleAdd = () => {
    router.push('/nowe-wydarzenie')
  }

  const renderDays = () => {
    const dayObj = state.currentDate.clone()
    const thisYear = dayObj.year()
    const thisMonth = dayObj.month() // (January as 0, December as 11)
    const daysInMonth = dayObj.daysInMonth()
    const firstDay = dayjs(`${thisYear}-${thisMonth + 1}-1`)
    const lastDay = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`)
    const dayL = lastDay.day()

    const day = firstDay.day()
    const days = []
    for (let i = -day; i < daysInMonth + (7 - dayL); i++) {
      if (i < 0) {
        days.push(dayjs(`${thisYear}-${getPrev().month() + 1}-${getPrev().daysInMonth() - (i + 2)}`))
      }

      if (i > 0) {
        days.push(dayjs(`${thisYear}-${thisMonth + 1}-${i}`))
      }
    }

    days.sort((a, b) => a.unix() - b.unix())

    return days.map(date => (
      <Cell
        key={date.unix()}
        isCurrent={date.isToday()}
        isSelected={date.isSame(state.selectedDay)}
        isDisabled={date.month() !== state.currentDate.month()}
        onClick={handleSelect(date)}
        onDoubleClick={handleDetail(date)}
      >
        {date.format('DD')}
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
