import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>PayEase</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;