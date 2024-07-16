### Accessing string elements by index

Let's go through the elements of the string and display them in the console:

```javascript
let string = 'Hello';

console.log(string[0]); // 'H'
console.log(string[1]); // 'e'
console.log(string[2]); // 'l'
console.log(string[3]); // 'l'
console.log(string[4]); // 'o'
```

Now find the first and the last elements of the string:

```javascript
let string = 'World';

console.log(string[0]); // 'W', the first element of the string has index `0`
console.log(string[string.length - 1]); // 'd', the last element of the string has index `string.length - 1`
```

Let's create a variable and assign it the value of the last element of the string:

```javascript
let string = 'World';
let i = string.length - 1; // the length of the string is `5`, so the last element has index `4`

console.log(i); // 4
console.log(string[i]); // 'd'
```


### Using the `for` loop to try elements of a string

Let us remember how the `for` loop works.

Output all elements of the string to the console:

```javascript
const string = 'abc';

for (let i = 0; i < string.length; i++) {
  console.log(string[i]);                     // 'a'
                                              // 'b'
                                              // 'c'
}
```

Let's break down what happens in the cycle:

1. `let i = 0` - creates a variable `i` and assigns a value of `0`
2. `i < string.length` - the condition `0 < 3` - `true` is checked
3. `console.log(string[i])` - loop body executed, output to console `string[0]` -> `'a'`
4. `i++` - increase the value of the variable `i` by `1`

In our example the loop performs these actions three times, after which the condition `i < string.length` becomes `false` and the loop ends.


### Using the `for` loop to try elements of a string in reverse order

Let's output all elements of the string in reverse order:

```javascript
const string = 'Hello';

for (let i = string.length - 1; i >= 0; i--) {
  console.log(string[i]);                     // 'o'
                                              // 'l'
                                              // 'l'
                                              // 'e'
                                              // 'H'
}
```

Let's look at how the loop condition has changed:

* `let i = string.length - 1` - creates a variable `i` and assigns the value `4`.

    The length of the string is `5`, so the last element has an index of `4`.

* `i >= 0` - the condition check has changed, because now `i` will decrease by `1` and we need to check when `i` becomes equal to `0`.

* The `i--` variable change also changed, now `i` must be decreased by `1` until we reach the first element of the line with the index `0`.


### Using the `for` loop in a function

Let's write a function that counts the number of letters `a` in the string:

```javascript
function countLetterA(string) {
  let count = 0; // create a variable `count` to count the number of letters `a`

  for (let i = 0; i < string.length; i++) { // loop the string from beginning to end
    if (string[i] === 'a') { // check if the element is equal to `'a'`
      count = count + 1; // increment counter by `1`
    }
  }

  return count;
}

console.log(countLetterA('Hello')); // 0
console.log(countLetterA('abc')); // 1
console.log(countLetterA('an apple')); // 2
console.log(countLetterA('JavaScript')); // 2
```

Now let's take apart the function that counts the number of `vowels` in a string:

```javascript
function countVowels(string) {
  const vowels = 'aeiouAEIOU'; // we create a string with vowels
  let count = 0; // create a variable `count`, to count the number of vowels

  for (let i = 0; i < string.length; i++) { // loop the string from beginning to end
    if (vowels.includes(string[i])) { // check if the element is present in the string `vowels`
      count++; // increment counter by `1`.
    }
  }

  return count; // return the number of vowels
}

console.log(countVowels('Hello')); // 2
console.log(countVowels('abuciobte')); // 5
console.log(countVowels('Java Script')); // 3
console.log(countVowels('programming')); // 3
```

Let's look at the function that counts the number of `digits` in a string:

```javascript
function countDigits(string) {
  const digits = '0123456789'; // we create a string with digits
  let count = 0; // create a variable `count`, to count the number of digits

  for (let i = 0; i < string.length; i++) { // loop through the string from the beginning to the end
    if (digits.includes(string[i])) count++; // check if the element is present in the string `digits`, increase the count by `1`.
  }

  return count; // return the number of digits
}

console.log(countDigits('123')); // 3
console.log(countDigits('0954')); // 4
console.log(countDigits('1234567890')); // 10
console.log(countDigits('J1a7v00a 7Script')); // 5
```
