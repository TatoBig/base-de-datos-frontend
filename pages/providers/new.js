import { Fragment } from 'react'

import Header from 'components/core/Header'
import ProvidersNew from 'components/providers/New'
import Box from '@material-ui/core/Box'

const newCustomer = () => {
  return (
    <Fragment>
      <Header
        title="Nuevo proveedor"
        back="/providers"
      />
      <Box display="flex" justifyContent="center">
        <ProvidersNew />
      </Box>
    </Fragment>
  )
}

export default newCustomer
