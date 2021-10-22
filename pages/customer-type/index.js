import { Fragment } from 'react'

import CustomerTypeList from 'components/customer_type/List'
import Header from 'components/core/Header'

const index = () => {
  return (
    <Fragment>
      <Header
        title="Tipos de Cliente"
        link="/customer-type/new"
        action="Nuevo tipo de cliente"
      />
      <CustomerTypeList />
    </Fragment>

  )
}

export default index
