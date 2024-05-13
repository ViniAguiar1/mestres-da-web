/* eslint-disable @typescript-eslint/no-var-requires */
import axios from "axios";
import React, {useState, useEffect} from "react";

const publicKey = "741cb53119a4bcc1e2513c48610ee5eb"
const privateKey = "16c0478e764ca0da23f62f163eb303c4e6a5c0d6"
const timestamp = Date.now()
const hash = require('crypto').createHash('md5').update(timestamp + privateKey + publicKey).digest('hex');
import CharacterCard from "./teste";


const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    axios.get('https://gateway.marvel.com/v1/public/characters', {
      params: {
        ts: timestamp,
        apikey: publicKey,
        hash: hash
      }
    })
    .then(response => {
      setCharacters(response.data.data.results);
    })
    .catch(error => {
      console.error('Erro ao recuperar os personagens da Marvel:', error);
    });
  }, []);

  return (
    <div className="app">
      <h1>Personagens da Marvel</h1>
      <div className="character-list">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default App;
