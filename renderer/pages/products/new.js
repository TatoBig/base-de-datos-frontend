import { Fragment } from 'react'

import Header from 'components/core/Header'
import ProductsNew from 'components/products/New'
import Box from '@material-ui/core/Box'

const newCustomer = () => {
  return (
    <Fragment>
      <Header
        title="Nuevo producto"
        back="/products"
      />
      <Box display="flex" justifyContent="center">
        <ProductsNew />
      </Box>
    </Fragment>
  )
}

export default newCustomer
