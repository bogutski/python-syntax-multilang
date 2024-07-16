The `trim()` method removes spaces at the beginning and end of the string.

The `trim()` method does not change the original string.

Let's look at some examples:

```javascript
const str =  ' L     '; // string with spaces at the beginning and at the end
const strResult = str.trim(); // introduce a new variable and apply the trim() method
console.log(strResult); // 'L' - all spaces removed
console.log(strResult.length); // 1 - find out the string length to check the method
```

```javascript.
const str = '      Learn JS.  ';
const strResult = str.trim();
console.log(strResult); // 'Learn JS.' - The spaces in the middle of the line are not removed
```

To remove spaces within a string, you need to use other methods.

The `trimStart()` method removes spaces at the beginning of a line.

The `trimEnd()` method removes spaces at the end of a string.

```javascript.
const str = '      Learn JS.       ';
const strResultStart = str.trimStart(); // apply the trimStart() method
console.log(strResultStart); // 'Learn JS.       ' - the trimStart() method has only removed spaces at the beginning of the line

const strResultEnd = str.trimEnd(); // apply the trimEnd() method
console.log(strResultEnd); // '       Learn JS.' - The trimEnd() method only removes spaces at the end of the string
```

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/boy-trim.png)

Let's create a function that queries the username and returns its length.

```javascript
function nameLetterCount() {
    const name = prompt('Name?'); // we query the user's name using the prompt() method and assign it to the variable name
    const count = name.length; // we assign the length of the name variable to a separate variable
    return 'Your name contains ' + count + ' letters'; // return the result
};
console.log(nameLetterCount()); // start the function
```

```javascript
prompt('Liza'); // 'Your name containts 4 letters' - it is correct
prompt('      A    '); // 'Your name containts 11 letters' - it is incorrect, because spaces were counted
```

For the function to work correctly, let's make some changes to the code:

* let's add the trim() method, which removes spaces at the beginning and at the end of the string
* let's check the last character of the string, in case the user put a dot at the end of the name

```javascript
function nameLetterCount() {
    const name = prompt('Name?').trim(); // ask for a name, and then remove possible spaces
    let count = name.length; // we assign the length of the string to a separate variable
    if(name[name.length - 1] === '.') count--; // check the last character
    return 'Your name contains ' + count + ' letters'; // return the result as a concatenation of strings
}
console.log(nameLetterCount()); // start the function
```

```javascript
prompt('Liza'); // 'Your name containts 4 letters'
prompt('      A    '); // 'Your name containts 1 letters'
prompt('Alice.'); // 'Your name containts 5 letters' - now the function works properly
```