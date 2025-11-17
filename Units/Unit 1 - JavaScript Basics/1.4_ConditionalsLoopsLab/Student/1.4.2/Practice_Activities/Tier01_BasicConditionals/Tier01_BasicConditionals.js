// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 1")

//2)Ask for score 0–100 → validate range → print A/B/C/D/F with chained if/else-if/else.

let score = prompt("Enter a score (0-100):");
score = Number(score);

if (score < 0 || score > 100) {
    console.log("Invalid score");
} else if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}
//4) Ask for Fahrenheit → if > 90 → Too hot! else if < 60 → Too cold! else Just right!
for (let temp=1; temp<=100; temp++){
   if(temp>=90){
      console.log("It's hot!");
   } else if 
   (temp<60){
      console.log("Too cold!");
   } else 
      {console.log("Just right!");
}
}

//Even or Odd

let num = Number(prompt("Enter a number"))

if(Number.isNaN(num)){
    alert("Please enter a number.")
} else {
    if (num % 2 == 0) {
        alert ("EVEN")
    } else {
        alert("ODD")
    }
}