import Header from './header'
import View from './view'
import { createContext, useState } from 'react'
import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'

dayjs.extend(isToday)
export const DateContext = createContext(null)

export default function Calendar () {
  const [state, setState] = useState({
    currentDate: dayjs(),
    selectedDay: null
  })

  return (
    <DateContext.Provider value={{ state, setState }}>
      <Header />
      <View />
    </DateContext.Provider>
  )
}
