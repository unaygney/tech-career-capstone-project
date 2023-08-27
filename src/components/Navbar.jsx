import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/">Anasayfa</NavLink>
        <NavLink to="/cinema">Sinema</NavLink>
        <NavLink to="/theater">Tiyatro</NavLink>
        <NavLink to="/exhibit">Sergi</NavLink>
        <NavLink to="/concert">Konser</NavLink>
      </nav>
    </>
  );
}

export default Navbar;
