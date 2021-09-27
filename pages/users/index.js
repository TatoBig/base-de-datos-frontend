import { Fragment } from 'react'

import Header from 'components/core/Header'

const index = () => {
  return (
    <Fragment>
      <Header
        title="Usuarios"
        link="/users/new"
        action="Nuevo Usuario"
      />
    </Fragment>

  )
}

export default index
