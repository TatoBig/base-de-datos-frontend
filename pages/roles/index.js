import { Fragment } from 'react'

import Header from 'components/core/Header'

const index = () => {
  return (
    <Fragment>
      <Header
        title="Roles"
        link="/roles/new"
        action="Nuevo Rol"
      />
    </Fragment>

  )
}

export default index
