Let's understand how the `break` operator works.

The `break` operator lets you exit the loop even if the loop continuation condition is met.

Consider the following example: output all characters of a string before the first space.

```javascript
const str = 'Hello World';

for (let i = 0; i < str.length; i++) { // go through all characters of the string
  if (str[i] === ' ') { // if the current character is `space`.
    break; // then break the loop
  }
  console.log(str[i]); // 'H'
                                          // 'e'
                                          // 'l'
                                          // 'l'
                                          // 'o'
}
```

As we can see, the loop continuation condition is satisfied, but the `break` operator interrupts it and only the first word is printed to the console.


In the next task we will need to count all elements of the string up to the first comma.

```javascript
const str = 'Hello JS, you are awesome!'
let count = 0; // create a variable for counting

for (let i = 0; i < str.length; i++) { // go through all characters of the string
  if (str[i] === ',') break; // if the current character is a `comma`, break the loop
  count++; // increment counter by 1
}

console.log(count); // 8
```

Let's try to find the element starting from the end of the line.

For example, assign elements of a string to another variable until an exclamation point is encountered.

```javascript
const str =  'Hi there! How are you?';
let newStr = ''; // create a variable for the new string

for (let i = str.length - 1; i >= 0; i--) { // go through all characters from the end of the string
  if (str[i] === '!') break; // if the current character is an `exclamation mark`, break the loop
  newStr += str[i]; // add the current symbol to the new line
}

console.log(newStr); // '?uoy era woH'
```

In this problem we went from the end of the line to the exclamation point and added all the characters to the new line. Thus, we got an inverted string.


Now let's practice with an array.

Let's find which index has the first digit.

```javascript
const numbers = '1234567890';
const array = ['a', 'b', 'c', '1', 'e', '2', 'g', 'h', '4', 'j'];

for (let i = 0; i < array.length; i++) { // go through all elements of the array
  if (numbers.includes(array[i])) { // if the current element is in the `numbers` string
    console.log(i); // print its index
    break; // and break the loop
  }
}

// 3
```

In this example, the loop performed 3 iterations and found the first digit on the 4th iteration. The index of the first digit was printed to the console, and the loop was terminated.