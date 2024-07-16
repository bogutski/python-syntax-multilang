![](https://course-qa-basics.s3.us-west-1.amazonaws.com/nan.png)
### Adding `+` 
```javascript
console.log(3 + 4) // 7
```

### Subtraction `-` 
```javascript
console.log(3 - 4) // -1
```

### Multiplication `*`
```javascript
console.log(3 * 4) // 12
```

### Division `/`
```javascript
console.log(3 / 4) // 0.75
```

### Incremental `**`
```javascript
console.log(3 ** 4) // 81
```

### The remainder of the division `%`
```javascript
console.log(10 % 2) // 0
console.log(9 % 2) // 1
```

It is convenient to use the `%` operator to determine whether a number is even or odd,
because when dividing an even number by 2, the remainder is 0, and when dividing an
an odd number by 2, the remainder is 1

```javascript
console.log(12 % 2) // 0
console.log(91 % 2) // 1
```

### Square root 

To extract the square root of a number, raise it to the power of `0.5`.

```javascript
console.log(16 ** 0.5) // 4
console.log(100 ** 0.5) // 10
console.log(14 ** 0.5) // 3.7416573867739413
```

### `NaN` not a number - not a number

`NaN` is not a number, but refers to the data type `number`.

```javascript
console.log(NaN) // NaN
console.log(typeof NaN) // 'number'
```

We will obtain `NaN` as a result of the following operations:

```javascript
console.log('12a' * 2) // NaN
console.log('12a' / 2) // NaN
console.log('12a' - 2) // NaN
console.log('12a' % 2) // NaN
console.log('12a' ** 2) // NaN
```

Think about why we get `NaN` as a result of these operations.

If you add a string value to a numeric value, the
of a numeric value to a string value, and the result will be the merging of strings

```javascript
console.log('12a' + 2) // '12a2'
console.log('f45' + 7) // 'f457'
```
