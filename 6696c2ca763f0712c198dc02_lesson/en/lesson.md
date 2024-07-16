A variable in JavaScript can contain any kind of data. One moment it may be a string, and the next moment it may be a number:
```
let message = 'Hello';
message = 123456;
```
When a variable is created, the type of the variable is not specified.
Programming languages in which this is possible are called "dynamically typed". This means that there are data types, but variables are not bound to any of them.

The `typeof a` or `typeof(a)` operator lets you know what type of data the `a` variable contains.

For example, 
```
let a = 78.5; 
let b = 50;
console.log(typeof a); // "number" 
a = a + '';
console.log(typeof(a)); // "string"
a = +a;
console.log(typeof(a)); // "number" 

let big = 1234567890123456789012345678901234567890n;  
console.log(typeof big); // "bigint"


let c = a + b; 
console.log(typeof c);          // "number"
c = a < b; 
console.log(typeof(c));         // "boolean"
console.log(typeof typeof(c));  // "string"
c = 'QA Basics'; 
console.log(typeof(c));         // "string"

let d; 
console.log(typeof(d)); // "undefined"
d = 'undefined'; 
console.log(typeof d);  // "string"
d = undefined; 
console.log(typeof(d)); // "undefined"

console.log(typeof 'Hello!');        // "string"
console.log(typeof null);            // "object", an officially recognized error in Javascript
let arr = [];
console.log(typeof arr);             // "object"
let functionForAll = ()=>{};
console.log(typeof functionForAll);  // "function"
let newObj = {};
console.log(typeof(newObj));         // "object"
```

![](https://course-js-syntax.s3-us-west-1.amazonaws.com/semicolon.PNG)
