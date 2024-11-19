import React from 'react';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <header className="d-flex justify-content-start align-items-center bg-dark text-white p-3" style={{ height: '10vh' }}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#">Haeliseu</a>
        {isAuthenticated && <button className="btn btn-primary" onClick={logout}>Logout</button>}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;