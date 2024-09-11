import PropTypes from 'prop-types'
import { CssVarsProvider } from "@mui/joy"
import theme from "../../utils/theme"


const ThemeProvider = ({children}) => {


  return (

    <CssVarsProvider theme={theme} disableNestedContext >
        {children}
    </CssVarsProvider>
  )
}

export default ThemeProvider

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}