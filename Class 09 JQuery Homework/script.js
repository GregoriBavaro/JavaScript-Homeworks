"run strict";

$(document).ready(function() {
    // Homework part 1
    /*CREATE A GREETING APP WITH JQUERY
Create an input
Create a button
When clicked the button should print a greet message in an h1 header
Ex: input: Petko output message: Hello there Petko!

You must use JQuery to complete the task*/

    $("#btn").click(function() {
        let input = $("#input").val();
        let print = $("#msg").html(input);
        $("input:text").val("");
        return print;
    });

    $(".wrapper").css({
        border: "1px solid black",
        width: "30%",
        height: "150px",
        borderRadius: "8px",
        padding: "10px",
        backgroundColor: "#2222",
    });
    $("#btn").css({
        width: "80px",
        height: "30px",
    });
    $("#input").css({
        height: "24px",
    });
    $("#msg").css({
        border: "1px solid black",
        height: "95px",
        borderRadius: "8px",
        fontSize: "18px",
        backgroundColor: "#2245",
        fontWeight: "400",
        fontFamily: "Helvetica, Sans-Serif",
        padding: "5px",
    });
    $(".homework").css({
        fontFamily: "Helvetica, Sans-Serif",
        textAlign: "center",
        width: "30%",
        height: "30px",
        marginLeft: "10px",
    });

    //Homework Part 2
    /*Create a header generator

                    Create two inputs, one for text and one for color
                    Create a button that says: generate h1
                    Create an h3 element for messages
                    When the button is clicked create a new header below the inputs and button
                    The new header should have the text and color from the inputs
                    If the person enters an invalid color or an empty text show an error message to the message element
                    You must use JQuery to complete the task*/
    $("#btnTwo").text("Generate h1");
    $("label").text("Choose color:");

    $("#btnTwo").click(function() {
        let inputText = $("#inputText").val();
        let inputColor = $("#inputColor").val();
        let printTwo = $("#msgTwo");

        if (!$("#inputText:text").val()) {
            return printTwo.html("⛔Error! Text field is empty");
        } else if ($("#inputColor").val() === "#ffffff") {
            return printTwo.html(
                "⛔Invalid Color white⬜, please select some other color."
            );
        } else {
            return printTwo.html(inputText).css("color", inputColor);
        }
    });
    $(".wrapperTwo").css({
        border: "1px solid black",
        width: "30%",
        padding: "10px",
        borderRadius: "8px",
        height: "150px",
        backgroundColor: "#2222",
    });
    $("#btnTwo").css({
        height: "30px",
    });
    $("#inputText").css({
        height: "24px",
    });
    $("#inputColor").css({
        height: "30px",
        width: "30px",
        appearance: "none",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
    });

    $("#msgTwo").css({
        border: "1px solid black",
        height: "85px",
        borderRadius: "8px",
        fontSize: "18px",
        fontWeight: "400",
        fontFamily: "Helvetica, Sans-Serif",
        padding: "5px",
        backgroundColor: "white",
    });
});