The `toFixed(n)` method takes a number as an argument, formats it to `n` decimal places and returns the result as a string.

Syntax: `Number.toFixed([n])`. The value of `n` may be from 0 to 20 inclusive. If the value of `n` is not specified, it is assumed to be 0.

```javascript
console.log((35).toFixed(2)); // "35.00" method adds zeros to n decimal places
console.log((35.00).toFixed()); // "35"
console.log((35.00).toFixed(0)); // "35"
console.log((35).toFixed(20)); // "35.00000000000000000000"
```

Rounding to the _`n`_th sign is done similarly to the method `Math.round(x)`, i.e. to the nearest number.

```javascript
console.log((-12345.678).toFixed()); // "-12346"
console.log((12345.678).toFixed(1)); // "12345.7"
console.log((12345.678).toFixed(2)); // "12345.68"
```

This method "throws" errors (exceptions):

- `RangeError` if the value of `n` is too small or too large. Values of `n` from 0 to 20 inclusive will not cause a RangeError.
- `TypeError` if we are not trying to apply this method to `number`.

```javascript
console.log((900.7199254740991).toFixed(101)); // "RangeError"
console.log(('153425').toFixed(1)); // "TypeError"
console.log(('35$').toFixed(2)); // "TypeError"
console.log((35).toFixed(-1)); // "RangeError"
```

To avoid returning an incorrect result, always put the numeric value in parentheses! Remember that the value returned by the method is of type `string`, and if you need to get the type `number`, convert it additionally.

```javascript
const num = 1289.56;
console.log(num.toFixed(1)); // "1289.6", "string"
console.log(+num.toFixed(1)); // 1289.6, "number"
console.log(Number(num.toFixed(1))); // 1289.6, "number"
```
