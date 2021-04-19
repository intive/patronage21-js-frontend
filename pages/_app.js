import { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { StylesProvider } from '@material-ui/core/styles'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

export default function App ({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyle />
            <RecoilRoot>
              <Component {...pageProps} />
            </RecoilRoot>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  )
}
