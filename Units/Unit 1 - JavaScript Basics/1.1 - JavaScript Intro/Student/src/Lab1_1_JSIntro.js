/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()
console.log("Andres Perez");


// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"
console.log("favoriteFood")
var favoriteFood = "Steak";
favoriteFood = "Pizza";


// TODO 3: Create variable mystery, assign a string, then a number, print type each time
var mystery = "Hello";
console.log(mystery);
console.log(typeof mystery); 
mystery = 42;
console.log(typeof mystery); 



// TODO 4: Declare const schoolName, try to reassign
const schoolName = "Columbus";
console.log(schoolName)
//const schoolName = "Belen";       DOES NOT WORK CAUSE ERROR



// TODO 5: Create three valid camelCase variables and print them
var firstName = "Andres";
console.log(firstName);
var lastName = "Perez";
console.log(lastName);
var birthYear = "2010";
console.log(birthYear);



// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals
var age = 14;
console.log("I am " + age +" years old");
console.log(`I am ${age} years old`);

/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
   I learned about the basics of js and used var and learned about var, let, and typeof

   2. What challenges did you encounter, and how did you solve them?
Challenges I encountered were TODO #3 which I had to learn typeof and the stretch goal

   3. Where else could this programming concept be useful?
Javascript could be useful in making interactive websites 
   =========================================================== */

   //FRQ
let width=2;
let height=1;
let area= width * height;
let perimeter= 2 * (Number(height) + Number(width));
console.log(`The area of the rectangle is ${area}`)
console.log(`The perimeter of the rectangle is ${perimeter}`)