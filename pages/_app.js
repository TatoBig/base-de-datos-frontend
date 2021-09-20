import { useEffect } from 'react'

import { CssBaseline } from '@material-ui/core'
import { Provider } from 'react-redux'

import Default from 'layouts/Default'
import Head from 'next/head'

import 'styles/globals.css'
import store from 'store'
import CustomThemeProvider from 'services/CustomThemeProvider'

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
    <Provider store={store}>
      <CustomThemeProvider>
        <CssBaseline />
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
            <title>Proyecto URL</title>
          </Head>
          <SafeHydrate>
            <Component {...pageProps} />
          </SafeHydrate>
        </Layout>
      </CustomThemeProvider>
    </Provider>
  )
}

export default MyApp
