
let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping the grind.");
        coffeeIsGrinding = false;

    } else {
        console.log("Grinding is about to begin");
    }
}
pressGrindBeans();
pressGrindBeans();
pressGrindBeans();
pressGrindBeans();


let balance = 1000;
let amount = 100;
let accnumber = 50449921;
const cashWithdrawal = (amount, accnum) => {

    // aqui debajo se hace la resta
    balance = balance - amount;

    console.log(`withdrawing ${amount} from account ${accnum} your remaining balance is ${balance} `);

}

cashWithdrawal(amount, accnumber);







