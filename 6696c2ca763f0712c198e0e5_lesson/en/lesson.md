![](https://course-qa-basics.s3.us-west-1.amazonaws.com/question-cat-girl.png)

Functions can take various values as arguments, including those from another function.

Consider the `sum()` function, the result of which is the addition of two numbers.

Print the result for the arguments `2` and `5` into the console:

``` javascript
function sum(n1, n2){
  return n1 + n2;
}

console.log(sum(2, 5)); // 7
``` 

We can save the result of the `sum()` function in the `run1` variable and display it in the console:
``` javascript
const run1 = sum(2, 5);
console.log(run1); // 7
```

Now substitute the value of variable `run1` as an argument in function `sum()`.

Let's save the result in a new variable `run2` and display it in the console:

```javascript
const run2 = sum(run1, run1);
console.log(run2); // 14 
```

`run2` is the result of adding `run1 + run1`, i.e. `sum(2, 5) + sum(2, 5)` or `7 + 7`.

The variable `run2`, we can use as one of the arguments of the function `sum()`.

Example:
```javascript
const run3 = sum(run1, run2);
console.log(run3); // 21
```

Let's look at another example of one function working into another.
```javascript
function mult(n1, n2){
  return n1 * n2;
}

const m1 = mult(3, 4);
const m2 = mult(5, 2);

const run4 = sum(m1, m2);
console.log(run4); // 22
```

There is another way to set the `run4` variable:
```javascript
const run4 = sum(mult(3, 4), mult(5, 2));
console.log(run4); //22
```

The priority of operations for `run4` is inside the `sum()` brackets. 

The external function `sum()` will be executed after the execution of `mult()`.

It is worth noting that the code entry in the last example is poorly readable. In such cases, it is more convenient to use new variables, as in the example above using `m1` and `m2`. 

