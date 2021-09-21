import { Fragment, useEffect } from 'react'

import { makeStyles, FormControl, FormControlLabel, Radio, Typography } from '@material-ui/core'
import { useForm, useWatch } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import LensIcon from '@material-ui/icons/Lens'
import List from '@material-ui/core/List'

import { RadioGroup } from 'components/controls/RadioGroup'
import { setPrimaryColor, setTheme } from 'store/palette'
import ListItemDialog from 'components/core/ListItemDialog'

const colors = [
  '#000000', '#404040', '#808080', '#FF0000', '#FF6A00', '#FFD800',
  '#B6FF00', '#4CFF00', '#00FF21', '#00FF90', '#00FFFF',
  '#0094FF', '#0026FF', '#4800FF', '#B200FF', '#FF00DC',
  '#FF006E', '#7F0000', '#7F3300', '#7F6A00',
  '#5B7F00', '#78BC62', '#007F0E', '#007F46', '#007F7F',
  '#004A7F', '#00137F', '#57007F',
  '#7F006E', '#7F0037'
]

const matchColor = (colorCode, size = 'medium') => {
  return {
    icon: <LensIcon fontSize={size} style={{ color: `${colorCode}` }} />,
    value: colorCode
  }
}

const useStyles = makeStyles(theme => ({
  list: {
    padding: theme.spacing(0),
    marginBottom: theme.spacing(3)
  }
}))

const ThemeManager = () => {
  const classes = useStyles()

  const {
    primaryColor,
    type
  } = useSelector(state => state.palette)
  const dispatch = useDispatch()

  const { setValue, control } = useForm({
    mode: 'onChange',
    defaultValues: {
      theme: type,
      primary: primaryColor
    }
  })

  // // const onSubmit = (data) => {
  // //   console.log(data)
  //   dispatch(setPrimaryColor({
  //     primaryColor: data.primary
  //   }))
  // //   dispatch(setTheme({
  // //     theme: data.theme
  // //   }))
  // // }

  const primary = useWatch({
    control,
    name: 'primary'
  })

  useEffect(() => {
    console.log(primary)
    dispatch(setPrimaryColor({
      primaryColor: primary
    }))
  }, [primary])

  const handleOnChangeTheme = (theme) => {
    console.log(theme)
    dispatch(setTheme({
      theme: theme
    }))
  }

  // useEffect(() => {
  //   console.log(watch('primary'))
  // }, [])

  // const primary = useWatch({ name: 'primary' })

  // useEffect(() => {
  //   console.log(primary)
  // }, [primary])

  return (
    <Fragment>
      <List
        className={classes.list}
      >
        <ListItemDialog
          name="primary"
          setValue={setValue}
          title="Color primario, tema principal, botones..."
          transform={matchColor}
          defaultSelected={matchColor(primaryColor, 'medium')}
          options={colors.map(color => matchColor(color, 'large'))}
        />
      </List>
      <Typography variant="h5">Tema</Typography>
      <FormControl component="fieldset">
        <RadioGroup
          control={control}
          name="theme"
          callback={(e => handleOnChangeTheme(e))}
        >
          <FormControlLabel value="light" control={<Radio />} label="Tema claro ☀️" />
          <FormControlLabel value="dark" control={<Radio />} label="Tema oscuro 🌑" />
        </RadioGroup>
      </FormControl>
    </Fragment>
  )
}

export default ThemeManager
