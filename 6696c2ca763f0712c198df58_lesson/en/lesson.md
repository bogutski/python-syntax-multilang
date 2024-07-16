#### The `return` directive is used to make the function return the result of its work

`return` stops the function and returns the result.

Consider an example in which `return` is used several times in the body of a function:

 ```javascript
function n1() {
  return 1; // the function executes 'return' and stops working 
  return 10; // this line will never be executed
}

console.log(n1()) // 1 
 ```

Let's continue to get acquainted with the function and its structure.

## Function parameters and arguments

Let's look at an example:

 ```javascript
function sum(n1, n2) {
  return n1 + n2;
} 

console.log(sum(1, 2)) // 3
 ```

When declaring the `sum()` function, we used `parameters` `n1` and `n2`.

The `n1` and `n2` are the `variables` that will be available in the `sum()` function.

When `sum()` was called, we passed values `1` and `2` as `arguments`.

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/one1-one2.png)

### A function parameter is a variable that is set when the function is declared

The result of the `sum()` function will depend on the values we pass when calling it.

To get the result of adding `3` and `5`, call the function `sum(3, 5)`.

#### An example of calling the `sum()` function and passing it arguments

The result of the `sum()` function will depend on the values we pass when calling it.

After `sum()` received the values `3` and `5` as arguments, it added them up and returned
the result `8`.

The result of the function was written into the `result` variable and output to the console.

```javascript
function sum(n1, n2) {
  return n1 + n2;
} 

const result = sum(3, 5);
console.log(result); // 8
```

The values `3` and `5` are the `arguments` of `sum()`.

### The function argument is the value that is assigned to the parameter when the function is called

Arguments are assigned to function parameters in the order in which they are specified when the function is called.

Let's look at examples of `sum()` function working with different values. Let's display the results in the console:

```javascript
console.log(sum(10, 20))// 30; the result of the 'sum()' function for arguments 10 and 20
console.log(sum(35, -10)) // 25; the result of 'sum()' for arguments 35 and -10
console.log(sum(-300, 120)) // -180; the result of 'sum()' for arguments -300 and 180
 ```

We have considered an example of the `sum()` function with two parameters `n1` and `n2`.

Consider other examples:

```javascript
function mult(n1, n2, n3) {
  return n1 * n2 * n3;
}

console.log(mult(2, 3, 4)) // 24
```

The function `mult()` takes three parameters `n1`, `n2` and `n3` and returns the result of multiplication for arguments `2`, `3`
и `4`.

```javascript
function avg(n1, n2, n3, n4) {
  return (n1 + n2 + n3 + n4) / 4;
}

console.log(avg(2, 3, 4, 5)) // 3.5
```

The `avg()` function takes four parameters `n1`, `n2`, `n3` and `n4` and returns the arithmetic mean of
of the arguments `2`, `3`, `4` and `5`.

Note that in the examples above the parameter names `n1` and `n2` are used in different
functions: `sum(n1, n2)`, `mult(n1, n2, n3)` and `avg(n1, n2, n3, n4)`.

This is acceptable because access to them is limited to the boundary of the function.

#### An example of an attempt to access the parameters of a function outside of it

```javascript
function sum(n1, n2) {
  return n1 + n2;
}

console.log(n1) // ReferenceError: n1 is not defined
```

In the example above, we are trying to print to the console the value of the variable `n1`, which is declared inside the `sum()` function.

When I try to access the `n1` variable outside the `sum()` function, an error `ReferenceError: n1 is not defined` occurs.

#### Example of functions with one parameter

```javascript
// finding the area of a square with side 'side'
function square(side) {
  return side ** 2; 
}

// finding the volume of the cube with the edge 'side'
function cube(side) {
  return side ** 3; 
}

console.log(square(5)) // 25; 
console.log(cube(5)) // 125
```

The parameters may not be set when the function is created.

```javascript
function ten() {
  return 10;
}

console.log(ten()) // 10
console.log(ten(2, 3)) // 10
console.log(ten(2, 3, -4)) // 10
console.log(ten('hello')) // 10
```

The `ten()` function has no parameters and returns `10` regardless of the arguments passed to it.
This looks strange. But now you know how it works.

Practice creating functions with different numbers of parameters.

Experiment with different types of data as arguments.
