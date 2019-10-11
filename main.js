import { films } from '/assets/films.js';
import { people } from '/assets/people.js';
import { starships } from '/assets/starships.js';
console.log(starships);


console.log(films);

let mainArea = document.querySelector('main')

// for each loops through each element and console logs it
// films.forEach(function (film) {
//     let filmdiv = document.createElement('div');
//     let filmTitle = document.createElement('h1');
//     let filmCrawl = document.createElement('p');
//     // console.log(film);

//     filmTitle.textContent = film.title;
//     filmCrawl.textContent = film.opening_crawl;

//     filmdiv.appendChild(filmTitle);
//     filmdiv.appendChild(filmCrawl);

//     mainArea.appendChild(filmdiv);
// });
function addElement() {
    // create a new div element 
    var newDiv = document.createElement("div");
    // and give it some content 
    var newContent = document.createTextNode("Hi there and greetings!");
    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

people.forEach((person) => {
    let personDiv = document.createElement('div');
    personDiv.classList.add('person-div');
    let name = document.createElement('h1');
    let gender = document.createElement('p');
    let pic = document.createElement('img');

    let charNum = getCharNumber(person.url);

    getCharNumber(person.url);

    name.textContent = person.name;
    gender.textContent = person.gender;
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;

    personDiv.appendChild(name);
    personDiv.appendChild(gender);
    personDiv.appendChild(pic);
    mainArea.appendChild(personDiv);

});

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID
    }
}
function getPerNumber(url) {
    let sliceStart = url.slice()
}



// let starWarsTitles = document.querySelector('.movie-titles');

// //create new array with film titles in them 
// const movieNames = films.map((film) => {
//     return film.title
// })
// const crawls = films.map((film) => {
//     return film.crawl
// })
// console.log(crawls);


// //this logs all the movie titles in the new array called movie names/
// //ADDS ALL TITLES IN A SINGLE H1
// console.log(movieNames);
// for (let i = 0; i < movieNames.length; i++) {
//     console.log(movieNames[i])
//     starWarsTitles.textContent = movieNames;
// }
// console.log(films[0].opening_crawl)
// //set variables to make it easier to read the code


// let card1 = {
//     title: films[0].title,
//     crawl: films[0].opening_crawl,
//     character: films[0].characters[2],
//     producer: films[0].producer

// }
// var item1 = document.querySelector('#cardOne')
// item1.innerHTML = `${card1.title}:  ${card1.crawl} 
// <h1> Produced by ${card1.producer}</h1>`;
// let htmlImageElement = new Image(100, 100)
// htmlImageElement.src = 'card1.character';
// document.body.appendChild(htmlImageElement);
// console.log(card1)







// let childElement;
// let appendChildElement;
// let parentElement;


// // Bind to id movie-titles Div
// //MEDIUM ARTICLE OUTLINING PROCESS IN A SIMILAR WAY.
// // https://codeburst.io/learn-how-to-create-html-elements-with-plain-javascript-4f1323f96252
// //ADDS ALL TITLES IN INDIVIDUAL DIVS----------------------------------
// parentElement = document.getElementById('movie-titles');
// console.log(films[0])
// for (let i = 0; i < movieNames.length; i++) {
//     console.log(movieNames[i])
//     childElement = document.createElement('div');
//     appendChildElement = parentElement.appendChild(childElement)
//     appendChildElement.innerHTML = films[i].title;

// }

