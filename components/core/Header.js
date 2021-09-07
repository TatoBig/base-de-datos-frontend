import { makeStyles } from '@material-ui/core/'
import { useRouter } from 'next/dist/client/router'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.paper.background,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between'
  },
  box: {
    display: 'flex',
    alignItems: 'center'
  }
}))

const Header = (props) => {
  const { title, link = '', back = '', action } = props

  const classes = useStyles()
  const router = useRouter()

  return (
    <Paper className={classes.paper}>
      <Box className={classes.box}>
        {
          back.length > 0 &&
          <IconButton color="primary" onClick={() => router.push(back)}>
            <ArrowBackIcon />
          </IconButton>
        }
        <Typography variant="h2" color="initial">
          {title}
        </Typography>
      </Box>
      {
        link.length > 0 &&
        <Button variant="contained" color="primary" onClick={() => router.push(link)}>
          {action}
        </Button>
      }
    </Paper>
  )
}

export default Header
