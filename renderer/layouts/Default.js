import { Grid, makeStyles, Snackbar } from '@material-ui/core'
import { Fragment } from 'react'
// import Navbar from 'layouts/components/Navbar'

const drawerWidth = 260

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
  },
  content: {
    backgroundColor: theme.palette.background.default,
    flexGrow: 1
    // padding: theme.spacing(4)
  }
}))

const Default = ({ children }) => {
  const classes = useStyles()
  return (
    <Fragment>
      {/* <Navbar/> */}
      <main className={classes.content}>
        <Grid container>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
        <Snackbar />
      </main>
    </Fragment>
  )
}

export default Default
