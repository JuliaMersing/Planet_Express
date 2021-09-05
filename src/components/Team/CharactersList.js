import React from "react";
import Character from "../Team/CharacterCard";
import "../../stylesheet/team/characterList.scss";
import { Link } from "react-router-dom";
import Members from "../../images/weAre.png";

const CharactersList = (props) => {
  const characterElements = props.characters.map((character) => {
    return <Character key={character.name} character={character} />;
  });

  return (
    <div className="cards">
      <img src={Members} alt="Team Members" className="cards__img" />
      <ul className="cards__list">{characterElements}</ul>
      <Link to="/">
        <i className="home_icon fas fa-reply" />
      </Link>
    </div>
  );
};

export default CharactersList;
