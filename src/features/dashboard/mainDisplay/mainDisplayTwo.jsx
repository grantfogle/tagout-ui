import React, { useContext, useState } from 'react'
import { Box } from '@mui/material';

import { DashboardContext } from '../components/DashboardContextProvider'
import Navbar from '../../../components/navBar/NavBar'
import Footer from '../footer/Footer'
import { MultiStateSearch } from '../search/MultiStateSearch'
import { MultiUnitTable } from '../dataTables/multiUnitTable/MultiUnitTable'
import { FilterBar } from '../dataTables/filterBar/FilterBar';

// const 

export const MainDisplayTwo = () => {
    const {
        otcUnitStatus,
    } = useContext(DashboardContext)

    const { state, setState } = useState('CO')

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
                <MultiStateSearch />
                <MultiUnitTable />
                <FilterBar />
            </Box>
            <Footer />
        </Box>
    )
}