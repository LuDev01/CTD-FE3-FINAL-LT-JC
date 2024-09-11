import { Box } from '@mui/joy'
import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
<Box component='nav' theme={'dark'} 
    sx={{
      width:'100%',
      height: '60px',  // Full page height
      backgroundColor: 'red',  // Background color based on mode
      color: '#fff',  // Text color based on mode
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    }}

>
  
<Box component='h2'
 sx ={{
  fontSize:'2rem'
 }}
>
Clino
</Box>


<Box component='ul'
 sx ={{
  fontSize:'0.8rem'
 }}
>
<Link to={routes.home}>Home</Link>
<Link to={routes.favs}>Favoritos</Link>
<Link to={routes.contact}>Contacto</Link>

</Box>

</Box>
  )
}

export default Navbar