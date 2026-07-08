import React from 'react'
import useAuth from "../../hooks/useAuth.js"
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    const {user, loading} = useAuth();
    //check if loading is true
    if(loading) return <h1>Loading...</h1>
    //check if user is logged in or not 
    if(!user) return <Navigate to="/login" />
    return children
}

export default ProtectedRoute