A variable is a memory cell in which data is stored.

The variable looks like a box with a label. The box holds the data. The label says what is stored in the box.

A variable always has a name. We use it to refer to this variable.

Examples of what can be stored in variables:

- names
- numbers
- dates
- addresses
- price tags
- unique identifiers (id)
- and many other things that can be represented as data

## Ways to create a variable

To use a variable, it must first be created.

Modern JavaScript uses two ways to create variables: `const` and `let`.

#### The keyword is `const`. Once created, the value of the variable cannot be changed

`const` means `constant`
The value does not change after creating and assigning a value. It is read-only.

It is used to store values that will not change during program execution.

The value of the variable must be set at creation.

```javascript
const name = 'Alice'; // the 'name' variable is created, with the value 'Alice'
console.log(name); // the console displays 'Alice'

const age = 45; // the 'age' variable was created and assigned value 45
console.log(age); // console outputted 45
```

When using `const` it is not possible to create a variable without a value.

```javascript
const name; // You can't do that. Error: Missing initializer in const declaration
```

We recommend that you read

```javascript
const name = 'Alice';
name = 'Bob'; // You can't do that. Error: Assignment to constant variable.
```

If you do not plan to change the value of a variable, use `const`.

#### The keyword is `let`. The value of the variable can be changed

The keyword `let` is for variables that can change their value.

```javascript
let name = 'Alice';
console.log(name); // the console displays 'Alice'

name = 'Bob'; // the 'name' variable is now set to 'Bob'.
console.log(name); // the console displays 'Bob'
```

The `let` keyword can be used to create a variable with no value.

```javascript
let name; // the 'name' variable is created, no value
console.log(name); // the console displays 'undefined'

name = 'Alice'; // value 'Alice' was output
console.log(name); // the console displays 'Alice'
```

If you plan to change the value of a variable, use `let`.

### The obsolete way to create a variable is with the `var` keyword

There is an obsolete way to create variables - `var`.

It is not recommended for use because it does not have some of the properties that `const` and `let` have.

### Variable without a keyword

If you do not use the `const`, `let` or `var` keyword when creating a variable, it will be created as a global variable.

```javascript
name = 'Alice';
console.log(name); // в консоль выведено 'Alice'
```

This is not recommended because global variables can be accessed in any part of the code, which can lead to errors.

Use only the `const` or `let` keywords to create variables.

## Assignment operator

You can place a value in a variable using the assignment operator `=`.

Command format:

```
let <variable name> = value;
```

or

```
const <variable name> = value;
```

![welcome](https://course-js-syntax.s3-us-west-1.amazonaws.com/sozdaem-peremennuyu.jpg)

This command calculates a value and then assigns that value to a variable.

For example:

```
let a = 1; // the a variable is assigned value 1
let b = 3.25; // the value of 3.25 is assigned to the b variable
const user = 'Alice'; // value 'Alice' is assigned to the user variable
let age = 25; // the variable age is assigned the value 25
const isAdult = true; // the isAdult variable is assigned the value true
let line = ''; // the value of an empty string is assigned to the variable line
let numberOfCertificates = null; // the numberOfCertificates variable has been assigned null value
let temperature = -25; // the variable temperature is assigned the value of -25
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

The command `console.log();` is used to output the variable value to the console.

For example:

```
let count = 34; // the variable count is assigned the value 34
console.log(count); // the console will display 34

let a = 1; // the a variable is assigned the value 1
console.log(a); // the console will print 1

let b = a + 3.25; // the a value of a + 3.25 is assigned to the b variable
console.log(b); // the console will print 4.25

let user = 'Alice'; // the 'Alice' value is assigned to the user variable
console.log(user); // "Alice" will be output to the console

let isAdult = true; // the isAdult variable is assigned the value true
console.log(isAdult); // the console will print "true
```

Variables created with the `let` keyword can be overridden, i.e. a new value can be assigned to the variable. When assigning a new value to a variable, the `let` keyword need not be used.

For example:

```
let num = 5; // the num variable is assigned the value 5
console.log(num); // 5 will be displayed in the console
num = num + 4; // the num variable is incremented by 4
console.log(num); // console will print 9

let str = 'Have a nice day!'; // value 'Have a nice day!
str = 'Have a great day!'; // the str variable value was changed
console.log(str); // the console will print "Have a great day!"

let areTesters = true; // the areTesters variable is assigned the value true
areTesters = false; // the value of the areTesters variable has been changed
console.log(areTesters); // false will be displayed in the console

let multi = 20; // the value of 20 is assigned to the multi variable
multi = multi * 5; // the multi variable has been incremented by a factor of five
console.log(multi); // console will print 100
```
