import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from '@material-ui/core'
import fire from '../fire'

function Navbar() {
  const logout = (props) => {
    fire
      .auth()
      .signOut()
      .then(() => {
        props.histoy.push('/')
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo">
            Chat App
          </Link>

          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/home" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/chatapp" className="nav-links">
                Chat
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
             <Button onClick={logout} variant='contained'>Logout</Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
