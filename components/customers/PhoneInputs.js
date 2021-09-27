import { Fragment } from 'react'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

const PhoneInputs = () => {
  return (
    <Fragment>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </Fragment>
  )
}

export default PhoneInputs
