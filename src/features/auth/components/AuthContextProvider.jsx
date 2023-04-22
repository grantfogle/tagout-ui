import React, { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, logInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword, logout } from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export const AuthContext = createContext(null)

export const AuthContextProvider = ({ children }) => {
    // const [user, setUser] = useState(null)
    // const [userAuthenticated, setUserAuthenticated] = useState(null)
    // hold email password here
    // also hold value for form
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/landing')
        } else {
            navigate('/dashboard')
        }
    }, [user, loading])

    // log in logic
    const submitLogin = (email, password) => {
        logInWithEmailAndPassword(email, password);
    }

    // sign up logic
    const submitNewUser = (email, password) => {
        registerWithEmailAndPassword(email, password);
    }

    const loginWithGoogle = () => {
        signInWithGoogle();
    }

    // log out logic
    const logoutUser = () => {
        const userAuthenticated = logout()
        if (!userAuthenticated) {
            navigate('/')
        }
    }

    const value = {
        user,
        submitLogin,
        submitNewUser,
        loginWithGoogle,
        logoutUser
    }

    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
}
