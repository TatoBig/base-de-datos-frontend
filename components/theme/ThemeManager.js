import { Fragment } from 'react'

import { makeStyles, FormControl, FormControlLabel, Radio, Typography } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/dist/client/router'
import { useSelector, useDispatch } from 'react-redux'
import LensIcon from '@material-ui/icons/Lens'
import List from '@material-ui/core/List'

import { RadioGroup } from 'components/controls/RadioGroup'
import { setPrimaryColor, setTheme } from 'store/palette'
import Card from 'components/core/Card'
import Form from 'components/core/Form'
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
  const router = useRouter()
  const { handleSubmit, setValue, control } = useForm({
    mode: 'onChange',
    defaultValues: {
      theme: 'light'
    }
  })

  const {
    primaryColor
  } = useSelector(state => state.palette)
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    console.log(data)
    dispatch(setPrimaryColor({
      primaryColor: data.primary
    }))
    dispatch(setTheme({
      theme: data.theme
    }))
  }

  return (
    <Fragment>
      <Card title="Modificar tema">
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit} onCancel={() => router.push('/')} >
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
            >
              <FormControlLabel value="light" control={<Radio />} label="Tema claro ☀️" />
              <FormControlLabel value="dark" control={<Radio />} label="Tema oscuro 🌑" />
            </RadioGroup>
          </FormControl>
        </Form>
      </Card>
    </Fragment>
  )
}

export default ThemeManager
