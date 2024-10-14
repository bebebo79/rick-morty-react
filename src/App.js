import imgRickYMorty from "./img/rick-morty.png"
import './App.css';
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
 // creamos el State
 const [characters, setCharacters] = useState(null)

 // creamos la funcion para llamar a la API 
  const reqApi = async() =>{
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json()
    
    setCharacters(characterApi.results)
    
  }
  

  return (
    <div className="App">
      <header className="App-header">
        
        {characters ? (
          <Characters
          characters={characters}
          setCharacters = {setCharacters}
        />
        ) : (
          <>
            <h1 className='title'>Rick & Morty</h1>
        
            <img src={imgRickYMorty} alt="Rick y Morty" className="img-home"/>
            <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
          </>
        )}
        
      </header>
    </div>
  );
}

export default App;
