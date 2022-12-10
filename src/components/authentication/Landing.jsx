import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useHistory} from 'react-router-dom';
import {auth, logInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword} from '../../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

import Home from './home/Home';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { FormControl, Button, Tabs, Tab } from '@mui/material';
import Login from './login/Login';
import Register from './register/Register';
// import ElkBg from '../../assets/bryon-johnson-elk-unsplash.jpg';
// source for login -> https://blog.logrocket.com/user-authentication-firebase-react-apps/

const Landing = () => {
    const [loginTabValue, setLoginTabValue] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            // trigger loading screen
            return;
        }
        if (user) navigate('/dashboard');
    }, [user, loading]);

    const handleTabChange = (event, newValue) => {
        setLoginTabValue(newValue);
    }

    const displayLoginForm = () => {
        return loginTabValue === 'login' ? 
            <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} submitLogin={submitLogin} submitLoginWithGoogle={submitLoginWithGoogle}/> :
            <Register email={email} setEmail={setEmail} password={password} setPassword={setPassword} submitNewUser={submitNewUser} submitLoginWithGoogle={submitLoginWithGoogle}/>
    }

    const submitLogin = () => {
        logInWithEmailAndPassword(email, password);
    }
    
    const submitNewUser = () => {
        registerWithEmailAndPassword(email, password);
    }

    const submitLoginWithGoogle = () => {
        signInWithGoogle();
    }

    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundImage: 'url(https://images.unsplash.com/photo-1487213802982-74d73802997c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)', objectFit: 'cover'}}>

            <Container sx={{marginLeft: '4em'}}>
                <Home/>
            </Container>

            <Container maxWidth="sm" sx={{height: '100%', backgroundColor: '#fff', margin: 0, padding: '2em', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Box mt={4} sx={{width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography mb={3} component="h1" variant="h2">TAGout</Typography>
                    <Typography mb={3} sx={{textAlign: 'center'}}>Explore draw odds and success statistics for top hunting units around the Western US</Typography>
                    <Tabs sx={{marginBottom: '1em'}} value={loginTabValue}
                        onChange={handleTabChange}
                        aria-label="tagout login forms">
                            <Tab value="login" label="Log In" />
                            <Tab value="register" label="Sign Up" />
                        </Tabs>
                        {displayLoginForm()}
                    </Box>
                </Container>
            </Box>
    )
}

export default Landing;