### The sum of an array of a certain length.

An array of numbers is given, with a length of `10` elements. You need to find the sum of the elements of the array.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < 10; i++) { // iterate the loop from `0` item to `9`
    sum += numbers[i]; // sum the array elements
}
console.log(sum) // 55
```

### The sum of an array of indeterminate length.

Let's look at how to determine the length of an array.

To do this, we have the `length` property, which returns the length of the array.

```javascript
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.length);      // 5
```

Now recall that array indexing starts with `0` and array length with `1`.

```javascript
const numbers = [1, 2, 3];

console.log(numbers[0]);          // 1
console.log(numbers[1]);          // 2
console.log(numbers[2]);          // 3
console.log(numbers[3]);          // undefined - no element with this index
```

To access the first element of the array, we use the index `0`.

And to access the last element of the array, we use the index `length - 1`.

```javascript
const numbers = ['zero', 'one', 'two'];

console.log(numbers[0]);                    // 'zero'
console.log(numbers[numbers.length - 1]);   // 'two'
console.log(numbers[numbers.length]);       // undefined - no element with index `3`
```


Now that we know how to determine the last element of an array, we can find the sum of all the elements of the array.

```javascript
const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) { // iterate the loop from `0` element to `4`
    sum += numbers[i]; // sum the array elements
}

console.log(sum) // 150
```

In this example we use the `length` property to determine the length of the array. 

Specify in the condition that the loop be executed as long as `i` is less than the length of the array, that is, `i < numbers.length`.

Also, we can use the following condition: `i <= numbers.length - 1`.

In this case we specify that the loop must be executed as long as `i` is less than or equal to the length of the array minus `1`.



### The arithmetic mean of the array elements.

In order to find the arithmetic average of the array elements, we need to find the sum of all the array elements and divide it by the number of elements or by the length of the array.

```javascript
const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) { // iterate the loop from `0` element to `4`
    sum += numbers[i]; // sum the array elements
}

const average = sum / numbers.length; // `150 / 5 = 30`, find the arithmetic mean
console.log(average) // 30
```

### Multiplication of array elements.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 1; // initial value `1`

for (let i = 0; i < numbers.length; i++) { // loop iteration will be from `0` element to `9`
    result = result * numbers[i]; // multiply array elements
}

console.log(result) // 3628800
```

Do not forget about the initial value of the `result` variable, which must be equal to `1`.

Otherwise, if we multiply by `0`, the result will always be `0`.


### Expand the array using the `push()` method.

```javascript
const numbers = [1, 2, 3, 4, 5];
const reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {  // iterate the loop from `4` element to `0`
  reversed.push(numbers[i]);                     // add elements to the end of the new array
  console.log(reversed)                          // [5] -> [5, 4] -> [5, 4, 3] -> [5, 4, 3, 2] -> [5, 4, 3, 2, 1]
}

console.log(reversed)                            // [5, 4, 3, 2, 1]
```

In this example, pay attention to the loop condition:

* `let i = numbers.length - 1` - the initial value of `i` is equal to the length of the array minus `1`, that is `4`.

* `i >= 0` - the loop will be executed as long as `i` is greater than or equal to `0`.

* `i--` - after each iteration, the value of `i` will decrease by `1`. If we leave `i++`, the loop will be executed infinitely.



### Expand the array using the `unshift()` method.

```javascript
const numbers = ['Hi', 'there', '!!!'];
const reversed = [];

for (let i = 0; i < numbers.length; i++) {     // iterate the loop from `0` element to `2`
  reversed.unshift(numbers[i]);                // add elements to the beginning of the new array
  console.log(reversed)                        // ['Hi'] -> ['there', 'Hi'] -> ['!!!', 'there', 'Hi']
}

console.log(reversed)                          // ['!!!', 'there', 'Hi']
```

When using the `unshift()` method, in each iteration of the loop, all the indexes of the new array will be recalculated, because each element will be added to the beginning of the array.

On the optimization side, this method is not optimal, because with a large number of elements, it will take longer to execute than the `push()` method.
