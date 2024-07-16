Let's look at how to find and sum up even and odd numbers. 

Find even and odd numbers `from 1 to 10`:

```javascript
let min = 1;
let max = 10;
const arrEven = []; // array of even numbers
const arrOdd = []; // array of odd numbers

for (let i = min; i <= max; i++) { // loop from 1 to 10
  if (i % 2 === 0) { // if the remainder of the division by 2 is 0, then the number is even
    arrEven.push(i); // add even numbers to the array
  } else { // otherwise the number is odd
    arrOdd.push(i); // add to the array of odd numbers
  }
}
console.log(arrEven); // [2, 4, 6, 8, 10]
console.log(arrOdd); // [1, 3, 5, 7, 9]
```

Now find the sum of even numbers from `5 to 25`:

```javascript
let min = 5;
let max = 25;
let sum = 0;

for (let i = min; i <= max; i++) { // loop from 5 to 25
  if (i % 2 === 0) { // if the remainder of the division by 2 is 0, then the number is even
    sum += i; // add to the sum of even numbers
  }
}
console.log(sum); // 150
```


In the following example we will use negative values and find the sum of odd, negative numbers `from -10 to 10`:

```javascript
let min = -10;
let max = 10;
let sum = 0;

for (let i = min; i <= max; i++) { // loop from -10 to 10
  if (i % 2 !== 0 &&i < 0) { // if the remainder of the division by 2 is not 0 and the number is below 0, then the number is odd and negative
    sum += i; // sum odd, negative numbers
  }
}
console.log(sum); // (-9) + (-7) + (-5) + (-3) + (-1) = -25
```

Now let's see how to determine whether a number is `simple`. 

A `Simple Number` is a natural number greater than 1 that is divisible without a remainder by 1 and by itself only. 

The number `1` is not considered a prime number. This is because the definition of a prime number requires that the number must have `exactly two distinct divisors`, and the number `1` has only one divisor, `1`.

An example of prime numbers: `2, 3, 5, 7, 11, 13, 17, 19, 23, 29`.    

```javascript
function isPrime(n){
    if (n < 2) { // if the number is less than 2, then it is not prime
        return false;
    }

    for (let i = 2; i < n; i++) { // loop from 2 to n
        if (n % i === 0) { // if the remainder of the division by `i` is `0`, then the number is not prime
        return false;
        }
    }
    return true; // otherwise the number is prime
}
console.log(isPrime(5)); // true
console.log(isPrime(10)); // false
```


In the following example we will add a loop to find all prime numbers `from 2 to 100`.

We write all prime numbers in the `arrPrime` array and sum them separately in the `sumPrime` variable.

```javascript
const min = 2;
const max = 100;
const arrPrime = []; // array of prime numbers
let sumPrime = 0; // sum of prime numbers

for (let i = min; i <= max; i++){
  if (isPrime(i)) { // here we use our isPrime() function written above
    arrPrime.push(i);
    sumPrime = sumPrime + i;
  }
}
console.log(arrPrime); // [ 2, 3, 5, 7, 11, 13, 17, 19,
                          // 23, 29, 31, 37, 41, 43, 47, 53,
                          // 59, 61, 67, 71, 73, 79, 83, 89, 
                          // 97 ]
console.log(sumPrime); // 3167
```