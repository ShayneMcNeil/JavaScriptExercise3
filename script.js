/* 

    Assignment: Exercise 3 - Operators and User Interactions
    Student Name: Shayne McNeil
    Student ID: W0454809
    Date: January 31, 2025

*/

// PART 1 - Arithmetic Operators 

// Declare two variables num1 and num2

const num1 = 5, num2 = 7;

// Use arithmetic operators to perform calculations and display results in the console.

console.log(num1 + num2); // Addition 
console.log(num1 - num2); // Subtraction 
console.log(num1 * num2); // Multiplication 
console.log(num1 / num2); // Division 
console.log(num1 % num2); // Modulus

// PART 2 - Relational Operators

// Compare the two variables using the six relational operators 

console.log(num1 > num2); // Greater than
console.log(num1 < num2); // Less than
console.log(num1 >= num2); // Greater than or equal to
console.log(num1 <= num2); // Less than or equal to
console.log(num1 !== num2); // Not equal to
console.log(num1 === num2); // Exactly equal to (in terms of value and type)

// PART 3 - Logical Operators

// Create two boolean variables, isSunny and isWeekend

let isSunny = false, isWeekend = true;

// User logical operators to check combinations of conditions

if(isSunny && isWeekend) {
    console.log("It is sunny and it's the weekend. Great!");
} else if (isSunny || isWeekend) {
    console.log("It is either sunny or it's the weekend. Either way, both are good!");
} else if(!isSunny && !isWeekend) {
    console.log("It is neither sunny nor the weekend. What a tragedy!");
} else if(!isSunny || !isWeekend) {
    console.log("Either it is not sunny or it is not the weekend. Either way, I'm pretty bummed out.");
}

// PART 4 - Assignment Operators

// Declare a variable 'score' and assign it a value

let score = 7;

// Use assignment operators to modify the value of 'score'

score += 2; // Add and assign
console.log(score); // Print output
score -= 5; // Subtract and assign
console.log(score); // Print output
score *= 3; // Multiply and assign
console.log(score); // Print output
score /= 8; // Divide and assign
console.log(score); // Print output
score %= 4; // Modulus and assign
console.log(score); // Print output

// PART 5 - User Interaction 

// User the 'prompt' method to capture user input for their name and age

const userName = prompt("Please enter your name: ");
const userAge = prompt("Please enter your age: ");

// Display values (not part of the requirements for this assignment)

console.log(`Hello ${userName}, it's nice to meet you! I see that you are ${userAge} years old. Welcome to the site.`);