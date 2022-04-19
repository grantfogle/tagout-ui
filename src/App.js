import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Landing from './components/authentication/Landing';
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
