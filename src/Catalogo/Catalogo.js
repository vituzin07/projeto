import { listarCatalogo } from '../api/api.js';
import Card from '../Card/Card.js';
import {useEffect, useState} from 'react'
import { format } from 'date-fns';
import './Catalogo.css';


export default function Catalogo() {
  let [jogo, setJogo] =useState([])

  useEffect(() => {
    listarCatalogo()
    .then((dados) => {
      setJogo(dados);
    })
  }, []);

  return (
    
    <div className="Catalogo">
      
      {jogo.map((jogo, i) => {
      return <Card
      key={i}
      capa={ jogo.urlCapa}
      titulo={jogo.nome}
      dataLancamento={format(jogo.dataLancamento, 'yyyy')}
      avalicao={jogo.avaliacao} />
      })}
      </div> 
  );
}


