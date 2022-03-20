export const fetchPokemonsList = (url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10') => {
    return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
}

export const fetchPokemonData = (url) => {
    return fetch(url)
    .then((response) => response.json())
}