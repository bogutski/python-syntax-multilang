In this tutorial, we'll look again at how to walk through the elements of an array.

For this we will use the for loop.

```javascript
const arr = [123, 'abc', true, null, undefined, {name: 'Jack'}];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);                // display the array elements
}
// 123
// 'abc'
// true
// null
// undefined
// {name: 'Jack'}
```

Now let's try to output every third element of the array.

```javascript
const arr = ['one', 2, 3, 'two', 2, 3, 'three', 2, 3];

for(let i = 0; i < arr.length; i += 3) { // changed the iteration step
    console.log(arr[i]);
}
// 'one'
// 'two'
// 'three'
```

Also, we can start at a certain index and end at a certain index.

In the following example, we want to output to the console only the middle of the array, where only `true` is.

To do this, we change the loop condition as follows: 

* `let i = 2` - the initial value of `i` will be equal to `2`, which means we will start the loop with index `2`.
* `i < arr.length - 2` - the loop will be executed until the `length of the array - 2` is greater than `i`.

```javascript
const arr = [false, false, true, true, true, false, false];

for(let i = 2; i < arr.length - 2; i++) {  // we changed the cycle condition
    console.log(arr[i]);
}
// true
// true
// true
```

If you want to repeat the material about array bruteforcing, you can go back to the lesson:
`Section 12` -> `Cycle for` -> `Array bruteforcing`
