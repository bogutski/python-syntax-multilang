Converting a string into an array is an important part of learning Java Script

**Method `split()`** 

It can ONLY be applied above the line!

Syntax:

`split(separator)`

The parentheses indicate the delimiter inside the string. An optional parameter.

Let's take the method of converting a string into an array using the
using the built-in string method `split()`.
```javascript
const str = 'Hello JS';
const arr = str.split('') //the separator is an empty string
console.log(arr)

["H", "e", "l", "l", "o", " ", "J", "S"]
```
In this case the separator is specified as an empty string and 
 str is converted to an array of characters.

Consider other examples of the separator:
```javascript
const str = 'Hello JS';
const arr = str.split(' ') // the separator is a string with a space inside
console.log(arr)

["Hello", "JS"]
```
The string is converted to an array with two elements separated by a space element.
```javascript
const str = 'Hello JS !!! .. ++';
const arr = str.split(' ') //the separator is a string with a space inside
console.log(arr)

["Hello", "JS", "!!!", "..", "++"]
```
All elements separated by a space are collected into an array element.
```javascript
const str = 'Hello JS';
const arr = str.split(',') //the separator is a line with a comma inside
console.log(arr)

["Hello JS"]
```
The string is converted to an array with only one element, since the comma does not occur
in the string.

Try practicing by writing different separator variants
with different strings and see what the result is.

You can use the split() method to convert a string with any number of characters to an array.

Sometimes you need to convert a string to an array without using methods.

Then you can use the **cycle `for`**

```javascript
const str = 'Hello JS-Coding PlayGround';
const arr = []; 
for (let i = 0; i < str.length; i++){
  let acc = ''; //create an accumulator as an empty string to collect words
// to collect an integer word, you must apply the if condition  
  if (str[i] !== ' ') acc +=str[i] //if the element is not a space, add it to the accumulator
  else { // the action when we have encountered a space
    arr.push(acc); // we add to the array everything that we collected in the accumulator
    acc = ''; // and we clear the accumulator, making it back an empty string
  }
}

console.log(arr)

["", ""]
```
In this case we got an array with empty strings.
This happened because the accumulator was created inside the loop and 
at each iteration of `acc` was cleared again to an empty string.

To prevent this from happening, the `acc` accumulator must be created before the cycle starts.
```javascript
const str = 'Hello JS-Coding PlayGround';
const arr = [];
let acc = '';
for (let i = 0; i < str.length; i++){
  if (str[i] !== ' ') acc +=str[i] 
  else {                           
    arr.push(acc);                 
    acc = '';                      
  }
}

console.log(arr)

["Hello", "JS-Coding"]
```
The array is filled, but the last word does not come into the array.
This is due to the fact that after the last word in the string we have no space and
The `else` condition is never satisfied. That is, no `push` command occurs.

```javascript
const str = 'Hello JS-Coding PlayGround';
const arr = [];
let acc = '';
for (let i = 0; i < str.length; i++){
  if (str[i] !== ' ') acc +=str[i] 
  else {                           
    arr.push(acc);                 
    acc = '';                      
  }
}
arr.push(acc)     //after the loop is finished, add the last push of the accumulator
console.log(arr)

["Hello", "JS-Coding", "PlayGround"]
```

Or you can check that the accumulator has accumulated the last element of the array.

Let's add the condition that the loop element is equal to the last character of the string:
```javascript
const str = 'H el lo';
const arr = [];
let acc = '';
for (let i = 0; i < str.length; i++){
  if (str[i] !== ' ') acc +=str[i] 
  else {                           
    arr.push(acc);                 
    acc = '';                      
  }
  if(i === str.length-1) arr.push(acc)
}
console.log(arr)

["H", "el", "lo"] //cycle works correctly
```

Try to optimize the code so that it is not so long.
