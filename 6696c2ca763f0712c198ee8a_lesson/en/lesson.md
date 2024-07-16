In this lesson, we'll look at how to replace numbers in a string with their verbal description.

```javascript
const str = ' 1 js 2 coding 10 11 3 4 0';
// result: ' one js two coding ten eleven three four zero'

const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',

    10: 'ten',
    11: 'eleven'
}

let result = ''; // a variable to store the result
let word = ''; // a variable for temporarily storing the part of the string between spaces

for(let i = 0; i < str.length; i ++){ // loop the string
    if(str[i] !== ' ') word += str[i]; // if the character is not a space, we add it into the word variable

    if(str[i] === ' ') result += ' '; // if a character is a space, add it into the result variable

    if(str[i] === ' ' && word) { // if a space character and the word variable is not empty
        if(numbers[word]) result += numbers[word]; // if the object contains a key with this value, add it to the result variable
        else result += word; // otherwise we add the value of the word variable to the result variable
        word = ''; // clear the word variable
    }
}
console.log(result) // ' one js two coding ten eleven three four'
```

Let's compare the expected and actual results:

* Expected: '   one js two coding ten eleven three four zero'
* Actual:   '   one js two coding ten eleven three four'

As we can see, there is a space and the word 'zero' missing at the end of the line.

Later in the lesson we will correct this mistake.


### Method `Number.isNaN()`

Let's see how the `Number.isNaN()` method works.

```javascript
const a = 123;
const b = '456';
const c = 'javascript';
console.log(+a);   // 123
console.log(+b);   // 456
console.log(+c);   // NaN
```

What does `NaN` mean? And why is the variable `c` equal to `NaN`?

`NaN` is a special value that means the result is not a number.

In our example, we are trying to convert a string into a number, but there are letters in the string, so the result is `NaN`.

```javascript
const a = 10;
const b = '25';
const c = 'Hello123';
console.log(Number.isNaN(+a));   // false
console.log(Number.isNaN(+b));   // false
console.log(Number.isNaN(+c));   // true
```

The variable `a` contains a number, so the result is `false`.
The variable `b` contains a string, but it contains only numbers, so the result is `false`.
The variable `c` contains a string with letters and numbers, so the result is `true`.


### Correcting and adding a method

Try correcting and adding the `Number.isNaN()` method to our first function.

* The function should handle the entire string, including the last elements.
* If the number is not in our object, replace it with `unknown`.

Do it yourself and then compare your code with the code below.

```javascript
const str = 'Hello 100 3 6 10 11 9 world';
// result: 'Hello unknown three six ten eleven unknown world'

const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    10: 'ten',
    11: 'eleven'
}

let result = '';
let word = '';

for(let i = 0; i < str.length; i ++){
    if(str[i] !== ' ') word += str[i]; // if the character is not a space, add it to the word variable

    if(str[i] === ' ' && word) { // if the character is a space and the word variable is not empty
        if(numbers[word]) result += numbers[word]; // if the object contains a key with this value, add it to the result variable
        else if(!Number.isNaN(+word)) result += 'unknown'; // if the word variable is not NaN, then we add the value 'unknown' to the result variable
        else result += word; // otherwise add the value of the word variable to the result variable
        word = ''; // clear the word variable
    }

    if(str[i] === ' ') result += ' '; // if a character is a space, add it into result variable

    if(i === str.length - 1 && word) { // if i equals the string length minus 1 and the word variable is not empty
        if(numbers[word]) result += numbers[word]; // then repeat all the operations from the second if condition
        else if(!Number.isNaN(+word)) result += 'unknown';
        else result += word;
    }
}
console.log(result) // 'Hello unknown three six ten eleven unknown world'
```