const img_pokemon = document.querySelector('#img_pokemon')
const id_pokemon = document.querySelector('#id_pokemon')
const nome_pokemon = document.querySelector('#nome_pokemon')
const tipo_poke = document.querySelector('#tipo_poke')
const circulo = document.querySelector('#circulo')
const boxTipoPokemon = document.querySelector('#boxTipoPokemon')
const inputPokemon = document.querySelector('#pokemon')
const pesquisar = document.querySelector('#pesquisar')

const hpDados = document.querySelector('#hpDados')
const ataqueDados = document.querySelector('#ataqueDados')
const defesaDados = document.querySelector('#defesaDados')
const velocidadeDados = document.querySelector('#velocidadeDados')

const infoPokemon = async (pokemom) => {
    const info = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemom}`)
    const dbPokemon = await info.json()
    return dbPokemon
}

const infoDescricao = async (pokemom) => {
    const info = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemom}`)
    const descricaoPokemon = await info.json()
    return descricaoPokemon
}

const buscaPokemon = async (pokemon) => {
    const dados = await infoPokemon(pokemon)
    const descricao = await infoDescricao(pokemon)

    nome_pokemon.innerHTML = dados.name
    id_pokemon.innerHTML = dados.id
    img_pokemon.src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    tipo_poke.innerHTML = dados.types[0].type.name

    hpDados.innerHTML = dados.stats[0].base_stat
    ataqueDados.innerHTML = dados.stats[1].base_stat
    defesaDados.innerHTML = dados.stats[2].base_stat
    velocidadeDados.innerHTML = dados.stats[5].base_stat

    boxTipoPokemon.style.backgroundColor = descricao.color.name
    circulo.style.backgroundColor = descricao.color.name
    circulo.style.boxShadow = "0 3px 7px " + descricao.color.name


    if(descricao.color.name == 'black') {
        tipo_poke.style.color = '#fff'
    }
}

pesquisar.addEventListener('click', () => {
    const pokemon = inputPokemon.value
    buscaPokemon(pokemon)
} )

const inicio = () => {
    buscaPokemon(1)
}
