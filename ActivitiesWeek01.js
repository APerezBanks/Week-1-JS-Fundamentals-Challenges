
// variables pdf activities


// ██╗░░░██╗░█████╗░██████╗░██╗░█████╗░██████╗░██╗░░░░░███████╗░██████╗
// ██║░░░██║██╔══██╗██╔══██╗██║██╔══██╗██╔══██╗██║░░░░░██╔════╝██╔════╝
// ╚██╗░██╔╝███████║██████╔╝██║███████║██████╦╝██║░░░░░█████╗░░╚█████╗░
// ░╚████╔╝░██╔══██║██╔══██╗██║██╔══██║██╔══██╗██║░░░░░██╔══╝░░░╚═══██╗
// ░░╚██╔╝░░██║░░██║██║░░██║██║██║░░██║██████╦╝███████╗███████╗██████╔╝
// ░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═╝░░╚═╝╚═════╝░╚══════╝╚══════╝╚═════╝░

// Activity 1

// Write code that stores your name, age, and favourite colour
// The stored data must be output to the console in a complete sentence
// Why not stretch: use different method’s to manipulate your output

let myNameIs = "Alex";
let myAge = 34;
let favColour = "blue";

console.log(` My name is ${myNameIs} I'm ${myAge} old and my favourite colour is ${favColour}`);

// Why not stretch: use different method’s to manipulate your output

console.log(` My name is ${myNameIs.toLocaleUpperCase()} I'm ${myAge} old and my favourite colour is ${favColour.toLowerCase()}`);

// Activity 02 

//Write code which stores what you may eat today for breakfast, lunch, and dinner
//This must also be output to the console as a complete sentence
//Update the stored data and output the same sentence again to display the changes


let breakfast = " porridge ";
let lunch = " pasta carbonara ";
let dinner = " chicken soup ";

console.log(` This morning I had ${breakfast} for breakfast, after I'm grabbing some ${lunch} for lunch. And I might have some ${dinner} for dinner later on.`);
breakfast = "coffee"
lunch = " pizza ";
console.log(` This morning I had ${breakfast} for breakfast, after I'm grabbing some ${lunch} for lunch. And I might have some ${dinner} for dinner later on.`);

//Why not stretch: use different method’s to manipulate your output


// not sure what to do here ? I've tried with breakfast.replace('porridge','baconegg') but doesnt do nothing.



//Activity 03 

//Write code which will calculate how many days from today’s date to your birthday
//This must also be output to the console as a complete sentence
//Why not stretch: why not calculate how many day’s since your birth?

let currentDay = new Date('01112022');

console.log("Todays date is the 11th January 2022");
console.log("My birthday is the 28th December");
today=new Date();

let bday=new Date(today.getFullYear(), 12, 28);
if (today.getMonth()==4 && today.getDate()>28) 
{
     bday.setFullYear(bday.getFullYear()+1); 
}

const oneDay = 24 * 60 * 60 * 1000;

console.log(Math.ceil((bday.getTime()-today.getTime())/(oneDay))+
" days left until my birthday!"); 

// literally copied this from desk4, no idea what's going on , did some research and do not undertand nothing, I was hopping it would
// be explained in class the next day, but wasn't... So... I guess I'll just move one

//Activity 4 

//(remember this?) :
//Create 9 variables - space1, space 2... space 9
//Assign either the value of ‘x’, ‘o’, ‘ ‘ to each of the variables
//Using template literals inject the variable data into your board
//Output this to the console
   
let space1 = " x "
let space2 = " o "
let space3 = "   "
let space4 = "   "
let space5 = " x "
let space6 = " o "
let space7 = "   "
let space8 = "   "
let space9 = "   "

console.log( space3 + "|" + space4 + "|" + space4)
console.log( space1 + "|" + space2 + "|" + space3)
console.log( space7 + "|" + space7 + "|" + space8)
console.log("-----------")
console.log( space3 + "|" + space4 + "|" + space4)
console.log( space1 + "|" + space1 + "|" + space3)
console.log( space7 + "|" + space7 + "|" + space8)
console.log("-----------")
console.log( space3 + "|" + space4 + "|" + space4)
console.log( space6 + "|" + space7 + "|" + space3)
console.log( space7 + "|" + space7 + "|" + space8)



// ─────────────────────────────────────────────────────────────────────────────────────────────
// ─██████████─██████████████────██████████████─██████─────────██████████████─██████████████────
// ─██░░░░░░██─██░░░░░░░░░░██────██░░░░░░░░░░██─██░░██─────────██░░░░░░░░░░██─██░░░░░░░░░░██────
// ─████░░████─██░░██████████────██░░██████████─██░░██─────────██░░██████████─██░░██████████────
// ───██░░██───██░░██────────────██░░██─────────██░░██─────────██░░██─────────██░░██────────────
// ───██░░██───██░░██████████────██░░██████████─██░░██─────────██░░██████████─██░░██████████────
// ───██░░██───██░░░░░░░░░░██────██░░░░░░░░░░██─██░░██─────────██░░░░░░░░░░██─██░░░░░░░░░░██────
// ───██░░██───██░░██████████────██░░██████████─██░░██─────────██████████░░██─██░░██████████────
// ───██░░██───██░░██────────────██░░██─────────██░░██─────────────────██░░██─██░░██────────────
// ─████░░████─██░░██────────────██░░██████████─██░░██████████─██████████░░██─██░░██████████────
// ─██░░░░░░██─██░░██────────────██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██────
// ─██████████─██████────────────██████████████─██████████████─██████████████─██████████████────
// ─────────────────────────────────────────────────────────────────────────────────────────────
// ───────────────────────────────────────────────────────────────────────────────────────────────
// ─██████████████─██████──────────██████─██████████─██████████████─██████████████─██████──██████─
// ─██░░░░░░░░░░██─██░░██──────────██░░██─██░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░██──██░░██─
// ─██░░██████████─██░░██──────────██░░██─████░░████─██████░░██████─██░░██████████─██░░██──██░░██─
// ─██░░██─────────██░░██──────────██░░██───██░░██───────██░░██─────██░░██─────────██░░██──██░░██─
// ─██░░██████████─██░░██──██████──██░░██───██░░██───────██░░██─────██░░██─────────██░░██████░░██─
// ─██░░░░░░░░░░██─██░░██──██░░██──██░░██───██░░██───────██░░██─────██░░██─────────██░░░░░░░░░░██─
// ─██████████░░██─██░░██──██░░██──██░░██───██░░██───────██░░██─────██░░██─────────██░░██████░░██─
// ─────────██░░██─██░░██████░░██████░░██───██░░██───────██░░██─────██░░██─────────██░░██──██░░██─
// ─██████████░░██─██░░░░░░░░░░░░░░░░░░██─████░░████─────██░░██─────██░░██████████─██░░██──██░░██─
// ─██░░░░░░░░░░██─██░░██████░░██████░░██─██░░░░░░██─────██░░██─────██░░░░░░░░░░██─██░░██──██░░██─
// ─██████████████─██████──██████──██████─██████████─────██████─────██████████████─██████──██████─
// ───────────────────────────────────────────────────────────────────────────────────────────────


///Activity:

// if (condition1) {
//     //do this
// }
// else if (condition2) {
// //do this
// } else {
//  //if nothing else matched do this
// }
// Create a variable called age.
// Write an if statement that logs “Yes I can serve you” 
// if age is greater than 17 and else logs “You aren’t old enough”.

let age = 18
if (age > 17){
    console.log("Yes I can serve you");
    }
else if (age <= 17){
    console.log( "You aren't old enough");

}

// Activity:

// Take your if statement and add a variable called country.
// Now check if age > 17 and country == “UK”

const newAge = 18
let country = "UK"
if (newAge > 17 && country == "UK"){
    console.log("Yes I can serve you")
}
else {
    console.log("No I cannot serve you")}

// Activity on switch case:


// Create a variable for any pizza topping.
// Create a switch statement, if the topping is one of your favourite ingredients, 
// log to the console “These are important ingredients for my pizza.” If you don’t mind
//  having sausage or onions for example, log to the console “I don’t mind having ${topping} 
//  on my pizza.” Finally, for any toppings you don’t like log ${topping} should not be on a pizza.”
 
let pizzaTopping = "chicken";

switch (pizzaTopping){
    case "Tuna":
    case "onion":
    case "Ham":
    case "red pepper":
        console.log("These are important ingredients for my pizza");
        break;
    case "Sausage":
    case "chicken":
        console.log(`I don’t mind having ${pizzaTopping} on my pizza`);
        break;
    default:    
         console.log(`${pizzaTopping} should not be on a pizza.`);         
    }


// Challenge 1(if/else):


// Create a variable called password.
// Check how many letters are in the password, if there are less than 8 
// log to the console that the password is too short. Otherwise log the password to the console.

let password = "Cuoo";
if (password.length < 8 ){
console.log("Password is too short");
}
else  {
    console.log(password);
}


// Challenge 2(use both if/else and switch):


// Create a variable called num.
// Check if the variable is divisible by 3 or 5. If it is log 
// “This number is divisible by 3 or 5” to the console. 
// Otherwise log “This number is not divisible by 3 or 5”.
 

let numN = 19

if (numN % 3 == 0 || numN % 5 == 0 ){
    // don't really understand why it has to be == 0 ?

console.log (" This number is divisible by 3 or 5")
}
else {
    console.log("Your number is not divisible by 3 or 5")
}

// Challenge 3:


// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console, 
// if it’s divisible by 5 log “buzz” to the console, 
// if it’s divisible by both 3 and 5 log “fizz buzz” 
// to the console. Otherwise log num to the console.


let numNew = 15;

if  (numNew % 3 == 0 && numNew % 5 == 0){
    console.log("fizz buzz");
}
// still don't now why we have to == to 0

else if (numNew % 3 != 0 && numNew % 5 == 0){
    console.log("buzz");

}
else if (numNew % 3 == 0 && numNew % 5 != 0){
    console.log("fizz");
}
else {
       console.log(numNew);
} 


// Challenge 4:

// Create a variable called num.
// Check if the number is a palindrome (looks the same forward 
// as it does backwards e.g. 1001 or 20202).


let numNew2 = 2002

function isPalindrome(numNew2){
    let arr = numNew2.toString().split("");
    let reversed = arr.reverse().join("");
    return numNew2 == reversed;
}

console.log(isPalindrome(numNew2)); 
 
// copied by wathing some video on youtube. have no idea how to do it otherwise


//Jordan CN code 

// For the palindrome challenge, few approaches of mine:

// Test cases:
// Input: 1221 Output: true
// Input: -1221 Output: false
// Input: 7 Output: true
// Input: 123 Output: false


// // Approach 1:

// function isPalindrome(x) {
//     let y = Math.floor(x.length / 2);
//     for (let i = 0; i < y; i++) {
//         if (x[i] !== x[x.length - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// }

//   console.log(isPalindrome("1221"));
//   console.log(isPalindrome("-1221"));
//   console.log(isPalindrome("7"));
//   console.log(isPalindrome("123"));


// // Approach 2:

// function revInt(x, input) {
//     if (x <= 0) { return input; }
//     input = ((input * 10) + (x % 10));
//     x = Math.floor(x / 10);
//     return revInt(x, input);
// }
// function isPalindrome(y) {
//     if (y < 0) { return false; }
//     return y === revInt(y, 0);
// }

// console.log(isPalindrome(1221));
// console.log(isPalindrome(-1221));
// console.log(isPalindrome(7));
// console.log(isPalindrome(123));


// Intentionally not using a string, food for thought 🙂

// Challenge 5:


// Create a variable called time, a variable called placeOfWork and
//  a variable called townOfHome. Create an if statement that logs 
//  to the console where someone is at times of the day.
//   E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

let time = 9;
let placeOfWork = " Google HQ "
let townOfHome = " Los Angeles "

if (time <= 6  ){
    console.log("I'm at" + placeOfWork + " working nonstop");
}
else if (time >= 7){
    console.log("I'm chilling in my penthouse in " + townOfHome);
}




// Challenge 6:

// Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. 
// Find the index of a last vowel in the string.
 
let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

let newStr = (str.lastIndexOf("i"));

console.log(`${newStr}`);

// no idea whats going here, just copied from Ethan. teacher did not explain it the next day 
// So.... no idea.

// Challenge 7:

// Create a variable called word that takes a string. Create an if statement 
// that checks if the last letter is the same as the first. If it is return true,
// otherwise return false.

let wordNew = "gtring";
if (wordNew.charAt(0) == wordNew.charAt(5)){
    console.log("TRUE");
}
else {
    console.log("FALSE");
}

// Challenge 8:



// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the sum is even. 
// If it is return the number, otherwise return the numbers multiplied together.
  
let num1 = 3;
let num2 = 3;
if ( (num1 + num2) % 2 == 0) {
    console.log(num1 + num2);
}
else {
    console.log(num1 * num2);
} 


