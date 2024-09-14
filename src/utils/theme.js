import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  "fontFamily": {
    "display": "'SUSE', sans-serif", // applies to `h1`–`h4`
    "body": "'SUSE', sans-serif", // applies to `title-*` and `body-*`
  },
  "colorSchemes": {
    "light": {
      "palette": {
        "primary": {
          "50": "#f5f3ff",
          "100": "#ede9fe",
          "200": "#ddd6fe",
          "300": "#c4b5fd",
          "400": "#a78bfa",
          "500": "#8b5cf6",
          "600": "#7c3aed",
          "700": "#6d28d9",
          "800": "#5b21b6",
          "900": "#4c1d95"
        },
        "neutral": {
          "50": "#f8fafc",
          "100": "#f1f5f9",
          "200": "#e2e8f0",
          "300": "#cbd5e1",
          "400": "#94a3b8",
          "500": "#64748b",
          "600": "#475569",
          "700": "#334155",
          "800": "#1e293b",
          "900": "#0f172a"
        }
      }
    },
    "dark": {
      "palette": {
        "primary": {
          "50": "#f5f3ff",
          "100": "#ede9fe",
          "200": "#ddd6fe",
          "300": "#c4b5fd",
          "400": "#a78bfa",
          "500": "#8b5cf6",
          "600": "#7c3aed",
          "700": "#6d28d9",
          "800": "#5b21b6",
          "900": "#4c1d95"
        },
        "neutral": {
          "50": "#f8fafc",
          "100": "#f1f5f9",
          "200": "#e2e8f0",
          "300": "#cbd5e1",
          "400": "#94a3b8",
          "500": "#64748b",
          "600": "#475569",
          "700": "#334155",
          "800": "#1e293b",
          "900": "#0f172a"
        }
      }
    }
  }
})

export default theme;


// Custom Styles
//Navbar

const linkStyles = { 
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  color: '--joy-palette-text-primary.600',
  '&:hover': {
    color: '--joy-palette-text-primary.900',
    transform: 'scale(1.05)'
  }
}


const homeStyles = {
 
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '80vh',
    width: '100%',
    maxWidth: '1440px',
    padding: '40px 0',
    margin: '0  auto',
    
  },
  
  
  

}


export {
  linkStyles,
  homeStyles,
}