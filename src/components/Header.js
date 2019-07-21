import React from "react";
import "./Header.css";

import logo from "../images/logo.svg";

function Header() {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <div>
        <span>Meu perfil</span>
        <i className="material-icons">account_circle</i>
      </div>
    </nav>
  );
}

export default Header;
