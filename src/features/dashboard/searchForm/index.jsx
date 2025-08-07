import React, { useState, useEffect, useContext } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import NavBarTwo from '../../../components/navBar/NavBarTwo';
import SearchFormComponent from './searchFormComponent';

const SearchForm = () => {
    return (
        <>
        {/* // <Box> */}
            <NavBarTwo />
            {/* <Container sx={{minHeight: '80vh'}}> */}
                <Grid container sx={{ height: '100%' }} alignItems={'strech'}>
                    <Grid item xs={12} md={7} lg={8} sx={{paddingTop: '2em', paddingBottom: '2em', backgroundColor: '#f0f0f0'}}>
                        <Box sx={{width: '400px', textAlign: 'center'}}>
                            <Typography component='h1' variant='h3'>Draw Odds</Typography>
                            <Typography component='h2' variant='subtitle1'>Up to date draw odds for Western states</Typography>
                            <Typography component='p' variant='body'>We query state wildlife departments for up to date draw odds for Western States</Typography>

                            {/* <Typography component='p' variant='body'>We query state wildlife departments for up to date draw odds for Western States</Typography> */}
                        </Box>
                        {/* other header and text */}
                    </Grid>
                    <Grid item xs={12} md={5} lg={4} sx={{paddingBottom: '2em' }}>
                        <SearchFormComponent />
                        {/* import color from theme */}
                        {/* this will be a reusable component */}
                        
                        {/* search form goes here */}
                    </Grid>
                </Grid>
            {/* </Container> */}
        {/* // </Box> */}
        </>
    )
}

export default SearchForm;