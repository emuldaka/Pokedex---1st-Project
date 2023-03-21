const pokedex = document.getElementById("pokedex");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchTypeInput = document.getElementById("searchType-input");
const searchTypeButton = document.getElementById("searchType-button");

let pokemonData = [];

const fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    pokemonData = results.map((result) => ({
      name: result.name,
      image: result.sprites["front_default"],
      type: result.types.map((type) => type.type.name).join(", "),
      id: result.id,
    }));
    displayPokemon(pokemonData);
  });
};

const displayPokemon = (pokemon) => {
  const pokemonHTMLString = pokemon
    .map(
      (pokemon) => `
        <li class="card">
            <img class="card-image" src="${pokemon.image}"/>
            <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
            <p class="card-subtitle">Type: ${pokemon.type}</p>
        </li>
    `
    )
    .join("");
  pokedex.innerHTML = pokemonHTMLString;
  const pokemonCards = document.querySelectorAll(".card");

  pokemonCards.forEach((pokemon) => {
    const title = pokemon.querySelector(".card-title");
    const image = pokemon.querySelector(".card-image");
    const sub = pokemon.querySelector(".card-subtitle");

    pokemon.addEventListener("click", () => {
      image.classList.toggle("card-imageRevealed");
      title.classList.toggle("card-titleRevealed");
      sub.classList.toggle("card-subRevealed");
      // console.log(pokemon);
      // pokemon.classList.toggle("card-subRevealed");
      // pokemon.classList.toggle("card-titlesRevealed");
    });
  });
};

const searchPokemon = (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();
  const filteredPokemon = pokemonData.filter(
    (pokemon) => pokemon.name.toLowerCase() === searchTerm
  );

  const pokemonCards = document.querySelectorAll(".card");
  pokemonCards.forEach((pokemon) => {});
  displayPokemon(filteredPokemon);
};

const searchPokemonType = (event) => {
  event.preventDefault();
  const searchType = searchTypeInput.value.toLowerCase();
  const filterType = pokemonData.filter((pokemon) =>
    pokemon.type.includes(searchType)
  );
  const pokemonCards = document.querySelectorAll(".card");
  pokemonCards.forEach((pokemon) => {});
  displayPokemon(filterType);
};

searchButton.addEventListener("click", searchPokemon);

searchTypeButton.addEventListener("click", searchPokemonType);

fetchPokemon();
