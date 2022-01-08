'use strict';

// Homework #1

/*Create a function called tellStory()
The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
The function should return one big string with a story made from the arguments
Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
The value that is returned from the function should be printed in the console or in alert*/

console.log('---------------Homework #1---------------');

const param = ['Mike', 'happy', 'studying'];

const tellStory = function(name, mood, activity) {
    console.log(`This is ${name}. ${name} is a nice person. Today he is ${mood}. He is ${activity} all day. The end.`)
}
tellStory(param[0], param[1], param[2]);

// Homework #2

/*Write a function that will take an array of 5 numbers as an argument and return the sum.
Print it in the console or in alert
BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.*/

console.log('---------------Homework #2---------------');

const arrayOfNumbers = [20, 400, 90, 1250, 800];

const calculateSum = function(array) {
    let sumOfNumbers = 0;
    for(let i = 0; i < array.length; i++) {
        if(validateNumber(array[i])) {
            sumOfNumbers += array[i];
        } else return "Request error ⚠️ (Invalid number in Array)"
    }
    return `The sum of numbers in the array is: ${sumOfNumbers}`;
}
calculateSum(arrayOfNumbers);


function validateNumber(value) {
    if(typeof value === "number"){
        return true;
    } else return false;
       
 }
 

console.log(calculateSum(arrayOfNumbers));

// HOMEWORK #1 LOOPS

/* Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC!" */


console.log('---------------Homework #1 LOOPS---------------');

const arrayOfStrings = ['Hello', 'there', 'student', 'of', 'SEDC', '!'];

const sumOfStrings = function(strings) {
    let sum = '';
    for( let i = 0; i < strings.length; i++) {
      sum += strings[i];
    }
    return sum;
}

console.log(sumOfStrings(arrayOfStrings.join(' ')));

// HOMEWORK #2 Title: Looping structures

/*Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.
*/

console.log('---------------Homework #2 LOOPS---------------');

for(let rep = 1; rep <= 20; rep++) {
    console.log(rep);
    if(rep % 2 === 0) {
        console.log(`\n`);
    } else {
        console.log(" ");
    }
}

//  HOMEWORK #3 Looping structures

/*Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it*/

console.log('---------------Homework #3 LOOPS---------------');


const arrayOfNumbers1 = [25, 87, 90, 150, 300, 1500, 5];

const sumCalculator = function(randomArray) {
    let min = Infinity;
    let max = -Infinity;
    for(let number of randomArray) {
        if(number < min) {
            min = number;
        }
        if(number > max) {
            max = number;
        }   
    } 
    return `The sum of ${min} the smallest number and ${max} the largest number in the Array is: ${min + max}`

}
console.log(sumCalculator(arrayOfNumbers1));

// HOMEWORK #4 Looping structures

/*Description: Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]*/


console.log('---------------Homework #4 Looping structures ---------------');

const firstNames = ["Ron", "Tom", "Harry"]
const lastNames = ["Wesley", "Riddle", "Potter"]



const studentFullNames = function (fname, lname) {
    const fullNames = [];
    for(let i = 0; i < fname.length; i ++) {
        fullNames.push(`${fname[i]} ${lname[i]}`);
    }
    return `Students full name:${fullNames}`;
}
console.log(studentFullNames(firstNames, lastNames));

// Winter Homework exercise functions 1

/*Task 1: Convert Minutes into Seconds
Write a function that takes an integer minutes and converts it to seconds.
*/

console.log('---------------Task 1: Convert Minutes into Seconds---------------');

const minToSecondConverter = function (parameter) {
    const result = parameter * 60;
    if(parameter > 1) {
        return `${parameter} minutes are equal to ${result} seconds`
    } else 
    return `${parameter} minute is equal to ${result} seconds` ;
}

// console.log(minToSecondConverter(parseInt(prompt())));



// Winter Homework exercise functions 2 

/* Task 2: Return the Next Number from the Integer Passed
 Create a function that takes a number as an argument, increments the number by +1 and returns the result.*/

console.log('---------------Task 2: Return the Next Number from the Integer Passed---------------');

const incrementingNumber = function (parameter) {
    const result = parameter + 1;
    return result;
}

console.log(incrementingNumber(3));



// Winter Homework exercise functions 3 

/*Task 3: Convert Hours into Seconds
Write a function that converts hours into seconds.*/

console.log('---------------Task 3: Convert Hours into Seconds---------------');

const hourToSecondConverter = function (parameter) {
    const result = parameter * 3600;
    if(parameter > 1) {
        return `${parameter} hours are equal to ${result} seconds`
    } else 
    return `${parameter} hour is equal to ${result} seconds` ;
}

// console.log(hourToSecondConverter(parseInt(prompt())));



// Winter Homework exercise functions 4

/* Task 4: Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. 
// The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value */

console.log('---------------Task 4: Return the Remainder from Two Numbers---------------');

const getTheRemainder = function (para1, para2) {
    const result = para1 % para2;
    return  `The Remainder of ${para1} & ${para2} is ${result}`;
}

console.log(getTheRemainder(13 ,5 ));


// Winter Homework exercise functions 5

/*Task 5: The Farm Problem
In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species: 

chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.*/

console.log('---------------Task 5: The Farm Problem---------------');


const legCounter = function (chicken, cow, pigs) {
    const result = (chicken * 2) + (cow * 4) + (pigs * 4);
    return `The total number of legs of all the animals is: ${result}`;

}

console.log(legCounter(1 ,5 , 1));

// Winter Homework exercise functions 6 

/*Task 6: Compare Strings by Count of Characters
Create a function that takes two strings as arguments and return either true or false depending on whether the total number of 
characters in the first string is equal to the total number of characters in the second string.*/

console.log('---------------Task 6: Compare Strings by Count of Characters---------------');

const stringCounter = function (string1, string2) {
    if(string1.length === string2.length) {
        return true;
    } else {
        return false;
    }
}

console.log(stringCounter('otorhinolaryngology', 'Immunoelectrophoretically'));


// Winter Homework exercise functions 7 

/*Task 7: Is the Word Singular or Plural?
Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".*/

console.log('---------------Task 7: Is the Word Singular or Plural?---------------');

const isItPlural = function (parameter) {
    
    const res = parameter.charAt(parameter.length - 1);
    if(res === 's') {
        return 'This word is a Plural word'
    } else {
        return 'This word is a Singular word'
    }
}

console.log(isItPlural('Cows'));


// Winter Homework exercise functions 8

/*Task 8: Case Insensitive Comparison
Write a function that validates whether two strings are identical. Make it case insensitive.*/


console.log('---------------Task 8: Case Insensitive Comparison---------------');

const compare = function (string1, string2) {
    return typeof string1 === 'string' && typeof string2 === 'string' ? string1.localeCompare(string2, undefined, { sensitivity: 'accent' }) === 0
    : string1 === string2;
}

console.log(compare('Hello', 'hello'));

// Winter Homework exercise functions 9


/*Task 9: Convert Number to Corresponding Month Name
Create a function that takes a number and returns its corresponding month name as a string. For example, if you're given 3 as input, 
your function should return "March", because March is the 3rd month.*/

console.log('---------------Task 9: Convert Number to Corresponding Month Name---------------');

const convertNumberToMonth = function (parameter) {
    switch(parameter) {
        case 1: 
            console.log('January');
            break;
        case 2: 
            console.log('February');
            break;
        case 3:
            console.log('March');
            break;
        case 4: 
            console.log('April');
            break;
        case 5: 
            console.log('May');
            break;
        case 6:
            console.log('June');
            break;
        case 7: 
            console.log('July');
            break;
        case 8: 
            console.log('August');
            break;
        case 9:
            console.log('September');
            break;
        case 10:
            console.log('October');
            break;
        case 11:
            console.log('November');
            break;
        case 12:
            console.log('December');
            break;
        default:
            console.log('Enter only numbers from 1 to 12');
            break

    }
}

convertNumberToMonth(5);

// Winter Homework exercise functions 10

/*Task 10: Write a functions that accepts one parameter and checks if the parameter is a Truthy or Falsy?*/


console.log('---------------Task 10: Write a functions that accepts one parameter and checks if the parameter is a Truthy or Falsy?---------------');

const checkParameter = function (parameter) {
    if(parameter === true || parameter === false || parameter === 0 || parameter === -0 || parameter === '' || parameter === null || parameter === undefined || parameter === NaN) {
        return 'The value you entered is a falsy value'
    } else {
        return 'The value you entered is a truthy value'
    }
}

console.log(checkParameter(`0`));

// Winter Homework exercise Arrays Task 11 

// Task 0: Create an array
// Create a function that takes an number and creates array with all numbers till that number.

console.log('---------------Task 11: Create an array---------------');

let aboutToFill = [];
const arrayNumberCreator = function (from, to) {
    // Or instead "from" we can use "0" as of where the array will start to count, i used another parameter just for fun
    for( let i = from; i <= to; i++) {
        aboutToFill.push(i);
    } 
    
}

arrayNumberCreator(0, 10);
console.log(aboutToFill);

// Winter Homework exercise Arrays Task 12

/*Task 1: Return the First Element in an Array
Create a function that takes an array and returns the first element.*/

console.log('---------------Task 12: Return the First Element in an Array---------------');

const randomElementArray = [2311, null, false, true, 'string', 9, undefined];
const returnFirstElement = function (array) {
    for(let i = 0; i <= array.length; i++) {
        let firstElement = array[0];
        return firstElement;
    }
} 

console.log(returnFirstElement(randomElementArray));


// Winter Homework exercise Arrays Task 13 

/*Task 2: Reverse an Array
Write a function to reverse an array.*/

console.log('---------------Task 13: Reverse an Array---------------');

const reverseReturnArray = ['1991', 13, null, undefined, true, 1111];
const newReversedArray = [];

const reverseArray = function (array) {
    for(let i = 0; i < array.length; i++) {
        newReversedArray[i] = array[array.length - i - 1 ]
    }
    return newReversedArray
}

console.log(reverseArray(reverseReturnArray));

// Or

const reverseReturnArray2 = ['1991', 13, null, undefined, true, 1111];
const newReversedArray2 = [];

const reverseArray2 = function (array) {
    const newReversedArray2 = array.reverse();
    return newReversedArray2;
}

console.log(reverseArray2(reverseReturnArray2));

// Winter Homework exercise Arrays Task 14 

/*  Task 3: Find the Index
Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.*/


console.log('---------------Task 14: Find the Index---------------');


// const arrayOfElements = [20, 30, 40 , 50 , 60];


// let number = parseInt(prompt('Enter Number'));

// const index = arrayOfElements.findIndex(array =>  {
//     if(array === number) {
//         return array
//     } 
// }) 

// console.log(index);


// Winter Homework exercise Arrays Task 15 

/*Task 4: Check if an Array Contains a Given Number
Write a function to check if an array contains a particular number.*/

console.log('---------------Task 15: Check if an Array Contains a Given Number---------------');

// const arrayOfGivenNumbers = [100, 200, 300, 400, 500, 600];

// let enterNumber = parseInt(prompt('Search for Number'));

// const searchForANumber = function(array) {
//    for(let i = 0; i <= array.length; i++) {
//        if(array.includes(enterNumber) === true) {
//            return 'There is such a number in the Array'
//        } else {
//            return 'Ups, try again!'
//        }
//    }
// }

// console.log(searchForANumber(arrayOfGivenNumbers));

// Winter Homework exercise Arrays Task 16

/*Task 5: Negate the Array of Numbers
Given an array of numbers, negate all elements contained within.*/

console.log('---------------Task 16: Negate the Array of Numbers---------------');



const arrayToNegate = [-1, -5, 99, -88, 0, 200, -767];

const negateArray = function (array) {
   const negatedArray = array.map(value => - value)
    console.log(negatedArray);
}

negateArray(arrayToNegate);

// Winter Homework exercise Arrays Task 17

/*Task 6: Difference of Max and Min Numbers in Array
Create a function that takes an array and returns the difference between the biggest and smallest numbers.*/

console.log('---------------Task 17: Difference of Max and Min Numbers in Array---------------');

const maxAndMinNumbers = [-5, 50, -8, 128, -300, 1300, 0, -23];

const findDifference = function (array) {
    let max = Math.max.apply(null, array); 
    let min = Math.min.apply(null, array);
    let result = max - min ;
    return result;
    
}

console.log(findDifference(maxAndMinNumbers));

// Winter Homework exercise Arrays 18 

/*Task 7: Multiply by Length
Create a function to multiply all values in an array by the amount of values in that array.*/

console.log('---------------Task 18: Multiply by Length---------------');

const multiplyArray = [4, 60, 7, 80, 13];

const multiplyValues = function (array) {
    for(let i = 0; i < array.length; i++) {
       let length = array.length;
       let output = array.map(x => x * length);
       return output;
        
    }
}

console.log(multiplyValues(multiplyArray));

// Winter Homework exercise Arrays 19

/*Task 8: Hurdle Jump
// Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.
// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.*/

console.log('---------------Task 19: Hurdle Jump---------------');


const arrayOfHurdle = [5, 3, 7, 1, 4];
const arrayOfJumpersHeights = [6, 8, 6, 9, 10 ];

const compareHurdleAndHurdler = function (values1, values2) {
    for(let i =0; i <= values1.length; i++) {
        if(values1[i] <= values2[i]) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(compareHurdleAndHurdler(arrayOfHurdle, arrayOfJumpersHeights));

// Winter Homework exercise Arrays 20

/*// Task 9: Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.*/

console.log('---------------Task 20: Generate a Countdown of Numbers in an Array---------------');

let countDownArray = [];

const countDown = function (number) {
    const values = [...Array(number)].map((_,i) => i);
    const reverseValues = [...values].reverse();
    return reverseValues;
}

console.log(countDown(15));


// Or (More better)

let countDownArray2 = [];

const countDown2 = function (number) {
    for(let rep = number; rep >= 0; rep--) {
    countDownArray2.push(rep);
    }
}
countDown2(20)
console.log(countDownArray2);



// Winter Homework exercise Arrays 21

/* Task 10: Odd Up, Even Down
 Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.*/


console.log('---------------Task 21: Odd Up, Even Down---------------');



const arr = [2, 4, 6, 3, 5, 7];

arr.forEach(function(item, i) { if (item %2 === 0 ) arr[i] = item + 1; else { arr[i] = item - 1}});

console.log(arr);