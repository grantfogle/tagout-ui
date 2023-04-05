import React, { useState, useEffect, useContext } from 'react'
import { DashboardContextProvider } from './components/DashboardContextProvider'
import { MainDisplay } from './mainDisplay/mainDisplay'

const Dashboard = () => {
    
    return (
        <DashboardContextProvider>
            <MainDisplay/>
        </DashboardContextProvider>
    )
}

export default Dashboard