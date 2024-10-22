import React, { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';
import CharacterFilter from '../pages/CharacterFilter';

function CharacterPage() {
  const [charactersList, setCharactersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({ name: '', status: '', gender: '' });

  useEffect(() => {
    const fetchCharacters = async () => {
      const { name, status, gender } = filters;
      const query = `name=${name}&status=${status}&gender=${gender}&page=${currentPage}`;
      const response = await fetch(`https://rickandmortyapi.com/api/character/?${query}`);
      const data = await response.json();
      setCharactersList(data.results);
      setTotalPages(Math.ceil(data.info.count / 8)); // Calculate total pages based on 8 items per page
    };

    fetchCharacters();
  }, [currentPage, filters]);

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / 5) * 5 + 1;
    return new Array(5).fill().map((_, idx) => start + idx).filter(page => page <= totalPages);
  };

  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <CharacterFilter onFilter={setFilters} />
      <div className="character-grid">
        {charactersList.map((character) => (
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

export default CharacterPage;
