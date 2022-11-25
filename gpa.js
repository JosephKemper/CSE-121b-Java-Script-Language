/* Display input box for user to enter grades 
along with a button to kick off the calculation.*/
// Completed with given code in gpa.html file

/* Add an event listener to the button 
that will do the following when clicked:*/

// Get the string of grades from the input

/* Convert the string to an array (String.split(',')), 
clean up any extra spaces, and make the grades all uppercase.*/
function getGrades (inputSelector){
    // get grades from the input box
    const grades = document.querySelector("#grades").value;
    // split them into an array (String.split(','))
    const gradesArray = grades.split(",");
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
    console.log(cleanGrades);
    // return grades
    return cleanGrades;

};

function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
  }

function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA
}

function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
}

function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    // calculate the gpa from the grades entered
    // display the gpa
}



// Do a lookup on each grade to convert it to it's point value (ie A = 4.0)

/* Total up all the point values, 
and divide by the number of grades to get the GPA*/

// Output the GPA to the browser