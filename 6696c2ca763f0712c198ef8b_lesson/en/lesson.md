Let's see how to go through all the elements of the array and display them in the console.

```javascript
const arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);    // 1, 2, 3, 4, 5
}
```

### Sum of all elements of the array

Now let's extend our code to calculate the sum of all the elements of the array.

```javascript
const arr = [1, 2, 3, 4, 5];

let acc = 0; // accumulator, with primary value 0

for(let i = 0; i < arr.length; i++) { // array loop
    acc += arr[i]; // add the value of array item to the accumulator
}
console.log(acc) // 15
```


### The sum of all elements of an array with nonnumeric values

Let's add a non-numeric value to our array and see what happens.

```javascript
const arr = [1, 2, 3, 4, 5, 'string', '10'];

let acc = 0;

for(let i = 0; i < arr.length; i++) {
    acc += arr[i];
}
console.log(acc)    // '15string10'
```

As a result, we got a string, because when you add a number to a string, the number is reduced to a string.

Let's try to fix that.

In the following example, we will make only numeric values add up.

Example No1:
```javascript
const arr = [null, 1, 'a', 2, 'b', 3, undefined, 4, 5, 'string', '10'];

let acc = 0;

for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'number') acc += arr[i]; //  if the type of an array element is a number, add it to the accumulator
}
console.log(acc)    // 15
```

Example No2:
```javascript
const arr = [1, 2, 3, NaN];

let acc = 0;

for(let i = 0; i < arr.length; i++) {
  if(typeof arr[i] === 'number') acc += arr[i]; //  if the type of the array element is a number, add it to the accumulator
}
console.log(acc)    // NaN
```

We made it so that only numeric values are added to the accumulator and in the first example everything worked, but in the second one we got `NaN`.

This is because `NaN` is of type `number`, but it is not a number.


### Sum of numeric and string values, if the string contains a number

Let's change our code to fix the problem from the last example.

```javascript
const arr = [1, 2, '4', NaN, 'hello', undefined, null, -3];

let acc = 0;

for(let i = 0; i < arr.length; i++) {
    if(!Number.isNaN(+arr[i])) acc += +arr[i];  // if the array element is not NaN, then add it to the accumulator
}
console.log(acc)    // 4
```

Great, now everything is working properly.

Note that we used unary plus `+` when checking for `NaN` and when adding to bring the string to a number.