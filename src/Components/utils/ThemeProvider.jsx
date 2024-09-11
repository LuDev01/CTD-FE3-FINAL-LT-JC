import PropTypes from 'prop-types'
import { CssBaseline, CssVarsProvider } from "@mui/joy"
import theme from "../../utils/theme"


const ThemeProvider = ({children}) => {


  return (

    <CssVarsProvider theme={theme} disableNestedContext >
       <CssBaseline />
        {children}
    </CssVarsProvider>
  )
}

export default ThemeProvider

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}