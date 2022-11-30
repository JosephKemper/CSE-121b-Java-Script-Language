/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const personalInfo = {
    // Step 2: Inside of the object, add a property named name with a value of your name as a string
    name: "Joseph Kemper",
    // Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    picture: "images/Profile.png",
    // Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods: ["Broccoli Salad", " Lasagna", " Buttered Toast"],
    // Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: [
        "Journaling", 
        " Writing Love Poems", 
        " Elder Scrolls Online", 
        " Reading",
        " Walking"],
    // Step 6: Add another property named placesLived with a value of an empty array
    placesLived : [
        // Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
        // Step 8: For each property, add appropriate values as strings
        { place: "Moses Lake, WA", length: "15 Years"},
        // Step 9: Add additional objects with the same properties for each place you've lived
        { place: "Othello, WA", length: "1 Years"},
        { place: "Basin City, WA", length: "1 Years"},
        { place: "Ephrata, WA", length: "3 Years"},
        { place: "Ellensburg, WA", length: "2 Years"},
        { place: "Federal Way, WA", length: "4 Years"},
        { place: "Ft Campbell, KY", length: "1 Years"},
        { place: "Erlangen, Germany", length: "1 Years"},
        { place: "California, San Bernardino Mission", length: "2 Years"},
        { place: "Provo, UT", length: "16 Years"}
    ]
}


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
const assignName = document.querySelector("#name") 
assignName.textContent = personalInfo.name


// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
let picture = "images/Profile.png";
let altName = assignName.textContent
let htmlPicture = document.querySelector("img")
//htmlPicture.setAttribute(picture, assignName.textContent)
document.querySelector("img").setAttribute("src", picture);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("img").setAttribute("alt", altName)
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const foodList = personalInfo.favoriteFoods;
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
for (let i = 0; i < foodList.length; i++) {
    let htmlFood = document.createElement("li");
    htmlFood.innerText = foodList[i];
    document.querySelector("#favorite-foods").appendChild(htmlFood)
}

// Step 6: Repeat Step 4 for each hobby in the hobbies property
const hobbyList = personalInfo.hobbies;
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
for (let i = 0; i < hobbyList.length; i++) {
    let htmlHobby = document.createElement("li");
    htmlHobby.innerText = hobbyList[i];
    document.querySelector("#hobbies").appendChild(htmlHobby)
}
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let htmlPlaces = "";
let place = personalInfo.placesLived

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
function renderPlaces (place){
    htmlPlaces += "<dt>" + place.place + "</dt>" + "<dd>" + place.length + "</dt>";
}

place.forEach(renderPlaces)

document.getElementById("places-lived").innerHTML = htmlPlaces