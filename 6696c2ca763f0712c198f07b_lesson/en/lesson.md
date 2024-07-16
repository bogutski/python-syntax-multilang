In this lesson we are going to walk through each element of an array and perform some mathematical operation on it, such as
double it.

We have an array that contains both numbers and elements of other types that will need to be skipped.

It is necessary to double each number in this array.

```javascript
const arr = [76, '#2', 'ewq', 6, NaN, '',  2, 1, null, -5, [], 87]

for(let i = 0; i < arr.length; i++) {
  if(typeof arr[i] === 'number')
  console.log(arr[i])            //check which elements will fall under the given condition if
}

// 76 6 NaN 2 1 -5 87
```

As you can see, this `if` condition also outputs to the console the `NaN` element, which we do not need
We need to add one more condition

```javascript
const arr = [76, '#2', 'ewq', 6, NaN, '',  2, 1, null, -5, [], 87]

for(let i = 0; i < arr.length; i++) {
  if(typeof arr[i] === 'number' && !isNaN(arr[i]))
  console.log(arr[i])
}

// 76 6 2 1 -5 87
```
Now the loop takes only those elements (numbers) that we need.

According to the problem we need to double each numeric element

```javascript
const arr = [76, '#2', 'ewq', 6, NaN, '',  2, 1, null, -5, [], 87]

for(let i = 0; i < arr.length; i++) {
  if(typeof arr[i] === 'number' && !isNaN(arr[i]))
  arr[i] = arr[i] * 2
}
console.log(arr)

// [152, '#2', 'ewq', 12, NaN, '',  4, 2, null, -10, [], 174]
```
As a result, we have an initial array in which each element, which is a
number is doubled.