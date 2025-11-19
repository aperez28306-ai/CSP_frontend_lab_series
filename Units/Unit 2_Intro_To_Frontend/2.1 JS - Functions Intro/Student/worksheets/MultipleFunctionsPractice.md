# 2.1 Functions Intro – Worksheet
## Multiple Functions Practice

The goal of this worksheet is to build **function muscle memory**.

---

### Part A – Write Function Declarations

Write 5 different function declarations (only the headers + empty bodies).  
Example: `function sayHello() { }`

1. function sayBye( ) { }
2. function allowIn( ) { }
3. function accessDenied( ) { }
4. function markCorrect( ) { }
5. function askName( ) { }

---

### Part B – Add Parameters

Rewrite 3 of your functions from Part A to include **at least one parameter**.

Example: `function sayHello(name) { }`

1. function sayBye(name) { }
2. function allowIn(name) { }
3. function askName(name) { }

---

### Part C – Add Return Statements

Choose 3 functions (new or from above) and add a **return** statement.

Examples:  
- Return a number  
- Return a string  
- Return an object or array

Write them here:
```
1. function sayBye(name) { 
return 'Bye ${name}!';
}
-------------------------------------
2. function allowIn(name) { 
    if(name == "John"){
        return "Access Granted"
    } else{
        return "Access Denied"
    }
}
-------------------------------------
3. function askName(name) {
    return 'Hello ${name}!';
 }
```
---

### Part D – Calls with Arguments

For each function in Part C, write **two different function calls** using different arguments.

Example:

```js
sayHello("John");
sayHello("Ana");
```
```
1. sayBye("Luke");
   sayBye("Vader");

2. allowIn("Mario");
   allowIn("John");

3. askName("Lucy");
   askName("Luigi");

