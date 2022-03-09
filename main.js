
const myHungry = document.getElementById("my-hungry");
 

const myHunger = document.getElementById("my-hunger");
console.log(myHunger.innerText);

let num = 0;




const addTwo = () => {
// console.log("addTwo function invoked")
num++;
myHunger.innerText = num;
console.log(num);
};

myHungry.addEventListener('click', addTwo);


