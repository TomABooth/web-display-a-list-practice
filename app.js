// import functions and grab DOM elements
import { candies } from './candies-data.js';
import { renderCandy } from './render-candy.js';

const candyList = document.getElementById('candy-list');

function displayCandies() {
    candyList.innerHTML = '';

    for (let candy of candies) {
        const candyEl = renderCandy(candy);
        candyList.append(candyEl);
    }
}

displayCandies();

import { bikes } from './bikes-data.js';
import { renderBike } from './render-bikes.js';

const bikeList = document.getElementById('bike-list');

function displayBikes() {
    bikeList.innerHTML = '';

    for (let bike of bikes) {
        const bikeEl = renderBike(bike);
        bikeList.append(bikeEl);
    }
}

displayBikes();
// initialize global state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
