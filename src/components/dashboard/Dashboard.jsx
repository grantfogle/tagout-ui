import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {auth, signInWithEmail, signInWithGoogle, logout, fetchDrawStats, db, app} from '../../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import { ref, getDatabase } from 'firebase/database';
import { useList, useListVals } from 'react-firebase-hooks/database';
import {Box, Typography, Container} from '@mui/material';

import Navbar from './navbar/Navbar';
import DashboardSearch from './dashboardSearch/DashboardSearch';
import DrawOdds from './drawOdds/DrawOdds';

const database = getDatabase(app);

const Dashboard = () => {
    const [results, setResults] = useState('');
    // const [snapshots, loading, error] = useList(ref(database, 'elkDrawStats'));
    const [values, loading, error] = useListVals(ref(database, 'elkDrawStats/EE001E1R'));


    useEffect(() => {
        // console.log(snapshots, loading, error)
        console.log(values)
    }, [values])

    const fetchSearchResults = async (searchStr) => {
        // useListVals(ref(database, `elkDrawStats/${searchStr}`))
        // console.log('dasbhoard', searchStr);
        // const drawStats = await fetchDrawStats(searchStr);
        // console.log('drawStats', drawStats);
        // db.ref(`elkDrawStats/${searchStr}`);
        // get 
        // make call for db
        // start at elkDataStats, unit
        // const drawStats = fetchDrawStats();

        // if (drawStats) {
        //     setResults(drawStats)
        // }
    }

    // make call for firebase elk stats

    // check auth state, if !user false then navigate back to home page
    // error handling
    // ghost loading
    // dribbble mock https://dribbble.com/search/table
    return (
        <Box sx={{height: '100vh'}}>
            <Navbar logout={logout}/>
            <Container maxWidth="lg">
                <DashboardSearch fetchSearchResults={fetchSearchResults} />
                <DrawOdds searchResults={values} />
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