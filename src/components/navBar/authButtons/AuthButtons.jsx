import React, { useContext } from 'react'
import { AuthContext, AuthContextProvider } from '../../../features/auth/components/AuthContextProvider'
import { Button } from '@mui/material';
import { auth, logInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword, logout } from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'


const AuthButtons = () => {
    const [user] = useAuthState(auth)
    const {
        logoutUser
    } = useContext(AuthContext)

    if (user) {
        return (
            <>
                <Button color="inherit" sx={{ color: '#fff', mr: 1 }} onClick={logoutUser}>Sign out</Button>
            </>
        )
    }
    return (
        // check if auth
        // otherwise no auth
        <>
            <Button color="inherit" sx={{ color: '#fff', mr: 1 }}>Log in</Button>
            <Button variant="contained" color="warning">Sign Up</Button>
        </>
    )
}

export default AuthButtons;