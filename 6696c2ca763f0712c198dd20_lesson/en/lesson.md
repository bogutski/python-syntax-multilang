The `null` value does not belong to any of the types discussed earlier, but forms its own separate type consisting of a single `null` value:
```
let age = null;
```
To assign a "empty" or "unknown" value to a variable, **null** is used.
In JavaScript, `null` is not a "reference to a non-existent object" or a "null pointer" like in some other languages. It is simply a special value that means "nothing" or "unknown value".![](https://course-qa-basics.s3.us-west-1.amazonaws.com/is-null-equal-to-an-empty-string.png)

In particular, the code above says that the `age` is unknown.

An interesting feature of this data type is that `typeof null` gives the result "object" - this is an officially recognized error in the language, which is kept for compatibility. In fact, `null` is not an object, but a separate data type.

Another feature of this data type is that `null` is strictly equal only to itself and nothing more.![](https://course-qa-basics.s3.us-west-1.amazonaws.com/is-null-equal-to-itself.png) More precisely:
```
console.log(null === null); // true
```
A non-strict comparison of null and undefined yields true: ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/compare-null-and-undefined.png)
``` 
console.log(null == undefined); // true
```

What can be done with `null` if it is equal to itself? What mathematical operations can be performed with it?  
Here everything is quite prosaic: when performing arithmetic operations and comparisons (>, >=, <, <=), `null` becomes a regular zero 0.![](https://course-qa-basics.s3.us-west-1.amazonaws.com/compare-null-with-zero.png)
```
console.log(null < 1);     // true
console.log(null <= -1);   // false
console.log(null > 5);     // false
console.log(null >= -5);   // true
console.log(null <= 0);    // true
console.log(null >= 0);    // true
console.log(null > 0);     // false
console.log(null == 0);    // false
```


