import React from 'react';
import Title from './title/title'
import Image from './image/image';
import Details from './details/details';

function CharacterCard(props) {
  return (
    <div class= "character-card">
      <Title title={props.name} />
      <Image url={props.image} />
      <Details genre={props.genre} status={props.status} />
    </div>
  );
}

export default CharacterCard;


