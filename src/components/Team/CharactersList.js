import React from "react";
import Character from "../Team/CharacterCard";
import "../../stylesheet/team/charactersList";

const CharactersList = (props) => {
  const characterElements = props.characters.map((character) => {
    return <Character key={character.id} character={character} />;
  });

  return (
    <section>
      <ul className="cards">{characterElements}</ul>
    </section>
  );
};

export default CharactersList;
