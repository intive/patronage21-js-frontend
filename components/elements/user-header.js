import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { fade } from '@material-ui/core/styles'
import styled from 'styled-components'
import SearchBar from './search'
import AppHeader from './app-header'
import DropDownMenu from './dropdown-menu'
import LogOutButton from './log-out-button'

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

export default function UserHeader () {
  return (
    <AppHeader useLogoRedirect>
      <SearchBar>
        <SearchIcon />
      </SearchBar>
      <Buttons>
        <LogOutButton />
        <DropDownMenu />
      </Buttons>
    </AppHeader>
  )
}
