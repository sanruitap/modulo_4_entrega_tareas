import React from 'react';

const Image = ({ url }) => {
  return (
    <img src={url} alt="Character" className="card-image" />
  );
};

export default Image;

