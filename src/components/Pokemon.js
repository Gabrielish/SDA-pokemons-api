import React, { useState, useEffect } from "react"
import { fetchPokemonData } from "./connectors"

import './Pokemon.css'

const Pokemon = props => {
    const [height, setHeight] = useState(null)
    const [sprites, setSprites] = useState(null)
    const [weight, setWeight] = useState(null)
  
    useEffect(() => {
      fetchPokemonData(props.url).then(data => {
        setHeight(data.height)
        setSprites(data.sprites.front_default)
        setWeight(data.weight)
      })
    }, [])
  
    return (
      <div >
        {/* {sprites === null && <p>Informatiile se incarca</p>} */}
        {sprites !== null && <div className="pokemon">
            <p><span className="top">Name:</span> <span className="bot">{props.name}</span></p>
            <p><span className="top">Height:</span> <span className="bot">{height}</span></p>
            <p><span className="top">Weight:</span> <span className="bot">{weight}</span></p>
            <img src={sprites} alt={props.name}></img>
            </div>}
      </div>
    )
  }

  export default Pokemon
