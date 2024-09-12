import { createContext, useEffect, useReducer,useContext } from "react";
import axios from "axios";

export const initialState = {theme: "", data: [], favs:[]}

const reducer = (state, action)=>{
  switch (action.type) {
    case "[Dentist] setDentist":
      return { ...state, data: action.payload };
    case "[Dentist] setFavs":
      return { ...state, favs: action.payload };

      case "[Theme] setTheme":
        return { ...state, theme: action.payload };



    default:
      throw new Error("Acción no existente");
}
}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
const [state,dispatch] = useReducer(reducer, initialState)


  return (
    <ContextGlobal.Provider value={{state,dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
export const useDentistStates = () => useContext(ContextGlobal);