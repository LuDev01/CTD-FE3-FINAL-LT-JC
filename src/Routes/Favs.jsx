import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/joy";
import { CardSkeleton } from "../Components/CardSkeleton";
import DentistCard from "../Components/Card";
import { useDentist } from "../hooks/useDentist";
import { routes } from "../utils/routes";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  
  const { favList, isLoading, toggleFavDentist, isFavorite } = useDentist();

  return (
    <>
      <Typography component="h1" level="h1">Dentists Favs</Typography>
      <div className='grid-container' >
        {
          isLoading ? (
            <>
              <Grid size={{ sm: 12, md: 4 }} >
                <CardSkeleton />
              </Grid>
              <Grid size={{ sm: 12, md: 4 }} >
                <CardSkeleton />
              </Grid>
              <Grid size={{ sm: 12, md: 4 }} >
                <CardSkeleton />
              </Grid>
            </>
          ) : (
            <>
              {
                favList.length === 0 ? (
                  <Grid sx={{ gridColumnStart: 1, gridColumnEnd: 5, justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }} >
                    <Typography component="h2" level="h2" sx={{ textAlign: 'center' }} >No tienes dentistas favoritos</Typography>
                    <Link to={routes.home }>
                      <CardSkeleton />
                    </Link>

                    </Box>
                  </Grid>
                ):(
                  favList.map(dentist => (

                    <Grid  key={dentist.id}>
                      <DentistCard dentist={dentist} toggleFavDentist={toggleFavDentist} isFavorite={isFavorite} />
                    </Grid>
                  )
                )
                
                
              )}
            </>
          )
        }
      </div>
     
    </>
  );
};

export default Favs;
