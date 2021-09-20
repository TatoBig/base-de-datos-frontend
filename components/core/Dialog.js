import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import MuiDialog from '@material-ui/core/Dialog'

const Dialog = (props) => {
  const {
    open,
    onSubmit,
    onClose,
    children,
    title
  } = props
  return (
    <MuiDialog
      maxWidth="xs"
      open={open}
    // className={classes.dialog}
    >
      <DialogTitle>{title}</DialogTitle>
      {/* className={classes.dialog} */}
      <DialogContent dividers >
        {children}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={() => onSubmit()} color="secondary">
          Cancel
        </Button>
        <Button variant="contained" onClick={() => onClose()} color="primary">
          Ok
        </Button>
      </DialogActions>
    </MuiDialog>
  )
}

export default Dialog
