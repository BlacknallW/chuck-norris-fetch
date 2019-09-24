"use strict";

const chuckQuotesForm = document.querySelector("#chuckQuotesForm")

chuckQuotesForm.addEventListener("submit", function(event){
    event.preventDefault();
    const categoryValue = chuckQuotesForm.querySelector("select").value;
    updateChuckSays(categoryValue);
})

// Create a function to update the quote text in the DOM
function updateChuckSays(category) {
    const chuckSays = document.getElementById("chuckSays");

    get(`https://api.chucknorris.io/jokes/random?category=${category}`
        ).then(response => {
            chuckSays.innerHTML = response.value;
        }
    );
}


function getCategories(){
    const selectWrapper = document.querySelector("#selectWrapper")
    const categoryList = document.createElement("select");
    get("https://api.chucknorris.io/jokes/categories").then(function(response){
        response.forEach(function(category){
            const categoryOption = document.createElement("option")
            categoryOption.text = category;
            categoryOption.value = category;
            categoryList.append(categoryOption);
        });
    });
    selectWrapper.append(categoryList);
}

//create an immediately invoked function expression (IFFY)
(function(){
    const defaultCategory = "dev"
    updateChuckSays(defaultCategory)
    getCategories()
})();

updateChuckSays("food");
