import { Controller } from 'react-hook-form'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  input: {
    height: '80px',
    marginBottom: theme.spacing(1)
  }
}))

export default function Input (props) {
  const {
    control,
    defaultValue,
    disabled,
    error,
    id,
    label,
    multiline,
    name,
    rows,
    type,
    variant
  } = props

  const classes = useStyles()

  return (
    <Box className={classes.input}>
      <Controller
        control={control}
        defaultValue={defaultValue || ''}
        name={name}
        render={({ field }) => (
          <TextField
            autoComplete="new-password"
            defaultValue={defaultValue}
            disabled={disabled}
            error={error !== undefined}
            fullWidth
            helperText={error && error.message}
            id={id}
            label={label}
            multiline={multiline}
            rows={rows}
            type={type}
            variant={variant || 'outlined'}
            {...field}
          />
        )}
      />
    </Box>
  )
}
