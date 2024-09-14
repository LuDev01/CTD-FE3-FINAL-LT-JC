import { useEffect } from 'react'
import { useDentist } from "../hooks/useDentist";
import DentistCard from '../Components/Card';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/joy';
import { CardSkeleton } from '../Components/CardSkeleton';

const Detail = () => {


  const { id } = useParams();
  const { dentist, getDentistById, isLoading, clearDentist, toggleFavDentist, isFavorite } = useDentist();

  useEffect(() => {
    getDentistById(id);

    return () => {
      clearDentist();
    }
  }, [])



  return (
    <>
      <Typography component="h1" level="h1" sx={{ marginBottom: '20px' }} >Detail Dentist id: {id}</Typography>
      <Box sx={{ width: '100%', maxWidth: '520px', padding: '0 20px' }} >
        {isLoading ? (
          <CardSkeleton />
        ) : (
          <DentistCard dentist={dentist} toggleFavDentist={toggleFavDentist} isFavorite={isFavorite} details={true} />
        )}

      </Box>
      
    </>
  )
}

export default Detail