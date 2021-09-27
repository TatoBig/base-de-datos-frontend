import { Fragment } from 'react'

import Header from 'components/core/Header'
import UserNew from 'components/inventory/New'
import Box from '@material-ui/core/Box'

const newInventory = () => {
  return (
    <Fragment>
      <Header
        title="Nuevo inventario"
        back="/inventory"
      />
      <Box display="flex" justifyContent="center">
        <UserNew />
      </Box>
    </Fragment>
  )
}

export default newInventory
