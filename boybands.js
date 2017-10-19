let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// Get a reference to the appropriate DOM element for bands
 const bandElement=document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
const veggieElement = document.getElementById("vegetables");

// Execute a for loop that will iterate over the arrays
for (let loopTracker = 0; loopTracker < bands.length; loopTracker += 1) {
    const currentBand = bands[loopTracker]
    bandElement.innerHTML += `
     <div>
     ${currentBand}
     </div>
    `}
for (let loopTracker = 0; loopTracker < vegetables.length; loopTracker += 1) {
    const currentVeggie = vegetables[loopTracker]
    veggieElement.innerHTML += `
   <div>
    ${currentVeggie}
    </div>
    
    `}
   

//    Get a reference to the current item in the bands array
//   const currentBand = ???;

  // Update the innerHTML value of the DOM element for bands


  // Get a reference to the current item in the vegetables array
//   const currentVeggie = ???;

  // Update the innerHTML value of the DOM element for vegetables
