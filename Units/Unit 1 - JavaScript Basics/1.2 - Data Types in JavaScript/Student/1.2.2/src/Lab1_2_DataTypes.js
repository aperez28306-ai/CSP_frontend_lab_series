/* ===========================================================
   Lab 1.2 – Data Types
   Primitive types, typeof, and basic conversions.
   =========================================================== */

<<<<<<< HEAD
// TODO 1: Declare one variable for each primitive type discussed in the PDF.
// string, number, boolean, null, undefined
let s = "hello"; // string
let n = 42; // number
let b = true; // boolean
let z = null; // null
let u; 

// TODO 2: Use typeof to log each variable's type.
console.log(typeof s);
console.log(typeof n); 
console.log(typeof b); 
console.log(typeof z);
console.log(typeof u);

// TODO 3: Show string concatenation vs numeric addition using "5" and 5.
const strFive = "5";
const numFive = 5;

// string concatenation (plus with a string)
console.log('"5" + 5 =>', strFive + numFive);

console.log('Number("5") + 5 =>', Number(strFive) + numFive);

console.log('+"5" + 5 =>', +strFive + numFive);

console.log('5 + "5" =>', numFive + strFive);

// TODO 4: Explicit conversions using Number(), String(), Boolean()
console.log('String(42) =>', String(42));
console.log('Number("42") =>', Number("42"));
console.log('Boolean(1) =>', Boolean(1));
console.log('Boolean(0) =>', Boolean(0));
console.log('Boolean("") =>', Boolean(""));
console.log('Boolean("hello") =>', Boolean("hello"));

// TODO 5: NaN and isNaN: demonstrate a case where conversion fails.
console.log('Number("hello") =>', Number("hello"));
console.log('isNaN(Number("hello")) =>', isNaN(Number("hello"))); 
console.log('Number("123abc") =>', Number("123abc")); // NaN

// TODO 6: Template literals: print a line that mixes text + a variable value.
const name = "Alice";
console.log(`Hello, my name is ${name}.`);
=======
// 1️⃣ Primitive Types
// Declare one variable for each primitive type: string, number, boolean, null, undefined.
// Print each variable and its type using typeof.


// 2️⃣ Typeof Check
// Compare typeof null and typeof undefined.
// Explain in a comment why the results differ.


// 3️⃣ Concatenation vs Addition
// Use "5" and 5 to demonstrate the difference between concatenation and numeric addition.
// Print both results and explain the behavior.


// 4️⃣ Explicit Conversions
// Convert different values using Number(), String(), and Boolean().
// Print each result and describe what you notice.


// 5️⃣ NaN and isNaN()
// Try converting a non-numeric string such as "hello" to a number.
// Use isNaN() to check the result and comment on the output.


// 6️⃣ Template Literals
// Create variables name and age.
// Use a template literal to print: Hello, my name is ${name} and I am ${age} years old.

>>>>>>> upstream/main

/* =============================================================
   🎟 EXIT TICKET
   1. Which data type(s) did you use today and why?
<<<<<<< HEAD
I used strings for words, numbers for counting stuff, booleans for true/false, and null/undefined for empty things because we had to show all the types.

2. Where did you encounter type conversion (implicit or explicit)?
When I did "5" + 5 it mashed them together into "55", but when I used Number("5") it actually did math and made 10.

3. One misconception I corrected or a tip I learned:
I thought null would show up as "null" but typeof said it's an "object" which is kinda weird.

4. What would you try next time to debug faster?
I'd just put more console.log everywhere to see what's actually happening instead of guessing.


=======
   2. Where did you encounter type conversion (implicit or explicit)?
   3. One misconception I corrected or a tip I learned.
   4. What would you try next time to debug faster?
>>>>>>> upstream/main
   =========================================================== */
