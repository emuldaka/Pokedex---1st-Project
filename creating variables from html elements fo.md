creating variables from html elements for pokedex, searchInput, searchButton, searchTypeInput and serachTypeButton that I will use later to create our search buttons/event listeners.

make an array called pokemonData to store pokemon and all the pokemonData I want (this data is the data I are mapping below using the promise.all so that I only have the pokemon name, image, type and ID).

creating a fetch function to store all 150 pokemon in the array I also creat called promise (it itterates .....).

the promises.all is ittirating through all our json data I stored above in the promise array, the data curently in the promise array has way too much data I dont need(https://pokeapi.co/ has hundreds of lines of code and info per pokemon), the promise.all will make the function displayPokemon _wait_ until it has mapped our new data from the promise array to the pokemonData array (essentially waiting for the data in the function to finish processing so I dont hit the display funtion before our previous function finishes since it has to itterate through all that data and javascript is asynchronos).

I then execute displayPokemon to display the array pokemonData which now contains all 150 pokemon with only their name, type and image. (id is hidden but will be used for search purposes later).

the next step was taking that data I have and adding it to our html (I created css for the card containing all the displayed data for one pokemon on one card but also created css for the individual classes for image, title and subtitle so I can change those in different ways while making event listeners for the whole card). These cards are then displayed on a grid pattern using css.

next I wanted to make it so the page loads with everything hidden and reveals all data on click (this is why I created a class for card so I can change all the info and image with one click instead of each needing to be clicked). The purpose of this was to replicate a "whose that pokemon?" feel from the show.
I began by creating.

we then grab the html tags we want to modify from the dom.

we then use an event lisenter to change the css class on click (this changes the hidden cards to revealed).

next I created a search button that uses an event listener, you can type a pokemons name and it will filter and display only the searched pokemon using code similar to above.

I then created another search button to filter by type using a seperate event listener. This will filter through all pokemon with the searched type and only show those.

fetchPokemon grabs data from the pokemon api https://pokeapi.co/
