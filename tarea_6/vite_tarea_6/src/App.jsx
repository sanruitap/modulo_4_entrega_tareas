import React, { useState, useEffect } from 'react';
import CharacterCard from './complements/CharacterCard';
import './complements/css/style.css'

;

function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      let allCharacters = [];
      let nextUrl = 'https://rickandmortyapi.com/api/character/';
      
      while (nextUrl) {
        const response = await fetch(nextUrl);
        const data = await response.json();
        allCharacters = [...allCharacters, ...data.results];
        nextUrl = data.info.next;
      }
      
      setCharactersList(allCharacters);
      setTotalPages(Math.ceil(allCharacters.length / 8));
    };

    fetchCharacters();
  }, []);

  const itemsPerPage = 8;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentCharacters = charactersList.slice(firstItemIndex, lastItemIndex);

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / 5) * 5 + 1;
    return new Array(5).fill().map((_, idx) => start + idx).filter(page => page <= totalPages);
  };

  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <div className="character-grid">
        {currentCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            genre={character.gender}
            status={character.status}
          />
        ))}
      </div>
      <div className="pagination">
        <button 
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        {getPaginationGroup().map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
        <button 
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default App;