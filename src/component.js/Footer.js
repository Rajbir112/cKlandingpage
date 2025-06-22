import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="bg-body-tertiary" >
      <div className="container-fluid" id="footer" style={{ marginTop: "30px" }}>
        <div className="container text-center py-2">
          <p style={{ fontSize: "25px" }}> Get exclusive updates on the collection's launch, <br /> personalized communication and the House's latest news. <br /> Sign up now</p>
        </div>
        <a className="navbar-brand" href="/" style={{ fontSize: "20px", marginLeft: "4%" }}>© 2025 Calvin Klein All Rights Reserved</a>
        <div className="container text-center py-2">
          <p style={{
            fontSize: "32px",
            fontWeight: "400",
            fontFamily: "Helvetica Neue, sans-serif",
            letterSpacing: "3px",
            margin: "0",
          }}> cK </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
