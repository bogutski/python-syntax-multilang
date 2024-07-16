Often we have to repeat the same action in many parts of the program.
To avoid repeating the same code in many places, functions were invented.

Functions are the basic "building blocks" of the program.

An example of built-in functions is the output to the console:

```javascript
console.log('Hello world');
```

We saw on the example of `console.log()` that functions perform some actions.

The `console.log()` outputs something to the console.

But you can also create your own functions.

A function is created to perform actions.

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/girl-red-cyclicity.png)

### Function Declaration

An example of a function declaration:

```javascript
function hello(){
  // function body
}
```

`function` is a keyword that indicates that we are declaring a function.

`hello` - function name. The function name must be unique within the program.

`()` - brackets, in which the function parameters are listed. Parameters are variables that will be available inside the function. Parameters are optional and are separated by commas.

`{}` are curly braces that contain the body of the function. The function body is the set of instructions that are executed when the function is called.

Indentation and spaces do not affect the result and performance of functions. This is only to improve the readability of the code.


```javascript
function hello(){
  console.log('Hello world');
}
```


We wrote our first function. That is, we `declared` it - we said there was such a function, but we didn't call it.

To call a function, you need to write its name and add parentheses.


```javascript
function hello(){
  console.log('Hello world');
}

hello();
```


Press `Run` and see what happened in the console.


Let's change the function a little bit:

```javascript
function hello(){
  console.log('===============');
  console.log('==Hello world==');
  console.log('===============');
}

hello();
```

Run it again and see the result.

```
===============
==Hello world==
===============
```

The function can be called several times:

```javascript
hello();
hello();
hello();
```

Here we will see the message three times.

```
===============
==Hello world==
===============
===============
==Hello world==
===============
===============
==Hello world==
===============
```

This example clearly demonstrates one of the main purposes of functions - to get rid of code duplication.

If you need to change the message or the way it is displayed, just change it in one place, in the function that outputs it.

### Common Mistakes


* The case of letters matters. You cannot declare a function with a small letter and call it with a capital letter.

```javascript
function hello(){
  console.log('===============');
  console.log('==Hello world==');
  console.log('===============');
}

Hello();
```

* Sometimes people forget to write parentheses `()` when calling a function. Without _**round brackets**_ the function will not be called and work.

```javascript
hello(); // call the function
hello; // do not call the function
```

When working with functions, pay close attention to errors and code style: indents, spaces, empty lines.
