async function fetchPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/solgaleo");

    let html = ""

    if(!response.ok)
        html = "valor nn encontrado"
    else{
        const data = await response.json()

        const tipos = data.types.map(type => type.type.name)
        const jogos = data.game_indices.map(game => game.version.name)

        html = `
            <img src="${data.sprites.front_default}" alt="imagem do pokemon ${data.name}">
            <h2>${(data.name).toUpperCase()}</h2>
            <p id="altura"><span>Altura:</span> ${data.height / 10} m</p>
            <p id="peso"><span>Peso:</span> ${data.weight / 10} kg</p>
            <p id="pokedex"><span>Nº Pokedex:</span> ${data.order}</p>
            <div>
                <h3>Tipos:</h3>
                <ul>
                    ${tipos.map(tipo => `<li>${tipo}</li>`).join('')}
                </ul>
            </div>
            <div>
                <h3>Jogos:</h3>
                <ul>
                    ${jogos.map(jogo => `<li>${jogo}</li>`).join('')}
                </ul>
            </div>
        `
    }

    document.querySelector('div').innerHTML = html

}

fetchPokemon()