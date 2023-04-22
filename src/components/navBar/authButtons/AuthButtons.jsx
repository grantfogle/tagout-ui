import React, { useContext } from 'react'
import { AuthContext, AuthContextProvider } from '../../../features/auth/components/AuthContextProvider'
import { Button } from '@mui/material';
import { auth } from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


const AuthButtons = () => {
    const [user] = useAuthState(auth)
    const {
        logoutUser,
        navigateToLogin,
        navigateToSignUp
    } = useContext(AuthContext)

    if (user) {
        return (
            <>
                <Button color="inherit" sx={{ color: '#fff', mr: 1 }} onClick={logoutUser}>Sign out</Button>
            </>
        )
    }
    return (
        <>
            <Button color="inherit" sx={{ color: '#fff', mr: 1 }} onClick={navigateToLogin}>Log in</Button>
            <Button variant="contained" color="warning" onClick={navigateToSignUp}>Sign Up</Button>
        </>
    )
}

export default AuthButtons;