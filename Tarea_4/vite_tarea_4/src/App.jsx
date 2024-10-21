import React, { useState, useEffect } from 'react';
import CharacterCard from './components/CharacterCard';
import Clock from './components/clock'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const rickAndMortyCharacterId = 1; // Rick Sanchez
    fetch(`https://rickandmortyapi.com/api/character/${rickAndMortyCharacterId}`)
      .then(response => response.json())
      .then(result => {
        setName(result.name);
        setImage(result.image);
        setGenre(result.gender);
        setStatus(result.status);
      });
  }, []);

  return (
    <div class="app-container">
      <h1>Personajes de Rick and Morty</h1>
      <Clock />
      <CharacterCard
        name={name}
        image={image}
        genre={genre}
        status={status}
      />
    </div>
  );
}

export default App;

