import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRouting = ( {children} ) => {

    const isLogged = localStorage.getItem('isLogged') === 'true' ; 

    if( !isLogged ){
        return <Navigate to='/login' />
    }

    return children ; 

}; 

export default ProtectedRouting
