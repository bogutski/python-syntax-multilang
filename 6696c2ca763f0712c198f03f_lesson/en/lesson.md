### The second minimum number in the array

Let's see how to find the second minimum number in an array.

```javascript
const arr = [5, 31, -5, 0, 14, 55, -25] // min = -25, secondMin = -5

let min = arr[0]; // let's assign to the variable min the value of the first element of the array
let secondMin = arr[0]; // assign to the variable secondMin the value of the first array element

for(let i = 1; i < arr.length; i++){
    if(arr[i] < min) { // if the current element is less than the number passed into the variable min
        secondMin = min; // the secondMin variable is assigned to the min variable
        min = arr[i]; // the value of the current minimum element is assigned to the variable min
    } else if(arr[i] < secondMin && arr[i] > min){ // if the current element is less than the second minimal number and more than the minimal one
        secondMin = arr[i]; // then the current element becomes the second minimum
    }
}

console.log(min, secondMin) // -25, -5
```

Let's look at another example.

```javascript
const arr = [-25, 10, -5]  // min = -25, secondMin = -5

let min = arr[0];
let secondMin = arr[0];

for(let i = 1; i < arr.length; i++){
    if(arr[i] < min) {
        secondMin = min;
        min = arr[i];
    } else if(arr[i] < secondMin && arr[i] > min){
        secondMin = arr[i];
    }
}

console.log(min, secondMin)  // -25, -25
```

As we can see, the result is not as expected.

Let's look at this example step by step:

```javascript
const arr = [-25, 10, -5] // min = -25, secondMin = -5
let min = arr[0]; // -> min = -25
let secondMin = arr[0]; // -> secondMin = -25

// 1 iteration: 
// 10 < -25 -> false
// 10 < -25 && 10 > -25 ->; false

// 2 iteration:
// -5 < -25 -> false
// -5 < -25 && -5 > -25 -> false // at this step we have a problem, because -5 is the second minimum number, but it does not fall into the condition
```

Let's add one more condition to correct this problem.

```javascript
const arr = [-25, 10, -5] // min = -25, secondMin = -5

let min = arr[0]; // the initial value of the minimum number
let secondMin = arr[0]; // the initial value of the second minimum number

for(let i = 1; i < arr.length; i++){
  if(arr[i] < min) { // if the current element is less than the minimum number
    secondMin = min; // the second minimum number becomes the minimum number
    min = arr[i]; // the current element becomes the minimum
  } else if(arr[i] < secondMin && arr[i] > min){ // if the current element is less than the second minimum number and greater than the minimum number
    secondMin = arr[i]; // then the current element becomes the second minimum
  } else if(min === secondMin){ // if the minimum number is equal to the second minimum number
    secondMin = arr[i]; // then the second minimum number becomes the current element
  }
}

console.log(min, secondMin) // -25, -5
```

Great, now the result is as expected.

This is one option to fix the feature, but there are other ways.



### The second maximal number in the array

By analogy, find the second maximal number in the array.

```javascript
const arr = [999, 5, -9, -55, 42, 19, 88]  // max = 999, secondMax = 88

let max = arr[0];
let secondMax = arr[0];

for(let i = 1; i < arr.length; i++){
  if(arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if(arr[i] > secondMax && arr[i] < max){
    secondMax = arr[i];
  } else if(max === secondMax){
    secondMax = arr[i];
  }
}

console.log(max, secondMax); // 999, 88
```


### Function to find the second minimum and maximum number in an array

Let's now put everything together and write a function that takes an array of numbers and returns an object with two properties: `secondMin` and `secondMax`.

```javascript
function secondMinAndMax(arr){
    let result = {};
    let min = arr[0];
    let secondMin = arr[0];
    let max = arr[0];
    let secondMax = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min) {
            secondMin = min;
            min = arr[i];
        } else if(arr[i] < secondMin && arr[i] > min){
            secondMin = arr[i];
        } else if(min === secondMin){
            secondMin = arr[i];
        }

        if(arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if(arr[i] > secondMax && arr[i] < max){
            secondMax = arr[i];
        } else if(max === secondMax){
            secondMax = arr[i];
        }
    }

    result.secondMin = secondMin;
    result.secondMax = secondMax;

    return result;
}

console.log(secondMinAndMax([8, 0, -9, 1, 4, 6, -7]));  // { secondMin: -7, secondMax: 6 }
```