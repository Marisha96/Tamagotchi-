// Added counter for each functions as below
let agePet = 0
let hunger = 0
let bore = 0
let sleep = 0

// calls each function when the page loads
window.onload = function main() {
  ageCount();
  hungerCount();
  boreCount();
  sleepCount();
}

// added each variable for the set interval function so we can stop the timer
// according to the condition we set
let ageCounter = null;
let hungerCounter = null
let boreCounter = null
let sleepCounter = null

// accessing the DOM elements of html
const feedEl = document.getElementById("btn-feed");
const sleepEl = document.getElementById("btn-sleep");
const playEl = document.getElementById("btn-play");
const resetEl = document.getElementById("btn-reset");
const age = document.getElementById("age")
const hungry = document.getElementById("feed")
const rest = document.getElementById("sleep")
const bone = document.getElementById("play")
const petAlive = document.getElementById("alive")

