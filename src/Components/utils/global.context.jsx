import { createContext, useEffect, useReducer,useContext } from "react";
import axios from "axios";

export const initialState = {theme: "", data: []}
const reducer = (state, action)=>{
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, data: action.payload };
    default:
      throw new Error("Acción no existente");
}
}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
const [state,dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(data=>{dispatch({type:"GET_DENTISTS", payload: data})
  
  });
   
  }, [])
  
  return (
    <ContextGlobal.Provider value={{state,dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
export const useDentistStates = () => useContext(ContextGlobal);