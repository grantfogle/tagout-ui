import React, {useState, useEffect} from 'react';
import {Box, Button, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material';


const Home = () => {
    return (
        <Box>
            <Typography variant="p">
                Tagout is a total hunt planning tool. Covers draw odds, provides info on hunting units, and more.
                Free 7 day trial with any membership.
            </Typography>

            <TableContainer component={Paper} variant="outline">
                <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Features</TableCell>
                            <TableCell>Free Version</TableCell>
                            <TableCell>Premium</TableCell>
                            <TableCell>Premium+</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>
                            <TableCell>Unit Stats</TableCell>
                            <TableCell>Yes</TableCell>
                            <TableCell>Yes</TableCell>
                            <TableCell>Yes</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Draw Odds</TableCell>
                            <TableCell>x</TableCell>
                            <TableCell>Yes</TableCell>
                            <TableCell>Yes</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>States</TableCell>
                            <TableCell>One</TableCell>
                            <TableCell>One</TableCell>
                            <TableCell>All</TableCell>
                        </TableRow>

                        {/* <TableRow>
                            <TableCell>Track Preference Points</TableCell>
                            <TableCell>x</TableCell>
                            <TableCell>Yes</TableCell>
                            <TableCell>Yes</TableCell>
                        </TableRow> */}

                        <TableRow>
                            <TableCell>Price</TableCell>
                            <TableCell>Free</TableCell>
                            <TableCell>$19 year ($9 month)</TableCell>
                            <TableCell>$39 year ($19 month)</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell><Button size="medium" variant="contained" color="info">Sign Up</Button></TableCell>
                            <TableCell><Button size="medium" variant="contained" color="warning">Sign Up</Button></TableCell>
                            <TableCell><Button size="medium" variant="contained" color="success">Sign Up</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Home;