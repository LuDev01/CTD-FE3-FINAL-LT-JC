import { Box, Typography } from '@mui/joy'
import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
<Box component='nav'  >
  
<Typography component='h2' 
 
>
Clino
</Typography>


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