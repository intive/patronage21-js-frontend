import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import styled from 'styled-components'
import Content from './content'
import Logo from './logo'

const Wrapper = styled.div`
  ${({ theme }) => `
    flex-grow: 1;
    margin-bottom: ${theme.spacing(3)}px
  `}
`

const StyledToolbar = styled(Toolbar)`
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export default function AppHeader ({ children }) {
  return (
    <Wrapper>
      <AppBar color='transparent' position='static'>
        <Content>
          <StyledToolbar>
            <Logo />
            {children}
          </StyledToolbar>
        </Content>
      </AppBar>
    </Wrapper>
  )
}