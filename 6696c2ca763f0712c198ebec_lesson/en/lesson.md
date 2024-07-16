# Count the number of occurrences of a character in a string
In this lesson we will learn to count how many times a character enters a string.

Let's look at an example:
```javascript
const str = 'Hello JS';
// we need to count how many times the letter 'l' enters the string
```

The easiest way to do this is to loop through the string and count how many times the letter occurs in the string.
To do this, create a variable - counter `count`:
```javascript
let count = 0;
const s = 'l'; // the character we will search for
for (let i = 0; i < str.length; i++) { 
  if (str[i] === s) { // if a character is included into the string, we increment the counter by 1
    count++;
  }
}

console.log(count); // 2
```
What if we want to count the occurrences of a letter, but not case-sensitive?

The easiest way is to convert the string `str` to lowercase and then work with it.

If for some reason we cannot translate the whole string, we can lowercase each character
in the body of the loop and the result will be the same.
```javascript
const str = 'Hello JSL'; // we can also translate the entire str.toLowerCase()
let count = 0;
const s = 'l';    
for (let i = 0; i < str.length; i++) { 
  if (str[i].toLowerCase() === s) { 
    count++;
  }
}

console.log(count); // 3
```
You can also use regular expressions to solve the problem, but we will go over regular expressions 
We will go through regular expressions towards the end of the course.

Consider another case.

If the `str` variable were not a string, but **array of strings**
```javascript
const arr = ['aq', 'ab', 'aq', 'ac'];
//count the number of occurrences of string `aq` in the array
let count = 0
const s = 'aq';

for (let i = 0; i < arr.length; i++) { //the loop is the same as for the string
  if (arr[i] === s) {
    count++
  }
}

console.log(count); // 2
``` 

Another example.

There are lines in the array and you need to count the number of occurrences of a character in all lines of the array.

This problem is already solved with two cycles 
```javascript
const arr = ['aq', 'bta', 'aqa', 'ac'];
//count the number of occurrences of the letter 'a' in all strings of the array
let count = 0
const s = 'a' //the letter we are looking for

for (let i = 0; i < arr.length; i++){ // this loop will loop through each element of the array
  for (let j = 0; j < arr[i].length; j++) { // this loop will loop through each character in the string
    if (arr[i][j] === s) { // it will check each character of each array element
      count++;
    }
  }
}

console.log(count); // 5
``` 