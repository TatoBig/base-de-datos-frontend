import { Fragment } from 'react'

import CustomerList from 'components/customers/List'
import Header from 'components/core/Header'

const index = () => {
  return (
    <Fragment>
      <Header
        title="Clientes"
        link="/customers/new"
      />
      <CustomerList />
    </Fragment>

  )
}

export default index
