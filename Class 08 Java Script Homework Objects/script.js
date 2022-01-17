"run strict";
document.querySelector(".header").style.textAlign = "center";
document.querySelector(".header").style.backgroundColor = "grey";
document.querySelector("header").style.borderRadius = "20px";

//HOMEWORK PART 1

/*CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
name
kind
speak (method)
this method will take one parameter and will print in the console a message: 
e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
Bonus: enter the values from prompt or from HTML inputs*/

// let animal = {
//     name: "Max",
//     kind: "Dog",
//     speak: function(say) {
//         return `${this.kind} says: ${say}`;
//     },
// };
// let theDogSpeaks = animal.speak(
//     prompt("If the animal could talk, what would it say?")
// );
// document.querySelector("#print").innerHTML = theDogSpeaks;

// Just for Fun

// function Animal(nameInput, kindInput) {
//     this.name = nameInput;
//     this.kind = kindInput;
//     this.say = function() {
//         if (this.name === "Rex") {
//             return `${this.name} the ${this.kind} says: WOOF WOOF !!`;
//         } else {
//             return `${this.name} the ${this.kind} says: Meow Prr`;
//         }
//     };
// }

// let theDog = new Animal("Rex", "Dog");
// let theCat = new Animal("Dutchess", "Cat");
// console.log(theDog.say());
// console.log(theCat.say());

//HOMEWORK PART 2
/*Write a JavaScript program to display the reading status of some book. 
The object should have the next properties: 
title, author, readingStatus and a method that will return info depending
on the readingStatus e.g.

Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mocking jay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML*/

// function Books(inputTitle, inputAuthor, inputReadingStatus) {
//     this.title = inputTitle;
//     this.author = inputAuthor;
//     this.readingStatus = inputReadingStatus;
//     this.toRead = function() {
//         if (this.readingStatus === true) {
//             return `Already read ${this.title} by ${this.author}`;
//         } else {
//             return `You still need to read 'Mocking jay: The Final Book of The Hunger Games' by Suzanne Collins`;
//         }
//     };
//     console.log(this.toRead());
// }
// let myBook = new Books("The Robots of dawn", "Isaac Asimov", true);

// Solution 2 with data from HTML inputs, lets have some fun😁!

let books = [];

const addBook = (ev) => {
    ev.preventDefault(); //to stop the form submitting
    let book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        check: document.querySelector('input[name="radio"]:checked').value,
        status: function() {
            if (this.check === "true") {
                return (document.querySelector(
                    "#msg"
                ).innerHTML = `Congratulations🥳!! You read ${this.title} by ${this.author}. Next Book to read is: ${booksToRead[randomBook]}`);
            } else this.check === "false";
            return (document.querySelector(
                "#msg"
            ).innerHTML = `Please finish reading ${this.title} by ${this.author} first📖`);
        },
    };
    console.log(book.status());

    books.push(book);
    document.querySelector("form").reset();
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn").addEventListener("click", addBook);
});

let booksToRead = [
    "Mocking jay: The Final Book of The Hunger Games by Suzanne Collins.",
    "Lord of the Rings: The two towers by J.R.R. Tolkien.",
    "Gone Girl by Gillian Flynn.",
    "Angels and demons by Dan Brown.",
    "Frankenstein by Mary Shelly",
    "Dracula by Bram Stroker",
    "Dr.Jekyll and Mr.Hyde by Robert Louis Stevenson",
    "War of the Worlds by H.G.Wells",
    "The Count of Monte Cristo by Alexsandre Dumas",
    "The mysterious island by Jules Verne",
];

const randomBook = Math.floor(Math.random() * booksToRead.length);
console.log(booksToRead[randomBook]);