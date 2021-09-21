import { createTheme } from '@material-ui/core/styles'
import { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'

const getAutoText = (color) => {
  const { red, green, blue } = hexToRgb(color)
  console.log(red)
  console.log(green)
  console.log(blue)
  const a = 1 - (0.299 * red + 0.587 * green + 0.114 * blue) / 255
  console.log(a)
  if (a < 0.5) {
    return '#000000'
  } else {
    return '#FFFFFF'
  }
}

function hexToRgb (hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16)
      }
    : null
}

const CustomThemeProvider = ({ children }) => {
  const {
    secondaryColor,
    primaryColor,
    type
  } = useSelector(state => state.palette)

  const [autoColor, setAutoColor] = useState('#000000')

  useEffect(() => {
    console.log(getAutoText(primaryColor))
    setAutoColor(getAutoText(primaryColor))
  }, [primaryColor])

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
      },
      text: {
        auto: autoColor
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
