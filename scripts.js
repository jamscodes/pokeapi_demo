async function getPokemon(query) {
    let response = await fetch(`https://pokeapi.co/api/v2/${query}`)
    let jsonData = await response.json();
    let wrapper = document.querySelector('#responseWrapper')
    
    for(let i = 0; i < jsonData.results.length; i++) {
        let currentPokemon = await fetch(jsonData.results[i].url)
        let currentPokemonJSON = await currentPokemon.json()

        let row = document.createElement('tr')

        let imageCell = document.createElement('td')
        let shinySprite = document.createElement('img')
        shinySprite.src = currentPokemonJSON.sprites.front_shiny
        imageCell.appendChild(shinySprite)
        row.appendChild(imageCell)

        let nameCell = document.createElement('td')
        nameCell.innerText = currentPokemonJSON.name
        row.appendChild(nameCell)

        let typeCell = document.createElement('td')
        typeCell.innerText = currentPokemonJSON.types[0].type.name
        row.appendChild(typeCell)


        wrapper.appendChild(row)
    }
}

getPokemon('pokemon?limit=12')
console.log('End of file')