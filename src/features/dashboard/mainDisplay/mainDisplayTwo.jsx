import React, { useContext } from 'react'
import { 
    Box,
    Container,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    Paper,
    TextField,
    Typography,
    Toolbar, 
    AppBar} from '@mui/material'

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

    const mockUnits = [
        { 
            state: 'CO',
            code: 'EE001O1R', 
            unit: '001', 
            season: '01', 
            resident: 'resident',
            sex: 'either',
            method: 'rifle',
            drawStats: [
                { firstChoice: [{points: 1, applicants: 10, success: 10, successRatio: 1}, {points: 0, applicants: 100, success: 20, successRatio: .2}] },
                { secondChoice: [{applicants: 10, success: 10, successRatio: 1}] },
                { thirdChoice: [{applicants: 10, success: 10, successRatio: 1}] },
            ],
            harvestStats: {
                malesKilled: 5,
                femalesKilled: 10,
                totalKilled: 15,
                hunters: 100,
                successRatio: .15
            },
            populationStats: {
                males: 100,
                females: 10000,
                maleFemaleRatio: .1
            }
         },
    ]


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
                    <Button variant="contained" sx={{backgroundColor: '#27ae60', width: '120px', height: '56px', marginRight: '1em'}} disabled>Submit</Button>
                </Container>
                <Container>
                    <Paper sx={{ width: '100%', marginTop: '2em' }}>
                        <TableContainer>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Hunt Code</TableCell>
                                        <TableCell>Units</TableCell>
                                        <TableCell>Draw Stats</TableCell>
                                        {/* Dynamic <TableCell>1st Choice</TableCell> */}
                                        {/* <TableCell>2nd Choice</TableCell>
                                        <TableCell>3rd Choice</TableCell> */}
                                        <TableCell>Harvest Stats</TableCell>
                                        {/* total killed (either, male, female), total hunters */}
                                        <TableCell>Population Stats</TableCell>
                                        {/* Male::Female Ratio */}
                                        {/* Male::Female Ratio */}
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Container>

                <AppBar position="fixed" sx={{ top: 'auto', backgroundColor: '#fff', bottom: 0, height: '60px', borderTop: '2px solid #f39c12' }}>
                    <Toolbar>
                        <Typography variant="h6">Filters</Typography>
                        {/* draw choice (1st/2nd/3rd) */}
                        {/* preference points: both max pts and draw percentage */}
                        {/* success rates: slider (0-100%) */}
                        {/* male::female ratio */}
                    </Toolbar>
                </AppBar>
            </Box>
            <Footer />
        </Box>
    )
}