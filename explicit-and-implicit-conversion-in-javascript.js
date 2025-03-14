/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;    // Converted string 5 into a number to avoid potential combining of strings.
console.log("The result is: " + result);  // This works because it fully converts "5" into an integer. 

let isValid = Boolean("true");   // Changed the booleen value name to "true" because its confusing when its a truthy and "false". 
if (isValid) {                   
    console.log("This is valid!");
}
  else(isValid==0)           // Added an else function to complete the if statment and a message for a fasly value. 
    isValid = Boolean(NaN);     // There needs to be a function for when the booleen variable is false.
    console.log("This is invalid!");
  


let age = "25";        
let totalAge = Number(age) + 5;  // Converted age variable from a string to a number so that the actual age number can be added.
console.log("Total Age: " + totalAge);
 


console.log("\n"); 


// My Own Examples
// Example 1: Implicit
let numToString = "This number is " + 100;
console.log(numToString);

// Example 2: Explicit
let num = 898;
let word = String(num);
console.log(word);
