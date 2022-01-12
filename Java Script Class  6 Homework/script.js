for (article of document.getElementsByTagName('article')) {
    article.style.fontSize = '40px',
        article.style.fontWeight = '700',
        article.style.backgroundColor = 'green',
        article.style.textAlign = 'center'
}



// HOMEWORK PART 1

/*Change the page with JavaScript

Change the text of all paragraphs and headers with javascript
Note:The html must not be changed*/

const changeHeaderOne = document.getElementById('myTitle');
changeHeaderOne.innerText = 'I love Java Script!';
changeHeaderOne.style.color = 'red';

const changeParagraphOne = document.getElementsByClassName('paragraph')[0];
changeParagraphOne.innerHTML = 'This is the first Paragraph';
changeParagraphOne.style.color = 'pink';


const changeParagraphSecond = document.getElementsByClassName('second')[0];
changeParagraphSecond.innerHTML = 'This is the second Paragraph'
changeParagraphSecond.style.color = 'purple';

const changeText = document.getElementsByTagName('text')[0];
changeText.innerText = 'This is The <text> tag';
changeText.style.color = 'blue';

const changeHeaderInDiv = document.getElementsByTagName('h1')[1];
changeHeaderInDiv.innerText = 'This is the other Header'
changeHeaderInDiv.style.color = 'green';

const changeTheLastHeader = document.getElementsByTagName('h3')[0];
changeTheLastHeader.innerText = 'This is the last Header'
changeTheLastHeader.style.color = 'gray'

// HOMEWORK PART 2

/*Print all numbers from an array and the sum

Create an array with numbers
Print all numbers from the array in a list element, in a new HTML page
Print out the sum of all of the numbers below the list
Bonus: Try printing the whole mathematical equation as well ( 2 + 4 + 5 = 11)*/

const arrayOFNumbers = [2, 4, 5];

const myList = document.getElementById('list');
const printToHTML = function(parameter) {
    for (let numbers of parameter) {
        myList.innerHTML += `<li>${numbers}</li>`;
    }
}
printToHTML(arrayOFNumbers);

const mySum = document.getElementById('sum');
const sum = arrayOFNumbers.reduce(function(a, b) {
    return a + b;
}, 0);

mySum.innerHTML += `<h4>The sum of the array is: ${sum}<h4>`;


const myEquation = document.getElementById('equation');
const mathematicalEquation = function(parameter) {
    for (let i = 0; i <= parameter.length; i++) {}
    myEquation.innerHTML += `<h4>The mathematical equation is as followed: ${parameter[0]} + ${parameter[1]} + ${parameter[2]} = ${sum}<h4>`;

}
mathematicalEquation(arrayOFNumbers);

// Bonus Homework

/*Create a recipe page from inputs

Ask the user for the name of the recipe
Ask the user how many ingredients do we need for the recipe
Ask the user for the name of every ingredient
Print the name of the recipe in the HTML as heading element, ex: h1-h6
Print all ingredients as an unordered list in the HTML
Extra: Use a table if you want to be fancy :)*/


let nameOfRecipe = prompt('Enter name of a recipe');
let nameOfRecipePrint = document.getElementById('nameOfRec');
nameOfRecipePrint.innerText += `Name of recipe: ${nameOfRecipe}`;

let numberOfIngredients = prompt('Enter the number of ingredients');
let numberOfIngredientsPrint = document.getElementById('numberOfIng');
numberOfIngredientsPrint.innerText += `Number of Ingredients: ${numberOfIngredients}`;


let nameTheIngredients = [];
for (let i = 1; i <= numberOfIngredients; i++) {
    nameTheIngredients.push(prompt('Enter every ingredient'));
}

let ingredientsPrint = document.getElementById('ing');
const printIngredients = function(parameter) {
    for (strings of parameter) {
        ingredientsPrint.innerHTML += `<li>${strings}</li>`;
    }
}
printIngredients(nameTheIngredients);