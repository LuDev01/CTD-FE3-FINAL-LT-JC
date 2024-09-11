import { Link, useLocation } from 'react-router-dom'
import { Box, Typography, Switch } from '@mui/joy'
import DarkMode from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';

import { useTheme } from '../hooks/useTheme'
import { routes } from '../utils/routes'
import { linkStyles } from '../utils/theme';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { isDark, setTheme } = useTheme();
  const location = useLocation();

  return (
    <Box component='nav'
      sx={{
        height: '80px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        background: '#9333ea'
      }}
    >

      <Typography component='h2' level='h1'
        // sx={{ fontSize: '2rem',}}
      >
        Clino
      </Typography>


      <Box component='ul'
        sx={{
          fontSize: '0.8rem',
          display: 'flex',
          gap: '10px'
        }}
      >
        <Link to={routes.home}>
          <Typography 
            level={location.pathname === routes.home ? "title-lg" : "title-md"}  
            textColor={location.pathname === routes.home ? "primary.100" : "neutral.300"}
            sx={linkStyles}
          >
            Home
          </Typography> 
        </Link>
        <Link to={routes.favs}>
          <Typography 
            level={location.pathname === routes.favs ? "title-lg" : "title-md"}  
            textColor={location.pathname === routes.favs ? "primary.100" : "neutral.300"}
            sx={linkStyles}
          >
            Favoritos
          </Typography>
        </Link>
        <Link to={routes.contact} >
          <Typography 
            level={location.pathname === routes.contact ? "title-lg" : "title-md"}  
            textColor={location.pathname === routes.contact ? "primary.100" : "neutral.300"}
            sx={linkStyles}
          >
            Contacto
          </Typography>
        </Link>

      </Box>

      <Switch
        size="lg"
        slotProps={{
          input: { 'aria-label': 'Dark mode' },
          thumb: {
            children: isDark ? <DarkMode /> : <Brightness5Icon />,
          },
        }}
        checked={isDark}
        variant='outlined'

        sx={{ '--Switch-thumbSize': '16px' }}
        onChange={() => {
          setTheme(isDark ? 'light' : 'dark')
        }}
      />
    </Box>



  )
}

export default Navbar