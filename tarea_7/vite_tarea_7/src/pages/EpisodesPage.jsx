import React, { useState, useEffect } from 'react';

function EpisodesPage() {
  const [episodesList, setEpisodesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setEpisodesList(data.results);
        setTotalPages(data.info.pages); // Use actual pages from the API response
      });
  }, [currentPage]);

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / 5) * 5 + 1;
    return new Array(5).fill().map((_, idx) => start + idx).filter(page => page <= totalPages);
  };

  return (
    <div>
      <h1>Episodios de Rick and Morty</h1>
      <div className="episode-grid">
        {episodesList.map((episode) => (
          <div key={episode.id} className="episode-card">
            <h2>{episode.name}</h2>
            <p>{episode.air_date}</p>
          </div>
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

export default EpisodesPage;
