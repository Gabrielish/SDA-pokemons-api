import React, { useState, useEffect } from "react"
import { fetchPokemonsList } from "./connectors"

import Pokemon from "./Pokemon"
import "./Pokemon.css"

const Pokemons = () => {
  const [next, setNext] = useState(null)
  const [previous, setPrevious] = useState(null)
  const [pokemons, setPokemons] = useState([])

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

  return (
    <div>
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
