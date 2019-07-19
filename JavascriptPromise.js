const API_URL = "https://starwars.egghead.training/";
const output = document.getElementById("output");

output.innerText = "Loading...";

const responsePromise = fetch(API_URL + "films");
//console.log(responsePromise);
responsePromise.then(response => {
    return response.json();
    //console.log(response);
}).then(films => {
    const filmTitles = films
        .sort((a, b) => a.episode_id - b.episode_id)
        .map(film => `${film.episode_id}. ${film.title}`)
        .join("\n");

        output.innerText = filmTitles;
});