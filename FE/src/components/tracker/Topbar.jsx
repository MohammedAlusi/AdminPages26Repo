import React from 'react';

function Topbar({ title }) {
  return (
    <div className="topbar">
      <h2>{title}</h2>
      <button>&#x2192; Logout</button>
    </div>
  );
}

export default Topbar;
