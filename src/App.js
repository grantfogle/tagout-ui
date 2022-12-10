import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Landing from './components/authentication/Landing';
import Dashboard from "./components/dashboard/Dashboard";
import Navigation from './components/navigation/Navigation';
import Home from './components/authentication/home/Home';

function App() {
  return (
    <div className="App">
      {/* <Navigation> */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing/>} />
            <Route exact path="/dashboard" element={<Dashboard/>} />
            <Route exact path="home" element={<Home/>} />
          </Routes>
        </Router>
      {/* </Navigation> */}
    </div>
  );
}

export default App;
