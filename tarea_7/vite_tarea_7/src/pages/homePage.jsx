import React from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div>
      <h1>Bienvenido a la página de Rick and Morty</h1>
      <h3>Enlaces rápidos</h3>
      <Link to="/CharacterPage">Ir a personajes</Link> <br></br>
      <Link to="/episodesPage">Ir a episodios</Link>
    </div>
  );
}

export default HomePage;
