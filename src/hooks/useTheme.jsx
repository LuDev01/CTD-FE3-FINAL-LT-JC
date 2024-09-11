import { useColorScheme } from "@mui/joy";
import { useDentistStates } from "../Components/utils/global.context"
import { useEffect } from "react";
import theme from "../utils/theme";

export const useTheme = () => {

    //Variables   
    const { state, dispatch } = useDentistStates();
    const { systemMode, setMode } = useColorScheme();
    const initialTheme = localStorage.getItem("theme") || systemMode

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
        setTheme



    }


}
