import './App.css';
import Login from './components/login.jsx';
import Register from './components/Register.jsx';
import HomePage from './components/HomePage.jsx';
import Dashboard from './admin/Dashboard.jsx';
import Buses from './admin/Buses.jsx';
import Drivers from './admin/Drivers.jsx';
import RoutesPage from './admin/Routes.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/*  */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bus-schedule" element={<HomePage />} />

          {/* Tracker routes */}
          <Route path="/" element={<Navigate to="/admin/dashboard" />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/buses" element={<Buses />} />
          <Route path="/admin/drivers" element={<Drivers />} />
          <Route path="/admin/routes" element={<RoutesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
