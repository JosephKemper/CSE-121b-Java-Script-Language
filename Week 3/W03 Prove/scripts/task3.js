/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

function add (number1,number2){
    let result = number1 + number2
// Step 2: In the function, return the sum of the parameters number1 and number2
    return result;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers(){
    const number1 = Number(document.getElementById("addend1").value);
    const number2 = Number(document.getElementById("addend2").value);
    const result = add(number1,number2);
// Step 4: Assign the return value to an HTML form element with an ID of sum
    document.getElementById("sum").value = result;

}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector("#addNumbers").addEventListener("click", addNumbers)

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract (number1, number2){
    const result = number1 - number2
    return result
}

function subtractNumbers() {
    const number1 = Number(document.getElementById("minuend").value);
    const number2 = Number(document.getElementById("subtrahend").value);
    const result = subtract(number1, number2)
    document.getElementById("difference").value = result
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers)

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiply(number1, number2){
    const result = number1 * number2
    return result
}

function mulitplyNumbers (){
    const number1 = Number(document.getElementById("factor1").value);
    const number2 = Number(document.getElementById("factor2").value);
    const result = multiply(number1, number2)
    document.getElementById("product").value = result
}
document.querySelector("#multiplyNumbers").addEventListener("click", mulitplyNumbers)

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide (number1,number2){
    const result = number1/number2
    return result
}

function divideNumbers (){
    const number1 = Number(document.getElementById("dividend").value);
    const number2 = Number(document.getElementById("divisor").value);
    const result = divide(number1, number2)
    document.getElementById("quotient").value = result
}
document.querySelector("#divideNumbers")?.addEventListener("click", divideNumbers)


// Step 9: Test all of the mathematical functionality of the task3.html page.
// check all confirmed working


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
// Step 4: Assign the current year variable to an HTML form element with an ID of year
let currentDate = new Date();
let cDay = currentDate.getDate()
let cMonth = currentDate.getMonth() + 1
let cYear = currentDate.getFullYear()
console.log(cDay);
console.log(cMonth);
console.log(cYear);
document.getElementById("year").innerHTML = cYear;




/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numberArray = [];
for (let i =1; i < 26; i++)
    numberArray.push(i)
//console.log(numberArray)

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML =numberArray

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let negativeArray =[];
numberArray.forEach(element => {
    if (element % 2 !== 0 ){
    negativeArray.push(element)}
});
document.getElementById("odds").innerHTML = negativeArray;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let positiveArray = [];
numberArray.forEach(element => {
    if (element % 2 == 0){
    positiveArray.push(element)}
});
document.getElementById("evens").innerHTML = positiveArray;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const initialValue = 0;
const sumWithInitial = numberArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
document.getElementById("sumOfArray").innerHTML = sumWithInitial;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
function double (x){
return x *2
}
let doubledArray = numberArray.map(double)
document.getElementById("multiplied").innerHTML = doubledArray;


// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const initialSum = 0
const sumOfDoubled = doubledArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialSum
);
document.getElementById("sumOfMultiplied").innerHTML = sumOfDoubled;
