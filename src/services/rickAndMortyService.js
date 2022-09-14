const getCharacters = () =>{
    return fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())

}

const getCharacter = (id) =>{
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(value => value.json())
}

export {getCharacters, getCharacter}