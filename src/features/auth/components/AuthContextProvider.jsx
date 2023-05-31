import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, logInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword, logout } from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export const AuthContext = createContext(null)

export const AuthContextProvider = ({ children }) => {
    const [user, loading, error] = useAuthState(auth)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [authTabValue, setAuthTabValue] = useState('signUp')

    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/')
        } else {
            navigate('/dashboard/colorado')
        }
    }, [user, loading])

    const submitLogin = () => {
        console.log(email, password)
        logInWithEmailAndPassword(email, password);
    }

    const submitNewUser = () => {
        registerWithEmailAndPassword(email, password);
    }

    const loginWithGoogle = () => {
        signInWithGoogle();
    }

    const navigateToLogin = () => {
        setAuthTabValue('logIn')
        navigate('/auth')
    }
    const navigateToSignUp = () => {
        setAuthTabValue('signUp')
        navigate('/auth')
    }

    const logoutUser = () => {
        const userAuthenticated = logout()
        if (!userAuthenticated) {
            navigate('/')
        }
    }

    const value = {
        user,
        authTabValue,
        setAuthTabValue,
        setEmail,
        setPassword,
        submitLogin,
        submitNewUser,
        loginWithGoogle,
        logoutUser,
        navigateToLogin,
        navigateToSignUp
    }

    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
}
