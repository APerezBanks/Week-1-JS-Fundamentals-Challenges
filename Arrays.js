

// ░█████╗░██████╗░██████╗░░█████╗░██╗░░░██╗
// ██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚██╗░██╔╝
// ███████║██████╔╝██████╔╝███████║░╚████╔╝░
// ██╔══██║██╔══██╗██╔══██╗██╔══██║░░╚██╔╝░░
// ██║░░██║██║░░██║██║░░██║██║░░██║░░░██║░░░
// ╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░



// Create a function with two parameters 
// that returns the result of the first parameter
//  to the power of (**)the second parameter.
// Then log the result to the console.


const power = (num1, num2) => {
      return num1 ** num2;
}
console.log(power(2, 3));

// to create a array we used []  for example let coffeOrder = ["", "", "" ]; 
// console.log(coffeeOrder);

// to declare an object {} , to create a function  const power = () => {}


let exampleArray = [ "item 1", "item 2", "item 3"];
console.log(exampleArray);
console.log(exampleArray[0]);
// to change item 2 for Something new 
exampleArray[1] = "Something new";
console.log(exampleArray[1]);
// count how many items in the array (list)
console.log(exampleArray.length);
// count length only one item
console.log(exampleArray[1].length);
// .push wil add it to the end of the array
exampleArray.push("item broken");
console.log(exampleArray);

//to remove something from a array .pop ( delete last on the list)
exampleArray.pop();
console.log(exampleArray);


///////////// activity 1//////////////

// Create a list of your favourite (website) music (3 of them), 
// and then add another two once you’ve created the list. 
// Then remove the last website.


let favMusic = [ "The Story so far", "Hundred Reasons","Post Malone"];
console.log(favMusic);
// add to the list with .push()
favMusic.push("A Day To Remember", "Bring me The Horizon");
console.log(favMusic);
// remove last use .pop()
favMusic.pop();

console.log(favMusic);

// Activity(2):
// Research on the following methods: map(), shift(), unshift(), slice(), splice() 
// (and many more). Create a program to demonstrate the uses of each method,
//  some of these you may need more than one example. (Pay attention: not all methods
//  would permanently update/make changes to the arrays themselves.)
 
// .map() creates a new array from calling a function for every array element.
// .shift() method removes the first item of an array.
// .unshift() method adds new elements to the beginning of an array.
// .slice() method returns selected elements in an array, as a new array.
// .splice() method adds and/or removes array elements.

//.map = Return a new array with the square root of all element values: 

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
console.log(newArr);

//.shift

let movies = ["the romantic","the comedy", "The horror"];
console.log(movies);
movies.shift();
console.log(movies);

//.unshift

movies.unshift("The action");

console.log(movies);


//.slice

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits);
const citrus = fruits.slice(1, 2);
// not sure why it only selects 1 not 2
console.log(citrus);


//.splice
// not working syntax will be:
// array.splice(index, howmany, item1, ....., itemX)

const fruits01 = ["Banana", "Orange", "Apple", "Mango"];
fruits01.splice(0, 1, "Lemon", "Kiwi");
console.log(fruits01);


// create a function for a sub sandwich order with 5 toppings,
//Create an array with 3 item, and then add another to the start using a method

// const subSand = (toppping1,toppping2,toppping3,toppping4,toppping5) => {
// }
 // esta parte esta mal mira el pdf   
// console.log(subSand("Tu sandwich contiene " + toppping1 + toppping2 + toppping3 + toppping4 + toppping5);

// subSand("lettuce","chicken","mayo","onion","bacon" );

let cosas = [ "cosa1", "cosa2", "cosa3"];
cosas.unshift("muchas cosas");
console.log(cosas);

let values = [1,2,3];
values.unshift(4);

console.log(values);












