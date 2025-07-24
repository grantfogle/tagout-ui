import React, { useContext } from 'react'
import { AuthContext } from '../../../features/auth/components/AuthContextProvider'
import { Button } from '@mui/material'
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
                <Button variant="contained" size="small" color="inherit" sx={{ color: "#2c3e50", mr: 1, fontWeight: 600 }} onClick={logoutUser}>Sign out</Button>
            </>
        )
    }
    return (
        <>
            <Button color="inherit" sx={{ color: "#fff", mr: 1 }} onClick={navigateToLogin}>Log in</Button>
            <Button variant="contained" color="warning" onClick={navigateToSignUp}>Sign Up</Button>
        </>
    )
}

export default AuthButtons;