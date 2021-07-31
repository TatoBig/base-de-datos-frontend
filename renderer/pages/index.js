import { Fragment, useState, useEffect } from 'react'

import { useRouter } from 'next/dist/client/router'
import Input from 'components/controls/Input'
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles({
  // test: {
  //   marginTop: 16
  // }
})

const Home = () => {
  const router = useRouter()
  // const txt = ''
  const classes = useStyles()

  const [input, setInput] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const handleMessage = (event, message) => setMessage(message)
    window.electron.message.on(handleMessage)

    return () => {
      window.electron.message.off(handleMessage)
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    window.electron.message.send(input)
    setMessage(null)
  }

  return (
    <Fragment>
      <h1>Electron</h1>

      {message && <p>{message}</p>}
      <Input/>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={classes.test} type="submit">
          Submit
        </button>
      </form>
      <Button variant="text" color="default" onClick={() => router.push('/test')}>
        Button test
      </Button>
      <style jsx>{`
        h1 {
          color: red;
          font-size: 50px;
        }
      `}</style>
    </Fragment>
  )
}

export default Home
