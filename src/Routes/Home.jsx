
import { Box, Grid, Typography } from '@mui/joy';
import { useDentist } from '../hooks/useDentist';
import { homeStyles } from '../utils/theme';
import DentistCard from '../Components/Card';
import { CardSkeleton } from '../Components/CardSkeleton';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { dentistList, isLoading, toggleFavDentist, isFavorite } = useDentist();

  

  return (
    <>    
      <Typography component="h1" level="h1">Home</Typography>
  
      <div className='grid-container' >
        {
          isLoading ? Array.from(Array(3)).map((_, index) => (
            <Grid size={{ sm: 12, md: 4 }} key={`skeleton-${index}`} >
              <CardSkeleton />
            </Grid>
          ))
           : (
            <>
              {dentistList.map(dentist => (

                <Grid key={dentist.id} size={{ sm: 12, md: 4 }}>
                  <DentistCard dentist={dentist} toggleFavDentist={toggleFavDentist} isFavorite={isFavorite} />
                </Grid>

              ))}
            </>
          )
        }
      </div>
    </>
  )
}

export default Home