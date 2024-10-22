import React, { useState } from 'react';

const CharacterFilter = ({ onFilter }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  const handleSearch = () => {
    onFilter({ name, status, gender });
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">Todos</option>
        <option value="alive">Vivo</option>
        <option value="dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Todos</option>
        <option value="female">Femenino</option>
        <option value="male">Masculino</option>
        <option value="genderless">Sin género</option>
        <option value="unknown">Desconocido</option>
      </select>
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default CharacterFilter;
