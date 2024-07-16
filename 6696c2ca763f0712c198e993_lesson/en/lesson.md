# Skip iteration. continue
We have already figured out how `break` works: it is used when we want to abort the loop
and exit without waiting for the rest of the iterations to run.

There is another directive that is also used in loops.

This is the `continue` directive.

In what cases is it used? `continue` is used if, if some conditions are met, we would like to interrupt
current iteration and move on to the next one.

```javascript
const str = 'He1ll650 JS8 !';

for (let i = 0; i < str.length; i++) {
  if ('0123456789'.includes(str[i])) break   //as soon as we hit a number, the loop is broken
  console.log(i);
}

// 0 1  we got the indexes of the first two characters, as the third character is a digit
```
```javascript
const str = 'He1ll65o  JS8 !';

for (let i = 0; i < str.length; i++) {
  if ('0123456789'.includes(str[i])) continue   //if the condition is true, skip the iteration and move on to the next
  console.log(i);
}

// 0 1 3 4 7 8 9 10 11 13 14  
```
We got the indexes of all characters except numbers.

Let's see what characters we got in the console.
```javascript
const str = 'He1ll65o  JS8 !';

for (let i = 0; i < str.length; i++) {
  if ('0123456789'.includes(str[i])) continue   
  console.log(str[i]);
}

// "Hello JS !"
```
If we need to clear a string of numbers, we can use this method.

Let's create an additional line-accumulator
```javascript
const str = 'He1ll65o  JS8 !';

let acc = '';

for (let i = 0; i < str.length; i++) {
  if ('0123456789'.includes(str[i])) continue   
  acc += str[i];
}
console.log(acc)
// "Hello JS !"
```

Consider the example where we want to collect all capital letters from a string into a separate accumulator.
```javascript
const str = 'hi, JavaScript Here!';

let acc = '';

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase()) continue   
  acc += str[i];
}
console.log(acc)
//"hiavacriptere"
```
The accumulator did not include capital letters, as well as spaces and punctuation marks.
Think about why this happened.

If we remove `continue`, we must collect all the big letters in the accumulator.
```javascript
const str = 'hi, JavaScript Here!';

let acc = '';

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase())    
  acc += str[i];
}
console.log(acc)
//", JS H!"
```
In addition to capital letters, spaces and punctuation marks got into the accumulator.

To collect the really big letters, let's try to fix the code,
because punctuation marks and spaces remain the same when converted to another case.
Therefore, the comparison that a character is equal to an uppercase character is not appropriate.

```javascript
const str = 'hi, JavaScript Here!';

let acc = '';

for (let i = 0; i < str.length; i++) {
  if (str[i] !== str[i].toLowerCase())  
  acc += str[i];
}
console.log(acc)
//"JSH"
```
Be sure to read your code so you don't make mistakes and try to analyze what the result should be.
