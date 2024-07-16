
In this lesson we will learn how to check if a string is a palindrome.

**Palindrome** is a line that reads from right to left and left to right equally.

Examples of a palindrome
```javascript
const str = '101';
const str2 = 'anna';
const str3 = 'ono';
const str4 = '0 44 0';
```
Not a palindrome
```javascript
const str = 'o 45 0';
const str2 = 'abda';
```
It is assumed that for the definition of a palindrome, the case does not matter, but 
This is best specified on a case-by-case basis.

What are some ways to check a string for a palindrome?

1. Convert the string to an array, flip it over, glue the array together and compare it to the original string.
This method is the shortest in terms of writing, but the most costly in terms of operations.

```javascript
const str = 'obbo';
const isPalindrome = str.split('').reverse().join('') === str;

console.log(isPalindrome); // true
```
```javascript
const str = 'obqo';
const isPalindrome = str.split('').reverse().join('') === str;

console.log(isPalindrome); // false
```

```javascript
const str = 'Obbo';
const isPalindrome = str.split('').reverse().join('') === str;

console.log(isPalindrome); // false
```
In the example above we get the result `false` because the case is relevant.

This can be corrected by converting to lower case.
```javascript
const str = 'Obbo';
const isPalindrome = str.toLowerCase().split('').reverse().join('') === str.toLowerCase();

console.log(isPalindrome); // true
```
The way to write a variable `isPalindrome` is called `chaining` (call chain).
`str.toLowerCase().split('').reverse().join('')` - first we convert the string to lowercase, then convert it to an array with
`split('')`, then we flip the array with `reverse(')` and glue it back together into a string with `join('')`.

This method has some disadvantages:
* split() - walks through the string and converts it to an array
* reverse() - traverses the entire array and reverses the array
* join() - walks through the array and glues it into a string
* and only then will we be able to compare the two strings.

There is a multiple repetition of passing through the row/array. In terms of evaluating the effectiveness of the algorithm, this option
is almost equal to the following method, but at the interview you will most likely be expected to see the method below.

2. **Cycle by array**, where we will compare the first letter to the last, the second to the penultimate, etc. If at least one pair does not match, the string is not a palindrome and the algorithm does not continue.

The advantage of this method is that it does not use additional structures
```javascript
function isPalindrome(str){
  for (let i = 0; i< str.length; i++){
  // We know how to refer to indexes from the beginning of the string, but how to additionally go from the end?
  // str.length - 1 - i so we will address the indexes from the end of the string
    if (str[i] !== str[str.length - 1 - i]) { // here we compare if elements from the beginning of the string are not equal to elements from the end of the string
      return false // if they are not equal then string is not a palindrome
    }
  }
  return true;
}

console.log(isPalindrome('obqiiwbo')) // false
```
```javascript
function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true;
}

console.log(isPalindrome('obiyyibo')) // true
```
In this example we got the result `true`, but let's check how many operations the loop has done.

To do this, print `console.log(i)` inside the loop
```javascript
function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(i)
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true;
}

console.log(isPalindrome('obiyyibo')) // 0 1 2 3 4 5 6 7 - true
```
Output to the console showed that the loop made 8 operations, although it was enough to make 4.
It was necessary to check only half of the string.

To do this, let's do a little optimization:
```javascript
function isPalindrome(str){
  for (let i = 0; i< str.length / 2; i++){ // the loop will only go to half of the string
    console.log(str[i]) // check which characters the loop checks
    if (str[i] !== str[str.length - 1 - i]) {
      return false  
    }
  }
  return true;
}

console.log(isPalindrome('obiyyibo')) // 'o' 'b' 'i' 'y' - true
```
In this case, the string length is even, and the loop takes exactly half of the string length.
What should you do if the string length is odd?

The middle character in the odd string is not important, but the loop will include the middle character:
```javascript
function isPalindrome(str){
  for (let i = 0; i < str.length / 2; i++){
    console.log(str[i])                     // check which characters the loop checks
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true;
}

console.log(isPalindrome('obiyRyibo')) // 'o' 'b' 'i' 'y' 'R' - true
```
Take note of this method and use it to solve problems in the future