// import React from 'react'
// import Card from '../Components/Card'
import { Box, Typography } from '@mui/joy';
import { useDentist } from '../hooks/useDentist';
import { homeStyles } from '../utils/theme';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
  
const Home = () => {
  
  const { dentistList, isLoading } = useDentist();
  

  return (
  
    <Box component="main"  sx={homeStyles.main}  >
      {
      isLoading ? (
        <Typography>Cargando...</Typography>
      ):(
        <>
        <Typography component="h1" level="h1">Home</Typography>
        
        </>
      )
    }

    </Box>
  )
}

export default Home