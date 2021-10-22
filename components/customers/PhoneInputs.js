import { Fragment, useState } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Input from 'components/controls/Input'

const PhoneInputs = (props) => {
  const {
    control
  } = props

  const [phones, setPhones] = useState([])

  const addMore = () => {
    setPhones(oldArray => [...oldArray, 's'])
  }

  return (
    <Fragment>
      <Button variant="outlined" startIcon={<AddIcon />} onClick={() => addMore()} style={{ marginBottom: 20 }}>
        Agregar telefono
      </Button>
      {
        phones.map((product, index) => (
          <div
            key={index}
          >
            <Input
              control={control}
              label={`Numero de telefono ${index + 1}`}
              name={`phone${index}`}
            />
          </div>
        ))
      }
    </Fragment>
  )
}

export default PhoneInputs
