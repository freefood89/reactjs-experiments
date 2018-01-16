import { createMuiTheme } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'

const theme = createMuiTheme({
  palette: {
    primary: { light: blue[300], main: blue[500], dark: blue[700] }
  },
  zIndex: {
    navDrawer: 5,
  }
})

export default theme
