import { Fragment, useState } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useRouter } from 'next/dist/client/router'
import Input from 'components/controls/Input'
import { Button, Typography } from '@material-ui/core'

// const useStyles = makeStyles({
//   // test: {
//   //   marginTop: 16
//   // }
// })

const schema = yup.object().shape({
  test: yup.string().required('Test')
})

const Home = () => {
  const router = useRouter()
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

  return (
    <Fragment>
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
    </Fragment>
  )
}

export default Home