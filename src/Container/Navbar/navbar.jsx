import React from "react";
import logo from "./img/logo1.png";
import Newdropdown from "./newdropdown";
import { Link } from "react-router-dom";
// import DropdownMenu from './dropdown1'
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/map">Map</Link>{" "}
            </li>
            <li  className="drop-down">
                
              <Newdropdown />
              
            </li>
            <li>
              {" "}
              <Link to="/login">Logout</Link>{" "}
            </li>
            {/* <Link></Link> */}
            {/* <li><DropdownMenu/></li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
