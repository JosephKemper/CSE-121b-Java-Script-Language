let firstName = "Joseph"
let names = ["Frank", "Kyle", "Peter", "Susan", "Joseph", "Jason", "Dale", "David", "Michael", "Jay"]

console.log("My name is ${ firstName }.");
// My name is ${ firstName }.

console.log('My name is ${ firstName }.');
// My name is ${ firstName }.

console.log(`My name is ${ firstName }.`);

console.log(`My name is ${ names[1] }.`);

console.log(
  `Am I confusing you by omitting interpolation?`
);
// Am I confusing you by omitting interpolation?

while (false) {
  console.log(3.141592);
}

let value = 1

//while (value != undefined) {
  console.log("Still got something!");
//}

let hitchhikersGuide = 42
hitchhikersGuide[ Symbol("meaning of life") ];
// 42
console.log(hitchhikersGuide)

names.length;
// 4
console.log(names.length)

names[0];
// Frank
console.log(names[0])

names[1];
// Kyle
console.log(names[1])