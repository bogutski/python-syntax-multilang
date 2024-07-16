In this lesson we will learn what an expression like "a = a + 5" means and what it equals.

We already know from the previous topic that a value can be placed in a variable using the assignment operator, the "equal" sign (`=`). The right part of the code is executed first, followed by the left part (assignment of a variable value): 

For example: 
```
let a = 5; // value 5 is assigned to the a variable
a = a + 5; // the value of the a variable is incremented by 5
a = a * 5; // a variable a has increased by 5 times
a = a / 10 + 20; // a variable a has decreased by a factor of 10, then increased by a factor of 20
                 // do not forget about the order of operations
console.log(a); // all the changes will result in 25 being output to the console

let b = true; // the b variable is assigned the value true 
b = false; // the b variable value has been changed
console.log(b); // false will be displayed in the console 

let str = 'Hello'; // value 'Hello' is assigned to the str variable
str = str + ' world!'; // value of str variable was changed
console.log(str); // the console will print "Hello world!"
```

![](https://course-js-syntax.s3-us-west-1.amazonaws.com/reshai-zadachi.PNG)

