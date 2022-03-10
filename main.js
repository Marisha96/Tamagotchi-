// let myName = window.prompt("enter name please?");
// console.log("Hello", myName );
// document.getElementById("myButton").onclick = function() {
//     let myName = document.getElementById("myText").value;
//     console.log("Hello", myName);
// }


const myHungry = document.getElementById("my-hungry");
//  const myPlay = document.getElementById("my-play");

const myHunger = document.getElementById("my-hunger");
console.log(myHunger.innerText);



let num = 0;


const addOne = () => {
// console.log("addTwo function invoked")
num++;
myHunger.innerText = num;
console.log(num);
};

myHungry.addEventListener('click', addOne);


const myFeed = document.getElementById("my-feed");

const mySleepiness = document.getElementById("my-sleepiness")
console.log(myFeed.innerText);


let count = 2 
const addThree = () => {
    count++
    myFeed.innerText = count;
    console.log(count);

};

myFeed.addEventListener('click',addThree);