const fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
    if (i == 1) {
    }
    console.log(promises);
  }
};

Promise.all(promises).then((results) => {
  const pokemon = results.map((result) => ({
    name: result.name,
    image: result.sprites["front_default"],
    type: result.types.map((type) => type.type.name).join(", "),
    id: result.id,
  }));
  displayPokemon(pokemon);
});
