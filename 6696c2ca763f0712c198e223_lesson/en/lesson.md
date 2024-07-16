### OR logical operator (`||`)

The logical operator `OR` is written as a double vertical slash symbol `||`.

The `OR` operator is used with two or more values and can be applied to values of any type and return a value of any type as well.

This operator works as follows: if **at least one** of the arguments is `true` then it returns `true`, otherwise `false`.

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/a-and-b.png)

For example, imagine that we are standing at a bus stop waiting for the No. 1 or No. 5 bus.

```javascript
const bus = 5; // bus No 5
if(bus === 1 || bus === 5) { // if bus is No 1 or No 5
  console.log('Go'); // Go! because bus is No 5 
}
```

Now imagine that we are waiting for the No. 1 or No. 5 or No. 17 bus.

```javascript
const bus = 17; // bus No 17
if(bus === 1 || bus === 5 || bus === 17) { // if bus is No 1 or No 5 or No 17
  console.log('Go'); // Go! because bus is No 17
}
```

Consider all four existing logical combinations for the `||` operator:

```javascript
console.log(true || true); // true, all values are true
console.log(false || true); // true, one of the values is true
console.log(true || false); // true, one of the values is true
console.log(false || false); // false, all values are false
```

This operator works as follows:

* Calculates operands from left to right
* Each operand results in a `boolean` type
* If `true` is encountered, it stops and returns the original value of that operand.
* If all operands are false `false`, returns the last of them.

In this example, the number 1 will convert to `true` and 0 to `false`.

```javascript
console.log(1 || 0); // it will work as (true || false) -> true, the console will print 1
console.log(0 || false || 1); // 1, returns first `true`
console.log(0 || false || 1 || null); // 1, returns first `true`
console.log(0 || false || undefined || null); // null, will print the last value since all arguments `false`
```

Let's look at another example: let's say the lights in the office are supposed to be on from 8 to 19.

```javascript
const time = 12;
if(time > 8 || time < 19) {  // first condition is true, 12 > 8
  console.log('Light'); // console will display Light
}
```

What if the time of day is 10 p.m.?

The light in the office will still be on because the first condition is true!

```javascript
const time = 22;
if(time > 8 || time < 19) {  // first condition is true, 22 > 8
  console.log('Light'); // the console will display Light
}
```

To solve this problem, we need the AND operator (`&&`).

### AND (`&&`) logical operator

If the OR operator (`||`) works until it meets the first `true`, the AND operator(`&&`), by contrast, works until it meets the first `false`.

The logical operator `AND` is written as two ampersand `&&`.

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/gemini-signs.png)

Consider the same office example, the office lights should be on from 8 to 19 (8 a.m - 7 p.m.). This is a 24-hour time format.

```javascript
const time = 12;
if(time > 8 && time < 19) {  //both conditions are true (true && true), 12 > 8 И 12 < 19
  console.log('Light');  // console will print Light
}
```

Now let's try to set the time of day: 10 p.m:

```javascript
const time = 22;
if(time > 8 && time < 19) {  // first condition is true, second condition is false (true && false), 22 > 8 AND 22 < 19
  console.log('Light');  // nothing will be printed in console
}
```

Consider all four existing logical combinations for the `&&` operator:

```javascript
console.log(true && true);  // true, all values are true
console.log(false && true);  // false, one of the values is false
console.log(true && false);  // false, one of the values is false
console.log(false && false);  // false, all values are false
```

The `&&` operator does the following:

* Calculates operands from left to right.
* Each operand results in a `boolean` type
* If a `false` value is encountered, it stops and returns the original value of that operand.
* If all operands are `true`, returns the last of them.

In this example, the numbers 1 and 2, the string 'hello' will transform to `true` and 0 and null will transform to `false`.

```javascript
console.log(1 && 0);  // will work like (true && false) -> false, console will print 0
console.log(1 && 2);  // 2, returns last true
console.log(false && 2 && '');  // false, returns false
console.log(1 && 'hello' && null && 0);  // null, returns false
console.log(1 && 'hello' && true && 2);  // 2, returns the last value, because all arguments - true
```

Like numeric operators, logical operators have different precedence, which affects the sequence in which they are executed.

Remember this sequence: the (AND) `&&` operator will be executed first, followed by (OR) `||`.

```javascript
console.log(1 || 0 && 3);  // 0 && 3 -> 0, then 1 || 0 -> 1, the console will print 1
```
