import React, { useEffect, useState } from 'react';
import '../Styling/Header.css';
import Logo from '../UI/logo.JPEG XR';


import { Link, useHistory } from "react-router-dom"

const Header = () => {



  const history = useHistory();
  const handleRowClick = () => {
    history.push(`/`);
  }

  useEffect(() => {
    // The debounce function receives our function as a parameter
    const debounce = (fn) => {
      // This holds the requestAnimationFrame reference, so we can cancel it if we wish
      let frame;
      // The debounce function returns a new function that can receive a variable number of arguments
      return (...params) => {
        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) {
          cancelAnimationFrame(frame);
        }
        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
          // Call our function and pass any params we received
          fn(...params);
        });
      }
    };



    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
    }

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener('scroll', debounce(storeScroll), { passive: true });

    // Update scroll position for first time
    storeScroll();
  })

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Navbar brand */}
          <Link to="/" className="navbar-brand">
            <div style={{ display: "flex" }}>
              <img className="logoHead" src={Logo} alt="Indexed.Finance" />
              {/* <h2 id="logo-text">INDEXED</h2> */}
            </div>
          </Link>
          {/* Toggle button */}
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i id="header-bars" className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/governance" className="nav-link active">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/categories" className="nav-link">SERVICES</Link>
              </li>
              <li className="nav-item">
                <Link to="/stake" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">Blog</Link>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </div>
  )
}
export default Header;