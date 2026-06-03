import React from 'react';
import Sidebar from '../components/tracker/Sidebar.jsx';
import Topbar from '../components/tracker/Topbar.jsx';

function Dashboard() {
  return (
    <div className="layout">
      <Sidebar activePage="dashboard" />
      <div className="main">
        <Topbar title="Dashboard" />
        <div className="content">

          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <div>
                <p className="stat-label">Total Buses</p>
                <p className="stat-value">3</p>
              </div>
              <div className="stat-icon">🚌</div>
            </div>
            <div className="stat-card">
              <div>
                <p className="stat-label">Active Buses</p>
                <p className="stat-value">2</p>
              </div>
              <div className="stat-icon" style={{ color: '#16a34a' }}>✅</div>
            </div>
            <div className="stat-card">
              <div>
                <p className="stat-label">Total Routes</p>
                <p className="stat-value">3</p>
              </div>
              <div className="stat-icon" style={{ color: '#2563eb' }}>📍</div>
            </div>
          </div>

          {/* Map */}
          <div className="map-card">
            <h3>Live Bus Tracking</h3>
            <div className="map-area">

              {/* Bus Stops */}
              <div className="map-dot stop" style={{ left: '18%', top: '52%' }}></div>
              <span className="map-label" style={{ left: '18%', top: '57%' }}>7th Circle</span>

              <div className="map-dot stop" style={{ left: '28%', top: '55%' }}></div>
              <span className="map-label" style={{ left: '28%', top: '60%' }}>Sport City</span>

              <div className="map-dot stop" style={{ left: '32%', top: '48%' }}></div>
              <span className="map-label" style={{ left: '32%', top: '43%' }}>Sweifieh</span>

              <div className="map-dot stop" style={{ left: '38%', top: '30%' }}></div>
              <span className="map-label" style={{ left: '38%', top: '25%' }}>Shmeisani</span>

              <div className="map-dot stop" style={{ left: '50%', top: '45%' }}></div>
              <span className="map-label" style={{ left: '50%', top: '50%' }}>AAU Main Gate</span>

              <div className="map-dot stop" style={{ left: '55%', top: '40%' }}></div>
              <span className="map-label" style={{ left: '55%', top: '35%' }}>Abdali</span>

              <div className="map-dot stop" style={{ left: '60%', top: '52%' }}></div>
              <span className="map-label" style={{ left: '60%', top: '57%' }}>Downtown</span>

              <div className="map-dot stop" style={{ left: '72%', top: '38%' }}></div>
              <span className="map-label" style={{ left: '72%', top: '33%' }}>Gardens</span>

              <div className="map-dot stop" style={{ left: '62%', top: '30%' }}></div>
              <span className="map-label" style={{ left: '62%', top: '25%' }}>University Street</span>

              <div className="map-dot stop" style={{ left: '88%', top: '30%' }}></div>
              <span className="map-label" style={{ left: '88%', top: '25%' }}>Marka</span>

              {/* Active Buses */}
              <div className="map-dot bus" style={{ left: '42%', top: '55%' }}></div>
              <span className="map-bus-label" style={{ left: '42%', top: '63%' }}>AAU-101</span>

              <div className="map-dot bus" style={{ left: '52%', top: '52%' }}></div>
              <span className="map-bus-label" style={{ left: '52%', top: '60%' }}>AAU-102</span>

              {/* Legend */}
              <div className="map-legend">
                <div className="legend-item">
                  <div className="legend-dot" style={{ backgroundColor: '#ef4444' }}></div>
                  Active Bus
                </div>
                <div className="legend-item">
                  <div className="legend-dot" style={{ backgroundColor: '#2563eb' }}></div>
                  Bus Stop
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
