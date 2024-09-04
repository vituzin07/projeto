import { listarCatalogo } from './api/api.js';
import './App.css';
import Card from './Card/Card.js';
import {useEffect, useState} from 'react'

function App() {
  const [catalogo, setCatalogo] =useState([])

  useEffect(() => {
    listarCatalogo()
    .then((dados) => {
      setCatalogo(dados);
    })
  }, []);

  return (
    <div className="App">
      <div className='text'>
        <p>
          Destaques          
        </p>
      </div>
      {catalogo.map((jogo, i) => {
      return <Card
      key={i}
      capa={ jogo.urlCapa}
      titulo={jogo.nome}
      dataLancamento={jogo.dataLancamento}
      avalicao={jogo.avaliacao} />
      })}
      </div> 
  );
}

export default App;
