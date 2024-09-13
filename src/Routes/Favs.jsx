import React from "react";
import Card from "../Components/Card";
import { Grid, Typography } from "@mui/joy";
import { useDentist } from "../hooks/useDentist";
import { homeStyles } from "../utils/theme";
import { CardSkeleton } from "../Components/CardSkeleton";
import DentistCard from "../Components/Card";

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
              {favList.map(dentist => (

                <Grid  key={dentist.id}>
                  <DentistCard dentist={dentist} toggleFavDentist={toggleFavDentist} isFavorite={isFavorite} />
                </Grid>

              ))}
            </>
          )
        }
      </div>
     
    </>
  );
};

export default Favs;
