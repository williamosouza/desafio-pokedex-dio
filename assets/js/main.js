const pokemonList = document.getElementById('pokemonList')
let loadMoreButton = document.getElementById('loadMoreButton')
let backButton = document.getElementById('backButton')
let parametro1 = new parametros(150, 0, 1, 0)


// funções

function convertPokemonToLi(pokemon) {
    return `
          
        <div class="pokemon ${pokemon.type}">
            <div class="namenumber">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            </div>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
            <div class="stats">
                <ol class="statsNames">
                    ${pokemon.statsNames.map((statsName) => `<li class="statsName">${statsName}</li>`).join('')}
                </ol>
                <ol class="statsBases">
                ${pokemon.statsBases.map((statsBase) => `<li class="statsBase">${statsBase}</li>`).join('')}
                </ol>
            </div>

        </div>
       
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML = newHtml
    })
}

function buttonONOffback(minimum, offset, maxRecords) {
      
    if (offset > minimum && offset < maxRecords) {
        document.getElementById('backButton').disabled = false
    } else {
        document.getElementById('backButton').disabled = true
        
    } 
}

function buttonONOffload(minimum, offset, maxRecords) {
      
    if (offset > minimum && offset < maxRecords) {
        document.getElementById('loadMoreButton').disabled = false
    } else {
        document.getElementById('loadMoreButton').disabled = true
        
    } 
}


// Primeiro carregamento da pokedex

document.getElementById('backButton').disabled = true
loadPokemonItens(parametro1.offset, parametro1.limit)


//funcionamento dos botões de avanço e retorno

loadMoreButton.addEventListener('click', () => {
    parametro1.setOffset = parametro1.offset + 1
    
    document.getElementById('backButton').disabled = false
    
    buttonONOffload(parametro1.minimum, parametro1.offset, parametro1.maxRecords)
    loadPokemonItens(parametro1.offset, parametro1.limit)
      
      
})

backButton.addEventListener('click', () => {
    parametro1.setOffset = parametro1.offset - 1

    document.getElementById('loadMoreButton').disabled = false
    
    buttonONOffback(parametro1.minimum, parametro1.offset, parametro1.maxRecords)
    loadPokemonItens(parametro1.offset, parametro1.limit)
   
  
})