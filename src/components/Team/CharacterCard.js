import React from "react";
import "../../stylesheet/team/characterCard.scss";

const CharacterCard = (props) => {
  return (
    <div className="character">
      <div className="character__name">
        <h4>{props.character.name}</h4>
      </div>
      <img
        className="character__img"
        src={props.character.photo}
        alt={props.character.name}
      />
      <div className="character__info">
        <p className="character__text-info">{props.character.specie}</p>
        <p className="character__text-info">{props.character.planet}</p>
        <p className="character__text-info">{props.character.status}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
