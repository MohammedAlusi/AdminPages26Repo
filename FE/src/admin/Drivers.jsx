import React, { useState } from 'react';
import Sidebar from '../components/tracker/Sidebar.jsx';
import Topbar from '../components/tracker/Topbar.jsx';
import Modal from '../components/tracker/Modal.jsx';
import { drivers as initialDrivers } from '../data/data.js';

function Drivers() {
  var [drivers, setDrivers] = useState(initialDrivers);
  var [showModal, setShowModal] = useState(false);
  var [modalTitle, setModalTitle] = useState('Add Driver');
  var [editIndex, setEditIndex] = useState(-1);
  var [name, setName] = useState('');
  var [phone, setPhone] = useState('');
  var [bus, setBus] = useState('');

  function openAddModal() {
    setModalTitle('Add Driver');
    setEditIndex(-1);
    setName('');
    setPhone('');
    setBus('');
    setShowModal(true);
  }

  function openEditModal(index) {
    setModalTitle('Edit Driver');
    setEditIndex(index);
    setName(drivers[index].name);
    setPhone(drivers[index].phone);
    setBus(drivers[index].bus);
    setShowModal(true);
  }

  function saveDriver() {
    if (name === '' || phone === '' || bus === '') {
      alert('Please fill in all fields.');
      return;
    }

    var newDriver = { name: name, phone: phone, bus: bus };
    var updatedDrivers = [...drivers];

    if (editIndex === -1) {
      updatedDrivers.push(newDriver);
    } else {
      updatedDrivers[editIndex] = newDriver;
    }

    setDrivers(updatedDrivers);
    setShowModal(false);
  }

  return (
    <div className="layout">
      <Sidebar activePage="drivers" />
      <div className="main">
        <Topbar title="Drivers" />
        <div className="content">
          <div className="card">

            <div className="card-header">
              <h3>Driver Management</h3>
              <button className="btn-add" onClick={openAddModal}>+ Add Driver</button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Assigned Bus</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map(function(driver, index) {
                  return (
                    <tr key={index}>
                      <td><span className="driver-name">{driver.name}</span></td>
                      <td><span className="driver-phone">{driver.phone}</span></td>
                      <td><span className="bus-badge">{driver.bus}</span></td>
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
        onSave={saveDriver}
      >
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="e.g. Ahmad Al-Masri"
            value={name}
            onChange={function(e) { setName(e.target.value); }}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="+962 7X XXX XXXX"
            value={phone}
            onChange={function(e) { setPhone(e.target.value); }}
          />
        </div>
        <div className="form-group">
          <label>Assigned Bus</label>
          <input
            type="text"
            placeholder="e.g. AAU-104"
            value={bus}
            onChange={function(e) { setBus(e.target.value); }}
          />
        </div>
      </Modal>

    </div>
  );
}

export default Drivers;
