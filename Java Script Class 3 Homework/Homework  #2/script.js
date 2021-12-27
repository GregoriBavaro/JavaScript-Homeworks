
// Solution with prompt for calculating "Dog to Human $ Human do Dog Years"
/*function calculator(type, number){
    if(type === 'Human'){
        return number * 7;
    } else(type === 'Dog')
        return number / 7;
    } 


let userTypeInput = prompt(`Enter "Dog" to calculate dog to human years or "Human" to calculate human to dog years:`);
let userNumberInput = parseInt(prompt("Enter number:"));
alert(calculator(userTypeInput, userNumberInput));
*/

// Homework #2

function ageCalculator(humanAge, dogAge) {
    let dogYears = 7*humanAge;
    let humanYears = dogAge/7;
    console.log(`${dogYears} Dog Years = ${humanYears} Human Years`)

}

ageCalculator(1, 7);
ageCalculator(2, 14);
ageCalculator(3, 21);
ageCalculator(4, 28);
ageCalculator(5, 35);
ageCalculator(6, 42);
ageCalculator(7, 49);
ageCalculator(8, 56);
ageCalculator(9, 63);
ageCalculator(10, 70);
ageCalculator(11, 77);
ageCalculator(12, 84);
ageCalculator(13, 91);
ageCalculator(14, 98);
ageCalculator(15, 105)