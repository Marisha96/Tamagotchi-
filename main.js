// let myName = window.prompt("enter name please?");
// console.log("Hello", myName );
// document.getElementById("myButton").onclick = function () =>
// {
//     let myName = document.getElementById("myText").value;
//     console.log("Hello", myName);
// }

class Tamago {
    constructor(name) {
        this.age = 
        this.hunger = 2
        this.sleepiness = 1
        this.boredom =  7
    }
feedPet() {
this.hunger--
}
 boredPet() {
this.boredom--
 }
 SleepyPet() {
     this.sleepiness = this.sleepiness - 3
 }
}

const feedEl = document.getElementById("btn-feed");
const playEl = document.getElementById("btn-play");
const stopEl = document.getElementById("btn-stop");
const hungerEl = document.getElementById("count");
const ageEl = document.getElementById("age")
const boredomEl = document.getElementById("boredom")

let count = 5;
let myCounter = null;
// console.log(typeof(myCounter));
  
function handleFeedClick() {
  // console.log("start button clicked!");
  myCounter = setInterval(function(){
    count++;
    hungerEl.innerText = "Hunger: " + count;
  }, 3000);  
};
function handlePlayClick() {
    // console.log("pause button clicked!");
    clearInterval(myCounter);
  };

function handleStopClick() {
  // console.log("stop button clicked!");
  clearInterval(myCounter);
  count = 0;
  // console.log(count);
  hungerEl.innerText = "Hunger: " + count;
  ageEl.innerText = "Age: " + count;
};

feedEl.addEventListener('click', handleFeedClick);
playEl.addEventListener('click', handlePlayClick);
stopEl.addEventListener('click', handleStopClick);
































// const myHungry = document.getElementById("my-hungry");
// //  const myPlay = document.getElementById("my-play");

// const myHunger = document.getElementById("my-hunger");
// console.log(myHunger.innerText);





// let count = 0;


// const addOne = () => {
// // console.log("addTwo function invoked")
// count++;
// myHunger.innerText = count;
// console.log(count);
// };

// myHungry.addEventListener('click', addOne);
// myFeed.addEventListener('click',addOne);

// setInterval (addOne =  {
//       count++;
//       console.log(count);
//     }, 1000)



// const myFeed = document.getElementById("my-feed");

// const mySleepiness = document.getElementById("my-sleepiness")
// console.log(myFeed.innerText);



// const addTWO = () => {
//     num++;
//     myFeed.innerText = num;
//     console.log(num);
// };

// myFeed.addEventListener('click',addTWO);

