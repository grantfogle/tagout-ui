import React, { useState, useEffect, useContext } from 'react'
import {
    Box,
    Typography,
    Tabs,
    Tab,
    Container
} from '@mui/material'
import Login from './logIn/LogIn'
import SignUp from './signUp/SignUp'
import { AuthContext } from '../components/AuthContextProvider'

const AuthForm = () => {
    const {
        submitLogin,
        submitNewUser,
        loginWithGoogle,
        authTabValue,
        setAuthTabValue,
    } = useContext(AuthContext)

    const handleTabChange = (event, newValue) => {
        setAuthTabValue(newValue);
    }

    const displayLoginForm = () => {
        return authTabValue === 'logIn' ?
            <Login /> :
            <SignUp />
    }

    return (
        <Container maxWidth="sm"
            sx={{
                backgroundColor: '#fff',
                borderRadius: "20px",
                mt: 10,
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>

            <Typography mb={3} component="h1" variant="h4">Welcome to Tagout</Typography>
            <Typography mb={3} component="h2" variant="h5">Sign in to continue</Typography>
            <Tabs sx={{ marginBottom: "1em" }} value={authTabValue}
                onChange={handleTabChange}
                aria-label="tagout login forms">
                <Tab value="logIn" label="Log In" />
                <Tab value="signUp" label="Sign Up" />
            </Tabs>
            {displayLoginForm()}
        </Container >

    )
}

export default AuthForm;