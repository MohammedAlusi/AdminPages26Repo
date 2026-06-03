import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ activePage }) {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-circle">AP</div>
        <div className="logo-text">
          <p>Admin Panel</p>
          <span>AAU Tracker</span>
        </div>
      </div>
      <ul className="sidebar-menu">
        <li className={activePage === 'dashboard' ? 'active' : ''}>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li className={activePage === 'buses' ? 'active' : ''}>
          <Link to="/admin/buses">Buses</Link>
        </li>
        <li className={activePage === 'drivers' ? 'active' : ''}>
          <Link to="/admin/drivers">Drivers</Link>
        </li>
        <li className={activePage === 'routes' ? 'active' : ''}>
          <Link to="/admin/routes">Routes</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
