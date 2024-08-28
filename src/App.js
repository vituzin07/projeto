import './App.css';
import Card from './Card/Card.js';

function App() {
  return (
    <div className="App">
      <Card 
      imagem='foto-capa-pokmfr.png'
      titulo='Pokémon Fire Red'
      desenvolvedor='Game Freak'
      plataforma= 'Game Boy Advance'
      />
      <Card
     imagem='foto-capa-hades.png'
     titulo='Hades'
     desenvolvedor='Supergiant Games'
     plataforma= 'Nintendo Switch, Playstation 5, Playstatio 4, macOS, iOS, Xbox One, Xbox Series X e Series S, Microsoft Windows'
      />
    </div>
  );
}

export default App;
