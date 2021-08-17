import { Fragment } from 'react'

import Header from 'components/core/Header'
import CustomersNew from 'components/customers/New'
import Box from '@material-ui/core/Box'

const newCustomer = () => {
  return (
    <Fragment>
      <Header
        title="Nuevo cliente"
        back="/customers"
      />
      <Box display="flex" justifyContent="center">
        <CustomersNew />
      </Box>
    </Fragment>
  )
}

export default newCustomer
