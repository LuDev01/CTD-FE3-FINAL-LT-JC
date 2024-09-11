import { CssVarsProvider, useColorScheme } from "@mui/joy"
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemeSelector: 'media',
});

const ThemeProvider = ({children}) => {

  return (

<CssVarsProvider theme={theme}>
    {children}
</CssVarsProvider>
  )
}

export default ThemeProvider