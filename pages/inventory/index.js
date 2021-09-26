import { Fragment } from 'react'

import Header from 'components/core/Header'

const index = () => {
  return (
    <Fragment>
      <Header
        title="Inventario"
        link="/inventory/new"
        action="Nuevo Inventario"
      />
    </Fragment>

  )
}

export default index
