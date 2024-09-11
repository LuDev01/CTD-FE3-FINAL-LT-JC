import { useColorScheme } from "@mui/joy";
import { useDentistStates } from "../Components/utils/global.context"
import { useEffect } from "react";


export const useTheme = () => {

    //Context   
    const { state, dispatch } = useDentistStates();
    const { systemMode, setMode } = useColorScheme();
    

    //Métodos
    const setTheme = (theme) => {
        dispatch({ type: '[Theme] setTheme', payload: theme });
        localStorage.setItem('theme', theme);
        setMode(theme);
    }


    useEffect(() => {
        const initialTheme = localStorage.getItem("theme") || systemMode || "light";
        setTheme(initialTheme);

    }, [])


    return {
        currentTheme: state.theme,
        isDark: state.theme === 'dark',
        setTheme

    }


}
