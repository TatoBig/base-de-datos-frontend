import { Fragment } from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const Form = (props) => {
  const { children, handleSubmit, onSubmit } = props

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
        <Box display="flex" flexDirection="row-reverse">
          <Button style={{ marginLeft: 16 }} type="submit" variant="contained" color="primary">
            Guardar
          </Button>
          <Button type="submit" variant="contained" color="secondary">
            Cancelar
          </Button>
        </Box>
      </form>
    </Fragment>
  )
}

export default Form
