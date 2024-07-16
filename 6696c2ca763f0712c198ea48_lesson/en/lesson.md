Let's create a loop, with which we will do different manipulations with the numbers
from min to max, from max to min and we will get their sum or different variations of a number series

```javascript
const min = 4;
const max = 15;

for (let i = min; i <= max; i++){
  console.log(i)
}
```
The cycle is created from value `min` to value `max` with iteration step one `i++`

The result of this cycle
```javascript
// 4 5 6 7 8 9 10 11 12 13 14 15
```
How do we get the sum of the numbers with a cycle? 
To do this, we need to create a variable, an accumulator, in which we will accumulate the sum of
```javascript
let acc = 0;
```
This variable must be created with `let` since its value will change. 
It must be assigned an initial value of zero `let acc = 0`.

```javascript
const min = 4;
const max = 15;
let acc = 0;

for (let i = min; i <= max; i++){
 acc += i
}
console.log(acc)
```
In this cycle each value of `i` will be added to the accumulator:
```javascript
// acc = 0 + 4 = 4
// acc = 4 + 5 = 9
// acc = 9 + 6 = 15
// acc = 15 + 7 = 22
```
and so on...
The result of the cycle above 
```javascript
// 114
```

Also, when working in loops with numbers, we can perform other mathematical operations. 
For example, multiplication:

```javascript
const min = 1;
const max = 3;
let acc = 1;

for (let i = min; i <= max; i++){
 acc *= i
}
console.log(acc)

// 1 * 1 * 2 * 3 = 6
```
Note that in this case you must change the original accumulator value `let acc = 1`, otherwise the product of a series of numbers will always be zero.

You can create a loop that will show not only the final result of adding numbers (or other mathematical operation), but also the total of each iteration.
To do this, let's introduce another variable - an empty array.

Now, in the loop body, after adding a number to the accumulator at each iteration step, we add the resulting subtotal to the array using the `push()` command:

```javascript
const min = 1;
const max = 5;
let acc = 0;
const arr = [];

for (let i = min; i <= max; i++) {
  acc += i
  arr.push(acc)
}
console.log(arr)

// [1, 3, 5, 10, 15]
```

Or another example:
Numbers between `min` and `max` must be squared and an array of these numbers returned.

```javascript
const min = 1;
const max = 5;
let acc = 0;
const arr = [];

for (let i = min; i <= max; i++) {
  acc += i ** 2
  arr.push(acc)
}
console.log(arr)

// [1, 5, 14, 30, 55]
```

There can be many variations on such problems: adding numbers, squaring, dividing by any number, getting a string of numbers, outputting only even or odd numbers, etc.

Go to the problem-solving section and practice "The sum of numbers from and to