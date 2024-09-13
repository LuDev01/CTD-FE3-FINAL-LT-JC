import { useEffect } from 'react'
import { useDentist } from "../hooks/useDentist";
import DentistCard from '../Components/Card';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/joy';

const Detail = () => {
 
  
  const {id} = useParams();
  const {  dentist, getDentistById, isLoading, clearDentist, toggleFavDentist, isFavorite } = useDentist();

  console.log(dentist.company);

  useEffect(() => {
    getDentistById(id);
  
    return () => {
      clearDentist();
    }
  }, [])
  
  

  return (
    <>
      <Typography component="h1" level="h1" sx={{ marginBottom: '20px' }} >Detail Dentist id: {id}</Typography>
      
      <DentistCard dentist={dentist} toggleFavDentist={toggleFavDentist} isFavorite={isFavorite} details={true} />
      
    </>
  )
}

export default Detail