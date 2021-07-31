import { useEffect } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import Head from 'next/head'
import theme from '../services/material-ui'
import Default from '../layouts/Default'

import '../styles/globals.css'

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
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
