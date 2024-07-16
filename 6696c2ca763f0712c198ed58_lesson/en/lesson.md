### Remove all duplicate characters from the string
Let's learn how to remove duplicates in a string.

#### Removing repetitive characters
```javascript
const str = 'abc alert beep';
```
We will not remove characters from this string, we will create a copy of the string with no duplicates.

For the line above we assume the result
`abc lertp` - all duplicate characters removed.
```javascript
const str = 'abc alert beep';

let res = ''; //create the resulting string, which defaults to an empty string

const symbols = {} //create an object to store the characters used. Explanation below
for (let i = 0; i < str.length; i++) {
  if (!symbols[str[i]]) { //if there is no current symbol in the object 
    symbols[str[i]] = 1; //then we add it to the object as a key with value 1
    res += str[i]; //and we add this symbol to our result string
  } //if the symbol is already in the object, we skip it and the loop advances to the next iteration
}

console.log(res) //'abc lertp' - we got what we wanted
```
The `symbols` object will be filled as the cycle progresses.

For example, after the first iteration of the loop it will look like
```javascript
const symbols = {
  a: 1
}
```
After the second:
```javascript
const symbols = {
  a: 1,
  b: 1
}
```

Let's see what the `symbols` object outputs to the console after solving our problem
```javascript
const str = 'abc alert beep';

let res = '';  
const symbols = {} 
for (let i = 0; i < str.length; i++) {
  if (!symbols[str[i]]) {
    symbols[str[i]] = 1;
    res += str[i];
  }
}

console.log(symbols)  
//{' ': 1, a: 1, b: 1, c: 1, e: 1, l: 1, p: 1,  r: 1, t: 1}
```

There is also a wrong solution that exists, but it is better not to use it in interviews:

We take some letter, find the index of this letter, and then use `indexOf` to check if this letter occurs again in the string (that is, the value is not equal to -1)

But this solution may not always work correctly. You can try it yourself