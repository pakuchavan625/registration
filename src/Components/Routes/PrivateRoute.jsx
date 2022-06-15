import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    const login= localStorage.getItem("login")
    if (login ==='true') {
        return <Navigate to={'/home'} />;
        }
      else {
        return <Navigate to={'/'} />;
    }
   
 
}

export default PrivateRoute