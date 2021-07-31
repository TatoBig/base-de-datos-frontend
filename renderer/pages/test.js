import { Fragment, useState } from 'react'

import { useRouter } from 'next/dist/client/router'
import Button from '@material-ui/core/Button'

const test = () => {
  const router = useRouter()

  const [counter, setCounter] = useState(0)

  return (
    <Fragment>
      <h1>
        {counter}
      </h1>
      <Button variant="text" color="default" onClick={() => setCounter(counter + 1)}>
        Adds
      </Button>
      <Button variant="text" color="default" onClick={() => router.push('/')}>
        Regresar
      </Button>
    </Fragment>
  )
}

export default test
