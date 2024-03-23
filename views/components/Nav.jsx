import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <span className="navbar-item">PayEase</span>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a href="#" className="navbar-item">Home</a>
            <a href="#" className="navbar-item">Send Money</a>
            <a href="#" className="navbar-item">Receive Money</a>
            <a href="#" className="navbar-item">Transaction History</a>
            <a href="#" className="navbar-item">Profile</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
