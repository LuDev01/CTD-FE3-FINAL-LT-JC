import axios from 'axios';
import { useDentistStates } from '../Components/utils/global.context';
import { useEffect, useState } from 'react';

export const useDentist = () => {
  
    //Context   
    const { state, dispatch } = useDentistStates();
    const [isLoading, setIsLoading] = useState(false);


    const setDentist = (dentist) => {
        dispatch({ type: '[Dentist] setDentist', payload: dentist });
    }

    const getDentist = ()=>{
        
        if (!state.data || state.data.length === 0) {
            setIsLoading(true);
        }
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(data=>{setDentist(data)}).catch(err=>{console.error(err)});

        setIsLoading(false);

    }

    useEffect(() => {
    }, [])
    getDentist();
    

 
  
  
  
    return {
        dentistList: state.data,
        isLoading

    }
  
}
