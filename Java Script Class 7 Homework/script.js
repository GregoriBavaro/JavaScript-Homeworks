"use strict";

// HOMEWORK

/*CREATE A DYNAMIC TABLE
Write a Javascript function that will dynamically create a table
User should input the number of Column and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! :)*/

function makeTable() {
    let table = document.querySelector("#tab");
    let row = document.querySelector("#rows").value;
    let col = document.querySelector("#cols").value;

    for (let rowIndex = 1; rowIndex < row; rowIndex++) {
        let tr = document.createElement("tr");
        for (let colIndex = 1; colIndex < col; colIndex++) {
            let td = document.createElement("td");
            let text = document.createTextNode(`Column-${colIndex} Row-${rowIndex}`);

            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

document.querySelector("#create").addEventListener("click", makeTable);

// Table #2