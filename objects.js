// create 3 finctions that each check one of the followings,
// Type od drinks available
// costs of drinks and remaining balance
// if the type of drink chosen is available and theres enough money left
// output you've got a good taste!

// let drinkType = ["coke","fanta","water","monster","rare Korean drink"];
// let cost = [ 1.50, 1.85, 1.20, 3, 3.65]
// let userBalance = 10;
// need to finish it




//create a object with your name

// const person = {
//     name; "Alex"
// };


// let myName = "Alex Banks";

// const person = {
//     firstName: "Alex",
//     lastName: "Banks",
//     age: 34,
//     looks: {
//         eyecolour: "blue",
//         hairColour: "blond",
//         array:["1","2","3"]
//     }
// };
// console.log(person.looks.array[1]);

// create an alarm

// 

// let day = "Saturday";
// let alarm = "";

// const alarm01 = {
//     weekendAlarm :"No alarm needed",
//     weekdayAlarm :"Get up at 7am",
// }
// if (day == "Saturday" || day == "Sundays"){
//     console.log(alarm01.weekendAlarm);
// }
//     else {
//         console.log(alarm01.weekdayAlarm);
//     }



// //  jordan cn approach //

// let alarm = "";
// let day = "Friday";

// const myAlarm = {
//     weekendAlarma: " no alarm needed",
//     weekdayArlama: "get up at 7am"
// }

// if (day == "Satuday" || day == "Sunday"){
//     alarm = myAlarm.weekendAlarma;
// } else {
//     alarm = myAlarm.weekdayAlarma;
// }
// console.log(alarm);

// no funciona lol



// Activity:
// Create an object called pet with key values of: name, 
// typeOfPet, age, colour
// And methods called eat and drink. They should return a 
// string saying [Your pet name] is eating/drinking.
 

// const pet = {
//     name:"Rainbow",
//     typerofPet: "Rat",
//     age: "14 months",
//     colour: " wet grey",

//     eat: () => {
//         console.log(`${pet.name} is debaoring`)
//     },
//     drink: () =>{
//         console.log(`${pet.name} is drinking`)
        
//     }
   
// };

// pet.eat("bits on the floor");
// pet.drink(" other rats blood");


// Jordan Approach //


const pet = {
        name:"Rainbow",
        typerofPet: "Rat",
        age: "14 months",
        colour: " wet grey",
    // function arrow seems not work return undefined
        // eat: () => {
        //     console.log(`${this.pet} is eating`);
        // so we change it to function method

            eat: function() {
                console.log(`${this.pet} is eating`);
            },
            drink: function() {
                console.log(`${this.name} is drinking`);
            },
            }
            
pet.eat();
pet.drink();