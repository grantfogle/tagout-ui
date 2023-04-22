import React, { useState, useEffect, useContext } from 'react'
import { auth, logInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword } from '../../../firebase'
import {
    Box,
    Typography,
    Tabs,
    Tab,
    Container
} from '@mui/material'
import Login from '../login/Login'
import Register from '../register/Register'
import { AuthContext } from '../components/AuthContextProvider'

const AuthForm = () => {
    const {
        submitLogin,
        submitNewUser,
        loginWithGoogle,
    } = useContext(AuthContext)
    const [loginTabValue, setLoginTabValue] = useState('register')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // import context
    // handle sign in logic there
    // submit login
    // submit new user
    // submit login with google (other auth providers?)
    // loading, error...?
    // const submitLogin = () => {
    //     logInWithEmailAndPassword(email, password);
    // }

    // const submitNewUser = () => {
    //     registerWithEmailAndPassword(email, password);
    // }

    // const submitLoginWithGoogle = () => {
    //     signInWithGoogle();
    // }

    const handleTabChange = (event, newValue) => {
        setLoginTabValue(newValue);
    }

    const displayLoginForm = () => {
        return loginTabValue === 'login' ?
            <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} submitLogin={submitLogin} submitLoginWithGoogle={loginWithGoogle} /> :
            <Register email={email} setEmail={setEmail} password={password} setPassword={setPassword} submitNewUser={submitNewUser} submitLoginWithGoogle={loginWithGoogle} />
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
            {/* <Box mt={4} sx={{ width: '100%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}> */}

            <Typography mb={3} component="h1" variant="h4">Welcome to Tagout</Typography>
            <Typography mb={3} component="h2" variant="h5">Sign in to continue</Typography>
            {/* <Typography mb={3} sx={{textAlign: "center"}}>Explore draw odds and success statistics for top hunting units around the Western US</Typography> */}
            <Tabs sx={{ marginBottom: "1em" }} value={loginTabValue}
                onChange={handleTabChange}
                aria-label="tagout login forms">
                <Tab value="login" label="Log In" />
                <Tab value="register" label="Sign Up" />
            </Tabs>
            {displayLoginForm()}
            {/* </Box> */}
        </Container >

    )
}

export default AuthForm;