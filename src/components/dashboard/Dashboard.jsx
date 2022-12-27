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
    const [showLoading, setShowLoading] = useState(false);
    const [showErrorLoading, setShowErrorLoading] = useState(false);
    const [species, setSpecies] = useState('');
    const [method, setMethod] = useState('')
    const [season, seatSeason] = useState('');
    const [unit, setUnit] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
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
        setShowLoading(true);
        setShowErrorLoading(false);
        const dbSnap = getDatabase();
        const starCountRef = ref(dbSnap, 'elkDrawStats/' + searchTerm);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log('DATAAAA', data)
            if (data) {
                setDisplayStats(data);
                setShowLoading(false);
            } else {
                setShowLoading(false);
                setShowErrorLoading(true);
            }
        }, error => {
            setShowLoading(false);
            setShowErrorLoading(true);
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

    const displayHuntCode = () => {
        if (searchStr.length > 0) {
            return <Typography sx={{marginTop: '1em', marginBottom: '1em'}} variant="h5" component="h5">Selected Code: {searchStr}</Typography>
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
                {displayHuntCode()}
                <DrawOdds displayStats={displayStats} showLoading={showLoading} showErrorLoading={showErrorLoading}/>
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