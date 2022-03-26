import React, { useState, useEffect } from "react"
import { fetchPokemonsList, fetchPokemonsListWithOffsetAndLimit } from "./connectors"

import Pokemon from "./Pokemon"
import "./Pokemon.css"

const Pokemons = () => {
  const [next, setNext] = useState(null)
  const [previous, setPrevious] = useState(null)
  const [pokemons, setPokemons] = useState([])
  const [offsetVal, setOffset] = useState(0)
  const [limitVal, setLimit] = useState(20)
  

  useEffect(() => {
    fetchPokemonsList().then(data => {
      setNext(data.next)
      setPrevious(data.previous)
      setPokemons(data.results)
      console.log(data)
    })
  }, [])

  const onPrevious = () => {
    fetchPokemonsList(previous).then(data => {
      setNext(data.next)
      setPrevious(data.previous)
      setPokemons(data.results)
      console.log(data)
    })
  }

  const onNext = () => {
    fetchPokemonsList(next).then(data => {
      setNext(data.next)
      setPrevious(data.previous)
      setPokemons(data.results)
      console.log(data)
    })
  }

  const onChangeValue = () => {
    fetchPokemonsListWithOffsetAndLimit(offsetVal, limitVal).then(data => {
      setNext(data.next)
      setPrevious(data.previous)
      setPokemons(data.results)
      console.log(data)
    })
}
  const onOffSetChange = (event) => {
    console.log(event.target.value)
    const newOffsetValue = parseInt(event.target.value)
    setOffset(newOffsetValue || 0)

  }

  const onLimitChange = (event) => {
    console.log(event.target)
    const newLimitValue = parseInt(event.target.value)
    setLimit(newLimitValue || 0)
  }


  return (
    
    <div>



        {/* SETERS */}
      <div className="seters">
        <div>
          <label>Offset: </label>
          <input type="text" placeholder="Offset" value={offsetVal} onChange={onOffSetChange}></input>
        </div>
        <div>
          <labe>Limit: </labe>
          <input type="text" placeholder="Limit" value={limitVal} onChange={onLimitChange}></input>
        </div>
        <button className="set" onClick={onChangeValue}>Submit</button>
      </div>



        {/* NEXT/PREVIOUS BUTTONS */}
      <div className='buttons'>
        {previous !== null && <button onClick={onPrevious}>Previous</button>}
        {next !== null && <button onClick={onNext}>Next</button>}
      </div>
      
      <div className='pokemon-list'>
        {pokemons.length === 0 && <p>Datele se incarca...</p>}
        {pokemons.length !== 0 &&
          pokemons.map(pokemon => (
            <Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))}
      </div>
    </div>
  )
}

export default Pokemons
