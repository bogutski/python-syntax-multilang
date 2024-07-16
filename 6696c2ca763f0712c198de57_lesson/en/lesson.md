Let's look at a simple addition example written with JavaScript.
```
let a = 15;
let b = 20;
let c = a + b;
```
In the third line, not only the binary plus operator, which adds `a` and `b`, is used, but also the assignment operator `=`. In expressions with multiple operators, the order of their execution is determined by *priority*. 
Operators with *higher* priority are executed first. For example, multiplication is performed before addition, and the use of parentheses and unary plus is even performed before multiplication. The assignment operator `=` has one of the lowest priorities, so in long expressions, usually all actions "to the right of the equal sign" are performed first, and then the result is assigned to a variable.
```
let d = 2 * 2 + (3 - +'1');
```
There is a whole table of priorities in JavaScript. You can read it here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

Sometimes abbreviations are used in JavaScript for certain combinations of operators:
```
y = y + x; is equivalent to y += x;
y = y - x; is equivalent to y -= x;
y = y * x; is equivalent to y *= x;
y = y / x; is equivalent to y /= x;
y = y % x; is equivalent to y %= x;
```
Do not be surprised to encounter such combinations in tasks! You can always rewrite these combinations in a convenient way for you.
