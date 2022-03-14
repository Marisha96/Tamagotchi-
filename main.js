function myName() {
  let tamaName = prompt("Please enter your name", "");
  if (tamaName != null) {
    document.getElementById("tama").innerHTML =
      "Hello " + tamaName + "! Are you ready to play?";
  } 
  main()
} 
let agePet = 0
let hunger = 0
let bore = 0
let sleep = 0



function main() {
  ageCount();
  hungerCount();
  boreCount();
  sleepCount();
}



let ageCounter = null;
let hungerCounter = null
let boreCounter = null
let sleepCounter = null



const feedEl = document.getElementById("btn-feed");
const sleepEl = document.getElementById("btn-sleep");
const playEl = document.getElementById("btn-play");
const resetEl = document.getElementById("btn-reset");
const age = document.getElementById("age")
const hungry = document.getElementById("feed")
const rest = document.getElementById("sleep")
const bone = document.getElementById("play")
const sleepiness = document.getElementById("sleep")
const boredom = document.getElementById("play")
const petAlive = document.getElementById("alive")



feedEl.addEventListener('click', feedClick);
sleepEl.addEventListener('click', sleepClick);
playEl.addEventListener('click', playClick);
resetEl.addEventListener('click', resetClick);



function ageCount() {
  ageCounter = setInterval(function () {
    // increment the age of pet
    //  this increment the age of pet
    agePet++;
    age.innerText = "Age: " + agePet;
    if (hunger == 10 || bore == 10 || sleep == 10)
      // stop the timer if any of the above condition satsfies
      clearInterval(ageCounter);
    // time interval is set as 1 minute
    // time interval is set as 2 minutes
  }, 2000);
}

// function to increment the hunger
// / to increment the hunger
function hungerCount() {
  hungerCounter = setInterval(function () {
    hunger++;
    hungry.innerText = "Hunger: " + hunger;
    if (hunger == 10)
      // if the value of bore reaches the value 10 first then display the message 
      petAlive.innerText = "Your pet died of hunger. ";
    // if the value of boredom reaches the value 10 first then display the message 
    petAlive.innerText = " Tama died of hunger. ";
    document.getElementById("tam").src = "images/cry.jpeg"
    if (hunger == 10 || bore == 10 || sleep == 8)
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
    if (bore == 10)
      boredom.innerText = "Boredom: " + bore;
    if (bore == 6)
      // if the value of bore reaches the value 10 first then display the message 
      petAlive.innerText = "Your pet died of boredom. ";
    document.getElementById("tam").src = "images/sleepy.jpeg"
    if (hunger == 10 || bore == 10 || sleep == 10)
      petAlive.innerText = "Tama died of boredom. ";

    if (hunger == 7 || bore == 10 || sleep == 4)
      // stop the timer if any of the above condition satsfies
      clearInterval(boreCounter);
    // time interval is set as 1 second
  }, 3000);

}

// function to increment the sleep

function sleepCount() {
  sleepCounter = setInterval(function () {
    sleep++;
    sleepiness.innerText = "Sleepiness: " + sleep;
    if (sleep == 10)
      sleepiness.innerText = "Sleepiness: " + sleep;
    if (sleep == 8)
      // if the value of bore reaches the value 10 first then display the message 

      petAlive.innerText = "Your pet is tired.";
    if (hunger == 10 || bore == 10 || sleep == 8)
      petAlive.innerText = " Tama is tired.";
    document.getElementById("tam").src = "images/sleepy.jpeg"
    if (hunger == 3 || bore == 8 || sleep == 10)

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



function sleepClick() {
  sleep--;
  rest.innerText = "Rest: " + sleep;
  sleepiness.innerText = "Sleepiness: " + sleep;
};



function playClick() {
  bore--;
  bone.innerText = "Bore: " + bore;
  boredom.innerText = "Boredom: " + bore;
};



function resetClick() {
  hunger = 0
  bore = 0
  sleep = 0
  agePet = 0
  hungry.innerText = "Hunger: " + hunger;
  bone.innerText = "Bore: " + bore;
  rest.innerText = "Rest: " + sleep;
  boredom.innerText = "Boredom: " + bore;
  sleepiness.innerText = "Sleepiness: " + sleep;
  age.innerText = "Age: " + agePet;
  // recursive call of main function to play the game infinitely
myName()
};