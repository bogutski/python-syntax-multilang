* **let** and **const** have **block visibility** (visible only after the announcement and only in the current block).

Example No1:
```
{
  let a = 100;
  const b = 200;
}
console.log(a, b); // an attempt to print variable values to the console will produce a "ReferenceError" error
```
Example No2:
```
{
  let a = 100;
  const b = 200;
  console.log(a, b); // the console will display 100 and 200
}
 ```
Example No3:
```
{
  let a = 1;
  const b = 2;
  console.log(a, b); 
}
let a = 3;
const b = 4;
console.log(a, b); // console will print 1, 2, 3, and 4
```

* let and const cannot be declared repeatedly in the same block.

Example No4:
```
{
  let a = 100;
  let a = 200; // redeclare the a variable 
  console.log(a); // "SyntaxError" error will be thrown if you try to output the a variable value to the console
}
``` 
Example No5:
```
{
  let a = 100;
  a = 200; // change the value of the a variable
  console.log(a); // console will print 200 
}
let b = 300;
b = 400;
console.log(b); // console will print 400 
 ```
Example No6:
```
{
  let b = 100;
  const b = 200; // will cause a "SyntaxError" error
}
 let a = 300;
 const a = 400; // cause "SyntaxError" error
```
* **var variables have no block scope**, they are limited to the body of the function.

Example No7:
```
{
  var a = 10;
}
a = 100;
console.log(a); // 100 will be displayed in the console
 ```
Example No8:
```
var a = 100;
{
  a = 10;
}
console.log(a); // 10 will be displayed in the console
 ```
Example No9:
```
{
  var a = 10;
  let b = 100;
  const c = 1000;  
}
let b = 500;
const c = 700;
console.log(a, b, c); // the console will display 10, 500, and 700
```
* Usually var is not used in modern scripts.
* The block scope is convenient. That is why let and const were introduced into the standard many years ago and are now the main way to declare variables.

![](https://course-js-syntax.s3-us-west-1.amazonaws.com/no-var.PNG)

##### Additional information:

Strict Mode is a standard that has been around for many years. It has extremely wide browser support.
Strict mode is an important part of modern JavaScript. 

Strict mode helps in writing programs that do not have flaws that prevent JS engines from optimizing code. 
In JavaScript modules that appeared in the ES2015 standard, strict mode is enabled by default. Therefore, there is no need to explicitly enable it when working with them.

The semantics of strict mode is different from the traditional nonstrict mode, which is sometimes called "sloppy mode". In sloppy mode, the syntax rules of the language are not so strict, and when some errors occur, the system does not notify the user about them in any way. That is, the errors can be ignored, while the code containing them will be executed further. This can lead to unexpected results of code execution.

Strict mode prevents the system from turning a blind eye to errors by issuing appropriate exceptions. This causes programs to stop executing. For example, in strict mode, variables and constants cannot be declared without using var, let or const directives. As a result, creating variables without these directives will make the program inoperable. 

Warning! The "use strict" directive is only recognized at the beginning of a script or function.

![](https://github.com/bogutski/jsp/blob/master/section-1/use_strict.png?raw=true)

