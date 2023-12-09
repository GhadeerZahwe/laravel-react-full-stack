import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'

export default function GuestLayout() {
    const{token}=useStateContext();
    //if user is authenticated and trying to open login or signup
if(token){
    return (<Navigate to="/"/>);
}
  return (
    <div className='login-signup-form animated fadeInDown'>
     <div className='form'>
        <Outlet/>
    </div>
    </div>
  )
}
