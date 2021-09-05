const getApiData = () => {
  return fetch("https://futuramaapi.herokuapp.com/api/v2/characters")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        return {
          name: character.Name,
          photo: character.PicUrl,
          specie: character.Species,
          planet: character.Planet,
          status: character.Status,
          id: character.Profession,
        };
      });
      return cleanData;
    });
};

export default getApiData;
