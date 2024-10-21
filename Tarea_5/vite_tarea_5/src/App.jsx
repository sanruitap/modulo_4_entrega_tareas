import React, { useState, useEffect } from 'react';
import CharacterCard from './components/CharacterCard';
import Clock from './components/clock';
import './css/style.css' ;
import Login from './login' ;
import Home from './home' ;

;

function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (loggedIn) {
      const rickAndMortyCharacterId = 1; // Rick Sanchez
      fetch(`https://rickandmortyapi.com/api/character/${rickAndMortyCharacterId}`)
        .then(response => response.json())
        .then(result => {
          setName(result.name);
          setImage(result.image);
          setGenre(result.gender);
          setStatus(result.status);
        });
    }
  }, [loggedIn]);

  const handleLogin = (username) => {
    setLoggedIn(true);
    setUsername(username);
  };

  return (
    <div className="app-container">
      <h1>Personajes de Rick and Morty</h1>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Home username={username} />
          <CharacterCard
            name={name}
            image={image}
            genre={genre}
            status={status}
          />
        </>
      )}
    </div>
  );
}

export default App;