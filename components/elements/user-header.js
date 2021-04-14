import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import { fade } from '@material-ui/core/styles'
import styled from 'styled-components'
import SearchBar from './search'
import AppHeader from './app-header'

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
    <AppHeader>
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
    </AppHeader>
  )
}
