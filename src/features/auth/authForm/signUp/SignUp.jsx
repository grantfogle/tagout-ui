import React, { useContext } from 'react'
import { Box, TextField, FormControl, Button } from '@mui/material'
import { AuthContext } from '../../components/AuthContextProvider'

const SignUp = () => {
    const {
        setEmail,
        setPassword,
        loginWithGoogle,
        submitNewUser
    } = useContext(AuthContext)

    return (
        <Box>
            <FormControl>
                <TextField sx={{ marginBottom: "8px" }} id="password" label="Email" variant="outlined"
                    onChange={event => setEmail(event.target.value)} />
                <TextField sx={{ marginBottom: "8px" }} id="email" label="Password" variant="outlined"
                    onChange={event => setPassword(event.target.value)} />
                <Button onClick={submitNewUser} variant="contained" color="primary">Submit</Button>
                <Button onClick={loginWithGoogle}>Sign Up With Google</Button>
            </FormControl>
        </Box>
    );
}

export default SignUp