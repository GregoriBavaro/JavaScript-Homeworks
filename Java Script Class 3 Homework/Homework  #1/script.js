
function callingParameters(parameterOne, parameterTwo, parameterThree, parameterFour, parameterFive) {
    let result = (`${typeof parameterOne}, ${typeof parameterTwo}, ${typeof parameterThree}, ${typeof parameterFour}, ${typeof parameterFive}`);
    
    console.log(result);
}

// Number
const parameterOne = 100;
// Undefined
let parameterTwo;
// Boolean
const parameterThree = 10 > 5;
// String
const parameterFour = "Hello JS";
// Object 
const parameterFive = {
    name: "Alex",
    surname: "Smith",
    age: 30,
};

callingParameters(parameterOne, parameterTwo, parameterThree, parameterFour, parameterFive);
callingParameters(parameterOne, parameterTwo, parameterThree, parameterFour, parameterFive);
callingParameters(parameterOne, parameterTwo, parameterThree, parameterFour, parameterFive);
callingParameters(parameterOne, parameterTwo, parameterThree, parameterFour, parameterFive);
callingParameters(parameterOne, parameterTwo, parameterThree, parameterFour, parameterFive);