import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useHistory} from 'react-router-dom';
import {auth, logInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword} from '../../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { FormControl, Button, Tabs, Tab } from '@mui/material';
import Login from './login/Login';
import Register from './register/Register';

const LandingTwo = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        }}>
            cats
        </Box>
    )
}

export default LandingTwo