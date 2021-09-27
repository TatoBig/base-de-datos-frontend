import { Fragment } from 'react'

import SalesList from 'components/sales/List'
import Header from 'components/core/Header'

const index = () => {
  return (
    <Fragment>
      <Header
        title="Ventas"
        link="/sales/new"
        action="Nueva venta"
      />
      <SalesList />
    </Fragment>
  )
}

export default index
