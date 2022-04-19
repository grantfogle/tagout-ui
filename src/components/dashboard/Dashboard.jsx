import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {auth, signInWithEmail, signInWithGoogle} from '../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Dashboard = () => {
    const [season, setSeason] = useState('');
    const [method, setMethod] = useState('') 
    const [species, setSpecies] = useState('');
    const [unit, setUnit] = useState('');

    // error handling
    // ghost loading
    // dribbble mock https://dribbble.com/search/table
    return (
        <Box sx={{height: '100vh'}}>
            <Container maxWidth="lg">
                {/* <AppBar contains sign out and settings /> */}
                <Typography component="h1" variant="h3">Submit Form</Typography>
                {/* <DashboardSearch /> */}
                {/* <Display Graph for draw odds? /> */}
                {/* <Display Graph for draw odds? /> */}
            </Container>
        </Box>
    )
}

export default Dashboard;