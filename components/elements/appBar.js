import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import PersonIcon from '@material-ui/icons/Person'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import Content from './content'
import Logo from './logo'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginBottom: theme.spacing(3)
  },
  buttons: {
    width: 'min-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '&  button': {
      marginLeft: theme.spacing(2)
    }
  },
  menuButton: {
    marginRight: theme.spacing(0)
  },
  toolbar: {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${fade(theme.palette.text.primary, 0.2)}`,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '40%'
    }
  },
  searchIcon: {
    // backgroundColor: 'blue',
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: fade(theme.palette.text.primary, 0.5)
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  icon: {
    color: fade(theme.palette.text.primary, 0.5)
  }
}))

export default function CustomAppBar ({ onChange }) {
  const classes = useStyles()

  return (
    <div className={classes.grow}>
      <AppBar color='transparent' position='static'>
        <Content>
          <Toolbar className={classes.toolbar}>
            <Logo />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Wpisz czego szukasz'
                onChange={onChange}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.buttons}>
              <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='open drawer'
              >
                <PersonIcon className={classes.icon} />
              </IconButton>

              <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='open drawer'
              >
                <MenuIcon className={classes.icon} />
              </IconButton>
            </div>
          </Toolbar>
        </Content>

      </AppBar>
    </div>
  )
}
