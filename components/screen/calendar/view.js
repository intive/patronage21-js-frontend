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

  const mapWeekDay = [6, 0, 1, 2, 3, 4, 5]

  const renderDays = () => {
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
