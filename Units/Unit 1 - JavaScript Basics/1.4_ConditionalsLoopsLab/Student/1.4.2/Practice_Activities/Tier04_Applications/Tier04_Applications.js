// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 4")


//16)Ask for username+password. If both match stored values → 'Welcome!' else 'Invalid credentials.'

const userName = "student";
const passWord = "abc123";

const inputUsername = prompt("Username:");
const inputPassword = prompt("Password:");

if (inputUsername === userName && passWord === storedPassword) {
    console.log(`Welcome!`);
} else {
    console.log(`Invalid credentials.`);  
}

console.log("--------------------------------------")

//19)Roll 2 dice 10 times; print when doubles appear.

let = dice1 = Math.floor(Math.random() * 6) + 1
let = dice2 = Math.floor(Math.random() * 6) + 1

for(let i=0; i < 10; i++){
    let = dice1 = Math.floor(Math.random() * 6) + 1
    let = dice2 = Math.floor(Math.random() * 6) + 1
    if(dice1 == dice2){
        console.log("We have doubles" , dice1, dice2)
    }
}
