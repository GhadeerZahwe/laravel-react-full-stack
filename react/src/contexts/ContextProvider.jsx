import { createContext, useContext, useState } from "react";

 const StateContext = createContext({defaultValue:{
user:null,
token:null,
setUser:()=>{},
setToken:()=>{}
 }})

 export const ContextProvider = (children) => {
    const [user, setUser] = useState({initialState:{}});
    const [token, _setToken] = useState(localStorage.getItem({key:'ACCESS_TOKEN'}));

const setToken = (token) => {
    _setToken(token);
    if(token){
        localStorage.setItem('ACCESS_TOKEN',token);
    } else{
        localStorage.removeItem({key:'ACCESS_TOKEN'});
    }
}

    return(
        <StateContext.Provider Value={{
         user,
         token,
         setUser,
         setToken
        }}>
        {children}
        </StateContext.Provider>
    )
 }

 export const useStateContext=()=>useContext(StateContext)