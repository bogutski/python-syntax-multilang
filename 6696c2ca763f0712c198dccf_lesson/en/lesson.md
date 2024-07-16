Boolean type (**boolean**) can take only two values: **true** and **false**.
For example:
```javascript
let fieldIsDisplayed = true; // fieldIsDisplayed is set to true
let jsIsFun = true; // the jsIsFun variable is set to true
let sunIsHot = true; // the sunIsHot variable is set to true
let carOn = true; // the value is set to true in the carOn variable
let carOff = false; // the value false is assigned to the carOff variable
let turtleIsFast = false; // false value has been assigned to the turtleIsFast variable
let isAdult = false; // the isAdult variable has false value
let oldAddress = false; // false value is assigned to the oldAddress variable

```
Boolean values can also be the result of **comparisons**.

Let's deal with the `comparison` operators:

* `>` - more.
* `<` - less.
* `==` is not a strict equality
* `===` - strict equality

The `more` or `less` operators are easy enough to deal with.
For example: `5 > 3` is `true` and `5 < 3` is `false`.![](https://course-qa-basics.s3.us-west-1.amazonaws.com/the-first-number-is-less-than-the-second.png) ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/the-first-number-is-greater-than-the-second.png)


What is the difference between `==` and `===`?

The `non-strict equality` (`==`) operator checks only values without considering the data type. When comparing different data types, they are reduced to a number. ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/non---strict-equality-of-two-numbers.png)
For example: `5 == '5'` is `true` and `5 == '6'` is `false`.

The `Strict Equality` (`===`) operator checks values and data type.
For example: `5 === '5'` is `false` and `5 === 5` is `true`.![](https://course-qa-basics.s3.us-west-1.amazonaws.com/a-variable-with-the-value-true.png) ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/a-variable-with-the-value-false.png)

Let's break down more examples with comparison operators:

```javascript
let a = 56; // value 56 is assigned to the a variable
let b = 23; // the value is assigned to b
let comparison = a > b; // the value of a > b is assigned to the comparison variable
console.log( comparison ); // console will print true
console.log ( a === b ); // console will print false

let x = 10; // the x variable will be assigned the value 10
let y = x * 8; // the x * 8 value will be assigned to the y variable
console.log( x < y ); // console will print true

let giraffeHeight = 5.5; // the value is assigned to the giraffeHeight variable
let elephantHeight = 3.5; // the value is assigned to the elephantHeight variable
console.log( giraffeHeight > elephantHeight ); // the console will print true
console.log( giraffeHeight === elephantHeight ); // false will be output


const bulbOn = 1; // the value 1 is assigned to the bulbOn variable
const switchOn = true; // the switchOn variable is set to true
console.log( bulbOn === switchOn ); // false will be output
console.log( bulbOn == switchOn ); // the console will output true

const num = 55; // the value is assigned to the num variable
const str = '5' + 5; // the value '55' is assigned to the str variable
console.log(str === num); // false, because different data types are being compared
console.log(str == num); // true, as only values are compared
```
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/which-word-is-bigger.png)
In the next lessons we will take a closer look at comparison operators, get acquainted with them and analyze examples of other operators. ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/which-of-the-friends-collected-more-mushrooms.png) ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/the-string-starts-with-'a'.png) ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/the-first-character-of-the-string-is-equal-to-the-last-character.png)
