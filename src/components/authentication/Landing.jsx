import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {auth, signInWithEmail, signInWithGoogle} from '../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { FormControl, Button } from '@mui/material';
// import ElkBg from '../../assets/bryon-johnson-elk-unsplash.jpg';

const Landing = () => {
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

    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundImage: 'url(https://images.unsplash.com/photo-1487213802982-74d73802997c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)', objectFit: 'cover'}}>
            {/* <Box
                component="img"
                src="https://images.unsplash.com/photo-1487213802982-74d73802997c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                sx={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover'
                }}
                alt="The house from the offer." /> */}
                <Container maxWidth="sm" sx={{height: '100%', backgroundColor: '#fff', margin: 0, padding: '2em'}}>
                    <Box mt={4} sx={{width: '420px', textAlign: 'center'}}>
                        <Typography mb={3} component="h1" variant="h2">TAGout</Typography>
                        <Typography mb={3}>Explore draw odds and success statistics for top hunting units around the Western US</Typography>
                        <FormControl>
                            <TextField id="password" label="Email" variant="outlined" />
                            <TextField id="email" label="Password" variant="outlined" />
                            <Button variant="text">Forgot Password?</Button>
                            <Button variant="contained" color="primary">Submit</Button>
                        </FormControl>
                    </Box>
                </Container>
        </Box>
    )
}

export default Landing;