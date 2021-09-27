import { Controller } from 'react-hook-form'
import { makeStyles } from '@material-ui/core'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import MuiSelect from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  select: {
    marginBottom: theme.spacing(3)
  }
}))

export default function Select (props) {
  const {
    control,
    defaultValue,
    error,
    id,
    items = [],
    itemText = 'text',
    itemValue = 'value',
    label,
    name
  } = props

  const classes = useStyles()

  return (
    <Controller
      control={control}
      defaultValue={defaultValue || ''}
      name={name}
      render={({ field }) => (
        <FormControl
          className={classes.select}
          fullWidth
          variant="outlined"
        >
          <InputLabel
            error={error !== undefined}
            id={`${id}-label`}
          >
            {label}
          </InputLabel>
          <MuiSelect
            error={error !== undefined}
            IconComponent={ExpandMoreOutlinedIcon}
            id={id}
            label={label}
            labelId={`${id}-label`}
            {...field}
          >
            {
              items.map((item, index) => (
                <MenuItem
                  key={index}
                  value={item[itemValue]}
                >
                  {item[itemText]}
                </MenuItem>
              ))
            }
          </MuiSelect>
          {
            error !== undefined && (
              <FormHelperText error>
                {error.message}
              </FormHelperText>
            )
          }
        </FormControl>
      )}
    />
  )
}
