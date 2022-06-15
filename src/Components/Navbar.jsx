import React from 'react'
import "../styles/login.css"

const Navbar = () => {
  return (
    <div className="container-fluid wrapper">
      <nav className="navbar bg-dark ">
        <div className="container">
          <a className="navbar-brand" href="https://dwatatech.com/">
            <img
              src="../Assets/Dwatatech_logo1.png"
              alt=""
              width="200"
              height="100"
            />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar