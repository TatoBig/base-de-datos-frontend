import { Fragment } from 'react'

import Header from 'components/core/Header'
import CustomerTypeNew from 'components/customer_type/New'
import Box from '@material-ui/core/Box'

const newCustomer = () => {
  return (
    <Fragment>
      <Header
        title="Nuevo tipo de cliente"
        back="/customer-type"
      />
      <Box display="flex" justifyContent="center">
        <CustomerTypeNew />
      </Box>
    </Fragment>
  )
}

export default newCustomer
