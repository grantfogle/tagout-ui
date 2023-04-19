import React, { useState, useEffect, useContext } from 'react'
import { auth, logInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword } from '../../../firebase'
import {
    Box,
    Typography,
    Tabs,
    Tab
} from '@mui/material'
import Login from '../login/Login'
import Register from '../register/Register'

const AuthForm = () => {
    const [loginTabValue, setLoginTabValue] = useState('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // import context
    // handle sign in logic there
    // submit login
    // submit new user
    // submit login with google (other auth providers?)
    // loading, error...?
    const submitLogin = () => {
        logInWithEmailAndPassword(email, password);
    }

    const submitNewUser = () => {
        registerWithEmailAndPassword(email, password);
    }

    const submitLoginWithGoogle = () => {
        signInWithGoogle();
    }

    const handleTabChange = (event, newValue) => {
        setLoginTabValue(newValue);
    }

    const displayLoginForm = () => {
        return loginTabValue === 'login' ?
            <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} submitLogin={submitLogin} submitLoginWithGoogle={submitLoginWithGoogle} /> :
            <Register email={email} setEmail={setEmail} password={password} setPassword={setPassword} submitNewUser={submitNewUser} submitLoginWithGoogle={submitLoginWithGoogle} />
    }

    return (
        <Box mt={4} sx={{ width: "400px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Typography mb={3} component="h1" variant="h3">Welcome to Tagout, sign in to continue.</Typography>
            {/* <Typography mb={3} sx={{textAlign: "center"}}>Explore draw odds and success statistics for top hunting units around the Western US</Typography> */}
            <Tabs sx={{ marginBottom: "1em" }} value={loginTabValue}
                onChange={handleTabChange}
                aria-label="tagout login forms">
                <Tab value="login" label="Log In" />
                <Tab value="register" label="Sign Up" />
            </Tabs>
            {displayLoginForm()}
        </Box>
    )
}

export default AuthForm;