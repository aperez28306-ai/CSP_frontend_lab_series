// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 3")

//11)Loop i=1..50. If %15===0 → FizzBuzz; else if %3===0 → Fizz; else if %5===0 → Buzz; else i.
for (let i = 1; i <= 50; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log("---------------------------------------------------");



//15) const arr=[12,65,34,99,81,50]. Loop and print/push numbers > 50.

const arr = [12, 65, 34, 99, 81, 50];

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 50){
        console.log(arr[i])
    }
}

console.log("-----------------------------------------------------")


//star pyrimid

for(let x=0; x<5; x++){
    let row = ""
    for(let y = 0; y <= x; y++){
        row+= "*";
    }
    console.log(row)
}
