import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import team from "../../images/team.png";
import "../../stylesheet/layout/header.scss";

export default function Header() {
  return (
    <div>
      <Link to="/Team">
        <div className="team">
          <img className="team__img" src={team} alt="Team" title="Know team" />
          <p className="team__title">Know our team</p>
        </div>
      </Link>
      <header className="header">
        <Link to="/">
          <img
            className="header__img"
            src={logo}
            title="Go to home"
            alt="Planet Express"
          />
        </Link>
      </header>
    </div>
  );
}
