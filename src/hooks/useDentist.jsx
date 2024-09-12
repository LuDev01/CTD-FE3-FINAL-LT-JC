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
        .then(({data})=>{setDentist(data)}).catch(err=>{console.error(err)});

        setIsLoading(false);

    }

    const getFavDentist=()=>{
        const favs= JSON.parse(localStorage.getItem('fav')) || []        
        return favs
    }

    const isFavorite=(dentist)=>{
       if(!dentist) return false
        const isFav=getFavDentist().some(item=>{
            console.log('item id:',item.id);
            console.log('dentist id:',dentist.id);
            return  item.id && item.id === dentist.id
        })
     
        
        console.log('is fav:',isFav);
        
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
    }, [])
    

 
  
  
    return {
        dentistList: state.data,
        isLoading,
        toggleFavDentist,
        favList:state.favs,
        isFavorite
    }
  
}
