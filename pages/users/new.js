import { Fragment } from 'react'

import Header from 'components/core/Header'
import UserNew from 'components/users/New'
import Box from '@material-ui/core/Box'

const newUser = () => {
  return (
    <Fragment>
      <Header
        title="Nuevo usuario"
        back="/users"
      />
      <Box display="flex" justifyContent="center">
        <UserNew />
      </Box>
    </Fragment>
  )
}

export default newUser
