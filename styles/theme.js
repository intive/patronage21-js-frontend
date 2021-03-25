import { createMuiTheme } from '@material-ui/core/styles'

const colors = {
  black: '#000000',
  pink: '#cb4173',
  blue: '#2ab6fb',
  green: '#89ca35',
  red: '#f30e2b',
  grey: '#9f9f9f',
  white1: '#efefef',
  white2: '#ebf8ff'
}

const MuiTheme = createMuiTheme({
  palette: {
    text: {
      primary: colors.black
    },
    primary: {
      main: colors.pink
    },
    secondary: {
      main: colors.blue
    }
  }
})

const customPalette = {
  colors: {
    primary: colors.pink
  }
}

const theme = {
  ...MuiTheme,
  customPalette
}

export default theme
