import { Fragment, useEffect, useState } from 'react'

import { Button } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useForm, useWatch } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import clsx from 'clsx'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import DrawerList from 'layouts/components/DrawerList'
import Dialog from 'components/core/Dialog'
import ThemeManager from 'components/theme/ThemeManager'
import Select from 'components/controls/Select'
import { changePort } from 'store/port'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
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
    padding: theme.spacing(3)
  }
}))

export default function MiniDrawer() {
  const classes = useStyles()
  const theme = useTheme()

  const { control, formState: { errors }, setValue } = useForm({
    mode: 'onChange'
  })

  const [open, setOpen] = useState(false)
  const [openTheme, setOpenTheme] = useState(false)
  const dispatch = useDispatch()
  const port = useSelector(state => state.port)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const selectedPort = useWatch({
    control,
    name: 'port',
    defaultValue: port
  })

  useEffect(() => {
    console.log(port)
  }, [port])

  useEffect(() => {
    console.log(selectedPort)
    dispatch(changePort({
      port: selectedPort
    }))
  }, [selectedPort])

  return (
    <Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{ flexGrow: 1 }} variant="h6" noWrap>
            Proyecto de Base de Datos 2
          </Typography>
          <Select
            control={control}
            label="Seleccionar servidor"
            name="port"
            id="input-port"
            items={[
              {
                text: 'Servidor 1 (8080)',
                value: '8080'
              },
              {
                text: 'Servidor 2 (8081)',
                value: '8081'
              }
            ]}
          />
          <Button color="inherit" onClick={() => setOpenTheme(true)}>
            Cambiar tema de colores
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <DrawerList />
      </Drawer>
      <Dialog
        open={openTheme}
        onSubmit={() => setOpenTheme(false)}
        onClose={() => setOpenTheme(false)}
        cancel={false}
      >
        <ThemeManager />
      </Dialog>
    </Fragment>
  )
}
