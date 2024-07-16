In programming, one of the most common operations is to increase or decrease a variable by one.
```
let i = 2;
i = i + 1; // 3
```
The shorter notation for increasing a variable by one is called *increment* and is written in the form `i++` or `++i`. Both of these forms increase the result by one, but there is a difference between them.  
The "postfix form" is `i++`:
```
let x = 7;
let y = x++; /* the value of x is increased by one x = 8,
                but returns the old value of y = 7 */
```
"Prefix form" `++i`:
```
let x = 7;
let y = ++x; /* the value of x is increased by one x = 8,
                returns a new value of y = 8 */
```
* * * * * 
Similar to increment, there is a shorter notation for decrementing a variable by one - *decrement*.  
The "postfix form" of `i--`:
```
let x = 7;
let y = x--; /* the value of x is decreased by one x = 6,
                but returns the old value of y = 7 */
```
"Prefix form" `--i`:
```
let x = 7;
let y = --x; /* the value of x is decreased by one x = 6,
                returns a new value of y = 6 */
```
* * * * *

It should be noted that increment/decrement can only be applied to a variable. The `5++` code will give an error.

