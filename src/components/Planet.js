import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Planet = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
        setPlanet(response.data);
      } catch (error) {
        setError(true);
      }
    };
    fetchPlanet();
  }, [id]);

  if (error) {
    return (
      <div>
        <p>These aren't the droids you're looking for</p>
      </div>
    );
  }

  return (
    planet && (
      <div>
        <h1>{planet.name}</h1>
        <p>Climate: {planet.climate}</p>
        <p>Terrain: {planet.terrain}</p>
        <p>Surface Water: {planet.surface_water ? 'true' : 'false'}</p>
        <p>Population: {planet.population}</p>
      </div>
    )
  );
};

export default Planet;
