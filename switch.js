
// switch method
// const grade = 60;

// switch (true) {
//     case grade >= 70:
//         console.log("Distinction");
//     break;

//     case grade >= 60:
//         console.log("Merit");
//         break;

//     case grade >= 50:
//             console.log("Pass");
//         break;

//     default:
//             console.log("Failed");
// }

// // if else method

// let grade01 = 51;

// if (grade01 >= 70){
//     console.log("Distintion");
// }
// else if (grade01 >= 60){
//     console.log("Merit");
// }
//  else if (grade01 >= 50){
//     console.log("Pass");
//  }
//  else {
//      console.log("failed");
//  }

//  Activity: 
//  Create a variable called myAge. an if statetment that logs Yes I can serve you
//   if age is grater tahn 17 and els logs you arent old enought

// let age = 18
// if (age > 17){
//     console.log(" yes I can serve you");
//     }
// else if (age <= 17){
//     console.log( "You aren't old enough");

// }

//Activity:part b

// no funciona no se por que 

// let country = "UK";
// let newAge = 16 ;
// if (newAge > 17 && country == "UK"){
//     console.log("yes I can serve you");
//     }
// else if (newAge <= 17 && country == "USA"){
//     console.log( "You aren't old enough you need to be 21 in the USA");
// }

// Activity on switch case:
// Create a variable for any pizza topping.
// Create a switch statement, if the topping is one of your favourite ingredients, 
// log to the console “These are important ingredients for my pizza.” If you don’t mind
//  having sausage or onions for example, log to the console “I don’t mind having ${topping} 
//  on my pizza.” Finally, for any toppings you don’t like log ${topping} should not be on a pizza.”
 
// let pizzaTopping = "chicken";

// switch (pizzaTopping){
//     case "Tuna":
//     case "onion":
//     case "Ham":
//     case "red pepper":
//         console.log("These are important ingredients for my pizza");
//         break;
//     case "Sausage":
//     case "chicken":
//         console.log(`I don’t mind having ${pizzaTopping} on my pizza`);
//         break;
//     default:    
//          console.log(`${pizzaTopping} should not be on a pizza.`);         
    
// }

// Challenge 1(if/else):
// Create a variable called password.
// Check how many letters are in the password, if there are less than 8 log to the 
// console that the password is too short. Otherwise log the password to the console.

// let password = "Coon";
// if (password.length < 8 ){
// console.log("Password is too short");
// }
// else  {
//     console.log(password);

// }

// Challenge 2(use both if/else and switch):
// Create a variable called num.
// Check if the variable is divisible by 3 or 5. If it is log 
// “This number is divisible by 3 or 5” to the console. 
// Otherwise log “This number is not divisible by 3 or 5”.
 

// let num = 15

// if (num % 3 == 0 || num % 5 == 0 ){
// console.log (" This number is divisible by 3 or 5")
// }
// else {
//     console.log("Your number is not divisible by 3 or 5")
// }

// Challenge 3:
// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console, 
// if it’s divisible by 5 log “buzz” to the console, 
// if it’s divisible by both 3 and 5 log “fizz buzz” 
// to the console. Otherwise log num to the console.


// let num = 31;


// if  (num % 3 == 0 && num % 5 == 0){
//     console.log("fizz buzz")
// }

// else if (num % 3 != 0 && num % 5 == 0){
//     console.log("buzz") 

// }
// else if (num % 3 == 0 && num % 5 != 0){
//     console.log("fizz")
// }
// else {
// console.log(num);
// } 


// Challenge 4:
// Create a variable called num.
// Check if the number is a palindrome
//  (looks the same forward as it does backwards e.g. 1001 or 20202).

// let num = 2002

// function isPalindrome(num){
//     let arr = num.toString().split("");
//     let reversed = arr.reverse().join("");
//     return num == reversed;
// }

// console.log(isPalindrome(num)); 

// Challenge 5:
// Create a variable called time, a variable called 
// placeOfWork and a variable called townOfHome. 
// Create an if statement that logs to the console where
//  someone is at times of the day. E.g. if the time is 7 I’m at home, 
//  at 8 I’m commuting, at 9 I’m at work

// let time = 9;
// let placeOfWork = " Google HQ "
// let townOfHome = " Los Angeles "

// if (time <= 6  ){
//     console.log("I'm at" + placeOfWork + " working nonstop");
// }
// else if (time >= 7){
//     console.log("I'm chilling in my penthouse in " + townOfHome);
// }

// Challenge 6:
// Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. 
// Find the index of a last vowel in the string.
 







// Challenge 7:
// Create a variable called word that takes a string. 
// Create an if statement that checks if the last letter is the 
// same as the first. If it is return true, otherwise return false.

let word = "Hello Word";

if (word )














// Challenge 8:
// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the sum is even. 
// If it is return the number, otherwise return the numbers multiplied together.
 