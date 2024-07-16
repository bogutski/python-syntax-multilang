### Get words from a string using the `split()` method

The `split()` method is a string method that returns an array of strings.

This method allows you to split a string by a delimiter, which is passed as an argument to the method.

```javascript
const str = 'JavaScript is the best programming language';

const arr = str.split(' ');

console.log(arr); // ['JavaScript', 'is', 'the', 'best', 'programming', 'language']
```


### Get words from a string with loops

Let's try to solve this problem using the `for` loop and the `if` conditions.

```javascript
const str = " Let's practice JavaScript!     ";
const arr = []; // array to store words 
let acc = ''; // accumulator to store the word

for(let i = 0; i < str.length; i++){
    if(str[i] !== ' ') acc += str[i]; // if the current character is not a space, add it to the accumulator

    if((str[i] === ' || i === str.length - 1) && acc !== ''){ // if the current character is a space or the last string character and the accumulator is not empty
        arr.push(acc); // add the word to the array
        acc = ''; // set the accumulator to zero
    }
}

console.log(arr); // [ "Let's", "practice", "JavaScript!" ]
```

Let's see how else we could write the second `if` condition:

```javascript
if(str[i] === ' ' && acc !== '' || i === str.length - 1 && acc !== '')
```
If an element is equal to a space `I` the accumulator is not empty `If` is the last element `I` the accumulator is not empty.



### How to get words from a string and skip punctuation marks?

Let's look at one way to get words from a string and skip punctuation marks.

All we need to do is add the characters we want to skip to the `symbols` variable and add a check to the `if` condition.

```javascript
const str = ' Hey, Alice! How was your vacation?     ';
const arr = [];
let acc = '';

const symbols = '.,!?;:' // the characters we want to skip

for(let i = 0; i < str.length; i++){
    if(str[i] !== ' ' && !symbols.includes(str[i])) acc += str[i]; // if the current character is not a space and is not in the `symbols` variable, add it to the accumulator

    if((str[i] === ' || i === str.length - 1) && acc !== ''){
        arr.push(acc);
        acc = '';
    }
}

console.log(arr); // ['Hey', 'Alice', 'How', 'was', 'your', 'vacation' ]
```
