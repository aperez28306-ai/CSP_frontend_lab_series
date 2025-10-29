/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both
let age= "34"
let price="12.99"
console.log(`Age: ${age}`)
console.log(`Price: ${price}`)

// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)
const name = "Sandra"; 
const answer1b = name/2; 
 console.log(answer1b);

// TODO 2: Print basic math ops: + - * /
let num1 = 10;
let num2 = 5;
console.log(`Add: ${num1 + num2}`);
console.log(`Subtr: ${num1 - num2}`);
console.log(`Mult: ${num1 * num2}`);
console.log(`Div: ${num1 / num2}`);

// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)
console.log(`exponentiation (2 ** 3): ${2 ** 3}`); 
console.log(`modulo (7 % 2): ${7 % 2}`);

// TODO 3: Assignment operators with score variable
let score = 10;
console.log(`Initial score: ${score}`);
score += 5;
console.log(`After += 5: ${score}`);
score -= 3;
console.log(`After -= 3: ${score}`);
score *= 2;
console.log(`After *= 2: ${score}`);
score /= 4;
console.log(`After /= 4: ${score}`);

// TODO 4: Expressions with operator precedence\
let answer1 = 5 + 3 * 2; 
let answer2 = (5 + 3) * 2;
let answer3 = 10 - 4 + 2 * 3;   
console.log(`Result 1: ${answer1}`);
console.log(`Result 2: ${answer2}`);
console.log(`Result 3: ${answer3}`);

// TODO 5: Strings (single, double, backticks)
let singleString = 'single-quote string.';
let doubleString = "double-quote string.";
let backtickString = `string backticks.`;
console.log(singleString);
console.log(doubleString);
console.log(backtickString);

// TODO 6: String properties and methods
// - greeting.length
// - charAt(0), charAt(5), [3]
// - indexOf("sad")
// - repeat()
// - substring, substr, slice examples
let greeting = "Hello, Sandra!";
console.log(`Length of greeting: ${greeting.length}`);
console.log(`First character: ${greeting.charAt(0)}`);
console.log(`Sixth character: ${greeting.charAt(5)}`);
console.log(`Character at index 3: ${greeting[3]}`);
console.log(`Index of "sad": ${greeting.indexOf("sad")}`);
console.log(`Repeat greeting: ${greeting.repeat(2)}`);
console.log(`Substring (0, 5): ${greeting.substring(0, 5)}`);
console.log(`Substr (7, 6): ${greeting.substr(7, 6)}`);
console.log(`Slice (7, 13): ${greeting.slice(7, 13)}`);

// 🚀 Stretch Goals
// - Even number check using %
function isEven(n) {
    return n % 2 == 0;
}

const testNumbers = [4, 7, 0, -2, 13];
testNumbers.forEach(n => {
    console.log(`${n} is ${isEven(n) ? 'even' : 'odd'}`);
});

// - localeCompare() example
const word1 = "apple";
const word2 = "banana";
console.log(`Comparing ${word1} with ${word2}: ${word1.localeCompare(word2)}`);
console.log(`Comparing ${word2} with ${word1}: ${word2.localeCompare(word1)}`);
console.log(`Comparing ${word1} with ${word1}: ${word1.localeCompare(word1)}`);
