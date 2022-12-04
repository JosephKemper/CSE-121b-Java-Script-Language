let t5CurrentDate = new Date();
let day = t5CurrentDate.getDay();
const weekday = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
const dayID = document.getElementById( "message2" );
dayID.innerHTML = weekday[ day ];
const motivationalMessage = [ "Hang in there!", "Woohoo!  It is the weekend!" ];
const messageID = document.getElementById( "message1" );

if ( day > 0 && day < 6 )
{
  let displayMessage = motivationalMessage[ 0 ];
  messageID.innerHTML = displayMessage;
} else
{
  let displayMessage = motivationalMessage[ 1 ];
  messageID.innerHTML = displayMessage;
}

let templeList = [];

const templesDiv = document.getElementById( "temples" );
console.log( templesDiv );
function output ( temples )
{  temples.forEach( temple =>
  {
    let templeArticle = document.createElement( "article" );
    let h3Name = document.createElement( "h3" );
    let h4Location = document.createElement( "h4" );
    let h4Dedicated = document.createElement( "h4" );
    let templeIMG = document.createElement( "img" );

    templeIMG.setAttribute( "src", temple.imageUrl );
    templeIMG.setAttribute( "alt", temple.templeName );
    h3Name.innerText = temple.templeName;
    h4Location.innerText = temple.location;
    h4Dedicated.innerText = temple.dedicated;
    templeIMG.innerHTML = temple.image;
    templeArticle.append( h3Name, h4Location, h4Dedicated, templeIMG );
    templesDiv.append( templeArticle );
  } );
}
async function getTemples ()
{
  let response = await fetch( "https://byui-cse.github.io/cse121b-course/week05/temples.json" );
  templeList = await response.json();
  output( templeList );
}


getTemples();

function clearTemples ()
{
  templesDiv.removeChild( "article" );
}

function sortAscending ( a, b )
{
  let comparison = 0;
  if ( a.templeName > b.templeName )
  {
    comparison = 1;
  } else if ( a.templeName < b.templeName )
  {
    comparison = -1;
  }
  return comparison;
}

function sortDescending ( a, b )
{
  let comparison = 0;
  if ( a.templeName < b.templeName )
  {
    comparison = 1;
  } else if ( a.templeName > b.templeName )
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
  } else if ( sortOption == templeNameDescending )
  {
    let sortedList = templeList.reverse( sortDescending );
    output( sortedList );
  }
}
document.getElementById( "sortBy" ).addEventListener( "onChange", sortBy );
