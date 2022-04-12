import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import ElkBg from '../../assets/bryon-johnson-elk-unsplash.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Box sx={{width: '100%', height: '100vh'}}>
            {/* let's add a basic grid section 2/3 elk image 1/3 login till medium view */}
            <Grid container sx={{width: '100%', height: '100%'}}>
                <Grid item lg={8} md={12}>
                    <Box 
                        component="img"
                        src="https://images.unsplash.com/photo-1487213802982-74d73802997c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        sx={{
                            height: 'auto',
                            maxWidth: '100%',
                            objectFit: 'cover'
                        }}
                        alt="The house from the offer."
                    />
                </Grid>
                <Box item lg={6} md={2}>
                    {/* add form for signin */}
                    <h1>asdfaf</h1>
                </Box>
            </Grid>
            <Box sx={{}}></Box>
        </Box>
    )
}

export default Login;