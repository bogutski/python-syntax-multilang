**The operator for taking the remainder %** is interesting because, despite its designation, it has nothing to do with percentages.

Its result **a % b** is the remainder of the division of a by b.
```
console.log( 5 % 2 ); // 1, the remainder of division 5 by 2
console.log( 8 % 3 ); // 2, remainder of division 8 by 3
console.log( 6 % 3 ); // 0, remainder of division 6 by 3
```
The % operator is often used to find the last digit of a number:
```
let num = 453;
let last = num % 10;
console.log(last); // 3
```
If you have a two-digit number, you can get the digits of the number this way:
```
let num = 34;
let secondDigit = num % 10; //4
let firstDigit = (num - secondDigit) / 10; // (34 - 4) / 10 = 3
```

The remainder operator % is also used to determine the divisibility of one number by another. A number a is divisible by b if the remainder of a divided by b is zero. For example, the number a is even if a % 2 === 0.
```
let a = 15;
let b = 3;
let c = 2;
console.log(a % b === 0); // true (number 15 is divisible by number 3 with remainder = 0)
console.log(a % c === 0); // false (number 15 is not divisible by 2, the remainder is 1)
```
* * * * *
**The exponentiation operator**** returns the result of the first operand to the power. 

For a natural number b, the result of the expression a ** b is a multiplied by itself b times.
```
console.log( 2 ** 2 ); // 4 (2 * 2)
console.log( 2 ** 3 ); // 8 (2 * 2 * 2)
console.log( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)
```
This operator also works with fractional numbers. In this case it will extract the root of the specified degree:
```
console.log( 4 ** (1/2) ); // 2 (extraction of the square root)
console.log( 8 ** (1/3) ); // 2 (third degree root extraction)
```
In many languages, the exponentiation operator ** has higher precedence than unary operators, but this is not the case in JavaScript. Because of these differences, in JavaScript it is not possible to put a unary operator in front of a base number.
```
-2 ** 2; // This is invalid in JavaScript
-(2 ** 2); // -4 in JavaScript
```
Open the link and complete the task: https://jsbin.com/fesadidevi/edit?js,console

