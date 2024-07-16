In this lesson, we'll look at the options for finding `numbers` in a string.

First, let's remember how to find `digits` in a string.

### Search for digits in a string

To search for numbers in a string, we can use two loops:

```javascript
const str = 'Find numbers 123 in string 456'
const numbers = '0123456789'; // number string

const arrOfNumbers = []; // array for storing numbers

for(let i = 0; i < str.length; i++){ // loop the string
    for(let j = 0; j < numbers.length; j++){ // loop the string with digits
        if(str[i] === numbers[j]) arrOfNumbers.push(str[i]); // if the characters are equal, add to the array
    }
}

console.log(arrOfNumbers); // [ '1', '2', '3', '4', '5', '6' ]
```

We can also use the `includes` method and remove the second loop:

```javascript
const str = 'a0 b9 c8 d7 e6 f5';
const numbers = '0123456789';

const arrOfNumbers = [];

for(let i = 0; i < str.length; i++){
  if(numbers.includes(str[i])) arrOfNumbers.push(str[i]);
}

console.log(arrOfNumbers);  // [ '0', '9', '8', '7', '6', '5' ]
```


### Search for numbers in a string

Let's now figure out how to find `numbers` in a string.

In this problem we will do everything the same as in the problem on finding digits in a string, only we will add some more actions.

```javascript
const str = '5He88llo 009-87-65 world3!4';
const numbers = '0123456789'; // a string of numbers

const arr = []; // array for storing numbers
let acc = ''; // a variable for storing numbers

for(let i = 0; i < str.length; i++){ // loop the string
    if(numbers.includes(str[i])) acc += str[i]; // if the characters are equal, then add it to the temporary variable
    else if(acc !== ''){ // if the characters are not equal, check that the temporary variable is not empty
        arr.push(+acc); // if it is not empty, convert it into a number and add it to the array
        acc = ''; // and zeroize the temporary variable
    }
    if(i === str.length - 1 && acc !== '') arr.push(+acc); // if the temporary variable is not empty, convert it to a number and add it to the array
}

console.log(arr); // [ 5, 88, 9, 87, 65, 3, 4 ]
```

Let's try to make another version of the condition:

```javascript
const str = '5Hi 1-2-3 world7?10';
const numbers = '0123456789';

const arr = [];
let acc = '';

for(let i = 0; i < str.length; i++){
    if(numbers.includes(str[i]) && i === str.length - 1) { // if the element is in the string with digits and it is the last element of the string
        acc += str[i]; // then we add it into a temporary variable
        arr.push(acc); // and add to the array
    } else if(numbers.includes(str[i])) { // if the element is found in the line with the numbers
        acc += str[i]; // then it is added to the temporary variable
    } else if( acc !== '') { // if the element is not in the string with digits, and the temporary variable is not empty
        arr.push(acc); // then add it to the array
        acc = ''; // and zeroize the temporary variable
    }
}

console.log(arr); // [ '5', '1', '2', '3', '7', '10' ]
```

Practice writing code on your own to reinforce the material.
