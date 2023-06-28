import { Link } from "react-router-dom";
import React from "react";
import "../styles/Nav.css";

const Nav = ({ authenticated, user, handleLogOut }) => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="navLinks">
          BToDo
        </Link>
      </div>
      <nav className="navigation">
        <ul className="list">
          {authenticated && user ? (
            <div>
              <li className="navLinks">
                <Link className="navLinks" to="/profile">
                  My Profile
                </Link>
              </li>
              <li className="navLinks">
                <Link className="navLinks" onClick={handleLogOut} to="/">
                  Sign Out
                </Link>
              </li>
            </div>
          ) : (
            <div>
              <li className="navLinks">
                <Link className="navLinks" to="/register">
                  Register
                </Link>
              </li>
              <li className="navLinks">
                <Link className="navLinks" to="/login">
                  Login
                </Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
