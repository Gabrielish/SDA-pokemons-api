import React, { useState, useEffect } from "react"
//`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}
// let {offset, limit} = useEffect(null)

export const fetchPokemonsList = (url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=30`) => {
    return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
}

export const fetchPokemonData = (url) => {
    return fetch(url)
    .then((response) => response.json())
}