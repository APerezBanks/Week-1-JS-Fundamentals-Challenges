let myName = "Alex";
let randomNum = Math.random();

console.log(myName);
console.log(myName.length);
console.log("Alex Perez".length);
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.toLowerCase(), myName. toUpperCase());

console.log(Math.random());
console.log(Math.floor(Math.random() * 6));

console.log("  |","  |");
console.log("  |","  |");
console.log("  |","  |");
console.log("---------");

console.log("  |","  |");
console.log("  |","  |");
console.log("  |","  |");
console.log("---------");

console.log("  |","  |");
console.log("  |","  |");
console.log("  |","  |");

// const _0x3680bf=_0x197d;function _0x1836(){const _0x528810=['log','96WPDZcQ','247343gsIbIT','821226pMmafD','2425824FarVJA','294547XPTLba','90kKodqG','200470CoyvEp','42108QcrFhn','2PfyGnq','9CvKXjP','\x20\x20\x20|\x20\x20\x20|\x20\x20\x20','62442bGTLOC','6nkULaV','------------'];_0x1836=function(){return _0x528810;};return _0x1836();}function _0x197d(_0x3a82c0,_0x2966cf){const _0x18361a=_0x1836();return _0x197d=function(_0x197d80,_0x535a61){_0x197d80=_0x197d80-0xf7;let _0x1b6a8d=_0x18361a[_0x197d80];return _0x1b6a8d;},_0x197d(_0x3a82c0,_0x2966cf);}(function(_0xff8849,_0x12bf2b){const _0x3686dc=_0x197d,_0x11def4=_0xff8849();while(!![]){try{const _0x207e1e=-parseInt(_0x3686dc(0x102))/0x1+-parseInt(_0x3686dc(0xfa))/0x2*(parseInt(_0x3686dc(0xfd))/0x3)+parseInt(_0x3686dc(0xf9))/0x4*(-parseInt(_0x3686dc(0xf7))/0x5)+parseInt(_0x3686dc(0xfe))/0x6*(parseInt(_0x3686dc(0x103))/0x7)+parseInt(_0x3686dc(0x104))/0x8+parseInt(_0x3686dc(0xfb))/0x9*(parseInt(_0x3686dc(0xf8))/0xa)+parseInt(_0x3686dc(0x105))/0xb*(parseInt(_0x3686dc(0x101))/0xc);if(_0x207e1e===_0x12bf2b)break;else _0x11def4['push'](_0x11def4['shift']());}catch(_0x5d28c5){_0x11def4['push'](_0x11def4['shift']());}}}(_0x1836,0x3022e));for(let x=0x0;x<0x3;x++){for(let i=0x0;i<0x3;i++){console[_0x3680bf(0x100)](_0x3680bf(0xfc));}(x===0x0||x===0x1)&&console['log'](_0x3680bf(0xff));}

console.log("All around the world".charAt(7).toUpperCase());
// solucion U.


let favDrink = "Latte";

console.log(favDrink);
console.log("My favourite drink is " + favDrink);

console.log(`My favourite drink is ${favDrink} because it's nice`);
// de esta forma cuando pones el simbolo $y abres {} metes el var (let) dentro de un string 
favDrink = "vimto"
// he cambiado el valor o el texto del var (let) favDrink

console.log(`My favourite drink is ${favDrink} because it's nice`);




// TUESDAY 11/02/22
// ACTIVITY 01 Write code that stores your name, age, and favourite colour The stored data must 
// be output to the console in a complete sentence 
// Why not stretch: use different method’s to manipulate your output

let myNameIs = "Alex";
let myAge = 34;
let favColour = "blue";

console.log(` My name is ${myNameIs} I'm ${myAge} old and my favourite colour is ${favColour}`);

// Activity 02 
//Write code which stores what you may eat today for breakfast, lunch, and dinner
//This must also be output to the console as a complete sentence
//Update the stored data and output the same sentence again to display the changes
//Why not stretch: use different method’s to manipulate your output

let breakfast = " porridge ";
let lunch = " pasta carbonara ";
let dinner = " chicken soup ";
console.log(` This morning I had ${breakfast} for breakfast, after I'm grabbing some ${lunch} for lunch. And I might have some ${dinner} for dinner later on.`);
breakfast = "coffee"
lunch = " pizza ";
console.log(` This morning I had ${breakfast} for breakfast, after I'm grabbing some ${lunch} for lunch. And I might have some ${dinner} for dinner later on.`);

console.log(dinner.toUpperCase());

//Activity 03 Write code which will calculate how many days from today’s date to your birthday
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



//Activity 4 (remember this?) :
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



// let array = ["x", "", "o",];
// array inside an array

let theGrid = [["o", "x", "o"], 
               ["o", " ", "o"], 
               ["x", " ", "o"]];
let toCheck;

for (let i = 0; i < 2; i++) {
    if (i == 0) {
        toCheck = "x";
    } else {
        toCheck = "o";
    }

    if (theGrid[0][0] == toCheck && theGrid[0][1] == toCheck && theGrid[0][2] == toCheck) {
        console.log("You won!");
    }
}






