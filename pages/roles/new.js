import { Fragment } from 'react'

import Header from 'components/core/Header'
import UserNew from 'components/roles/New'
import Box from '@material-ui/core/Box'

const newRol = () => {
  return (
    <Fragment>
      <Header
        title="Nuevo rol"
        back="/roles"
      />
      <Box display="flex" justifyContent="center">
        <UserNew />
      </Box>
    </Fragment>
  )
}

export default newRol
