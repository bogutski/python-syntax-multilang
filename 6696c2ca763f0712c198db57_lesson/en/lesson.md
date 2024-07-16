JavaScript uses 2 keywords when creating variables: `let` and `const`.

Their use depends on whether the value of the variable will change during the execution of the program.

### Creating a variable with the `const` keyword

If the value of the variable will not change, it is preferable to use `const`.

If the `const` keyword is used, the value of the variable must be set immediately.

#### If the value is not set, an error `SyntaxError` will be thrown

Check this by running each of the examples in the console:

```javascript
const number; // SyntaxError, no variable value was set
const str; // SyntaxError
const isHotWeather; // SyntaxError
const line; // SyntaxError
```

#### Attempting to change the value of a variable described as `const` will result in a `TypeError` error

Run the examples below in the console and see for yourself:

```javascript
const number = 12345;
number = 98765; // TypeError, an attempt to change a value with the `const` keyword.

const str = 'How are you doing?'
str = 'How are you?'; // TypeError
```

### Creating a variable with the keyword `let`

If the value of the variable will change during the execution of the program, you must use the keyword `let`.

The `let` allows you to assign a new value to a variable.

You do not need to use the word `let` when changing the value of a variable.

```javascript
let num = 5; // create a variable with keyword `let`.
console.log(num); // 5 is the value of the variable
num = 10; // changed the value of num variable
console.log(num); // 10 is the new value of the variable
```

#### Declaring multiple variables on one line

To keep the code short you can declare variables on one line. Variables are enumerated separated by commas.

```javascript
let num = 5, newNum = 15, oldNum = 10; // create three variables
console.log(num, newNum, oldNum); // 5, 15, 10 are the values of the variables
```

#### Creating an empty variable without an initial value

If you use the `let` keyword you can create a variable and assign a value to it later.

```javascript
let telNumber; // create a variable
telNumber = 15058768956; // set the variable value
console.log(telNumber); // 15058768956 is the value of the variable
```

#### What is the value of a variable if no value is assigned to it?

Accessing a variable without a value will return `undefined`. You can assign a new value to a variable by using the
assignment operator `=`.

```javascript
let str; // create a variable
console.log(str); // undefined, the variable has no value
str = 'Hello, QA student!'; // set the variable to a value  
console.log(str); // "Hello, QA student!" - variable value
```

#### Redefining a variable value

The value of a variable can be redefined several times. In this case the variable will have the last value assigned to it
value.

```javascript
let line; // create a variable        
line = 'Coding challenge'; // assign a value to the variable
line = 100; // we changed the value of the variable
console.log(line); // 100, the last modified value is output
```

Now let's go over again the main points we've covered in this lesson:

#### The let keyword creates variables whose values can be changed

If a variable is created with the `let` keyword, its value can be overridden, i.e. a new value can be assigned to the variable
A new value.
The `let` keyword is only used when creating a variable.
When assigning a new value to a variable, the `let` keyword need not be used.

![](https://course-js-syntax.s3-us-west-1.amazonaws.com/use-const-temperature.jpg)

For example:

```
let num = 5; // the num variable is assigned the value 5
console.log(num); // 5 will be output to the console
num = 10; // the num variable is assigned the new value 10, the let keyword is not needed in this case
console.log(num); // the console will print 10
```

To keep the code short, you can declare variables on one line, for example:

```
let num = 5, newNum = 15, oldNum = 10; // the num variable is assigned the value 5, the newNum variable is assigned the value 15, the oldNum variable is assigned the value 10; the variables are listed separated by commas
console.log(num, newNum, oldNum); // the console will print 5, 15, and 10
```

Declaring variables on one line is not recommended because it makes the code harder to read. Declare each
variables on a separate line.

A variable can be created without assigning a value to it, for example:

```
let telNumber; // set telNumber variable without assigning a value to it
console.log(telNumber); // undefined will be thrown in the console
```

If no value is assigned, the variable defaults to `undefined`.

The value of the variable can then be rewritten using the assignment operator (`=`).

```
let telNumber; // set variable telNumber without assigning a value to it
telNumber = 150558768956; // the telNumber variable value is changed  
console.log(telNumber); // the console will print 15058768956

let str; // set variable str without assigning a value to it
console.log(str); // the console will print undefined
str = 'Hello, QA student!'; // the str variable value is changed  
console.log(str); // console will print "Hello, QA student!"

let line; // set the line variable without assigning a value to it
line = 'Coding challenge'; // the value of the line variable is changed  
line = 100; // the value of line has been changed  
console.log(line); // console will print 100
```

##### Variables created with the const keyword cannot be changed

To declare a constant, i.e. an immutable variable (read only), use `const` instead of `let`. **Constants cannot be
change**. Attempting to change a constant will result in an error.

When you create a constant, the value of the variable is assigned immediately. For example:

```
const number = 123456; // set variable number and assign value 123456 to it
number = 987643; // an attempt to change the value will cause a "TypeError" error

const str = 'How are you doing?'; // set variable str and assign value 'How are you doing?'
str = 'How are you?'; // an attempt to change the value will cause a "TypeError" error

constHotWeather = true; // set the isHotWeather variable and assign the value true to it
isHotWeather = false; // an attempt to change the value will cause a "TypeError" error

```

If you do not define the value of a constant when you create it, it will cause an error. For example:

```
const number; // an attempt to create a variable without assigning a value will result in a "SyntaxError" error
const str; // an attempt to create a variable without assigning a value will result in a "SyntaxError" error
const isHotWeather; // an attempt to create a variable without assigning a value will result in a "SyntaxError" error
const line; // an attempt to create a variable without assigning a value will result in a "SyntaxError" error.
```

If you do not plan to change the value of a variable in a program, use `const`. If the value of the variable in the
program will change, use `let`.

![](https://course-js-syntax.s3-us-west-1.amazonaws.com/ispolzui-const.PNG)


