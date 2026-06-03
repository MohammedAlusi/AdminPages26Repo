import React, { useState } from 'react';
import Sidebar from '../components/tracker/Sidebar.jsx';
import Topbar from '../components/tracker/Topbar.jsx';
import Modal from '../components/tracker/Modal.jsx';
import { routes as initialRoutes } from '../data/data.js';

function Routes() {
  var [routes, setRoutes] = useState(initialRoutes);
  var [showModal, setShowModal] = useState(false);
  var [modalTitle, setModalTitle] = useState('Add Route');
  var [editIndex, setEditIndex] = useState(-1);
  var [routeName, setRouteName] = useState('');
  var [stops, setStops] = useState('');

  function openAddModal() {
    setModalTitle('Add Route');
    setEditIndex(-1);
    setRouteName('');
    setStops('');
    setShowModal(true);
  }

  function openEditModal(index) {
    setModalTitle('Edit Route');
    setEditIndex(index);
    setRouteName(routes[index].name);
    setStops(routes[index].stops.join(', '));
    setShowModal(true);
  }

  function saveRoute() {
    if (routeName === '' || stops === '') {
      alert('Please fill in all fields.');
      return;
    }

    var stopsArray = stops.split(',').map(function(s) { return s.trim(); });
    var newRoute = { name: routeName, stops: stopsArray };
    var updatedRoutes = [...routes];

    if (editIndex === -1) {
      updatedRoutes.push(newRoute);
    } else {
      updatedRoutes[editIndex] = newRoute;
    }

    setRoutes(updatedRoutes);
    setShowModal(false);
  }

  return (
    <div className="layout">
      <Sidebar activePage="routes" />
      <div className="main">
        <Topbar title="Routes" />
        <div className="content">
          <div className="card">

            <div className="card-header">
              <h3>Route Management</h3>
              <button className="btn-add" onClick={openAddModal}>+ Add Route</button>
            </div>

            <div>
              {routes.map(function(route, index) {
                return (
                  <div className="route-item" key={index}>
                    <div className="route-item-header">
                      <span className="route-item-title">{route.name}</span>
                      <button className="btn-edit" onClick={function() { openEditModal(index); }}>
                        Edit
                      </button>
                    </div>
                    <div className="route-stops">
                      {route.stops.map(function(stop, i) {
                        return (
                          <span
                            key={i}
                            className={stop === 'AAU Main Gate' ? 'stop-tag highlight' : 'stop-tag'}
                          >
                            {stop}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        title={modalTitle}
        onClose={function() { setShowModal(false); }}
        onSave={saveRoute}
      >
        <div className="form-group">
          <label>Route Name</label>
          <input
            type="text"
            placeholder="e.g. 7th Circle - AAU"
            value={routeName}
            onChange={function(e) { setRouteName(e.target.value); }}
          />
        </div>
        <div className="form-group">
          <label>Stops (comma separated)</label>
          <input
            type="text"
            placeholder="e.g. 7th Circle, Sport City, AAU Main Gate"
            value={stops}
            onChange={function(e) { setStops(e.target.value); }}
          />
        </div>
      </Modal>

    </div>
  );
}

export default Routes;
