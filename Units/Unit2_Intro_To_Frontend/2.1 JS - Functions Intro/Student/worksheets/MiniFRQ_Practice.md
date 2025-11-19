# 2.1 Functions Intro – Worksheet
## Mini FRQ – sum() and avg()

You will design two functions that work together: `sum(array)` and `avg(array)`.

---

### Part 1 – Pseudocode

Write pseudocode for each function.

1. `sum(array)`
```function sum(num){
    return num + num;
}
```

2. `avg(array)`
```
function avg3(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}
```




---

### Part 2 – Edge Cases

What should each function do if the array is **empty**? Explain in one or two sentences.

If the array is empty then it wouldnt display anything.


---

### Part 3 – Test Cases

Design at least **3 test cases** for each function.

Example for `sum`:

- Input: `[1, 2, 3]` → Output: `6`

Fill in your own below.

`sum(array)` tests:

1. sum(2) output 4
2. sum(4) output 8
3. sum(8) output 16

`avg(array)` tests:

1. avg3(1, 1, 1) output 1
2. avg3(100, 0, 50) output 50
3. avg3(100, 90, 10) output 66.66666666666666666666666666666666667

