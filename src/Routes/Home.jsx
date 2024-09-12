// import React from 'react'
// import Card from '../Components/Card'
import { AspectRatio, Box, Card, CardContent, CardOverflow, Divider, Grid, IconButton, Typography } from '@mui/joy';
import { useDentist } from '../hooks/useDentist';
import { homeStyles } from '../utils/theme';
import { Favorite } from '@mui/icons-material';
import { routes } from '../utils/routes';
import { Link } from 'react-router-dom';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {

  const { dentistList, isLoading, toggleFavDentist, favList, isFavorite } = useDentist();

  return (

    <Box component="main" sx={homeStyles.main}  >
      {
        isLoading ? (
          <Typography>Cargando...</Typography>
        ) : (
          <>
            <Typography component="h1" level="h1">Home</Typography>
            <Grid container spacing={2} sx={homeStyles.gridContainer}>
              {dentistList.map(dentist => (

<Grid size={{ sm: 12, md: 4 }} key={dentist.id}>
<Card variant="outlined" sx={{ width: 320 }}>
  <CardOverflow>
  <Link to={`/dentista/${dentist.id}`}>
    <AspectRatio ratio="2">
      <img
        src="./images/doctor.jpg"
        loading="lazy"
        alt="dentist-image"
      />
    </AspectRatio>
    </Link>
    <IconButton
      aria-label="Like minimal photography"
      size="md"
      variant="solid"
      color= {isFavorite(dentist) ? "danger": "neutral"}
      sx={{
        position: 'absolute',
        zIndex: 2,
        borderRadius: '50%',
        right: '1rem',
        bottom: 0,
        transform: 'translateY(50%)',
        transition:'all ease 0.5s'
      }}
      onClick={()=>{
        toggleFavDentist(dentist)
      }}
      >
      <Favorite  />    
    </IconButton>
  </CardOverflow>
    <Link to={`/dentista/${dentist.id}`}>
  <CardContent>
    <Typography level="title-md">
        {dentist.name}     
    </Typography>
    <Typography level="body-sm">
    {dentist.username}
    </Typography>
  </CardContent>
  </Link>
</Card>
</Grid>

          ))}

</Grid>

          </>
        )
      }

    </Box>
  )
}

export default Home