In this lesson we will look at how you can change the case of a string.

Create a variable `str` and assign to it the string `Hello JS`.

```javascript
const str = 'Hello JS';
console.log(str);
```

You can see in the console that this string has both upper and lower case.

The upper case is all that is written in capital letters - `Upper Case`.

The lower case is all that is written in small letters - `Lower Case`

To uppercase a string, put a dot after `str` and write `.toUpperCase()`.

The `toUpperCase` is a reference to a method that belongs to the variable `str`. This variable specifically does not have the `toUpperCase()` method, but all str strings do. So when we access the `toUpperCase()` method, we are accessing a method that belongs to strings. We haven't studied how the methods work yet, but for now it's important to understand how to use them.

Perform this example:
```javascript
const str = 'Hello JS';
console.log(str.toUpperCase()); 
```

To convert a string to lowercase, you must write `str.toLowerCase()`.

```javascript
const str = 'Hello JS';
console.log(str.toLowerCase());
```

The original string `str` will not change as a result of these actions. If you output it to the console again, we get:

```javascript
const str = 'Hello JS';
console.log(str.toUpperCase()); 
console.log(str.toLowerCase());
console.log(str); // the console log will print the original 'Hello JS' string
```

The result of the method can be assigned to a variable:

```javascript
const str = 'Hello JS;'

const upper = str.toUpperCase();
console.log(upper); // the console will print 'HELLO JS'

const lower = str.toLowerCase();
console.log(lower); // the console will print 'hello js'
```

You can even use concatenation to combine strings into one.

To make spaces appear between lines, you need to add spaces between variables:

```javascript
console.log(upper + ' ' + lower + ' + str); // the console will print 'HELLO JS hello js Hello JS'
```

Consider the problem in which we will use these methods:

The `changeCase` function takes a string.

If the first letter of the string that comes into the function is large, you must return the string in lower case. And if the first letter of the string is small, you must return the string in upper case.

```javascript
function changeCase(str){
    if(str[0].toUpperCase() === str[0]) return str.toLowerCase();
    return str.toUpperCase();
}

console.log(changeCase('pasv')); // the console will print 'PASV'
console.log(changeCase('HELLO')); // console will print 'hello'
```


