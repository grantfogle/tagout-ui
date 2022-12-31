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
import PopulationTable from './dataTables/populationTable/PopulationTable';
import DrawOdds from './dataTables/drawOddsTable/DrawOdds';
import Footer from './footer/Footer';
import { display } from '@mui/system';

const Dashboard = () => {
    const [searchStr, setSearchStr] = useState('EE001E1R');
    const [displayStats, setDisplayStats] = useState('');
    const [populationStats, setPopulationStats] = useState('')
    const [showLoading, setShowLoading] = useState(false);
    const [showErrorLoading, setShowErrorLoading] = useState(false);
    const [species, setSpecies] = useState('');
    const [method, setMethod] = useState('')
    const [season, seatSeason] = useState('');
    const [unit, setUnit] = useState('1');
    const navigate = useNavigate();

    useEffect(() => {
        fetchDbDrawData(searchStr);
    }, [searchStr]);

    const fetchSearchResults = (searchTerm, selectedUnit) => {
        const currentUnit = parseInt(selectedUnit)
        fetchDbDrawData(searchTerm, currentUnit)
    }

    const fetchDbDrawData = async (searchTerm, selectedUnit) => {
        setShowLoading(true)
        setShowErrorLoading(false)
        const dbSnap = getDatabase()
        const drawStatsRef = ref(dbSnap, 'colorado/drawStats/elk/' + searchTerm)
        const populationStatsRef = ref(dbSnap, 'colorado/populationStats/elk/' + unit)
    
        onValue(drawStatsRef, (snapshot) => {
            const data = snapshot.val()
            console.log('draw stats', data)
            if (data) {
                setDisplayStats(data)
                setShowLoading(false)
            } else {
                setShowLoading(false)
                setShowErrorLoading(true)
            }
        }, error => {
            setShowLoading(false);
            setShowErrorLoading(true)
        });

        onValue(populationStatsRef, (snapshot) => {
            const data = snapshot.val()
            console.log('pop stats', data)
            if (data) {
                setPopulationStats(data);
            }
            // } else {
                // setShowLoading(false);
                // setShowErrorLoading(true);
            // }
        }, error => {
            setShowLoading(false)
            setShowErrorLoading(true)
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
            {/* <AppBar contains sign out and settings /> */}
            <Navbar logoutUser={logoutUser} />
            <Container maxWidth="lg" sx={{ marginBottom: '2em'}}>
                <DashboardSearch fetchSearchResults={fetchSearchResults}/>
                <PopulationTable sx={{ marginBottom: '1em'}} populationStats={populationStats} showLoading={showLoading} showErrorLoading={showErrorLoading}/>
                <DrawOdds displayStats={displayStats} showLoading={showLoading} showErrorLoading={showErrorLoading}/>
            </Container>
            <Footer/>
        </Box>
    )
}

export default Dashboard;