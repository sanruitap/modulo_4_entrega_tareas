import React from 'react';
import Title from '../components/title/title';
import Image from '../components/image/image';
import Details from '../details/details';

function CharacterCard(props) {
  return (
    <div className="character-card">
      <Title title={props.name} />
      <Image url={props.image} />
      <Details genre={props.genre} status={props.status} />
    </div>
  );
}

export default CharacterCard;
