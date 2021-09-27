import { Fragment } from 'react'
import { Typography } from '@material-ui/core'
import Head from 'next/head'
import Card from 'components/core/Card'
import Header from 'components/core/Header'

const Home = () => {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title="Proyecto Base De Datos 2"
      />
      <Card>
        <Typography variant="h5" align="center">Paolo Veliz 1543219</Typography>
        <Typography variant="h5" align="center">Alison Ramos 1510819</Typography>
        <Typography variant="h5" align="center">Jeffrey Reyes 1603719</Typography>
        <Typography variant="h5" align="center">Santiago Navas 1551619</Typography>
      </Card>
    </Fragment>
  )
}

export default Home
