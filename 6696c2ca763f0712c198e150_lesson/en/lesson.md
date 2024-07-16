![](https://course-qa-basics.s3.us-west-1.amazonaws.com/girl-and-numbers-signs.png)

The `Boolean` data type can take 2 values: _**true**_ or _**false**_. We can get them by comparing numbers.

There are such operators for comparing numbers:

`>` - returns `true` if the left operand is **more** than the right operand.

`>=` - returns `true` if the left operand **is greater than or equal to** the right operand.

`<` - returns `true` if the left operand is **smaller** than the right operand.

`<=` - returns `true` if the left operand is **less than or equal to** the right operand.

`===` - returns `true` if the operands are **strictly equal**.

`!==` - returns `true` if the operands **strictly are not equal**.


Examples:

```javascript
console.log(3 > 2);    // true — true, 3 is greater than 2
console.log(5 > 10);   // false — false, 5 is less than 10

console.log(5 < 10);   // true
console.log(19 < 8);   // false

console.log(20 >= 20); // true
console.log(30 <= 10); // false
```

Variables can also be compared:

```javascript
const a = 35;
const b = 83;

console.log(a < b);   // true
console.log(a > b);   // false

console.log(a <= b);  // true
console.log(a >= b);  // false
```


### The strict equality operator `===` triple equal

It is written as a triple equal sign symbol `===`, and compares two values for equality.

The strict equality operator `===` checks for equality **without** type conversion.

This operator works as follows:

* `true` - if the operands have **same values and the same type**.
* `false` - if the operands have **same values and different types**.
* `false` - if the operands have **different values**.

```javascript
const n1 = 2;
const n2 = 3;
const n3 = 2;

console.log(n1 === n2); // false, 2 is not 3
console.log(n1 === n3); // true, 2 is 2
```

Now set the variable `n2` to a different type:

```javascript
const n1 = 2;
const n2 = '2';

console.log(n1 === n2); // false, though the values are the same, but the types are different
```

Let's look at a couple more examples:

```javascript
console.log(1 === true); // false
console.log(0 === false); // false
console.log('' === false); // false
```

To compare values of different types using the strict equality operator, cast the values to the same type:

```javascript
const n1 = 1;
const n2 = '1';

console.log(n1 === n2); // false, though the values are the same, but the types are different
console.log(n1 === +n2); // true, with the unary plus brought the string to a number
```

### The strict inequality operator `!==`

Spelled as a single exclamation point character and a double equal sign character `!==`, it compares two values to an inequality.

The strict inequality operator `!==` tests an inequality **without** type conversion.

This operator works as follows:

* `false` - if the operands have **same values and the same type**.
* `true` - if the operands have **same values and different types**.
* `true` - if the operands have **different values**.

```javascript
const n1 = 2;
const n2 = 1;

console.log(n1 !== n2); // true, 2 is not equal to 1
```

Let's look at a couple more examples:

```javascript
console.log(1 !== 1); // false
console.log(1 !== 2); // true
console.log(1 !== '1'); // true
console.log(1 !== '2'); // true
```
