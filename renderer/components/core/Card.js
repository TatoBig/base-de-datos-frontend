import { makeStyles, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.fontColor.main
  },
  paper: {
    backgroundColor: theme.palette.paper.background,
    width: 850,
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
