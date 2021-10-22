import { Fragment, useState } from 'react'
<<<<<<< Updated upstream

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'

import { useRouter } from 'next/dist/client/router'
import Input from 'components/controls/Input'
import { Button, Typography } from '@material-ui/core'
import { setPrimaryColor } from 'store/palette'
=======
import { Typography, Button } from '@material-ui/core'
>>>>>>> Stashed changes
import Head from 'next/head'

// const useStyles = makeStyles({
//   // test: {
//   //   marginTop: 16
//   // }
// })

const schema = yup.object().shape({
  test: yup.string().required('Test')
})

const Home = () => {
<<<<<<< Updated upstream
  const router = useRouter()
  const dispatch = useDispatch()

  // const classes = useStyles()
  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const [input, setInput] = useState('')
  const [message, setMessage] = useState(null)

  const onSubmit = (data) => {
    setMessage(data.test)
  }

  const changePrimaryColor = () => {
    dispatch(setPrimaryColor({
      primaryColor: '#000000'
    }))
  }

=======
  const [state, setState] = useState([])
  const limit = 10001
  const getAll = () => {
    for (let index = 1; index < limit; index++) {
      setState(oldArray => [...oldArray, index])
    }
  }
>>>>>>> Stashed changes
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<<<<<<< Updated upstream
      <Typography variant="h1">Electron</Typography>
      <Typography variant="h5">{message}</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          error={errors.test}
          control={control}
          label="Test"
          name="test"
        />
        <Input
          error={errors.test}
          control={control}
          label="Test"
          name="test"
        />
        <Input
          error={errors.test}
          control={control}
          label="Test"
          name="test"
        />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button type="submit" variant="contained" color="secondary">
          Cancelar
        </Button>
      </form>
      <Button variant="text" color="default" onClick={() => router.push('/test')}>
        Button test
      </Button>
      <Button color="primary" variant="contained" onClick={() => changePrimaryColor()}>
        Cambiar color
      </Button>
=======
      <Header
        title="Proyecto Base De Datos 2"
      />
      <Card>
        <Typography variant="h5" align="center">Paolo Veliz 1543219</Typography>
        <Typography variant="h5" align="center">Alison Ramos 1510819</Typography>
        <Typography variant="h5" align="center">Jeffrey Reyes 1603719</Typography>
        <Typography variant="h5" align="center">Santiago Navas 1551619</Typography>
      </Card>
      <Button variant="text" color="default" onClick={() => getAll()}>
        Queries
      </Button>
      {state.map((num, index) => (
        <Typography key={index} variant="subtitle1" align="center">{`insert into customer (id, name, lastname, email, customer_type_id) values (${index}, 'Dermot', 'Ferreira', 'dferreira0@sphinn.com', 1);`}</Typography>
      ))}
>>>>>>> Stashed changes
    </Fragment>
  )
}

export default Home
