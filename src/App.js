import './App.css';
import { useEffect, useState } from 'react'
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import CharacterDetail from "./CharacterDetail";
import { Link, Route, Routes } from 'react-router-dom'

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
        <Link to='/'> Home </Link>
        <Link to='/about'> About </Link>

      </nav>
        <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About characters={characters}/>}/>
          <Route path='characters/:id' element={<CharacterDetail/>}/>
        
        </Routes>
    </div>
  );
}

export default App;
