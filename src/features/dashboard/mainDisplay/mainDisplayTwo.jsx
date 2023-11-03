import React, { useContext } from 'react'
import { Box, Container, Table, TableContainer, TextField, Typography } from '@mui/material'

import { DashboardContext } from '../components/DashboardContextProvider'
import Navbar from '../../../components/navBar/NavBar'
import Search from '../search/Search'
import PopulationTable from '../dataTables/populationTable/PopulationTable'
import HarvestStatsTable from '../dataTables/harvestStatsTable/HarvestStatsTable'
import DrawOddsTable from '../dataTables/drawOddsTable/DrawOddsTable'
import OtcDisplay from '../otcDisplay/OtcDisplay'
import Footer from '../footer/Footer'
import { Button } from '@mui/material'
import { TextFieldsOutlined } from '@mui/icons-material'

// const 

export const MainDisplayTwo = () => {
    const {
        otcUnitStatus,
    } = useContext(DashboardContext)

    /* LOGIC TO DERIVE SEARCH
    * state, resident, draw type will be default
    * species will be conditional based on previous selection
    * gender will be conditional based on species selection, default to either
    * method will be conditional based on previous selection of species
    * season will be conditional based on previous selection
    * Default states for species,
    * 
    * workflow: user will select <state />
    * user will then select species based on their draw type, we will
    * then set the species state to the selected species
    */


    return (
        <Box sx={{ height: '100vh' }}>
            <Navbar />
            <Box maxWidth="lg" sx={{ marginBottom: '2em', minHeight: '800px' }}>
                <Typography variant="h4" sx={{ marginTop: '1em', marginBottom: '1em' }}>Colorado Big Game Draw Odds</Typography>
                <Container sx={{marginBottom: '2em'}}>
                    <TextField label="State" sx={{width: '120px'}}/>
                    <TextField label="Resident" sx={{width: '120px'}}/>
                    <TextField label="Draw Type" sx={{width: '120px'}} />
                    <TextField label="Species" sx={{width: '120px'}} disabled />
                    <TextField label="Gender" sx={{width: '120px'}} disabled />
                    <TextField label="Season" sx={{width: '120px'}} disabled/>
                    <TextField label="Method" sx={{width: '120px'}} disabled/>
                    {/* Change button color to orange */}
                    <Button variant="contained" sx={{backgroundColor: '#27ae60', width: '120px', height: '56px', marginRight: '1em'}} disabled>Submit</Button>
                </Container>

                <Box sx={{backgroundColor: '#27ae60', height: '60px'}}>
                    <Typography variant="h6">Filters</Typography>
                </Box>

                <TableContainer>
                    Please enter a search result
                </TableContainer>
            </Box>
            <Footer />
        </Box>
    )
}