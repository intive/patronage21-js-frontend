import { createMuiTheme } from '@material-ui/core/styles'

const colors = {
  black: '#000000',
  pink: '#cb4173',
  blue: '#2ab6fb',
  green: '#89ca35',
  red: '#f30e2b',
  grey: '#9f9f9f',
  white1: '#ffffff',
  white2: '#ebf8ff'
}

const MuiTheme = createMuiTheme({
  palette: {
    text: {
      primary: colors.black
    },
    primary: {
      main: colors.pink,
      contrastText: colors.white1
    },
    secondary: {
      main: colors.blue,
      contrastText: colors.white1
    }
  }
})

const customPalette = {
  colors: {
    primary: colors.pink,
    secondary: colors.blue
  }
}

const theme = {
  ...MuiTheme,
  customPalette
}

export default theme
