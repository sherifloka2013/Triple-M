import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/logo.png';
const AppNavBar = () => {
  return (
    <nav id="NavBar">
      <input type={"checkbox"} id="check" style={{display: "none"}}/>
      <label htmlFor="check" id="navBtn">
          <FontAwesomeIcon icon={faBars}/>
      </label>
      <span id="logo">
        <figure>
          <Link to="/">
          <img src={logo} alt="MMM logo"/>
          </Link>
        </figure>
      </span>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Our Services</Link></li>
        <li><Link to="/projectReference">Projects reference</Link></li>
        <li><Link to="/REEF">Triple M R&D Center (REEF)</Link></li>
        <li><Link to="/News">News</Link></li>
        <li><Link to="/Careers">Careers</Link></li>
        <li><Link to="/Contactus">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export { AppNavBar };
