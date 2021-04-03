import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import Content from './content'
import Logo from './logo'
import { fade } from '@material-ui/core/styles'
import SearchBar from './search'

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

const Buttons = styled.div`
          ${({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    margin-left: ${theme.spacing(2)}px;
    color: ${fade(theme.palette.text.primary, 0.5)}
  }
  `}
`

export default function CustomAppBar () {
  return (
    <Wrapper>
      <AppBar color='transparent' position='static'>
        <Content>
          <StyledToolbar>
            <Logo />

            <SearchBar>
              <SearchIcon />
            </SearchBar>

            <Buttons>
              <IconButton>
                <PersonIcon />
              </IconButton>

              <IconButton>
                <MenuIcon />
              </IconButton>
            </Buttons>

          </StyledToolbar>
        </Content>
      </AppBar>
    </Wrapper>
  )
}
