import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  )
}
