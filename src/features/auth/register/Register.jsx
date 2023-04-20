import React from 'react';
import { Box, TextField, FormControl, Button } from '@mui/material';

const Register = ({ email, password, setEmail, setPassword, submitNewUser, submitLoginWithGoogle }) => {
    return (
        <Box>
            <FormControl>
                <TextField sx={{ marginBottom: '8px' }} id="password" label="Email" variant="outlined"
                    onChange={event => setEmail(event.target.value)} />
                <TextField sx={{ marginBottom: '8px' }} id="email" label="Password" variant="outlined"
                    onChange={event => setPassword(event.target.value)} />
                <Button onClick={e => submitNewUser()} variant="contained" color="primary">Submit</Button>
                <Button onClick={e => submitLoginWithGoogle()}>Sign Up With Google</Button>
            </FormControl>
        </Box>
    );
}

export default Register;