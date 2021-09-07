import { Fragment } from 'react'

import ProductsList from 'components/products/List'
import Header from 'components/core/Header'

const index = () => {
  return (
    <Fragment>
      <Header
        title="Productos"
        link="/products/new"
        action="Nuevo producto"
      />
      <ProductsList />
    </Fragment>

  )
}

export default index
