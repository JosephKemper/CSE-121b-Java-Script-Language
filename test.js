async function testFunction(){
let testResponse = await fetch( "https://byui-cse.github.io/cse121b-course/week05/temples.json" );
console.log(testResponse)

let testTemple = testResponse[8]
console.log(testTemple)

let testName = testTemple.templeName
console.log(testName)
}
testFunction()