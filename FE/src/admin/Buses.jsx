import React, { useState } from 'react';
import Sidebar from '../components/tracker/Sidebar.jsx';
import Topbar from '../components/tracker/Topbar.jsx';
import Modal from '../components/tracker/Modal.jsx';
import { buses as initialBuses } from '../data/data.js';

function Buses() {
  var [buses, setBuses] = useState(initialBuses);
  var [showModal, setShowModal] = useState(false);
  var [modalTitle, setModalTitle] = useState('Add Bus');
  var [editIndex, setEditIndex] = useState(-1);
  var [number, setNumber] = useState('');
  var [route, setRoute] = useState('');
  var [driver, setDriver] = useState('');
  var [status, setStatus] = useState('active');

  function openAddModal() {
    setModalTitle('Add Bus');
    setEditIndex(-1);
    setNumber('');
    setRoute('');
    setDriver('');
    setStatus('active');
    setShowModal(true);
  }

  function openEditModal(index) {
    setModalTitle('Edit Bus');
    setEditIndex(index);
    setNumber(buses[index].number);
    setRoute(buses[index].route);
    setDriver(buses[index].driver);
    setStatus(buses[index].status);
    setShowModal(true);
  }

  function saveBus() {
    if (number === '' || route === '' || driver === '') {
      alert('Please fill in all fields.');
      return;
    }

    var newBus = { number: number, route: route, driver: driver, status: status };
    var updatedBuses = [...buses];

    if (editIndex === -1) {
      updatedBuses.push(newBus);
    } else {
      updatedBuses[editIndex] = newBus;
    }

    setBuses(updatedBuses);
    setShowModal(false);
  }

  return (
    <div className="layout">
      <Sidebar activePage="buses" />
      <div className="main">
        <Topbar title="Buses" />
        <div className="content">
          <div className="card">

            <div className="card-header">
              <h3>Bus Management</h3>
              <button className="btn-add" onClick={openAddModal}>+ Add Bus</button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Bus Number</th>
                  <th>Route</th>
                  <th>Driver</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {buses.map(function(bus, index) {
                  return (
                    <tr key={index}>
                      <td><span className="bus-number">{bus.number}</span></td>
                      <td><span className="route-name">{bus.route}</span></td>
                      <td>{bus.driver}</td>
                      <td>
                        <span className={bus.status === 'active' ? 'badge-active' : 'badge-inactive'}>
                          {bus.status}
                        </span>
                      </td>
                      <td>
                        <button className="btn-edit" onClick={function() { openEditModal(index); }}>
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        title={modalTitle}
        onClose={function() { setShowModal(false); }}
        onSave={saveBus}
      >
        <div className="form-group">
          <label>Bus Number</label>
          <input
            type="text"
            placeholder="e.g. AAU-104"
            value={number}
            onChange={function(e) { setNumber(e.target.value); }}
          />
        </div>
        <div className="form-group">
          <label>Route</label>
          <input
            type="text"
            placeholder="e.g. 7th Circle - AAU"
            value={route}
            onChange={function(e) { setRoute(e.target.value); }}
          />
        </div>
        <div className="form-group">
          <label>Driver</label>
          <input
            type="text"
            placeholder="e.g. Ahmad Al-Masri"
            value={driver}
            onChange={function(e) { setDriver(e.target.value); }}
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select value={status} onChange={function(e) { setStatus(e.target.value); }}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </Modal>

    </div>
  );
}

export default Buses;
