import { films } from '/assets/films.js';
let starWarsTitles = document.querySelector('.movie-titles');
// console.log(films);
// console.log(films[0].title);
// console.log(films[0].opening_crawl);
let mainSection = document.querySelector('main');
// console.log(films[0].characters)

// console.log(Array.isArray(films));
// console.log(films[1].title);


//create new array with film titles in them 
const movieNames = films.map((film) => {
    return film.title
})
//this logs all the movie titles in the new array called movie names/
console.log(movieNames);
for (let i = 0; i < movieNames.length; i++) {
    console.log(movieNames[i])
    // document.createElement('div').textContent = movieNames[i];
    starWarsTitles.textContent = movieNames;
    // mainSection.appendChild(movieNames[i])




}
// movieNames.forEach(mainSection.appendChild(movieNames))
// SET DOM ELEMENTS FORM THE ASSET LIST
// starWarsTitles.textContent = movieNames[0];

let film1 = document.createElement('div');
let film2 = document.createElement('div');
let film3 = document.createElement('div');
let film4 = document.createElement('div');
let film5 = document.createElement('div');
let film6 = document.createElement('div');
let film7 = document.createElement('div');

film1.textContent = films[0].opening_crawl;
film2.textContent = films[1].opening_crawl;
film3.textContent = films[2].opening_crawl;
film4.textContent = films[3].opening_crawl;
film5.textContent = films[4].opening_crawl;
film6.textContent = films[5].opening_crawl;
film7.textContent = films[6].opening_crawl;

mainSection.appendChild(film1)
mainSection.appendChild(film2)
mainSection.appendChild(film3)
mainSection.appendChild(film4)
mainSection.appendChild(film5)
mainSection.appendChild(film6)
mainSection.appendChild(film7)


