---
video: "https://youtu.be/Qyfs_FlGo_4"
---
**Variable** is a "named storage" for data. To create a variable, JavaScript uses the keyword `let` (there is also `const` and the obsolete `var`). You can put a value into a variable using the assignment operator `=`. 

Team format:

```
let <имя переменной> = value;
```
or
```
const <имя переменной> = value;
```

![welcome](https://course-js-syntax.s3-us-west-1.amazonaws.com/sozdaem-peremennuyu.jpg)

This command calculates a value and then assigns that value to a variable.

For example:
```
let a = 1; // value 1 is assigned to the a variable 
let b = 3.25; // value 3.25 is assigned to the b variable 
const user = 'Alice'; // the value of 'Alice' is assigned to the user variable 
let age = 25; // value 25 is assigned to the age variable
const isAdult = true; // the isAdult variable has been assigned the value true 
let line = ''; // the value of an empty string is assigned to the line variable 
let numberOfCertificates = null; // numberOfCertificates variable has been assigned the null value 
let temperature = -25; // negative number -25 is assigned to the temperature variable

```
A variable can be created without assigning a value to it.

For example:
```
let telNumber;
let a; 
let b;
let user; 
let age; 
let isAdult; 
let line; 
let numberOfCertificates;

```
The `console.log();` command is used to output the variable value to the console.

For example: 
```
let count = 34; // value 34 is assigned to the variable count 
console.log(count); // the console will display 34

let a = 1; // value 1 is assigned to the a variable 
console.log(a); // console will print 1

let b = a + 3.25; // a + 3.25 is assigned to the b variable 
console.log(b); // the console will print 4.25

let user = 'Alice'; // the 'Alice' value is assigned to the user variable 
console.log(user); // "Alice" will be displayed in the console

let isAdult = true; // the isAdult variable is assigned the value true
console.log(isAdult); // the console will print "Alice" as true
```
Variables created with the `let` keyword can be overridden, i.e. a new value can be assigned to the variable. When assigning a new value to a variable, the `let` keyword need not be used. 

For example:
```
let num = 5; // value 5 is assigned to the num variable
console.log(num); // 5 will be displayed in the console
num = num + 4; // the num variable is incremented by 4
console.log(num); // console will print 9

let str = 'Have a nice day!'; // value 'Have a nice day!' is assigned to the str variable
str = 'Have a great day!'; // value of str variable was changed  
console.log(str); // the console will print "Have a great day!"

let areTesters = true; // the areTesters variable is assigned the value true
areTesters = false; // the value of the areTesters variable has been changed 
console.log(areTesters); // false will be displayed in the console

let multi = 20; // the value of 20 is assigned to the multi variable
multi = multi * 5; // the value of multi variable is quintupled
console.log(multi); // console will print 100

```
##### Self-assessment assignment
Follow the link, do the self-test assignment https://jsbin.com/pipecomuwo/edit?js,console

##### We recommend that you read
- https://javascript.info/variables
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations
- https://youtu.be/bQQ0WCPhkU0

##### Practical assignments


