import React from 'react'
import Form from '../Components/Form'
import { Box, Typography } from '@mui/material'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <Box component="main">
      <Typography component="h1" variant="h1">Contact</Typography>
      <Box component="section" sx={{ marginTop: '30px' }} >
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Box component="div" sx={{ marginTop: '30px' }} >
          <Form />
        </Box>
      </Box>
    </Box>
  )
}

export default Contact