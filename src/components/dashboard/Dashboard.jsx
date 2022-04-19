import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {auth, signInWithEmail, signInWithGoogle} from '../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Dashboard = () => {
    return (
        <Box>Welcome home</Box>
    )
}

export default Dashboard;