The `length` property returns an integer value representing the number of characters in the string, that is, the length of the stack. 

For example, the length of the string `"Hello"` is 5.

The syntax of the `length` property is as follows: `str.length`, where `str` is a string.

Find the number of characters in the string `'Hello'`:

```javascript
const str = 'Hello';
console.log(str.length); // 5
```

The same example can also be written like this:

```javascript
console.log('Hello'.length); // 5
```

For empty strings the `length` property returns `0`.

```javascript
const str = '';
console.log(str.length); // print 0, the string is empty
```

Consider an example of using the `length` property with a variable:

```javascript
const greeting = 'Hello'
const strLength = greeting.length;
console.log(strLength - 1); // 4
```

Now declare a variable named `length` and assign it `greeting.length`:

```javascript
const greeting = 'Hello'
const length = greeting.length

console.log(length); // the console will print 5, the variable we wrote the length of the string into 
```

A variable can be named `length` because it does not override the `length` property of the string. We recommend not naming variables with property names to avoid confusion. 


Let's also try to call the `length` property of the `greeting` variable in which the concatenation was performed:

```javascript
const greeting = 'Hello ' + 'world'
const greetingLength = greeting.length

console.log(greetingLength); // the console will print 11. The variable greeting stores the string 'Hello world' 
```

In this example, we declare a variable `greetingLength` and assign it the value of the `length` property of the string `greeting`. The console will print `11`, because the `greeting` variable stores the string `'Hello world'`, which consists of 11 characters.

The name of the `greetingLength` variable explicitly tells you what it stores. This is a good thing.
