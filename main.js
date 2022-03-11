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

// adding onclick function to each elements
feedEl.addEventListener('click', feedClick);
sleepEl.addEventListener('click', sleepClick);
playEl.addEventListener('click', playClick);
resetEl.addEventListener('click', resetClick);

// function to increment the age
function ageCount() {
  ageCounter = setInterval(function () {
      // increment the age of pet
      agePet++;
      age.innerText = "Age: " + agePet;
      if (hunger == 10 || bore == 10 || sleep == 10)
      // stop the timer if any of the above condition satsfies
          clearInterval(ageCounter);
  // time interval is set as 1 minute
  }, 2000); 
}

// function to increment the hunger
function hungerCount() {
  hungerCounter = setInterval(function () {
      hunger++;
      hungry.innerText = "Hunger: " + hunger;
      if (hunger == 10)
          // if the value of bore reaches the value 10 first then display the message 
          petAlive.innerText = "Your pet died of hunger. ";
          document.getElementById("tam").src="images/cry.jpeg"
          if (hunger == 10 || bore == 10 || sleep == 10)
          // stop the timer if any of the above condition satsfies
          clearInterval(hungerCounter);
  // time interval is set as .5 seconds
  }, 500);

}

// function to increment the boredom
function boreCount() {
  boreCounter = setInterval(function () {
      bore++;
      bone.innerText = "Bore: " + bore;
      if (bore == 20)
          // if the value of bore reaches the value 10 first then display the message 
          petAlive.innerText = "Your pet died of boredom. ";
          document.getElementById("tam").src="images/sleepy.jpeg"
          if (hunger == 20 || bore == 15 || sleep == 15)
          // stop the timer if any of the above condition satsfies
          clearInterval(boreCounter);
  // time interval is set as 1 second
  }, 3000);
}

// function to increment the sleep
function sleepCount() {
  sleepCounter = setInterval(function () {
      sleep++;
      rest.innerText = "Rest: " + sleep;
      if (sleep == 20) 
      // if the value of bore reaches the value 10 first then display the message 
     
      petAlive.innerText = "Your pet is tired.";
          if (hunger == 10 || bore == 10 || sleep == 10)
          
          // stop the timer if any of the above condition satsfies
          clearInterval(sleepCounter);
  // time interval is set as 2 seconds
  }, 2000);
}

// decrement the value of hunger when the feed button is pressed
function feedClick() {
  hunger--;
  hungry.innerText = "Hunger: " + hunger;
};

// decrement the value of sleep when the turn off lights button is pressed
function sleepClick() {
  sleep--;
  rest.innerText = "Rest: " + sleep;
};

// decrement the value of bore when the play button is pressed
function playClick() {
  bore--;
  bone.innerText = "Bore: " + bore;
};

// reset all value when the reset button is pressed
function resetClick() {
  hunger = 0
  bore = 0
  sleep = 0
  agePet = 0
  hungry.innerText = "Hunger: " + hunger;
  bone.innerText = "Bore: " + bore;
  rest.innerText = "Rest: " + sleep;
  age.innerText = "Age: " + agePet;
  // recursive call of main function to play the game infinitely
  main()
};