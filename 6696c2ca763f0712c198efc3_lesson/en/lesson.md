In this example, we'll look at how to find the arithmetic mean of all the numbers in an array.

The arithmetic mean is the sum of the numbers divided by the number of numbers.

In this example, we work with an array that has mixed data types:
```javascript
const arr = ['4', 0, NaN, 'a', 2, 6];

let acc = 0;

for (let i = 0; i < arr.length; i++) {
  if (!Number.isNaN(+arr[i])) acc += +arr[i]
}

console.log(acc);

// 12
```
This code brings all elements of the array to a number, including `'4'` and `NaN`.
Let's look at how to sift out all the non-numeric elements from the array

```javascript
const arr = ['4', 0, NaN, 1, 'a', 2, 6];

let acc = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
      acc += +arr[i]
  }
}

console.log(acc);

// 9
```
In the `if` condition we added that we work only with numbers `typeof arr[i] === "number"`
and exclude NaN with `!Number.isNaN(arr[i])`

How do I know how much to divide the `acc` accumulator by?

To do this, let's add another variable `count`, which will count only the numbers that entered the accumulator:

```javascript
const arr = ['4', 0, NaN, 1, 'a', 2, 6];

let acc = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
      acc += arr[i]
      count++
  }
}

console.log(acc / count);

// 2.25
```