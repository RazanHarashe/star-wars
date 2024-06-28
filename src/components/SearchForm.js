import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [resource, setResource] = useState('people');
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (id) {
        navigate(`/${resource}/${id}`);
    }
  };

  return (
    <div>
      <label>Search For: </label>
      <select value={resource} onChange={(e) => setResource(e.target.value)}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>
      <label>  ID: </label>
      <input 
        type="number" 
        value={id} 
        onChange={(e) => setId(e.target.value)} 
        placeholder="Enter ID" 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;