/* 1. Get the Mount Timpanogos Temple Picture from 
'https://byui-cse.github.io/cse121b-course/week05/temples.json'.*/

async function getTemple ()
{

    let response = await fetch( "https://byui-cse.github.io/cse121b-course/week05/temples.json" );
    console.log( response );
    let templeList = await response.json();
    console.log( templeList );
    const timpanogosTemple = templeList.find(
        (element)=>{return element.templeName == "Mount Timpanogos Utah Temple"}
        );
    return timpanogosTemple.imageUrl;
}





// 2. Store it in a variable

const templeImage = getTemple();
console.log( templeImage );


// TODO: #50 3. Attach temple picture to temples div
const templesDiv = document.getElementById( "temples" );
console.log( templesDiv );

// TODO: #51 4. Create variable to store wedding date
const weddingDate = "13 Oct 2022"
const weddingDiv = document.getElementById("weddingDate")

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





