import MuiRadioGroup from '@material-ui/core/RadioGroup'
import { Controller } from 'react-hook-form'

export const RadioGroup = (props) => {
  const {
    children,
    control,
    name,
    callback
  } = props
  return (
    <Controller
      rules={{ required: true }}
      control={control}
      defaultValue="business"
      name={name}
      render={({ field }) => {
        const { onBlur, onChange, value } = field
        return (
          <MuiRadioGroup
            value={value}
            onBlur={onBlur}
            onChange={(e) => {
              onChange(e)
              if (callback) {
                callback(e.target.value)
              }
            }}
          >
            {children}
          </MuiRadioGroup>
        )
      }}
    />
  )
}
