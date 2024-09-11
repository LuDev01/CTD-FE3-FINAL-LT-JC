// import React from 'react'
// import Card from '../Components/Card'
import { Box,Button } from '@mui/joy';
import {useDentistStates} from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
  
import { useColorScheme } from '@mui/joy/styles';
const Home = () => {
  const { state } = useDentistStates(); 
  console.log(state.data); 

  const { mode, systemMode,setMode } = useColorScheme();
  console.log(mode); // "system"


  // Toggle between light and dark modes
  const handleToggle = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };


  return (
    <Box
    component="section"
    sx={{
      height: '100vh',  // Full page height
      backgroundColor: mode === 'dark' ? '#121212' : '#fff',  // Background color based on mode
      color: mode === 'dark' ? '#fff' : '#000',  // Text color based on mode
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
  >
    <p>Current mode: {mode}</p>
    <Button variant="outlined" color="neutral" onClick={handleToggle}>
      Toggle {mode === 'dark' ? 'Light' : 'Dark'} Mode
    </Button>
  </Box>
  )
}

export default Home