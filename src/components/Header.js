import React from "react";

import logo from "../images/logo.png";
import "../stylesheet/layout/header.scss";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__img"
        src={logo}
        title="Go to home"
        alt="Fast adn Furious logo"
      />
    </header>
  );
}
