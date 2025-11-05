/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts
let age = 25;
let price = 100;
let discount = 0;

if (age < 12) {
    discount = price * 0.5; 
} else if (age >= 65) {
    discount = price * 0.3;  
} else {
    discount = 0;  
}

// TODO 2: Nested if with two numbers
const number1 = parseInt (prompt ("First number:")); 
const number2 = parseInt (prompt ("Second number:")); 
 
if (number1 === number2) { 
  console.log ("The numbers are equal."); 
} else 
  if (number1 > number2) { 
    console.log("Number 1 is bigger than number 2."); 
  } 


// TODO 3: Switch statement for language greeting
const language = prompt("Enter your language:")
let speak = "";
switch (language) {
    case "English":
    speak = "Hello";
    break;
    case "Spanish":
        speak = "Hola";
    break;
}
console.log(`wave ${speak}`);

// TODO 4: While loop (1 to 10)
let i = 1;
while (i < 10);
console.log(i);
i++;

// TODO 5: Do..while loop (1 to 5)
let b = 1;
do {
    console.log(b);
    b++;
} while (b <= 5);

// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)
for (let v = 1; v <= 20; v++) {
    if (v === 10) {
        console.log("ten");
    } else if (v === 20) {
        console.log("twenty");
    } else {
        console.log(v);
    }
}



// TODO 7: Even/Odd loop (1 to 20)
for (let i = 10; 1>0; i++)
    if (i % 2 == 0) {
        console.log(i + "is even")
    } else {
        console.log ( i + "is odd")
    }

// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
for (let h=20; h>=1; h--) 
    console.log(h)

// - Skip multiples of 3 in even/odd loop
for (let n = 1; n <= 20; n++) {
    if (n % 3 === 0) continue;
    if (n % 2 === 0) {
        console.log(n + " is even");
    } else {
        console.log(n + " is odd");
    }
}

