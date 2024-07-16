Let's look at a problem where we need to go through an array in reverse order.

1 way: Change the settings of the cycle itself
```javascript
const arr = [4, 1, 2, 6, 8, 3];

  for (let i = arr.length -1; i >= 0; i--){
  console.log(arr[i])
}

  // 3 8 6 2 1 4
```
The result is correct.

You can change the iteration step in the loop, depending on the conditions of the problem, but
let's consider another option, when the loop will go in ascending order.

2 way: change the settings for accessing the element

```javascript
const arr = [4, 1, 2, 6, 8];

  for (let i = 0; i < arr.length; i++){
  console.log(arr[arr.length - i - 1])
}

  // 8 6 2 1 4
```

In this case, using the length of the array and the iterator value starting from zero,
we access the elements of the array starting from the end.