import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        setCharacter(response.data);
        const homeworldResponse = await axios.get(response.data.homeworld);
        setHomeworld(homeworldResponse.data);
      } catch (error) {
        setError(true);
      }
    };
    fetchCharacter();
  }, [id]);

  if (error) {
    return (
      <div>
        <p>These aren't the droids you're looking for</p>
      </div>
    );
  }

  return (
    character && (
      <div>
        <h1>{character.name}</h1>
        <p>Height: {character.height} cm</p>
        <p>Mass: {character.mass} kg</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Skin Color: {character.skin_color}</p>
        {homeworld && (
          <p>
            Homeworld: <a href={`/planets/${homeworld.id}`}>{homeworld.name}</a>
          </p>
        )}
      </div>
    )
  );
};

export default Character;
