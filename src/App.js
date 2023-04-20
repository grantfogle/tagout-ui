import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import './App.css';
import { theme } from './theme'

import Landing from './features/auth/Landing'
import LandingTwo from './features/auth/LandingTwo'
import Dashboard from './features/dashboard/Dashboard'
import AuthForm from './features/auth/authForm/AuthForm'
import Welcome from './features/auth/components/welcome/Welcome'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/landing" element={<LandingTwo />}>
              <Route path="welcome" element={<Welcome />} />
              <Route path="auth" element={<AuthForm />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
