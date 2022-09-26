import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [pokemon,setPokemon] = useState([])

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
    .then((result)=>{
      return result.json()
    }).then((res)=>{
      console.log(res)
      setPokemon(res.results)
    }).catch((error)=>{
      console.log(error)
    })
  },[])


  return (
    <div className="App">
        {
          pokemon.map((pokemon)=>(
            <div>
              <li>{pokemon.name}</li>
            </div>
          ))
        }



    </div>
  );
}

export default App;
