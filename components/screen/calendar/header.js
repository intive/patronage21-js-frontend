import { useContext } from 'react'
import styled from 'styled-components'
import { DateContext } from './calendar'
import { Subtitle, Text } from '../registration/style'

const NavButton = styled('div')`
   ${({ theme }) => `
   display:flex;
   cursor:pointer;
   justify-content: center;
   align-items: center;
   padding: 0 12px;
   font-size:25px;
   font-weight:200;
   color:white;
   border: none;
   background-color: ${theme.palette.primary.main}
    `}
`

const NavWrapper = styled('div')`
  width: 100%;
  display:flex;
  justify-content: space-between;
  font-size: 16px;
  margin:40px 0;
`

const DateButtonColor = styled('div')`
   ${({ theme }) => `
   display:flex;
   justify-content: center;
   align-items: center;
   cursor:pointer;
   padding: 6px 10px;
   width:32%;
   color:${theme.palette.primary.contrastText};
   border: none;
   font-weight: bold;
   background-color: ${theme.palette.primary.main}
    `}
`

const DateButton = styled('div')`
   ${({ theme }) => `
   display:flex;
   justify-content: center;
   align-items: center;
   cursor:pointer;
   padding: 6px 10px;
   width:26%;
   color: ${theme.palette.primary.main};
   border: none;
   border: 1px solid ${theme.palette.primary.main}
    `}
`

export default function Header () {
  const { state, setState } = useContext(DateContext)
  const { currentDate: date } = state

  const generateButtonTxt = (d) => (
    `01-${d.daysInMonth()}.${d.format('MM.YYYY')}`
  )

  const getPrev = (value = 1) => date.subtract(value, 'month')
  const getNext = (value = 1) => date.add(value, 'month')

  const changeDate = date => () => {
    setState(prev => ({
      ...prev,
      currentDate: date
    }))
  }

  return (
    <div>
      <Subtitle>Kalendarz</Subtitle>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      <NavWrapper>
        <NavButton onClick={changeDate(getPrev(1))}>{'<'}</NavButton>
        <DateButton onClick={changeDate(getPrev())}>{generateButtonTxt(getPrev())}</DateButton>
        <DateButtonColor onClick={changeDate(date)}>{generateButtonTxt(date)}</DateButtonColor>
        <DateButton onClick={changeDate(getNext())}>{generateButtonTxt(getNext())}</DateButton>
        <NavButton onClick={changeDate(getNext(1))}>{'>'}</NavButton>
      </NavWrapper>
    </div>
  )
}
