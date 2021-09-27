import { makeStyles } from '@material-ui/core'
import { Fragment, useEffect, useState } from 'react'
import Drawer from 'layouts/components/Drawer'
import styles from './Layout.module.css'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/dist/client/router'

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
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

const Default = ({ children }) => {
  const classes = useStyles()
  const router = useRouter()

  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState('fadeOut')

  const {
    logged
  } = useSelector(state => state.login)

  useEffect(() => {
    setTransitionStage('fadeIn')
  }, [])

  useEffect(() => {
    console.log(logged)
    if (!logged) {
      router.push('/login')
    }
  }, [logged])

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('fadeOut')
  }, [children, setDisplayChildren, displayChildren])

  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.root}>
        <Drawer />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div
            onTransitionEnd={() => {
              if (transitionStage === 'fadeOut') {
                setDisplayChildren(children)
                setTransitionStage('fadeIn')
              }
            }}
            className={`${styles.content} ${styles[transitionStage]}`}
          >
            {
              logged &&
              <div>
                {displayChildren}
              </div>
            }
          </div>
        </main>
      </div>
    </Fragment>
  )
}

export default Default
