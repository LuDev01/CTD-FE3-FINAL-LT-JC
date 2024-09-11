// import React from 'react'
// import Card from '../Components/Card'
import { Box,Button, Typography } from '@mui/joy';
import {useDentistStates} from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
  
const Home = () => {
  const { state } = useDentistStates(); 
  console.log(state.data); 

  return (
    <Box component="section" >
      
    </Box>
  )
}

export default Home