import { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Typography, Button } from '@material-ui/core'
import Card from 'components/core/Card'
import Header from 'components/core/Header'

const Home = () => {
  const dispatch = useDispatch()

  const [state, setState] = useState([])
  const limit = 10001
  const getAll = () => {
    for (let index = 1; index < limit; index++) {
      setState(oldArray => [...oldArray, index])
    }
  }
  return (
    <Fragment>
      <Header
        title="Proyecto Base De Datos 2"
      />
      <Card>
        <Typography variant="h5" align="center">Paolo Veliz 1543219</Typography>
        <Typography variant="h5" align="center">Alison Ramos 1510819</Typography>
        <Typography variant="h5" align="center">Jeffrey Reyes 1603719</Typography>
        <Typography variant="h5" align="center">Santiago Navas 1551619</Typography>
      </Card>
      <Button style={{ display: 'hidden' }} variant="text" color="default" onClick={() => getAll()}>
        Queries
      </Button>
      {state.map((num, index) => (
        <Typography key={index} variant="subtitle1" align="center">{`insert into customer (id, name, lastname, email, customer_type_id) values (${index}, 'Dermot', 'Ferreira', 'dferreira0@sphinn.com', 1);`}</Typography>
      ))}
    </Fragment>
  )
}

export default Home
