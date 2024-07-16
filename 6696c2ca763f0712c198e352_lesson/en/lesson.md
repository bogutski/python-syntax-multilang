Concatenation of strings means adding one or more strings to the end of another string.

### Combining strings using the `+` operator

The same `+` operator used to add two numbers can be used to combine two strings `"string1" + "string2"`.

The `+` operator creates a new line by combining the lines to its left and right.

For example, combining the strings `Hello` and `world!`, creates the string `Helloworld!`.

```javascript
console.log('Hello') // the console will print 'Hello'
console.log('world!') // the console will print 'world!'
console.log('Hello' + 'world!') // the console will print 'Helloworld!'
```

Lines are not automatically separated by a space. If we need a space between our lines, we need to specify it in one of the lines, or add a line with a space between them:

```javascript
console.log('Hello ' + 'world!') // add a space in 'Hello ', the console will print 'Hello world!'
console.log('Hello' + ' world!') // add a space in ' world!', the console will print 'Hello world!'
console.log('Hello' + ' ' + 'world!') // add a line with a space ' ' between words,
                                      // the console will also print 'Hello world!'
```

The operator also works with variables:

```javascript
const str1 = 'Hello '
const str2 = 'world!

console.log(str1 + str2) // the console will print 'Hello world!'

const str3 = str1 + str2 // you can also assign the result of concatenation to a variable
console.log(str3) // the console will print the string 'Hello world!'
```

If the left part of the `+` operator is a string, JavaScript converts the right part to a string as well.

Consider the example of combining a number with a string, resulting in the number becoming a string:

```javascript
const str1 = 100
const str2 = 'world!'

console.log(str1 + str2) // console will print the string '100world!'
console.log(typeof (str1 + str2)) //will print string as data type
```

If both variables are a number, using the `+` operator we will get a number:

```javascript
const str1 = 100
const str2 = 50

console.log(str1 + str2) //will print number 150
console.log(typeof (str1 + str2)) //will print number data type
```

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/girls-str.png)

Let's look at a couple more examples:

```javascript
console.log(50 + '100') // will print the string '50100' into the console
console.log('50' + 100) // will print the '50100' string into the console
console.log('50' + '100') // will print the '50100' string into the console
```

Add a `prompt` box with the question **What is your name?** for the user to enter his name, and welcome the user:

```javascript
const name = prompt('What is your name?')
const greeting = 'Hello, '

console.log(name) // let's assume the user entered 'Viktor' into the box, the console will print 'Viktor'.
console.log(greeting + name) // the console will print 'Hello, Viktor'
console.log(greeting + name + '!') // will print 'Hello, Viktor!' into the console
```

Let's wrap it all up in a `hello` function:

```javascript
function hello(){
  const name = prompt('What is your name?')
  const greeting = 'Hello, '
  return greeting + name + '!'
}

console.log(hello()) // it will print 'Hello, Viktor!'
```

The `prompt` window is only executed when working with a browser and is used for training purposes. Let's look at the more used code and rewrite the function so that it takes a name:

```javascript
function hello(name){
  const greeting = 'Hello, '
  return greeting + name + '!'
}

console.log(hello('Viktor')) // the console will print 'Hello, Viktor!'
console.log(hello('Alice')) // console will print 'Hello, Alice!'
console.log(hello('Bob')) // console will output 'Hello, Bob!'
```

Let's rewrite the `hello` function so that the greeting is returned according to the time of day.

To set the time of day we will use the 24-hour format, where, for example, midnight is `0000`, 8 am is `800`, 12 noon is `1200`.

```javascript
function hello(name, time){
  let greeting;

  if (time > 0 && time < 1100) greeting = 'Good Morning, ';
  else if (time >= 1100 && time < 1700)  greeting = 'Good Day, ';
  else if (time >= 1700 && time < 2359)  greeting = 'Good Night, ';

  return greeting + name + '!' 
}

console.log(hello('Viktor', 850)) // console will print 'Good Morning, Viktor!'
console.log(hello('Alice', 1005)) // console will print 'Good Morning, Alice!'
console.log(hello('Alex', 1100)) // console will print 'Good Day, Alex!'
console.log(hello('Nick', 1700)) // console will print 'Good Night, Nick!'
console.log(hello('Bob', 2240)) // console will print 'Good Night, Bob!'
```

To summarize:

* To combine two or more strings, use the `+` operator.
* Operator syntax: `"line1" + "line2"`.
* The result of concatenating a string and a number is a string.
