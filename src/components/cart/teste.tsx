/* eslint-disable @typescript-eslint/no-var-requires */
import { Hash } from 'crypto';
import React from 'react';
const publicKey = "741cb53119a4bcc1e2513c48610ee5eb"
const privateKey = "16c0478e764ca0da23f62f163eb303c4e6a5c0d6"
const timestamp = Date.now()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const hash = require('crypto').createHash('md5').update(timestamp + privateKey + publicKey).digest('hex');

interface Character {
  id: number;
  name: string;
  description: string;
  hash: Hash,
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="character-card">
      <img src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.description}</p>
    </div>
  );
};

export default CharacterCard;
