// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 2")

//6) Make a for loop from 1..10 and print numbers.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("-----------------------------")

//7) Use while with n-- from 10..0, then print Liftoff!
let n = 10;
while (n > 0) {
    console.log(n);
    n--
}
console.log("Liftoff!");

//8)Ask for base (number). If NaN → message. Loop i=1..10 printing ${base} x ${i} = ${base*i}.
let base = Number(prompt("Enter a base."))
console.log(typeof base)


for (let p = 1; p <= 10; p++){
    console.log(`${base} x ${p} = ${base*p}`)
}

//10)

let SECRET = "explorers"
let = pw

do{
    pw = prompt("Enter password")

} while(pw != SECRET)
    