import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmail, signInWithGoogle, logout } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getDatabase, ref, onValue} from "firebase/database";
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, getDocs } from 'firebase/firestore';

import { db, rtDb } from '../../firebase/config';
import { Box, Typography, Container } from '@mui/material';

import Navbar from './navbar/Navbar';
import DashboardSearch from './dashboardSearch/DashboardSearch';
import DrawOdds from './drawOdds/DrawOdds';
import { display } from '@mui/system';

const Dashboard = () => {
    const [searchStr, setSearchStr] = useState('EE001E1R');
    const [displayStats, setDisplayStats] = useState('');
    const [species, setSpecies] = useState('');
    const [method, setMethod] = useState('')
    const [season, seatSeason] = useState('');
    const [unit, setUnit] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // fetchDrawData();
        fetchDbDrawData(searchStr);
    }, [searchStr]);

    const fetchDrawData = async () => {
        const snap = await getDoc(doc(db, 'co-elk-stats', searchStr));
        const data = snap.data();
        setDisplayStats(data);
        console.log(displayStats)
    }

    const fetchSearchResults = (searchTerm) => {
        fetchDbDrawData(searchTerm)
    }

    const fetchDbDrawData = async (searchTerm) => {
        const dbSnap = getDatabase();
        const starCountRef = ref(dbSnap, 'elkDrawStats/' + searchTerm);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setDisplayStats(data);
        });
    }

    const updateSearchStr = (updatedStr) => {
        setSearchStr(updatedStr);
    }

    const logoutUser = () => {
        const userAuthenticated = logout();
        if (!userAuthenticated) {
            navigate('/');
        }
    }
    // check auth state, if !user false then navigate back to home page
    // error handling
    // ghost loading
    // dribbble mock https://dribbble.com/search/table
    return (
        <Box sx={{ height: '100vh' }}>
            <Navbar logoutUser={logoutUser} />
            <Container maxWidth="lg">
                <DashboardSearch fetchSearchResults={fetchSearchResults}/>
                <DrawOdds displayStats={displayStats} />
                {/* <AppBar contains sign out and settings /> */}
                {/* <DashboardSearch /> */}
                {/* <Display Graph for draw odds? /> */}
                {/* <Display Graph for draw odds? /> */}
                {/* < PreferencePointsMap /> */}
            </Container>
        </Box>
    )
}

export default Dashboard;