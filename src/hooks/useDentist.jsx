import axios from 'axios';
import { useDentistStates } from '../Components/utils/global.context';
import { useEffect, useState } from 'react';

export const useDentist = () => {
  
    //Context   
    const { state, dispatch } = useDentistStates();
    const [isLoading, setIsLoading] = useState(false);
    const [dentistData, setDentistData] = useState({});

    const setDentist = (dentist) => {
        dispatch({ type: '[Dentist] setDentist', payload: dentist });
    }

    const getDentist = ()=>{
        
        if (!state.data || state.data.length === 0) {
            setIsLoading(true);
        }
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(({data})=>{setDentist(data)}).catch(err=>{console.error(err)});

        setIsLoading(false);
    }

    const getDentistById = async (id) => {
        
        setIsLoading(true);
        
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(({data})=>{setDentistData(data)})
        .catch(err=>{console.error(err)});

        setIsLoading(false);
        
    }

    const clearDentist = () => {
        setDentistData({});
    }

    const getFavDentist=()=>{
        const favs= JSON.parse(localStorage.getItem('fav')) || []        
        return favs
    }

    const isFavorite=(dentist)=>{
       if(!dentist) return false
        const isFav=getFavDentist().some(item=>{
            return  item.id && item.id === dentist.id
        })

        return isFav
    }

    const toggleFavDentist=(dentist)=>{
        let newList=getFavDentist();
        
        if (isFavorite(dentist)){
            newList= newList.filter(item=>item.id  !== dentist.id)
        }
        else{
            newList =[...newList,dentist]
        }
        dispatch({type:'[Dentist] setFavs',payload:newList})
        localStorage.setItem('fav',JSON.stringify(newList))

    }



    useEffect(() => {
        getDentist();
        dispatch({type:'[Dentist] setFavs',payload:getFavDentist()})

        console.log("useeffect");

    }, [])
    

 
  
  
    return {
        
        dentistList: state.data,
        dentist: dentistData,
        getDentistById,
        clearDentist,
        isLoading,
        toggleFavDentist,
        favList: state.favs,
        isFavorite

    }
  
}
