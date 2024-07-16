### Replace a character in a string with a loop

In this lesson we will learn how to replace a character in a string using a loop.

For the first example, we will replace the `exclamation mark` with a `dot`.

```javascript
const str = 'Hello! JavaScript!'
let result = ''; // we create an empty string to write the result into

for (let i = 0; i < str.length; i++) { // loop the string
  if (str[i] === '!') { // if the current character is an exclamation mark
    result += '.'; // we put a dot instead
  } else { // otherwise
    result += str[i]; // write the current symbol into the result
  }
}
console.log(result); // 'Hello. JavaScript.'
```


### Using an object to replace string characters

In this example, we will create an object with the characters we want to replace.

```javascript
const str = '1 + 2 + 3 Hello. JavaScript...';
let result = '';

const map = { // create an object to store replacements
    '.': '!',
    1: 'one',
    2: 'two',
    3: 'three',
    ' ': '_',
    '+': '*'
}

for (let i = 0; i < str.length; i++) { // loop the string
    if (map[str[i]]) { // if the current character is in the object
        result += map[str[i]]; // write value from the object into the result
    } else { // otherwise
        result += str[i]; // write the current character to the result
    }
}
console.log(result); // 'one_*_two_*_three_Hello!_JavaScript!!!'
```

Let's do another example in which we replace numbers and mathematical signs with words.

```javascript
const str = '5 + 4 - 7 = 2; 2 * 3 / 6 = 1';

let result = '';

const map = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7:'seven',
    8: 'eight',
    9: 'nine',
    '-': 'minus',
    '+': 'plus',
    '*': 'multiply',
    '/': 'divide',
    '=': 'equals',
    ';': ' and',
}

for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
        result += map[str[i]];
    } else {
        result += str[i];
    }
}
console.log(result); // 'five plus four minus seven equals two and two multiply three divide six equals one'
```


### Replacing characters in a string using the replace method

The `replace` method is a string method that allows you to replace characters in a string.

```javascript
const str = 'Hello, world!';

let result = str.replace('world', 'JavaScript');  // replace 'world' with 'JavaScript'

console.log(result);                              // 'Hello, JavaScript!'
```

Let's try to replace a few elements in a string.

```javascript
const str = 'Hello! World!';

let result = str.replace('!', ';'); // replace exclamation point with semicolon

console.log(result);                // 'Hello; World!'
```

As a result, we see that not all exclamation points have been replaced. 

This is because the `replace` method only replaces the first occurrence.

To replace all occurrences, use `regular expression` or the `replaceAll` method.


### Replacing all occurrences with a regular expression or the replaceAll method

```javascript
const str = 'Hello! World!';

let result = str.replaceAll('!', ';'); // replace all occurrences of the exclamation point with a semicolon

console.log(result);                   // 'Hello; World;'
```

Now replace the elements in the string with a regular expression.

```javascript
const str = 'Hello Java Script !';

let result = str.replace(/ /g, '_');  // replace all spaces with underscores

console.log(result);                   // 'Hello_Java_Script_!'
```
