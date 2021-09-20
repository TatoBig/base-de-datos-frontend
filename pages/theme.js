import { Fragment } from 'react'

import Header from 'components/core/Header'
import { Box } from '@material-ui/core'
import ThemeManager from 'components/theme/ThemeManager'
const theme = () => {
  return (
    <Fragment>
      <Header
        title="Tema"
        back="/"
      />
      <Box display="flex" justifyContent="center">
        <ThemeManager />
      </Box>
    </Fragment>
  )
}

export default theme
