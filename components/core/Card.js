import { makeStyles, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: 650,
    height: '100%',
    padding: theme.spacing(2)
  },
  title: {
    marginBottom: theme.spacing(2)
  }
}))

const Card = (props) => {
  const { children, title } = props
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      {children}
    </Paper>
  )
}

export default Card
