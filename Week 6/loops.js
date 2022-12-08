// loops.js
let myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: [ "Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato" ],
    hobbies: [ "Reading", "Fishing", "Camping" ],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const foodsElement = document.querySelector( "#favorite-foods" );
const placesElement = document.querySelector("#places-lived")
function useForEach ( myInfo )
{
    let favoriteFoods = myInfo.favoriteFoods;
    favoriteFoods.forEach( food =>
    {
        let displayFood = document.createElement( "li" );
        displayFood.textContent = food;
        // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
        foodsElement.appendChild( displayFood );
    } );
}

useForEach( myInfo );


const foodListElements = myInfo.favoriteFoods.map( ( food ) => `<li>${ food }</li>` );
// we need to flatten the array of strings into one big string. .join does this.
foodsElement.innerHTML = foodListElements.join( "" );

function generateListMarkup (list, templateCallback){
// requires a list, 
// and a callback that will produce 
// an html string for each item in the list
// returns a string of html
    const htmlList =list.map(templateCallback);
    return htmlList.join("");
}

// requires an place string
// returns that string embedded in HTML markup
function placesTemplate (place){
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived, 
    placesTemplate
    );


