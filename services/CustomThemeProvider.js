import { createTheme } from '@material-ui/core/styles'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'

const CustomThemeProvider = ({ children }) => {
  const {
    secondaryColor,
    primaryColor,
    type
  } = useSelector(state => state.palette)

  const theme = createTheme({
    overrides: {
      MuiTextField: {
        root: {
          borderRadius: '6px'
        }
      },
      MuiCssBaseline: {
        '@global': {
          body: {
            padding: 0,
            margin: 0,
            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
          }
        }
      }
    },
    palette: {
      type: type,
      primary: {
        main: primaryColor
      },
      secondary: {
        main: secondaryColor
      },
      table: {
        head: primaryColor
      }
    }
  })

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Fragment>
  )
}

export default CustomThemeProvider
