import { Box, Button, Typography,Switch } from '@mui/joy'
import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'
import { useTheme } from '../hooks/useTheme'
import DarkMode from '@mui/icons-material/DarkMode';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

const {currentTheme,setTheme}= useTheme();


  return (
<Box component='nav' 
  sx={{
    height:'80px',
    width:'100%',
    display:'flex',
    justifyContent:'space-evenly',
    background:'#9333ea'
  }}
>
  
<Typography component='h2' 
 sx={{
  fontSize:'2rem',

 }}
>
Clino
</Typography>


<Box component='ul'
 sx ={{
  fontSize:'0.8rem',
  display:'flex',
  gap:'10px'
 }}
>
<Link to={routes.home}><Typography level='title-md'>Home</Typography> </Link>
<Link to={routes.favs}><Typography level='title-md'>Favoritos</Typography> </Link>
<Link to={routes.contact}><Typography level='title-md'>Contacto</Typography> </Link>

</Box>

<Switch
  size="lg"
  slotProps={{
    input: { 'aria-label': 'Dark mode' },
    thumb: {
      children: <DarkMode />,
    },
  }}
checked={currentTheme == 'dark'}

  sx={{ '--Switch-thumbSize': '16px' }}
  onChange={()=>{
    setTheme(currentTheme == 'dark' ? 'light' : 'dark')
  }}
/>
</Box>



  )
}

export default Navbar