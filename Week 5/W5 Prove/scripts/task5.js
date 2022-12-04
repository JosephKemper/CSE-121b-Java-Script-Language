// @ts-nocheck
/* Lesson 5 */

/* IF/ELSE IF */

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

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let templeList = [];
console.log( templeList );
/* Step 2: Declare a function named output that accepts a list of temples
as an array argument and does the following for each temple:*/
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
/* - Creates an HTML <img> element and add the temple's imageUrl property
to the src attribute and the temple's templeName property to the alt attribute*/
/* - Appends the <h3> element, the two <h4> elements,
and the <img> element to the <article> element as children*/
// - Appends the <article> element to the HTML element with an ID of temples

const templesDiv = document.getElementById( "temples" );
console.log( templesDiv );
function output ( temples )
{
    console.log( temples );
    temples.forEach( temple =>
    {
        let templeArticle = document.createElement( "article" );
        console.log( templeArticle );
        let h3Name = document.createElement( "h3" );
        console.log( h3Name );
        let h4Location = document.createElement( "h4" );
        console.log( h4Location );
        let h4Dedicated = document.createElement( "h4" );
        console.log( h4Dedicated );
        let templeIMG = document.createElement( "img" );
        console.log( templeIMG );
        templeIMG.setAttribute( "src", temple.imageUrl );
        console.log( templeIMG );
        templeIMG.setAttribute( "alt", temple.templeName );
        console.log( templeIMG );

        h3Name.innerHTML = temple.templeName;
        console.log( h3Name );
        h4Location.innerHTML = temple.location;
        console.log( h4Location );
        h4Dedicated.innerHTML = temple.dedicated;
        console.log( h4Dedicated );
        templeIMG.innerHTML = temple.image;
        console.log( templeIMG );
        templeArticle.append( h3Name, h4Location, h4Dedicated, templeIMG );
        console.log( templeArticle );
        templesDiv.append( templeArticle );
    } );
}
// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples ()
{
    /* Step 4: In the function, using the built-in fetch method,
    call this absolute URL:
    'https://byui-cse.github.io/cse121b-course/week05/temples.json'.
    Create a variable to hold the response from your fetch.
    You should have the program wait on this line until it finishes.*/
    let response = await fetch( "https://byui-cse.github.io/cse121b-course/week05/temples.json" );
    console.log( response );
    /* Step 5: Convert your fetch response into a Javascript object ( hint: .json() ).
    Store this in the templeList variable you declared earlier (Step 1).
    Make sure the the execution of the code waits here as well until it finishes.*/
    templeList = await response.json();
    console.log( templeList );
    output( templeList );
}


/* Step 6: Finally, call the output function and pass it the list of temples.
Execute your getTemples function to make sure it works correctly.*/
getTemples();

/* Step 7: Declare a function named reset that clears all of the <article>
elements from the HTML element with an ID of temples*/
function clearTemples ()
{
    document.querySelector( "#temples" ).innerHTML = "";
}


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






