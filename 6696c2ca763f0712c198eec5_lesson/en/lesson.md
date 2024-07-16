In this lesson, we'll look at how to sum the numbers in a string.

```javascript
const str = 'w10r * (2) 2n3, wer30'; // 47

const digits = '0123456789'; // digit string

let acc = 0; // accumulator
let n = ''; // a string to temporarily store the digits

for(let i = 0; i < str.length; i++) {
  if(digits.includes(str[i])) { // if the current character is a digit
    n += str[i]; // add a digit to a temporary variable
  } else { // otherwise (if the current character is not a digit)
      acc += +n; // convert the string to a number and add it to the accumulator
        n = ''; // zeroize the temporary variable
  }

  if(i === str.length - 1) { // if this is the last string element
    acc += +n; // convert the string to a number and add it to the accumulator
  }
}
console.log(acc) // 47
```

### Function to sum the numbers in a string

Now let's practice and write a function that will sum up the numbers in a string.

In this example we will use the `indexOf` method to search for digits in a string.

```javascript
function sumNumbers(str){
    const digits = '0123456789';
    let acc = 0;
    let n = '';

    for(let i = 0; i < str.length; i++) {
        if(digits.indexOf(str[i]) !== -1) n += str[i];
        else {
            acc += +n;
            n = '';
        }

        if(i === str.length - 1) acc += +n;
    }

    return acc;
}

console.log(sumNumbers(' ...1,?1 205^@6 99%/*-+ :0 9daw80'));  // 401
```
