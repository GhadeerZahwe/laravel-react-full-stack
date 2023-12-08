import { createContext, useState } from "react";

 const StateContext = createContext({defaultValue:{
currentUser:null,
token:null
 }})

 export const ContextProvider = (children) => {
    const [user, setUser] = useState({initialState:{}});
    const [token, _setToken] = useState({initialState:null});

const setToken = (token) => {
    _setToken(token);
}

    return(
        <StateContext.Provider Value={{

        }}>

        </StateContext.Provider>
    )
 }