The special value **undefined** means "value has not been assigned". If a variable is declared but not assigned any value, its value will be undefined. ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/create-a-variable-with-the-value-undefined.png)
For example,
```
let x; 
console.log(x);        // undefined will be printed to the console
console.log(typeof x); // "undefined" will be printed to the console

let y;     // y variable is not assigned a value
let z = y; // z variable is assigned the value of y
console.log(z);        // undefined will be printed to the console
console.log(typeof z); // "undefined" will be printed to the console

let abc = undefined; // it is possible to explicitly assign the value undefined to a variable, but this is rare
console.log(abc);    // undefined will be printed to the console
```
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/assign-the-value-undefined-to-the-variable.png)
Comparing undefined with other values will return the following results: ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/compare-undefined-and-null.png)
```
console.log(undefined === undefined); // true
console.log(undefined === null);      // false
console.log(undefined == null);       // true
console.log(undefined > 0);           // false
console.log(undefined <= 0);          // false
```

Normally `undefined` is used to check if a variable has been assigned.
The special value **null** means "nothing", "empty", or "the value is intentionally missing".
We will talk about null in detail in the next lesson. 

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/the-sum-of-undefined-and-numbers.png)