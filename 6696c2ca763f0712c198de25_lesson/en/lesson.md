In this lesson we will learn about a surprising "side effect" of the unary operator `+` and whether it is possible to add strings.

Unlike the `-` operator, the unary plus `+` (applied to only one value) *doesn't do anything to numbers*. But this operator can change some strings.  
Imagine that we have numbers written as strings:
```
let a = '2';
let b = '3';
```
If we try to combine these lines, concatenation (attaching one line to another) will occur:
```
console.log(a + b); // "23"
```
How can we really add this two and three, because we understand that numbers are hidden behind these lines! The unary plus is used to convert strings to numbers.
```
console.log(+a + + +b); //this is equivalent to console.log(2 + 3) => gives us 5
```
Such a number of pluses may seem strange, but for JavaScript it is not a problem: first unary pluses will be executed (strings will become numbers), and then the binary plus will add them.  
We will talk about the order of operations in the next lesson.
