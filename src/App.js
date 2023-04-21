import './App.css';
import { useEffect, useState } from 'react'
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [characters, setCharacters] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/characters")
        .then((res) => res.json())
        .then((data) => {
          setCharacters(data);
        });
    }, []);

  return (
    <div className="App">
      <nav className="navbar">
      
      </nav>
  
    </div>
  );
}

export default App;
