import React, { useState, useEffect, useContext } from 'react'
import { DashboardContextProvider } from './components/DashboardContextProvider'
import { MainDisplay } from './mainDisplay/mainDisplay'
import { MainDisplayTwo } from './mainDisplay/mainDisplayTwo';
import SearchForm from './searchForm';

const Dashboard = () => {
    return (
        <DashboardContextProvider>
            {/* user navbar */}
            {/* <MainDisplay/> */}
            {/* <MainDisplayTwo/> */}
            {/* Landing */}
            <SearchForm />
        </DashboardContextProvider>
    )
}

export default Dashboard