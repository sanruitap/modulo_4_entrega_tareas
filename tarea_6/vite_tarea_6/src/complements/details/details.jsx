import React from 'react';

const Details = ({ genre, status }) => {
  return (
    <div className="card-details">
      <p>Género: {genre}</p>
      <p>Estado: {status}</p>
    </div>
  );
};

export default Details;

