import { Fragment } from 'react'

import ProvidersList from 'components/providers/List'
import Header from 'components/core/Header'

const index = () => {
  return (
    <Fragment>
      <Header
        title="Proveedores"
        link="/providers/new"
        action="Nuevo proveedor"
      />
      <ProvidersList />
    </Fragment>

  )
}

export default index
