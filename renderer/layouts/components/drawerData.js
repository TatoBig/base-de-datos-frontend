import { makeStyles } from '@material-ui/core'
import { useRouter } from 'next/dist/client/router'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import HomeIcon from '@material-ui/icons/Home'

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.fontColor.main
  }
}))

const useDrawerData = () => {
  const classes = useStyles()
  const router = useRouter()
  return {
    Home: {
      icon: <HomeIcon className={classes.icon}/>,
      redirect: () => router.push('/')
    },
    Clientes: {
      icon: <AccountCircleIcon className={classes.icon} />,
      redirect: () => router.push('/customers'),
      children: {
        crear: {
          icon: <AddCircleOutlineOutlinedIcon className={classes.icon} />
        },
        lista: {
          icon: <ListAltOutlinedIcon className={classes.icon} />
        }
      }
    },
    Ventas: {
      icon: <MonetizationOnIcon className={classes.icon} />,
      redirect: () => router.push('/sales')
    }
  }
}

export default useDrawerData
