import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo_transp.png";
import HamburgerMenu from '../assets/hamburger-menu.png'
import { useState } from "react";

function Navbar() {
  const [isActive , setIsActive] = useState(false)

  console.log(isActive)
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <NavLink to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>
          <div className={`links ${isActive ? "active" : ""}`}>
            <NavLink to="/cinema">Sinema</NavLink>
            <NavLink to="/theater">Tiyatro</NavLink>
            <NavLink to="/exhibit">Sergi</NavLink>
            <NavLink to="/concert">Konser</NavLink>
          </div>

        <button onClick={() => isActive ? setIsActive(false) : setIsActive(true) } className="hamburger-btn">
          <img src={HamburgerMenu} alt="hamburger-btn" />
        </button>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
