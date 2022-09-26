import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [pokemon,setPokemon] = useState([])

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
    .then((res)=>{
      console.log(res)
      setPokemon(res.data.results)
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
