import { createContext, useReducer,useContext } from "react";
import { reducer } from "./reducer";


export const initialState = {theme: "", data: [], favs:[]}

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