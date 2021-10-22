import { Fragment } from 'react'

import PurchasesList from 'components/purchases/List'
import Header from 'components/core/Header'

const index = () => {
  return (
    <Fragment>
      <Header
        title="Compras"
        link="/purchases/new"
        action="Nuevo compras"
      />
      <PurchasesList />
    </Fragment>

  )
}

export default index
