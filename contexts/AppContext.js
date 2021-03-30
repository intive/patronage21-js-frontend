import React, { createContext } from 'react'

export const AppContext = createContext(null)

export default function AppContextProvider ({ children }) {
  return (
    <AppContext.Provider value='test'>{children}</AppContext.Provider>
  )
}
