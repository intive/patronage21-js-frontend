import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Layout
