export const fetchPokemonsList = (url = `https://pokeapi.co/api/v2/pokemon?offset=${0}&limit=${20}`) => {
    return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
}

export const fetchPokemonData = (url) => {
    return fetch(url)
    .then((response) => response.json())
}

export const fetchPokemonsListWithOffsetAndLimit = (offset, limit) => {
    console.log(offset, limit)
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((response) => response.json())
    .then((data) => data)

}