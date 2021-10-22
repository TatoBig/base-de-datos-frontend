import { Fragment } from 'react'

import Header from 'components/core/Header'
import PurchasesNew from 'components/purchases/New'
import Box from '@material-ui/core/Box'

const newPurchases = () => {
  return (
    <Fragment>
      <Header
        title="Nuevo compra"
        back="/purchases"
      />
      <Box display="flex" justifyContent="center">
        <PurchasesNew />
      </Box>
    </Fragment>
  )
}

export default newPurchases
