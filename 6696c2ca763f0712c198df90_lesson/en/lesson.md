The result of the function depends on what values are passed as arguments.

Let's write a function `sum`. It takes two arguments: `n1` and `n2`. It returns the sum of these two arguments.

``` javascript
function sum(n1, n2){
  return n1 + n2;
}

console.log(sum(3, 5)); // 8 will be returned
```

### `undefined` as the return value

But what happens if one of the arguments is not given? 

If one of the arguments is not given when the function is called, it will be `undefined`. 

Try calling the `sum` function with one argument:

``` javascript
function sum(n1, n2){
  return n1 + n2;
}

console.log(sum(3)); // NaN will be displayed, not 8, because the result of adding 3 and undefined will be NaN

// Example of adding a number and undefined

console.log(3 + undefined); // NaN
```

### The default value set in the function

To avoid this situation, you can set a `default` value for the argument. 

To do this, you must specify a default value for the argument when declaring the function. 

Set the default value for the arguments `n1` and `n2` to `0`:

``` javascript    
function sum(n1 = 0, n2 = 0){
  return n1 + n2;
}

console.log(sum(3)); // the value 3 will be returned, because the second argument is 0
console.log(sum()); // the value 0 will be output, because both arguments are 0
```

### Number of arguments

The number of arguments the function accepts can be anything. 

``` javascript
function sum(n1 = 0, n2 = 0, n3 = 0, n4 = 0, n5 = 0, n6 = 0, n7 = 0, n8 = 0, n9 = 0, n10 = 0){
  return n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10;
}

console.log(sum(1, 2, 3, 1, 2, 1, 8)); // the console will print 18
```

If there are more values passed than the given arguments, only the necessary number of values will be taken.

``` javascript
console.log(sum(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)) // the console will display 10, the sum of the first 10 given values.
```

### Strings as function arguments

The function arguments can be numbers, strings and any other structures.

Consider this with the example below.

Create a function `greeting` that takes `name` and returns `Hello name`:

``` javascript
function greeting(name){
  return 'Hello ' + name; // the plus `+` operator glues together the string `Hello ` and the value of the `name` variable
}

console.log(greeting('Alice')); // Hello Alice
```

The same function can be run several times with different values.

Let's run the `greeting` function with different values:

``` javascript
console.log(greeting('Bob')); // Hello Bob
console.log(greeting('Johny')); // Hello Johny
console.log(greeting()); // Hello undefined, no value was passed for the name parameter.
```

Let's add another parameter `age`. It will take the default value of `0`. For the parameter `name` set the default value as an empty string `''`.

The `greeting` function will return the string `Hello name! Your age is age`.

``` javascript
function greeting(name = '', age = 0){
  return 'Hello ' + name + '! Your age is ' + age;
}

console.log(greeting('Bob', 123)); // Hello Bob! Your age is 123
```

Let's try to run the `greeting` function without passing any arguments:

``` javascript

console.log(greeting('Alice')); // Hello Alice! Your age is 0 // No value was passed to the age parameter, but it was set to 0 by default.

console.log(greeting('Johny')); // Hello Johny! Your age is 0.

console.log(greeting()); // Hello ! Your age is 0 // No values were passed to name and age, they are taken by default.
```
