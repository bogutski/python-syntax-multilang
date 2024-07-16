![](https://course-qa-basics.s3.us-west-1.amazonaws.com/girl-operators.png)

Recall the number comparison operators:

`>` - more.

`<` - less.

`>=` - greater than or equal to

`<=` - less than or equal to


```javascript
console.log(3 > 2);  // true
console.log(3 >= 3);  // true
console.log(2 < 3);  // true
console.log(2 <= 2);  // true
```

Now consider the difference between the operators `==`, `===` and `!=`, `!==`:

* `==` — non-strict equality

* `===` — strict equality

* `!=` — non-strict inequality

* `!==` — strict inequality


### Strict equality `===` triple equality

As you already know, the strict equality operator `===` checks for equality **without** type conversion.

```javascript
console.log(5 === 5); // true
console.log('5' === 5); // false
```

Now set the variable `n2` to a different type:

```javascript
const a = 10;
const b = 10;
const c = '10';

console.log(a === b); // true
console.log(a === c); // false
```


### Non-strict equality operator `==`

Now consider the non-strict equality operator.

It is written as a double equal sign symbol `==` and also compares two values for equality.

When comparing values of different types, **references** each of them to a common type.

Non-strict equality operator `==`

* `true` — if the operands have **same values and the same type**.
* `true` — if the operands have **same values and different types**.
* `false` — if the operands have **different values**.

```javascript
const n1 = 2;
const n2 = '2';

console.log(n1 == n2); // true, the string '2' is converted to a number
```

Let's look at a couple more examples:

```javascript
console.log(1 == true); // true
console.log(0 == false); // true
console.log('' == false); // true
```

Note. In JavaScript `===` and `==` are comparison operators, while `=` is an assignment operator; it does not compare values, but assigns the left operand to the right one.



### The strict inequality operator `!==`

Now remember how the strict inequality operator `!==` works.

The strict inequality operator `!==` tests an inequality **without** type conversion.

This operator works as follows:

* `false` — if the operands have **same values and the same type**.
* `true` — if the operands have **same values and different types**.
* `true` — if the operands have **different values**.

```javascript
const n1 = 5;
const n2 = 10;

console.log(n1 !== n2); // true, 5 is not 10
```

Let's look at a couple more examples:

```javascript
console.log(10 !== 10); // false
console.log(10 !== 20); // true
console.log(10 !== '10'); // true
console.log(10 !== '20'); // true
```



### The non-strict inequality operator `!=`

Spelled as a single exclamation point character and a single equal sign character `!=`, it compares two values by inequality.

When comparing the values of different types, **references** each of them to a number.

This operator works as follows:

* `false` — if the operands have **same values and the same type**.
* `false` — if the operands have **same values and different types**.
* `true` — if the operands have **different values**.

```javascript
const n1 = 2;
const n2 = 1;

console.log(n1 != n2); // true, 2 is not equal to 1
```

Let's look at a couple more examples:

```javascript
console.log(1 != 1); // false
console.log(1 != 2); // true
console.log(1 != '1'); // false, '1' is cast to number 1
console.log(1 != '2'); // true
```

Let's try to use comparison operators in combination with `if`:

Let's say we're at a bus stop waiting for the No1 or No10 bus, and the No2 bus comes

```javascript
const bus = 2;

if (bus === 1) {
    console.log('Go!')
} else if (bus === 10) {
    console.log('Go!')
} else {
    console.log('Bus number is not 1 or 10') // the console will print 'Bus number is not 1 or 10'
}

if (bus !== 1) {
    console.log('Wait!') // the console will print 'Wait!'
}
```

To summarize:

`===` — returns `true` if the operands are **equal and of the same type**.

`==` — returns `true` if the operands are **equal**.

`!=` — returns `true` if the operands ** are not equal**.

`!==` — returns `true` if the operands are equal, but of **different type or not equal at all**.

To compare values for equality/inequality use `===`/`!==`, using `==`/`!=` **is not recommended** !
