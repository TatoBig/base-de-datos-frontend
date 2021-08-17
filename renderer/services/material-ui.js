import { createTheme } from '@material-ui/core/styles'

// ---- Background Colors
const backgroundColor = '#383d3b'
const paperColor = '#494949'
const drawerColor = '#7c7c7c'
const textFieldColor = '#545454'

// ---- Font Colors
const fontColor = '#eee5e9'
const darkFontColor = '#000000'

// ---- Error Colors
const errorColor = '#ED4245'

// ---- Primary Colors
const primaryColor = '#52dee5'
const palePrimaryColor = '#92dce5'

const theme = createTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        color: fontColor
      }
    },
    MuiTypography: {
      colorInherit: {
        color: darkFontColor
      },
      root: {
        color: fontColor
      }
    },
    // Textfields --
    MuiTextField: {
      root: {
        backgroundColor: textFieldColor,
        borderRadius: '6px'
      }
    },
    // TextInput
    MuiInputBase: {
      root: {
        color: fontColor
      }
    },
    // TextField Label
    MuiInputLabel: {
      root: {
        color: fontColor,
        '&$error': {
          color: errorColor,
          fontWeight: 'bold'
        }
      }
    },
    // Error text
    MuiFormHelperText: {
      root: {
        color: fontColor,
        '&$error': {
          color: errorColor,
          fontWeight: 'bold',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiListItemText: {
      primary: {
        color: fontColor
      }
    },
    MuiCssBaseline: {
      '@global': {
        // html: {
        //   WebkitFontSmoothing: 'auto'
        // },
        body: {
          padding: 0,
          margin: 0,
          fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
          backgroundColor: backgroundColor
        }
      }
    }
  },
  palette: {
    primary: {
      main: primaryColor
    },
    secondary: {
      main: '#ad211a'
    },
    fontColor: {
      main: fontColor
    },
    paper: {
      background: paperColor
    },
    drawer: {
      background: drawerColor,
      toolbar: palePrimaryColor
    },
    table: {
      head: palePrimaryColor
    }
  }
})

export default theme
