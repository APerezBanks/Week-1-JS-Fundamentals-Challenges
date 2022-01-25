
// ────────────────────────────────────────────────────────────────────────────
// ─██████─────────██████████████─██████████████─██████████████─██████████████─
// ─██░░██─────────██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
// ─██░░██─────────██░░██████░░██─██░░██████░░██─██░░██████░░██─██░░██████████─
// ─██░░██─────────██░░██──██░░██─██░░██──██░░██─██░░██──██░░██─██░░██─────────
// ─██░░██─────────██░░██──██░░██─██░░██──██░░██─██░░██████░░██─██░░██████████─
// ─██░░██─────────██░░██──██░░██─██░░██──██░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
// ─██░░██─────────██░░██──██░░██─██░░██──██░░██─██░░██████████─██████████░░██─
// ─██░░██─────────██░░██──██░░██─██░░██──██░░██─██░░██─────────────────██░░██─
// ─██░░██████████─██░░██████░░██─██░░██████░░██─██░░██─────────██████████░░██─
// ─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░██─────────██░░░░░░░░░░██─
// ─██████████████─██████████████─██████████████─██████─────────██████████████─
// ────────────────────────────────────────────────────────────────────────────



//using for loops with if statement

let multiplesTwo = [];
for(let i = 0; i < 20; i++){
if (i % 2 == 0) {
    multiplesTwo.push(i);
    }
}

console.log(`Number divisible by 2 between 0 and 20 are : ${multiplesTwo}.`);

//  Using for loops with function



let randomNumber = 0;
while(randomNumber < 10 ) {
    console.log("random no. " + randomNumber + "\n Keep looping");
    randomNumber = ( Math.round(Math.random() * 20));
}
console.log("No more looping, with random no." + randomNumber);

///////////////////////////////////

let cards = [ "Diamond","Spade","heart","Club"];
let currentCard = "Club";

while(currentCard != "Spade"){
    console.log(currentCard);

    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);





// ░█████╗░░█████╗░████████╗██╗██╗░░░██╗██╗████████╗██╗░░░██╗
// ██╔══██╗██╔══██╗╚══██╔══╝██║██║░░░██║██║╚══██╔══╝╚██╗░██╔╝
// ███████║██║░░╚═╝░░░██║░░░██║╚██╗░██╔╝██║░░░██║░░░░╚████╔╝░
// ██╔══██║██║░░██╗░░░██║░░░██║░╚████╔╝░██║░░░██║░░░░░╚██╔╝░░
// ██║░░██║╚█████╔╝░░░██║░░░██║░░╚██╔╝░░██║░░░██║░░░░░░██║░░░
// ╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚═╝░░░╚═╝░░░╚═╝░░░╚═╝░░░░░░╚═╝░░░


// Activity(1):
// Create an array that lists your favourite films, up to 5 elements
// Add 2 more using a method
// Use a loop to cycle through the array
// for(let i = 0; ...){...}
 
let favouriteMovies = ["Romantic", "Horror","Comedy","Thriller","Adventure"];
favouriteMovies.push("Super Heroe", "Random")

console.log(favouriteMovies)

for(let i = 0; i < favouriteMovies.length; i++){
    console.log(favouriteMovies[i]);
}

// not sure if this is what the activity asks for

////////////////////////// Activity(2):////////////////////////

// Generate 6 random numbers between 1-50

for(let i = 0; i < 6; i++){ 
    console.log(Math.ceil(Math.random() * 49 + 1));
}
 
// I mean it works, but not sure if this is what they wanted us to do.



/////// Activity 3////////////////////

// If we can create a loop to put 0-9 on the screen,
//  how can we count from 9 to 0?

for(let i = 9; i > -1; i--){
    console.log(i);
}

////// Activity(4)://////

// Displays 4 films stored in an array
// Use a for loop to show each film in the array
// Create a function called filmCheck() that checks
//  if the 3rd film in the array is Ghostbusters.
// If it is, it should return “yey it’s ghostbusters”. 
// If it isn’t, it should return “booo, we want ghostbusters”
 
let films = ["SpiderCow","Batman007","Smurf at WW2G","Pigeon Attack 8"];

for(let i = 0; i < films.length; i++){
    console.log(films[i]);
}

const filmCheck = () => {
    if (films[2] === "Ghostbusters"){
        console.log(" yey it's Ghostbusters")
    }else {
        console.log("booo, we want Ghostbuster")
    }
}

filmCheck();


// //////Activity(5):///////


// Create a variable, generate a random number
//  between 1 and 30 six times, each random number generated, 
//  check if this number of divisible by 7 or not.
 

for ( let i = 0; i < 6; i++) {
    let randomNumberNew = Math.floor(Math.random() * 30) +1;
    if(randomNumberNew % 7 === 0) {
        console.log(randomNumberNew + " divisible by 7")
    } else {
        console.log(randomNumberNew + " not divsibile by 7")
    }
        
    }

//    /////// Activity(6):////////////


// Research on do...while loop, 
// find out about the difference between for loop, 
// while loop and do...while loop. Give an example of each. 
// What are the pros and cons?

//while loop

// A "While" Loop is used to repeat a specific block of code 
// an unknown number of times, until a condition is met.
// For example, if we want to ask a user for a number between 1 and 10,
// we don't know how many times the user may enter a larger number, 
// so we keep asking "while the number is not between 1 and 10".


// Syntax//////

// while (condition) {
//   // code block to be executed
// }

// example
let text = "";
let i = 0;
while (i < 10) {
    text += "The number is " + i;
    i++;
  }
console.log(text);

//Do while loop

//A “do while” loop is a control flow statement that executes a block of code 
// at least once, and then repeatedly executes the block, or not, 
// depending on a given Boolean condition at the end of the block.

// So the only difference between While loop and Do while loop is that the while 
// loop can end without executing any statement and Do while loop will end 
// only after executing one statement.

/////syntax//////

// do {
//     // code block to be executed
//   }
//   while (condition);


/////example//////

let text01 = ""
let y = 0;

do {
  text01 += " The number is " + y + "in this example";
  y++;
}
while (y < 10);  


console.log(text01);


// FOR LOOP

// a for-loop (or simply for loop) is a control flow statement 
// for specifying iteration, which allows code to be executed 
// repeatedly. If we (or the computer) knows exactly how many 
// times to execute a section of code (such as shuffling a deck of cards)
//  we use a for loop.

////syntax////

// for (initialExpression; condition; updateExpression) {
//     // for loop body
// }


// example // to display a text 5 times

// program to display text 5 times

const n = 5;

// looping from i = 1 to 5

for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}

// Activity(7)://
// Create a program that check all numbers
//  between 1 and 20, whether it is a prime number or not.
 
//In math, prime numbers are whole numbers greater than 1, that have only two factors – 1 and the number itself.
// Prime numbers are divisible only by the number 1 or itself. 



for (let i = 2; i <= 20; i++){
  i %= i == 0;
}
console.log(` ${i} is a prime number`);



// program to print prime numbers between the two numbers


// take input 
const lowerNumber = 1;
const higherNumber = 20;

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}




