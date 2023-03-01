import React from 'react';
import { Box, TextField, FormControl, Button } from '@mui/material';

const Login = ({email, password, setEmail, setPassword, submitLogin, submitLoginWithGoogle}) => {
    return (
        <Box>
            <FormControl>
                <TextField sx={{marginBottom: '8px'}} id="password" label="Email" variant="outlined" 
                    onChange={event => setEmail(event.target.value)}/>
                <TextField sx={{marginBottom: '8px'}}  id="email" label="Password" variant="outlined"
                    onChange={event => setPassword(event.target.value)}/>
                {/* <Button variant="text">Forgot Password?</Button> */}
                <Button onClick={e => submitLogin()} variant="contained" color="primary">Submit</Button>
                <Button onClick={e => submitLoginWithGoogle()}>Login With Google</Button>
            </FormControl>
        </Box>
    );
}

export default Login;