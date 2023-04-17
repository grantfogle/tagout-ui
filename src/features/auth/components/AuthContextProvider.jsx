import React, {createContext, useContext, useState} from 'react'
import {logout} from '../../../firebase'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

export const AuthContext = createContext(null)

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [userAuthenticated, setUserAuthenticated] = useState(null)

    useEffect(() => {
        if (!userAuthenticated) {
            navigate('/')
        } else {
            navigate('/dashboard')
        }
    }, [userAuthenticated])

    // log in logic
    // sign in logic
    // log out logic

    const value = {
        user,
        setUser,
        userAuthenticated,
        setUserAuthenticated
    }

    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
}
