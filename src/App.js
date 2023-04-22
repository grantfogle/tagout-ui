import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import './App.css'
import { theme } from './theme'
import { AuthContextProvider } from './features/auth/components/AuthContextProvider'
import Landing from './features/auth/Landing'
import Dashboard from './features/dashboard/Dashboard'
import AuthForm from './features/auth/authForm/AuthForm'
import Welcome from './features/auth/components/welcome/Welcome'

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Router>
          <AuthContextProvider>
            <Routes>
              <Route path="/" element={<Landing />}>
                <Route path="" element={<Welcome />} />
                <Route path="auth" element={<AuthForm />} />
              </Route>
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Routes>
          </AuthContextProvider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App
