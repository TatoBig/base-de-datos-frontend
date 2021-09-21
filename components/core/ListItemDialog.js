import { Fragment, useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

const useStyles = makeStyles(theme => ({
  box: {
    width: 400
  },
  toggle: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  toggleButton: {
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius,
      margin: theme.spacing(0.1)
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius,
      margin: theme.spacing(0.1)
    },
    '&.Mui-selected': {
      borderColor: theme.palette.primary,
      color: theme.palette.primary
    },
    '&:not(.Mui-Selected)': {
      border: 'none'
    }
  }
}))

const ListItemDialog = (props) => {
  const {
    title,
    options,
    transform,
    setValue,
    name,
    defaultSelected
  } = props

  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState({})

  useEffect(() => {
    if (defaultSelected) {
      setSelected(defaultSelected)
    }
  }, [defaultSelected])

  const handleSelect = (option) => {
    if (transform) {
      setSelected(transform(option.value, 'medium'))
    } else {
      setSelected(option)
    }
    setValue(name, option.value)
    setOpen(false)
  }

  return (
    <Fragment>
      <ListItem
        button
        divider
        onClick={() => setOpen(true)}
      >
        <ListItemText primary={title} secondary={selected.icon} />
      </ListItem>
      <Dialog
        maxWidth="xs"
        open={open}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent dividers >
          <Box className={classes.box}>
            <ToggleButtonGroup
              exclusive
              size="large"
              className={classes.toggle}
            >
              {
                options.map((option, index) => (
                  <ToggleButton value={option.value} key={index} onClick={() => handleSelect(option)} className={classes.toggleButton}>
                    {option.icon}
                  </ToggleButton>
                ))
              }
            </ToggleButtonGroup>
          </Box>
        </DialogContent>
      </Dialog>
    </Fragment>
  )
}

export default ListItemDialog
