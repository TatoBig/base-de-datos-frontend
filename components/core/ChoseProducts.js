import { Fragment, useState } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Input from 'components/controls/Input'
import Select from 'components/controls/Select'

const PhoneInputs = (props) => {
  const {
    control,
    products: productOptions
  } = props

  const [products, setProducts] = useState([])

  const addMore = () => {
    setProducts(oldArray => [...oldArray, 's'])
  }

  return (
    <Fragment>
      <Button variant="outlined" startIcon={<AddIcon />} onClick={() => addMore()} style={{ marginBottom: 20 }}>
        Agregar productos
      </Button>
      {
        products.map((product, index) => (
          <div
            key={index}
          >
            <Select
              control={control}
              label={`Producto ${index + 1}`}
              name={`input${index}`}
              items={productOptions.map(product => {
                return {
                  text: product.nombreProducto,
                  value: product
                }
              })}
            />
            <Input
              control={control}
              label={`Cantidad Produdcto ${index + 1}`}
              name={`quantity${index}`}
            />
          </div>
        ))
      }
    </Fragment>
  )
}

export default PhoneInputs
