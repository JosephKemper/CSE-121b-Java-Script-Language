// Activity 1
const steps = ["one", "two", "three"];

const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();


// Activity 2

const letterGrades = ["A", "B", "A"]

function convertGPA (grade) {
  let GPA = 0;
  if (grade === "A"){
    GPA = 4;
  } else if (grade === "B") {
    GPA = 3;
  }
  return GPA
}

const gpaScores = letterGrades.map(convertGPA);
console.log(gpaScores);

const overallGPA = gpaScores.reduce((total,item) =>total + item)
console.log(overallGPA);
const gpa = overallGPA/gpaScores.length;
console.log(gpa)

const fruitArray = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
console.log(fruitArray);
const longFruit = fruitArray.filter(fruit => fruit.length > 6);
console.log(longFruit);

const numberArray = [12, 34, 21, 54];
console.log(numberArray)

const luckNumber = 21;

let luckyIndex = numberArray.indexOf(luckNumber)
console.log(luckyIndex);

