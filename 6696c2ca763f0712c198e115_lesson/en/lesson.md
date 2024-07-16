The logical data type `Boolean` has only two values: `true` or `false`.

```javascript
const isAdult = true; // value `true` is assigned to the isAdult variable
console.log(isAdult); // true

constWinter = false; // value `false` is assigned to the isWinter variable
console.log(isWinter) // false
```

The `true` and `false` values are written without quotation marks.

Example:

```javascript
const isStudent = true; // the boolean variable is set to true
console.log(typeof isStudent); // boolean

const isSunCold = 'false'; // the string has been assigned the value 'false'
console.log(typeof isSunCold); // string
```

### Convert to Boolean with `Boolean()`

We can convert any data type to `Boolean`, with a function: `Boolean()`.

```javascript
console.log(Boolean('Hello')); // true, the string is not empty
console.log(Boolean('')); // false, because the string is empty

console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean(-10)); // true
console.log(Boolean(10)); // true

console.log(Boolean(0)); // false, only 0 is converted to false
```

### Convert to Boolean with `!!` (double negation)

```javascript
const lastName = ''; // assigned an empty string value
console.log(!!lastName) // false

const sum = 5 + 5; // assigned numeric value: 10
console.log(!!sum) // true

const isStudent = true; // assigned a boolean value: true
console.log(!!isStudent) // true
```

### Conversion to the opposite value. Negation operator `!`

The exclamation mark `!` in front of any value converts it to `boolean` and returns the opposite value.

```javascript
console.log(!true); // false
console.log(!false); // true

console.log(!''); // true
console.log(!'Hello'); // false

console.log(!0); // true
console.log(!1); // false

console.log(!NaN); // true
```
