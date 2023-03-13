import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#A9431F'
    },
    secondary: {
      main: '#0184dc'
    },
    error: {
      main: red.A400
    }
  }
})

export default theme
