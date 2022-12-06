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
const foodsElement = document.querySelector("#favorite-foods")
function useForEach ( myInfo )
{
    let favoriteFoods = myInfo.favoriteFoods;
    favoriteFoods.forEach( food =>
    {
        let displayFood = document.createElement( "li" );
        displayFood.textContent = food;
        foodsElement.appendChild(displayFood)
    } );
}

useForEach( myInfo );



// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector( "#favorite-foods" ).appendChild( favoriteFood1 );
document.querySelector( "#favorite-foods" ).appendChild( favoriteFood2 );
document.querySelector( "#favorite-foods" ).appendChild( favoriteFood3 );
document.querySelector( "#favorite-foods" ).appendChild( favoriteFood4 );