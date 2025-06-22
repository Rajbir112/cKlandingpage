import React, { useEffect } from 'react';

import './Navbar.css'; // Make sure this file exists

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('mainNavbar');
      if (window.scrollY > 50) {
        navbar.classList.add('shrink');
      } else {
        navbar.classList.remove('shrink');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <nav id="mainNavbar" className="navbar navbar-expand-lg fixed-top bg-light py-4">
      <div className="container-fluid justify-content-center d-flex" id="mainNavbar-div">
        <h1 className="navbar-brand h1 m-0" to="/">Calvin Klein</h1>
      </div>
    </nav>
    </>
  );
};

export default Navbar;

