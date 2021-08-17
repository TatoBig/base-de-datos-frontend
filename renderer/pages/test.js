import { Fragment, useState } from 'react'

import { useRouter } from 'next/dist/client/router'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const test = () => {
  const router = useRouter()

  const [counter, setCounter] = useState(0)

  return (
    <Fragment>
      <Typography variant="h1">
        {counter}
      </Typography>
      <Button variant="contained" onClick={() => setCounter(counter + 1)}>
        Adds
      </Button>
      <Button variant="contained" onClick={() => router.push('/')}>
        Regresar
      </Button>
    </Fragment>
  )
}

export default test
