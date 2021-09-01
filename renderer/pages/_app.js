import { useEffect } from 'react'

import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

import Default from '../layouts/Default'
import Head from 'next/head'
import theme from '../services/material-ui'

import '../styles/globals.css'

function SafeHydrate ({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

function MyApp ({ Component, pageProps }) {
  const Layout = Component.layout || Default
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <SafeHydrate>
          <Component {...pageProps} />
        </SafeHydrate>
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
