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
                <Grid item lg={8} md={8} sm={12}>
                    <Box 
                        component="img"
                        src="https://images.unsplash.com/photo-1487213802982-74d73802997c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        sx={{
                            height: '100%',
                            maxWidth: '100%',
                            objectFit: 'cover'
                        }}
                        alt="The house from the offer."
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={0}  sx={{width:'100%', height: '100%'}}>
                    {/* add form for signin */}
                    <Box sx={{width:'100%', height: '100%'}} bgcolor="#34495e">
                        asdfaf
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{}}></Box>
        </Box>
    )
}

export default Login;