The numeric data type (**number**) includes integers and fractions, positive and negative numbers, zero, and "special" numeric values: Infinity, -Infinity, and NaN.
```
let numPositive = 123;
let numNegative = -87; 
numPositive = numPositive + numNegative;
console.log(typeof numPositive); // "number"

```

* **Infinity** represents mathematical infinity. We can get it by dividing it by zero:
```
let a = 1 / 0;
console.log(a);         // Infinity
console.log(typeof(a)); // "number"
```
* **NaN** means a computational error. It is the result of an incorrect or undefined mathematical operation, for example:
```
console.log( 'Money' / 2 );         // NaN
console.log(typeof( 'Money' / 2) ); // "number"
```
##### Operations on numbers

 **\+** addition:
```
let a = 5; 
a = a + 15; // the value of the variable a is increased by 15
```
 **\-** sign change, subtraction: 
```
a = a - 10; // the value of the a variable has decreased by 10 
a = a * (-1); // a = - a, the sign of the a variable is reversed
```
**\*** multiplication:
```
a = a * 4; // the value of the variable a has increased by 4 times
```
 **/** division: 
```
a = a / 6; // the value of the variable a has decreased by a factor of 6
```
**%** the remainder of the division: 
```
a = a % 2; // assign to the variable a the value of the remainder of the division of a by 2
```
****** degree increase: 
```
a = a ** 3; // the value of the variable a raised to the 3rd power
```
**++** increment (increase by 1): 
```
a++; // the value of the a variable has increased by 1
++a; // the value of the a variable has incremented by 1
```
**--** decrement (decrease by 1): 
```
a--; // the value of the a variable has decreased by 1
--a; // the value of the a variable has decreased by 1
```
