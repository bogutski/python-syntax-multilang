Operators come in many forms! Let's look at the simplest ones. It seems like we already know them very well, but in JavaScript the usual "+" operator does more than just add values!

**Unary** is an operator that applies to a single operand. For example, the unary minus `-` operator reverses the sign of a number:
```
let x = 1;
x = -x;
console.log(x); // -1
```
**Binary** is an operator that applies to two operands.
```
let sum = a + b;
```
##### String addition, binary `+`

Usually the plus `+` is used to add numbers. 
The concatenation (merge) operation is also indicated with the `+` operator:
```
let s = "my" + "string";
console.log(s); // "mystring"
```
If at least one operand is a string, the second operand will also be converted to a string. For example:
```
console.log('1' + 2); // "12"
```
String addition and conversion is a feature of the binary plus `+`. Other arithmetic operators work only with numbers and always convert operands to numbers.
```
console.log(2 - '1'); // 1
console.log('6' / '2'); // 3
```
##### Conversion to a number, unary plus `+`

Plus `+` exists in two forms: binary and unary. Unary plus `+` converts nonnumeric values to numbers.
```
console.log(+true); // 1
console.log(+'2'); // 2
```
Binary Plus will perform a string merge:
```
let apples = '2';
let oranges = '3';
console.log(apples + oranges); // "23"
console.log(+apples + +oranges); // 5
```
** Increment ++** increases by 1:
```
let counter = 2;
counter++; // counter = counter + 1
console.log(counter); // 3
```
**Decrement --** reduces by 1:
```
let counter = 2;
counter--;             // counter = counter - 1
console.log(counter); // 1
```
**Postfix form** - the operator comes after the variable: counter++.
**Prefix form** - the operator goes before the variable: ++counter.
```
let counter = 1;
let a = counter++; 
console.log(a); // 1
```
##### Reduced arithmetic with assignment

Often it is necessary to apply a statement to a variable and store the result in the same variable. For example:
```
let n = 2;
n = n + 5;
n = n * 2;
```
This entry can be shortened using the combined operators += and *=:
```
let n = 2;
n += 5;          //  n = n + 5
n *= 2;          //  n = n * 2
console.log(n);  // 14
```
