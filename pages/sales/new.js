import { Fragment } from 'react'

import Header from 'components/core/Header'
import SalesNew from 'components/sales/New'
import Box from '@material-ui/core/Box'

const newSale = () => {
  return (
    <Fragment>
      <Header
        title="Nueva venta"
        back="/sales"
      />
      <Box display="flex" justifyContent="center">
        <SalesNew />
      </Box>
    </Fragment>
  )
}

export default newSale
