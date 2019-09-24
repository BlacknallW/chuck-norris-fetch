"use strict";

const getMoreQuotesButton = document.getElementById("getMoreQuotes");
const chuckSays = document.getElementById("chuckSays");
const chuckImage = document.getElementById("chuckImage");
// Add an event listener to the button, DON'T FORGET TO PREVENT THE DEFAULT BEHAVIOR!
// Call a function to return a new quote, and update the DOM
getMoreQuotesButton.addEventListener("click", function(e) {
    console.log("button clicked!");
    updateChuckSays("dev");
});

// Create a function to update the quote text in the DOM
function updateChuckSays(category) {
    const chuckQuote = get(
        `https://api.chucknorris.io/jokes/random?category=${category}`
        );

    chuckQuote.then(function(quote){
        chuckSays.innerHTML = quote.value;
    });
}

updateChuckSays("food");