/* TODO:1. #48 Get the Mount Timpanogos Temple Picture from 
'https://byui-cse.github.io/cse121b-course/week05/temples.json'.*/
let timpanogosTemple = [];
async function getTemples ()
{

    let response = await fetch( "https://byui-cse.github.io/cse121b-course/week05/temples.json" );
    console.log( response );
    templeList = await response.json();
    console.log( templeList );
    let timpanogosTemple = iterateList( templeList );
    return timpanogosTemple;
}

timpanogosTemple = getTemples();
console.log( timpanogosTemple );

async function iterateList ( templeList )
{
    // TODO #61 build loop to pull out temple data and find Timpanogos

    console.log( timpanogosTemple );
    templeList.forEach( temple =>
    {
        let templeName = temple.templeName;
        console.log( templeName );
        let templeLocation = temple.location;
        console.log( templeLocation );
        let templeDedication = temple.dedication;
        console.log( templeDedication );
        let templeIMG = temple.imageUrl;
        console.log( templeIMG );

        if ( templeName === "Mount Timpanogos Utah Temple" )
        {
            timpanogosTemple.push( templeName, templeLocation, templeDedication, templeIMG );
            console.log( timpanogosTemple );
            return timpanogosTemple;
        }
    } );
}

// TODO:2. #49 Store it in a variable
//let timpanogosIndex = (templeList.indexOf("Timpanogos"))
//console.log(timpanogosIndex)


// TODO:3. #50 Attach temple picture to temples div
const templesDiv = document.getElementById( "temples" );
console.log( templesDiv );

// TODO: #51 4. Create variable to store wedding date

// TODO: #52 5. Create HTML element to display wedding date

// 6. Calculate current date
const currentDate = new Date();

// 7. Separate date into month, day, and year
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

/* TODO: #53 8. Calculate how many days, months, and years 
we have been married */

// TODO: #54 9. Create HTML element to display length of marriage

// TODO: #55 10. Create article to store poems

// TODO: #56 11. Pull poem date, text, and title and store in article

// TODO: #57 12. Build sorting method for poems using dropdown list





// Step 1: Declare and initialize a new variable to hold the current date
let t5CurrentDate = new Date();
console.log( t5CurrentDate );
// Step 2: Declare another variable to hold the day of the week
let day = t5CurrentDate.getDay();
console.log( day );
const weekday = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
console.log( weekday );
/* Step 3: Using the variable declared in Step 1, 
assign the value of the variable declared in Step 2 to the day of the week 
( hint: getDay() )*/
/* OUTPUT Step 2: Assign the value of the second message variable 
to the HTML element with an ID of message2*/
const dayID = document.getElementById( "message2" );
console.log( dayID );
dayID.innerHTML = weekday[ day ];
console.log( dayID );
// Step 4: Declare a variable to hold a message that will be displayed
const motivationalMessage = [ "Hang in there!", "Woohoo!  It is the weekend!" ];
console.log( motivationalMessage );
/* Step 5: Using an if statement, 
if the day of the week is a weekday (i.e. Monday - Friday), 
set the message variable to the string 'Hang in there!'*/
/* OUTPUT Step 1: Assign the value of the first message variable 
to the HTML element with an ID of message1*/
const messageID = document.getElementById( "message1" );
console.log( messageID );
if ( day > 0 && day < 6 )
{
    let displayMessage = motivationalMessage[ 0 ];
    console.log( displayMessage );
    messageID.innerHTML = displayMessage;
    console.log( messageID );
    /* Step 6: Using an else statement, 
    set the message variable to 'Woohoo!  It is the weekend!'*/
} else
{
    let displayMessage = motivationalMessage[ 1 ];
    console.log( displayMessage );
    messageID.innerHTML = displayMessage;
    console.log( messageID );
}


/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message

/* Step 2: Use switch, case and break to set the message variable 
to the day of the week as a string (e.g. Sunday, Monday, etc.) 
using the day of week variable declared in Step 2 above*/
// Not sure what this is asking me to do. 



console.log( templeList );






// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
/* - Sorts the global temple list by the currently selected value
of the HTML element with an ID of sortBy*/
// - Calls the output function passing in the sorted list of temples
function sortAscending ( temple1, temple2 )
{
    let templeName1 = temple1.templeName.toLowerCase();
    let templeName2 = temple2.templeName.toLowerCase();
    let comparison = 0;
    if ( templeName1 > templeName2 )
    {
        comparison = 1;
    } else if ( templeName1 < templeName2 )
    {
        comparison = -1;
    }
    return comparison;
}

function sortDescending ( temple1, temple2 )
{
    let templeName1 = temple1.templeName.toLowerCase();
    let templeName2 = temple2.templeName.toLowerCase();
    let comparison = 0;
    if ( templeName1 < templeName2 )
    {
        comparison = 1;
    } else if ( templeName1 > templeName2 )
    {
        comparison = -1;
    }
    return comparison;
}

function sortBy ()
{
    clearTemples();
    let sortOption = document.getElementById( "sortBy" ).value;
    if ( sortOption == "templeNameAscending" )
    {
        let sortedList = templeList.sort( sortAscending );
        output( sortedList );
    } else if ( sortOption == "templeNameDescending" )
    {
        let sortedList = templeList.reverse( sortDescending );
        output( sortedList );
    }
}


/* Step 9: Add a change event listener to the HTML element with an ID
of sortBy that calls the sortBy function*/

document.querySelector( "#sortBy" ).addEventListener( "click", sortBy );
/* STRETCH */

/* Consider adding a "Filter by" feature that allows users to filter
the list of temples*/
// This will require changes to both the HTML and the JavaScript files

// set current year in footer


const displayYear = document.getElementById( "year" ).innerHTML = currentYear




