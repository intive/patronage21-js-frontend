import dayjs from 'dayjs'
import { useState } from 'react'
import styled from 'styled-components';

const NavButton = styled.div

export default function Header() {
  const [date, setDate] = useState(dayjs());

  const generateButtonTxt = (d) => (
    `01 - ${d.daysInMonth()}.${d.format("MM.YYYY")}`
  )

  const getPrev = (value = 1) => date.subtract(value, 'month')
  const getNext = (value = 1) => date.add(value, 'month')

  const changeDate = date => () => {
    setDate(date)
  }


  return (
    <div>
      <button onClick={changeDate(getPrev(2))}>{"<"}</button>
      <button onClick={changeDate(getPrev())}>{ generateButtonTxt(getPrev()) }</button>
      <button onClick={changeDate(date)}>{ generateButtonTxt(date) }</button>
      <button onClick={changeDate(getNext())}>{ generateButtonTxt(getNext()) }</button>
      <button  onClick={changeDate(getNext(2))}>{">"}</button>
    </div>
  )
}
