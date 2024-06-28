import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Character from './components/Character';
import Planet from './components/Planet';
import Navbar from './components/SearchForm';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/people/:id" element={<Character />} />
        <Route path="/planets/:id" element={<Planet />} />
      </Routes>
    </Router>
  );
}

export default App;
