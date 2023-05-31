import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import './App.css'
import { theme } from './theme'
import { AuthContextProvider } from './features/auth/components/AuthContextProvider'
import Landing from './features/auth/Landing'
import Dashboard from './features/dashboard/Dashboard'
import AuthForm from './features/auth/authForm/AuthForm'
import Welcome from './features/auth/components/welcome/Welcome'
import ColoradoDashboard from './features/dashboard/components/hubs/colorado/ColoradoDashboard'
import WyomingDashboard from './features/dashboard/components/hubs/wyoming/WyomingDashboard'

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Router>
          <AuthContextProvider>
            <Routes>
              <Route path="dashboard" element={<Dashboard />} >
                <Route path="colorado" element={<ColoradoDashboard />} />
                <Route path="wyoming" element={<WyomingDashboard />} />
              </Route>
              <Route exact path="/" element={<Landing />}>
                <Route path="" element={<Welcome />} />
                <Route path="auth" element={<AuthForm />} />
              </Route>
            </Routes>
          </AuthContextProvider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App
