import { createTheme } from '@material-ui/core/styles'
import { grey, pink, blue } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: pink.A400
    },
    drawer: {
      light: '#2c4774',
      main: '#1c2d49',
      dark: '#17243b'
    },
    onDrawer: {
      light: '#ffffff',
      main: '#d2d5dc',
      dark: '#a4aab6'
    },
    background: {
      paper: '#ffffff',
      default: '#ffffff',
      drawer: '#1c2d49'
    },
    text: {
      primary: '#1c2d49',
      secondary: '#a4aab6',
      onDrawer: '#f4f5f7'
    },
    buttons: {
      submit: '#ffffff',
      back: '#ff0000',
      close: grey[500],
      toggle: '#444444',
      selected: '#2196f3',
      simple: '#233044'
    }
  }
})

export default theme
