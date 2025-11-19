# 2.1 Functions Intro – Worksheet
## Guided Practice

### Part 1 – Identify Parts of a Function

For each snippet, underline or label:

- the **function name**
- the **parameters** (if any)
- the **body** (the code inside `{ }`)
- the **invocation** (function call)

1.
```js
function sayHelloWorld() {
  console.log("Hello World!");
}

sayHelloWorld();

1. function name: sayHelloWorld
2. parameters: undefined
3. body: console.log("Hello World")
4. invocation: sayHelloWorld
```

2.
```js
function sayHello(name) {
  console.log(`Hello ${name}!`);
}

sayHello("Mary");
sayHello("John");

1. say hello
2. name
3. console.log('Hello ${name}!')
4. invocation Mary
5. "Hello Mary!"
6. invocation John
7. "Hello John!"
```

3.
```js
function sayHelloToThree(classmate1, classmate2, classmate3) {
  console.log(`Hello ${classmate1}, ${classmate2} and ${classmate3}!`);
}

sayHelloToThree("Chris", "Joe", "Maria");

1. function name: sayHelloToThree
2. parameters: classmate1, classmate2, classmate3
3. body:  console.log(`Hello ${classmate1}, ${classmate2} and ${classmate3}!`);
4. invocation: sayHelloToThree("Chris", "Joe", "Maria")
```


### Part 2 – Predict the Output

Write the exact output that will appear in the console.

4.
```js
function printName(name) {
  console.log(`Name is ${name}.`);
}

printName("Ana");
```

Output:
<b>Name is Ana.</b>
> 

5.
```js
function sayMessage(message) {
  console.log(message);
}

sayMessage("Functions are cool!");
sayMessage("DRY means Don't Repeat Yourself.");
```

Outputs: 
<b> Functions are cool!
DRY means Don't Repeat Yourself.</b>
> 


### Part 3 – Fix the Function

6. Fix the syntax errors:

```js
function greet {
  console.log("Hi!");
}

greet;
```

Write the corrected version below:

```
function greet(x){
  console.log(x);
}

greet("Hi!");
greet("hola")
```

7. Fix the function so it correctly prints “Hello, Mary!”:

```js
function greet(name) {
  console.log("Hello, name!");
}

greet("Mary");
```

Corrected version:
```
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Mary");
```