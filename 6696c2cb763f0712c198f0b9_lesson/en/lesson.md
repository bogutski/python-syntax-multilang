### Creating a new array

In this example, we'll figure out how to remove all elements that are not numbers from an array. 

To do this, we will create a new array and add only numbers to it.

```javascript
const arr = [76, '#2', 'ewq', 6, NaN, '', 2, 1, null, -5, [], 87]

const numbers = [];

for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number' && !isNaN(arr[i])){  // If the data type of the array element is a number and it is not NaN
        numbers.push(arr[i])                           // Add an element to a new array
    }
}

console.log(numbers)  // [ 76, 6, 2, 1, -5, 87 ]
```

Everything works as expected.


### Using the `splice()` method to remove items

The `splice()` method allows you to remove elements from an array.

Let's look at a few examples.

```javascript
const arr = ['a', 'b', 'c', 'd']

arr.splice(1, 2)  // 1 - from the first index, inclusive; 2 - remove 2 elements

console.log(arr) // [ 'a', 'd' ]
```
In this example, we removed elements with indexes 1 and 2.


```javascript
const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

arr.splice(0, 4)  // 0 - initial index; 4 - remove 4 elements

console.log(arr) // [ 'e', 'f', 'g' ]
```
We deleted the first 4 elements of the array.


The `splice()` method also allows you to add elements to an array.

```javascript
const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

arr.splice(3, 4, 'new', 'elements', 'here') // 3 - initial index; 4 - remove 4 elements; 
                                             // add new elements: 'new', 'elements', 'here'

console.log(arr) // ['a', 'b', 'c', 'new', 'elements', 'here' ]
```

In this example, we removed 4 elements starting with index 3 and added new elements to the array.

Now let's go back to our topic and try to remove all elements that are not numbers using the `splice()` method.

```javascript
const arr = [76, '#2', 'ewq', 6, NaN, '', 2, 1, null, -5, [], 87]

for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] !== 'number' || isNaN(arr[i])){  // If the array element is not a number or the element is NaN
        arr.splice(i, 1)                              // Delete the element
    }
}

console.log(arr)  // [ 76, 'ewq', 6, '', 2, 1, -5, 87 ]
```

We did not get the expected result, because two lines remained in the array: `'ewq'`, `''`.

Let's look at why this happened.

```
Imagine an array of numbers:     [0, 1, 2, 3, 4, 5]
And the same iterator/indexes: 0, 1, 2, 3, 4, 5
```


What happens if we remove one element from the array?
```
Array: [0, 2, 3, 4, 5]
Index: 0, 1, 2, 3, 4, 5
```

We see that the indexes now do not coincide with the array elements.

Back to the loop, let's say on the second round of the loop we deleted an element, the array numbers shifted to the left, but the index did not change.

On the next loop round we will move on to the next element, but `2` will still remain unchecked because it is now at the index - `1`, which has already been checked.

To solve this problem, we need to decrease the index by `1` if we delete an element.

```javascript
const arr = [76, '#2', 'ewq', 6, NaN, '', 2, 1, null, -5, [], 87]

for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] !== 'number' || isNaN(arr[i])){
        arr.splice(i, 1)                                // Delete the element
        i--;                                            // Decrease the index by 1 1
    }
}

console.log(arr)  // [ 76, 6, 2, 1, -5, 87 ]
```

Great, now everything is working properly.


Let's look at the second way around this problem.

```javascript
const arr = [76, '#2', 'ewq', 6, NaN, '', 2, 1, null, -5, [], 87]

for(let i = arr.length - 1; i >= 0; i--){              // Go from the end of the array

    if(typeof arr[i] !== 'number' || isNaN(arr[i])){
        arr.splice(i, 1)
    }
}

console.log(arr)  // [ 76, 6, 2, 1, -5, 87 ]
```

In this example, we go from the end of the array, so the indexes are not shifted and we can safely delete elements.

This method works faster than the previous one, since we don't need to add an extra iteration every time we delete an item.
