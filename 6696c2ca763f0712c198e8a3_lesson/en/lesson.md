In the process of writing a program it may be necessary to repeat the same piece of code several times.
For example, print the same line 5 or 10 times.

```javascript
console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello');
```

```javascript
Hello
Hello
Hello
Hello
Hello
```

To avoid rewriting the same code many times, JavaScript uses special language constructs - `cycles`.

As an analogy of the cycle, consider a runner who runs in a circle.
He starts the race with the start, which is also the finish line.
The runner must run a given number of laps.
Each time he crosses the start line, he is considered to have run one lap, and the lap counter is incremented by `1`.
The runner checks the counter against the set number of laps, and when these values are equal, he must stop.

The same principle is applied to the loop in programming.

##### The cycle consists of the following parts:

* The `Cycle Counter` variable, also often called the cycle parameter or the cycle control variable; 


* The `condition` defining the moment of cycle stopping;


* The `bodies of the loop` - sequences of actions (`operators`) that are executed at each pass of the loop.

Each run of the cycle is called an `iteration`.

The loop counter is often called an `iterator`.

#### Cycle FOR

The most common loop in JavaScript is the `for` loop.

```javascript
for (<starting value>; <condition>; <change of the counter after each iteration>){
  // cycle body
}
```

##### The loop header consists of three parts, separated by semicolons.

`In the first part of the loop header` the starting values are set. To do this, a special variable is created which is
`loop counter` or `iterrator` is created for this purpose.
The loop counter is given a starting value.
These actions are performed before the start of the loop.

`The second part of the loop header` contains the condition under which the loop will be executed.
The condition is written as a logical expression that must return `true` or `false`.
The condition is checked before each execution of the loop. If the condition returns `true` the loop is executed, if `false` the
The loop is terminated.

`The third part of the loop header` specifies the action to be performed after each pass of the loop - each
iteration.
Usually this is an increase or decrease of the loop counter.

The `loop` is a sequence of actions (also called commands or operators) that are executed on each pass of the loop.
If the loop body contains several commands, they are enclosed in curly braces `{}`.

`Attention!` The cycle counter changes automatically after each iteration, so it is NOT RECOMMENDED to change it in the body of the cycle!

#### Let's look at the algorithm of the `for` loop step by step:

1. A loop counter is created and `initialized` - an initial value is assigned to it.
2. The `check condition` of the loop is executed. If the condition returns `true` the loop body is executed, if `false` the loop is terminated.
3. The `body of the cycle` is performed.
4. A `change cycle counter` is performed.
5. Management moves on to point 2.

#### Examples of the `for` cycle

```javascript
for (let count = 0; count <= 3; count = count + 1) {
  console.log('Run ' + count);
}
```

The result of the cycle:

```javascript
Run 0
Run 1
Run 2
Run 3
```

The cycle ran four times. Let's see how it works:

1) count = 0 and 0 <= 3 - the console outputs `'Run 0'`, count+1.
2) count = 1 and 1 <= 3 - the console outputs `'Run 1'`, count+1.
3) count = 2 and 2 <= 3 - the console outputs `'Run 2'`, count+1.
4) count = 3 and 3 <= 3 - condition is still true - the console outputs `'Run 3'`, count+1.
5) count = 4 and 4 <= 3 - the loop condition is not true, the loop terminates.

Let's correct the starting value of the loop counter so that the loop is executed three times and outputs numbers from 1 to 3.
```javascript
for (let count = 1; count <= 3; count = count + 1) {
  console.log('Run ' + count);
}
```
Cycle results:

```javascript
Run 1
Run 2
Run 3
```

You can fix the loop in a different way: leave the loop counter equal to 0, but change the loop condition.

```javascript
for (let count = 0; count < 3; count = count + 1) {
  console.log('Run ' + count);
}
```

In this case the loop will also execute three times, but the output to the console will be different:

```javascript
Run 0
Run 1
Run 2
```

#### Variations of the for loop:

1. The cycle counter can start with any number.
2. The cycle counter can increase or decrease.
3. The cycle counter can change by any number.

A loop that outputs consecutive numbers from 10 to 20 to the console:

```javascript
for (let count = 10; count <= 20; count = count + 1) {
  console.log('Run ' + count);
}
```

The cycle outputs 11 values:

```javascript
Run 10
Run 11
Run 12
Run 13
Run 14
Run 15
Run 16
Run 17
Run 18
Run 19
Run 20
```

#### Step cycle

The change of the loop counter after each iteration by some constant value is called `loop step`.
The cycle step can be any number, including a negative number.
In the loops considered earlier, the loop step was `1`.

An example of a loop with a step of `2`:

```javascript
for (let count = 10; count <= 20; count = count + 2) {
  console.log('Run ' + count);
}
```

The cycle outputs 6 values:

```javascript
Run 10
Run 12
Run 14
Run 16
Run 18
Run 20
```

An example of a loop with a step of `5`:

```javascript
for (let count = 10; count <= 20; count = count + 5) {
  console.log('Run ' + count);
}
```

The result of the cycle is the output of 3 values:

```javascript
Run 10
Run 15
Run 20
```

It is customary to use a variable named `i` as the `iterator of the loop (loop counter)`.

Cycle from 10 to 100 in increments of `10` (where `i += 10` is a shortened notation `i = i + 10`)

```javascript
for (let i = 10; i <= 100; i += 10) {
  console.log('Run ' + i);
}
```

The cycle outputs 10 values:

```javascript
Run 10
Run 20
Run 30
Run 40
Run 50
Run 60
Run 70
Run 80
Run 90
Run 100
```

Up to this point, we have only considered cycles in which the `iterator has changed from a smaller value to a larger one`.

##### The loop iterator can also change from a larger value to a smaller one.

Let's write a loop that will run from 10 to 0.

To do this, change the initial value of the iterator and the condition for continuing the loop.

#### An example of a loop that will not execute once.

```javascript
for (let i = 10; i <= 0; i++) {
  console.log('Run ' + i);
}
```

In this loop, the initial value of the variable `i` is 10, and the loop condition specifies that the loop must be executed
until `i <= 0`.
`10 <= 0` is a false statement. If the condition is false, the loop will not start.

Let's try to change the loop condition again:

#### An example of a loop that will execute an infinite number of times.

```javascript
for (let i = 10; i >= 0; i++) {
  console.log('Run ' + i);
}
```

We obtained an infinite loop.
For all values of variable `i` varying from 10 with step +1 ,
the condition `i >= 0` will always be true, so the loop will be executed infinitely.

Be careful when formulating the loop condition to avoid infinite loops.
Modern browsers detect infinite loops and stop them, but it's best not to let it get to that point.

#### Cycle from a larger value to a smaller one.

Change the cycle step to negative, so that after each pass of the cycle the value of the variable `i` decreases by 1.

```javascript
for (let i = 10; i >= 0; i--) {
  console.log('Run ' + i);
}
```

The cycle starts with an initial counter value of 10. After each iteration the counter value is reduced by 1.
The cycle is executed until the counter value is less than 0. The `i--` abbreviated notation `i = i - 1`.

The cycle outputs 11 values:

```javascript
Run 10
Run 9
Run 8
Run 7
Run 6
Run 5
Run 4
Run 3
Run 2
Run 1
Run 0
```

You can change the condition so that the console will print negative values as well.
Display numbers from 10 to -10 in increments of -3.

```javascript
for (let i = 10; i >= -10; i = i - 3) {
  console.log('Run ' + i);
}
```

The number following -8 is -11. The condition `-11 >= -10` is false, and the loop terminates,so the last output value is -8.

```javascript
Run 10
Run 7
Run 4
Run 1
Run -2
Run -5
Run -8
```

#### Using cycles to calculate the sum of a series of numbers.

An example of a series of numbers is consecutive numbers from 1 to 10:

```javascript
1  2  3  4  5  6  7  8  9  10
```

Before starting the cycle, create a variable `sum`, in which we will accumulate the value of the sum, and assign it an initial value of 0.
With each pass of the loop we will increase `sum` by the current value of `i`.

```javascript
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}

console.log(sum); // 55
```

How this cycle works:

1. The `sum` variable is created before the beginning of the cycle and its initial value is 0.
2. During the first pass of the loop `i` = 1, `sum` = 0, `sum + i` equals 1.
3. During the second pass of the loop `i` = 2, `sum` = 1, `sum + i` equals 3.
4. For the third pass of the loop `i` = 3, `sum` = 3, `sum + i` equals 6.
5. During the fourth pass of the loop `i` = 4, `sum` = 6, `sum + i` equals 10.
...
11. For the tenth pass of the loop `i` = 10, `sum` = 45, `sum + i` is 55.

The `sum` variable will contain the value 55 when the loop ends.

Calculating the sum of numbers from 1 to 1000:

```javascript
let sum = 0;

for (let i = 1; i <= 1000; i++) {
  sum = sum + i;
}

console.log(sum); // 500500
```

#### Using cycles to calculate the product of a series of numbers.

When calculating the product of a series of numbers, an accumulative variable is also used, into which the intermediate results of
intermediate results of calculations.

The `product` variable is created before the start of the cycle and its initial value must be 1.

Calculating the product of consecutive numbers from 1 to 100:

```javascript
let product = 1;

for (let i = 1; i <= 100; i++) {
  product = product * i;
}

console.log(product); // 9.33262154439441e+157
```

Multiplication of numbers from 1 to 10:

```javascript
let product = 1;

for (let i = 1; i <= 10; i++) {
  product = product * i;
}

console.log(product); // 3628800
```

Let's look at how this cycle works:

1. The `product` variable is created before the start of the cycle and its initial value is 1.
2. On the first pass of the loop `i` = 1, `product` = 1, `product * i` equals 1.
3. On the second pass of the loop `i` = 2, `product` = 1, `product * i` equals 2.
4. On the third pass of the loop `i` = 3, `product` = 2, `product * i` equals 6.
5. With the fourth pass of the loop `i` = 4, `product` = 6, `product * i` equals 24.
...
11. For the tenth pass of the loop `i` = 10, `product` = 362880, `product * i` equals 3628800.

The `product` variable will contain the value 3628800 when the loop is complete.

Multiplication of numbers from 5 to 25 in increments of `5`:
```javascript
let product = 1;

for (let i = 5; i <= 25; i += 5) {
  product = product * i;
}

console.log(product); // 375000
```
### Using a loop to traverse a line.

The first character in the string has index 0, and the last character has index `length - 1`, where `length` is the length of the string.

The loop `for` with a variable-counter that takes values from 0 to `length - 1` is used to traverse the string.
In the loop all characters of the string are sequentially searched.
Access to a single character of the string is performed by an index, which is equal to the value of the variable-counter.

Example. Output one by one all characters of the string:

```javascript
let message = 'Hello JavaScript';

for (let i = 0; i <= message.length - 1; i++) {
  console.log(message[i]);
}
```

The result of the cycle:

```javascript
H
e
l
l
o

J
a
v
a
S
c
r
i
p
t
```
The loop condition can be written differently - this will not affect the result:
```javascript
let message = 'Hello JavaScript';

for (let i = 0; i < message.length; i++) {
  console.log(message[i]);
}
```
### Using a loop to fill an array with numbers.
#### Filling the array with numbers from 0 to 9.

The numbers are added to the end of the array using the `push()` method:
```javascript
let numbers = [];

for (let i = 0; i < 10; i++) {
  numbers.push(i) // add an element to the end of the array;
}

console.log(numbers); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```
#### Filling the array with numbers from 0 to 9 in reverse order.

Use the `unshift()` method to add an element to the beginning of the array:
```javascript
let numbers = [];

for (let i = 0; i < 10; i++) {
  numbers.unshift(i) // add an element to the beginning of the array;
}

console.log(numbers); // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```
#### Examples of filling an array with numbers.
Filling the array with even numbers from the range 20 to 30 in reverse order:
```javascript
let numbers = [];

for (let i = 30; i >= 20; i -= 2) {
  numbers.push(i);
}

console.log(numbers); // [30, 28, 26, 24, 22, 20]
```
Filling the array with odd negative numbers from -11 to -1:
```javascript
let numbers = [];

for (let i = -11; i < 0; i += 2) {
  numbers.push(i);
}

console.log(numbers); // [-11, -9, -7, -5, -3, -1]
```
#### Output the array elements to the console:
```javascript
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```
The result of the cycle:
```javascript
1
2
3
4
5
```