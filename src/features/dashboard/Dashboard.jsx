import React, { useState, useEffect, useContext } from 'react'
import { DashboardContextProvider } from './components/DashboardContextProvider'
import { MainDisplay } from './mainDisplay/mainDisplay'
import { MainDisplayTwo } from './mainDisplay/mainDisplayTwo'

const Dashboard = () => {
    
    return (
        <DashboardContextProvider>
            {/* <MainDisplay/> */}
            <MainDisplayTwo/>
        </DashboardContextProvider>
    )
}

export default Dashboard