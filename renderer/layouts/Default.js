import { Grid, makeStyles, Snackbar, Typography } from '@material-ui/core'
import { Fragment, useEffect, useState } from 'react'
import Drawer from 'layouts/components/Drawer'
import styles from './Layout.module.css'
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
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.night
  }
}))

const Default = ({ children }) => {
  const classes = useStyles()

  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState('fadeOut')

  useEffect(() => {
    setTransitionStage('fadeIn')
  }, [])

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('fadeOut')
  }, [children, setDisplayChildren, displayChildren])

  return (
    <Fragment>
      <div className={classes.root}>
        <Drawer />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div
            onTransitionEnd={() => {
              if (transitionStage === 'fadeOut') {
                console.log('fading out')
                setDisplayChildren(children)
                setTransitionStage('fadeIn')
              }
            }}
            className={`${styles.content} ${styles[transitionStage]}`}
          >
            {displayChildren}
          </div>
        </main>
        {/* <main className={classes.content}>
        <Grid container>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
        <Snackbar />
      </main> */}
      </div>
    </Fragment>
  )
}

export default Default
