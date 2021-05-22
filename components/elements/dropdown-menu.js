import { useState } from 'react'
import { useRouter } from 'next/router'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import styled from 'styled-components'

const NavItem = styled(MenuItem)`
font-size: 14px;
padding: 5px 20px;
min-height: 20px;
`
export default function DropDownMenu () {
  const router = useRouter()
  const redirectTo = href => {
    router.push(href)
    closeMenu()
  }
  const [anchorEl, setAnchorEl] = useState(null)
  const openMenu = e => setAnchorEl(e.currentTarget)
  const closeMenu = () => setAnchorEl(null)

  return (
    <>
      <IconButton
        id='basic-button'
        aria-controls='menu'
        aria-haspopup='true'
        aria-expanded={(anchorEl) ? 'true' : undefined}
        onClick={openMenu}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id='menu'
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={closeMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <NavItem onClick={() => redirectTo('/')}>Strona główna</NavItem>
        <NavItem onClick={() => redirectTo('/kalendarz')}>Kalendarz</NavItem>
        <NavItem onClick={() => redirectTo('/rejestracja')}>Rejestracja</NavItem>
      </Menu>
    </>
  )
}
