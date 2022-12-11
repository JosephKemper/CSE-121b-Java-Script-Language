/* TODO: #48 1. Get the Mount Timpanogos Temple Picture from 
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

// TODO: #49 2. Store it in a variable
//let timpanogosIndex = (templeList.indexOf("Timpanogos"))
//console.log(timpanogosIndex)


// TODO: #50 3. Attach temple picture to temples div
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





