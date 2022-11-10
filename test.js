let fruits = [];
fruits.push('Banana', 'Apple', 'Peach');
console.log(fruits.length); // 3


fruits[5] = 'Mango';
console.log(fruits[5]);            // 'mango'
console.log(Object.keys(fruits));  // ['0', '1', '2', '5']
console.log(fruits.length);        // 6

fruits.length = 10;
console.log(fruits);              // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length);       // 10
console.log(fruits[8]);           // undefined

fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length);       // 2

const arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};
console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b'

Array.prototype.flat.call({}); // []

const a = { length: 0.7 };
Array.prototype.push.call(a);
console.log(a.length); // 0

function f() {
  console.log(Array.prototype.join.call(arguments, "+"));
}

f("a", "b"); // 'a+b'

console.log(fruits.length);
// 2

// 'fruits2' array created using the Array() constructor.
const fruits2 = new Array('Apple', 'Banana');
console.log(fruits2.length);
// 2

// 'fruits3' array created using String.prototype.split().
const fruits3 = 'Apple, Banana'.split(', ');
console.log(fruits3.length);
// 2

const fruitsString = fruits.join(', ');
console.log(fruitsString);
// "Apple, Banana"

// The index of an array's first element is always 0.
fruits[0]; // Apple

// The index of an array's second element is always 1.
fruits[1]; // Banana

// The index of an array's last element is always one
// less than the length of the array.
fruits[fruits.length - 1]; // Banana

// Using a index number larger than the array's length
// returns 'undefined'.
fruits[99]; // undefined

console.log(fruits.indexOf('Banana'));
// 1

fruits.includes('Banana'); // true
fruits.includes('Cherry'); // false

// If indexOf() doesn't return -1, the array contains the given item.
fruits.indexOf('Banana') !== -1; // true
fruits.indexOf('Cherry') !== -1; // false

let newLength = fruits.push('Orange');
console.log(fruits);
// ["Apple", "Banana", "Orange"]
console.log(newLength);
// 3

let removedItem = fruits.pop();
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItem);
// Orange

let start = -3;
let removedItems = fruits.splice(start);
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]


fruits = ['Apple', 'Banana', 'Strawberry', 'Mango', 'Cherry'];
start = 2;
removedItems = fruits.splice(start);
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]

fruits = ['Apple', 'Banana'];
removedItem = fruits.shift();
console.log(fruits);
// ["Banana"]
console.log(removedItem);
// Apple

fruits = ['Apple', 'Strawberry', 'Cherry', 'Banana', 'Mango'];
start = 0;
let deleteCount = 3;
removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Banana", "Mango"]
console.log(removedItems);
// ["Apple", "Strawberry", "Cherry"]

fruits = ['Banana', 'Mango'];
newLength = fruits.unshift('Strawberry');
console.log(fruits);
// ["Strawberry", "Banana", "Mango"]
console.log(newLength);
// 3

fruits = ['Strawberry', 'Banana', 'Mango'];
start = fruits.indexOf('Banana');
deleteCount = 1;
removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Strawberry", "Mango"]
console.log(removedItems);
// ["Banana"]

fruits = ['Apple', 'Banana', 'Strawberry', 'Mango'];
start = 1;
deleteCount = 2;
removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Apple", "Mango"]
console.log(removedItems);
// ["Banana", "Strawberry"]

fruits = ['Apple', 'Banana', 'Strawberry'];
console.log(fruits);
start = -2;
deleteCount = 2;
removedItems = fruits.splice(start, deleteCount, 'Mango', 'Cherry');
console.log(fruits);
// ["Apple", "Mango", "Cherry"]
console.log(removedItems);
// ["Banana", "Strawberry"]

for (let fruit of fruits) {
  console.log(fruit);
}
// Apple
// Mango
// Cherry

fruits = ['Apple', 'Mango', 'Cherry'];
fruits.forEach((item, index, array) => {
  console.log(item, index);
});
// Apple 0
// Mango 1
// Cherry 2

fruits = ['Apple', 'Banana', 'Strawberry'];
let moreFruits = ['Mango', 'Cherry'];
let combinedFruits = fruits.concat(moreFruits);
console.log(combinedFruits);
// ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// The 'fruits' array remains unchanged.
console.log(fruits);
// ["Apple", "Banana", "Strawberry"]

// The 'moreFruits' array also remains unchanged.
console.log(moreFruits);
// ["Mango", "Cherry"]

fruits = ['Strawberry', 'Mango'];
console.log(fruits);

// Create a copy using spread syntax.
let fruitsCopy = [...fruits];
// ["Strawberry", "Mango"]
console.log(fruitsCopy);

// Create a copy using the from() method.
let fruitsCopy2 = Array.from(fruits);
// ["Strawberry", "Mango"]
console.log(fruitsCopy2);

// Create a copy using the slice() method.
let fruitsCopy3 = fruits.slice();
// ["Strawberry", "Mango"]
console.log(fruitsCopy3);

let fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
console.log(fruitsDeepCopy);

fruits = ['Strawberry', 'Mango'];
let fruitsAlias = fruits;
// 'fruits' and 'fruitsAlias' are the same object, strictly equivalent.
fruits === fruitsAlias // true
// Any changes to the 'fruits' array change 'fruitsAlias' too.
fruits.unshift('Apple', 'Banana');
console.log(fruits);
// ['Apple', 'Banana', 'Strawberry', 'Mango']
console.log(fruitsAlias);
// ['Apple', 'Banana', 'Strawberry', 'Mango']

let inventory = [
  { name: 'asparagus', type: 'vegetables' },
  { name: 'bananas', type: 'fruit' },
  { name: 'goat', type: 'meat' },
  { name: 'cherries', type: 'fruit' },
  { name: 'fish', type: 'meat' },
];

console.log(inventory)

let board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];

console.log(`${board.join('\n')}\n\n`);

// Move King's Pawn forward 2
board[4][4] = board[6][4];
board[6][4] = ' ';
console.log(board.join('\n'));

let values = [];
for (let x = 0; x < 10; x++) {
  values.push([
    2 ** x,
    2 * x ** 2,
  ]);
}
console.table(values);

// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case

let myRe = /d(b+)(d)/i;
let execResult = myRe.exec('cdbBdbsbz');

console.log(execResult.input); // 'cdbBdbsbz'
console.log(execResult.index); // 1
console.log(execResult); // [ "dbBd", "bB", "d" ]



// modify the copyInput callback to receive the event object
function copyInput(event) {
  // take a look at the event!
  console.log(event);
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}