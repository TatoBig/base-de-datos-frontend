import { Fragment } from 'react'

import Header from 'components/core/Header'

const index = () => {
  return (
    <Fragment>
      <Header
        title="Ventas"
        link="/sales/new"
        action="Nueva venta"
      />
    </Fragment>

  )
}

export default index
