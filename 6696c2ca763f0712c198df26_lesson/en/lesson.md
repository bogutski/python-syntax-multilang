The function may leave a `result` of its work in its place after execution. 

This result is called the `return value of the function` - `return`.  

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/bluegirl.png)

### The `return` directive

Let's look at an example:

``` javascript
function time() { 
  return '04:59'; 
}
```

The `time()` function will return, that is, leave behind `04:59` after it is called.

To see the return value in the console, write:

```javascript
function time() {
  return '04:59';
}

console.log(time()) // the string '04:59' is displayed. This is the result of the time() function
```

Let's look at a few more simple examples:

```` javascript
function n1() {
  return 10;
}

function n2() {
  return 5;
}

console.log( n1() ) // number 10 is displayed; the result of n1()
console.log( n1() + n1() ); // 20; result of adding 10 + 10 = 20
console.log( n1() + n2() ); // 15; addition result 10 + 5 = 15
console.log( n1() / n2() ); // 2; product of division 10 / 5 = 2
````

The `return` directive is an optional part of the function statement. 

If `return` is not used in the body of the function, the function returns `undefined`.

### An example of a function without `return`

```javascript
function season() {}
console.log( season() ) //  undefined
````

### Example function with `return`

```javascript
function season() {
  return 'Winter';
}

console.log( season() )  //  'Winter'
```

### An example of a function with an empty `return`

```javascript
function season() {
  return;
}

console.log( season() ) // undefined
```

Or also with an explicit `undefined` in `return`:

```javascript
function name() {
  return undefined;
}

console.log( name() ) //  undefined
```
