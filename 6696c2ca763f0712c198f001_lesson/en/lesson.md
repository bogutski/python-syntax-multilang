### The minimum number in the array

Find the minimum number in the array.

```javascript
const arr = [5, 15, 0, 9, 45, -8] // the minimum number in the array -8

let min = arr[0]; // let's suppose that the first element of the array is minimal

for (let i = 1; i < arr.length; i++) { // let's proceed through all the array elements
    if (arr[i] < min) { // if the current element is less than the minimum one
        min = arr[i]; // update the value of the minimum one
    }
}

console.log(min); // -8
```

Note that we start the loop with index `1`, because we have already written the first element of the array into the variable `min` and we do not need to check it again.


### Maximum number in the array

Now find the maximal number in the array.

```javascript
const arr = [5, 15, 0, 9, 45, -8]       // the maximum number in array is 45

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);  // 45
```

Great, everything works as it should.


### Function to find the minimum and maximum numbers in an array

Let's write a function that takes an array of numbers and returns an array with a minimum and a maximum number.

```javascript
function minAndMax(arr){
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    return [min, max];
}

console.log(minAndMax([5, -25, 14, 69, 100, 46, 0]));      // [ -25, 100 ]
console.log(minAndMax([-5, -53, -6, -7, -120, -3, -48]));  // [ -120, -3 ]
```