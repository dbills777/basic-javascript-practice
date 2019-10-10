import { films } from '/assets/films.js';
let starWarsTitles = document.querySelector('.movie-titles');

//create new array with film titles in them 
const movieNames = films.map((film) => {
    return film.title
})
const crawls = films.map((film) => {
    return film.crawl
})
console.log(crawls);


//this logs all the movie titles in the new array called movie names/
//ADDS ALL TITLES IN A SINGLE H1
console.log(movieNames);
for (let i = 0; i < movieNames.length; i++) {
    console.log(movieNames[i])
    starWarsTitles.textContent = movieNames;
}
console.log(films[0].opening_crawl)
//set variables to make it easier to read the code


let card1 = {
    title: films[0].title,
    crawl: films[0].opening_crawl,
    character: films[0].characters[2]
}
var item1 = document.querySelector('#cardOne')
item1.innerHTML = `${card1.title}:  ${card1.crawl}`;
console.log(card1)


let childElement;
let appendChildElement;
let parentElement;


// Bind to id movie-titles Div
//MEDIUM ARTICLE OUTLINING PROCESS IN A SIMILAR WAY.
// https://codeburst.io/learn-how-to-create-html-elements-with-plain-javascript-4f1323f96252
//ADDS ALL TITLES IN INDIVIDUAL DIVS----------------------------------
parentElement = document.getElementById('movie-titles');
console.log(films[0])
for (let i = 0; i < movieNames.length; i++) {
    console.log(movieNames[i])
    childElement = document.createElement('div');
    appendChildElement = parentElement.appendChild(childElement)
    appendChildElement.innerHTML = films[i].title;

}

