const imagem = document.getElementById('image');
const numero = document.getElementById('pokemonNumber')
const nome = document.getElementById('pokemonName')
const pesquisa = document.getElementById('search')
const form = document.querySelector('form')
const next = document.getElementById('next')
const previous = document.getElementById('previous')

const getPokemon = async (pokemon) => {
    const response = await (await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`))).json()
   return response  
}

const  renderPokemon = async (pokemon) => {
  const pokemonBuscado = await getPokemon(pokemon)
        const nomePokemon = await pokemonBuscado.name
        const sprite = await pokemonBuscado.sprites.versions['generation-vii']['ultra-sun-ultra-moon']['front_default']  
        const numPokemon = await pokemonBuscado.id
        
        if (pokemonBuscado){
        imagem.setAttribute('src',sprite)
        nome.innerHTML = nomePokemon
        numero.innerHTML = numPokemon}        
}
 
form.addEventListener('submit', (evento) => {
  evento.preventDefault()
  renderPokemon(pesquisa.value.toLowerCase())
  pesquisa.value = ''
})
  
next.addEventListener('click', () => {
  renderPokemon(Number(numero.innerHTML) + 1)
})

previous.addEventListener('click', () => {
  
  renderPokemon(Number(numero.innerHTML) - 1)
})

renderPokemon(1)