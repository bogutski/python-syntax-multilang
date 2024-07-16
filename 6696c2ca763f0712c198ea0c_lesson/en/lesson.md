Sometimes it is necessary to iterate the loop so as to go from a larger number to a smaller number.

```javascript
const min = 12;
const max = 52;
const arr = [];
for (let i = max; i >= min; i--){
arr.push(i)
}
console.log(arr)
```
In this example, we loop from the value of `max` as long as `i` is greater than or equal to the
value `min` with iteration step `i--` that is, decreasing each time `i` by one

The result of such a cycle:
```javascript
[52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12]
```

You can change the iteration step, for example by decreasing `i` each time by 4
```javascript
for (let i = max; i >= min; i -= 4){
arr.push(i)
}
//[52, 48, 44, 40, 36, 32, 28, 24, 20, 16, 12]
```

IMPORTANT!
Pay attention that the cycle is not endless.

An example of an infinite loop:
```javascript
for (let i = max; i >= min; i++){
arr.push(i)
}
```
In this case, the error is made in that the iteration step is set as `i++` and the loop will run for as long as the computer or browser has enough resources,
As long as the computer or browser has enough resources. More often than not, such an infinite loop has to be forcibly terminated
(close the tab, browser, program)