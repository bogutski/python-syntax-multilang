![](https://course-qa-basics.s3.us-west-1.amazonaws.com/no-girl.png)

The logical operator `NOT(!)` (logical negation) changes the logical value of the operand from true to false and vice versa. 

It is usually used with boolean (logical) values. 

The `NOT(!)` operator is a logical operator that gets only one argument:

```javascript
let result = !true;
console.log(result); //false
```

Let's take a look at how the logical `NOT(!)` works:

1. First it sets the argument to the boolean type `true/false`.

2. Then it returns the opposite value.

Thus:

```javascript
console.log(true); // true
console.log(!true); // false
console.log(!false); // read as `not false`, i.e. `true`
```

Let's look at some examples:

```javascript
const isOpen = true;
if(isOpen) {
console.log('Welcome'); // 'Welcome'    
}
```

```javascript
const isOpen = false;
if(!isOpen) {
   console.log('Closed'); // 'Closed'  
}
```

The `NOT(!)` operator converts everything to `boolean` and returns the opposite value.

```javascript
const isOpen = 10;
console.log(!isOpen); // false
```

### Examples of expressions that can be converted to `false`:

* null
* NaN
* 0 
* empty string ("", '', ``)
* undefined

All numbers (including negative numbers) are converted to `true` except zero. Zero is converted to `false`.

```javascript
const isOpen = 0;
console.log(!isOpen); // true 
```

All strings except the empty string are converted to `true`.

```javascript
const isOpen = '';
console.log(!isOpen); // false
```

The `NaN`, `null` and `undefined` are converted to `false` and the `NONE(!)` operator is used to obtain `true`.

```javascript
const isOpen = null;
console.log(!isOpen); // true
```

```javascript
const isOpen = undefined;
console.log(!isOpen); // true
```

```javascript
const isOpen = undefined;
console.log(!isOpen); // true
```

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/girl-yellow-dress.png)

### Double `NOT(!!!)`

Used to convert values to a logical type:

```javascript
const isOpen = 1;
console.log(!!isOpen); // true
```

```javascript
const isOpen = '';
console.log(!!isOpen); // empty string: false 
```

```javascript
const isOpen = ' ';
console.log(!!isOpen); // non-empty string: true
```
