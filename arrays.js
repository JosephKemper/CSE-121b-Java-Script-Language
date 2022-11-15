// example 1
const steps = ["one", "two", "three"];

const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();


// TODO: #16 Example 1 Not working as directed. Need to study getElementById
// https://www.educba.com/javascript-getelementbyid/