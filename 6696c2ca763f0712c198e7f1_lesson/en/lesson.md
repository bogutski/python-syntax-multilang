![](https://course-qa-basics.s3.us-west-1.amazonaws.com/girl-delete.png)

We can add elements to the array using two methods: `push()` and `unshift()`.

* `push()` - adds elements to the end of the array
* `unshift()` - adds elements to the beginning of the array

But we can remove elements from an array in several ways.

### Method `pop()`

The `pop()` method is used to remove the last element from the array and return its value.

The syntax of the `pop()` method:

```javascript
arr.pop()
```

The `pop()` method takes no arguments. It removes the last element from the array and returns its value. If the array is empty, the `pop()` method will return `undefined`.

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends.pop();
console.log(friends); // ['Alice', 'Bill'], deleted 'Carson'

const el = friends.pop();
console.log(friends); // ['Alice'], deleted 'Bill'
console.log(el); // 'Bill'
```

### Method `shift()`

The `shift()` method is used to remove the first element from the array and return its value.

The syntax of the `shift()` method:

```javascript
array.shift()
```

The `shift()` method takes no arguments. It removes the first element from the array and returns its value. If the array is empty, the `shift()` method will return `undefined`.

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

const el = friends.shift();
console.log(friends); // ['Bill', 'Carson'], deleted 'Alice'
console.log(el); // 'Alice'
```

The `push()` and `pop()` methods are used to implement a `LIFO` (Last-In-First-Out) data structure such as a stack.

The `push()` method adds an element to the end of the array and returns its length, and the `pop()` method removes the last element from the array and returns its value.

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

const el = friends.push('Alex');
console.log(el); // 4, length of array
console.log(friends); // ['Alice', 'Bill', 'Carson', 'Alex']

const el1 = friends.pop();
console.log(el1); // 'Alex', the element we deleted
console.log(friends); // ['Alice', 'Bill', 'Carson']
```

The `shift()` and `unshift()` methods are used to handle a data structure called a `FIFO` (First-In-First-Out) queue. A `FIFO` queue is a data structure in which elements are added to the end and removed from the beginning like a normal queue.

The `unshift()` method adds an element to the beginning of the array and returns its length, and the `shift()` method removes the first element from the array and returns its value.

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

const el = friends.unshift('Alex');
console.log(el); // 4, length of array
console.log(friends); // ['Alex', 'Alice', 'Bill', 'Carson']

const el1 = friends.shift();
console.log(el1); // 'Alex', the element we deleted
console.log(friends); // ['Alice', 'Bill', 'Carson']
```

### The `splice()` method

The `splice()` method is used to remove, replace or add elements to an array.

The syntax of the `splice()` method:

```javascript
array.splice(start, deleteCount, item1, item2, ..., itemN)
```

* `start` - index from which the change of the array begins
* `deleteCount` (optional) - the number of items to be deleted starting from the `start` index. If `deleteCount` parameter is not specified, all items starting from the `start` index are deleted. If `deleteCount` value is 0, elements will not be deleted.
* `item1, item2, ..., itemN` (optional) - items to be added to the array, starting from the `start` index

The `splice()` method changes the original array and returns a new array containing the deleted elements, if they were deleted.

Starting with the first index `(start = 1)` in the `friends` array, delete all elements:

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends.splice(1);

console.log(friends); // ['Alice']
```

Starting from the second index `(start = 2)` in the `friends` array, delete all elements:

```javascript
const friends = ['Alice', 'Bill', 'Carson', 'KJ', 'Viktor'];

friends.splice(2);

console.log(friends); // ['Alice', 'Bill']
```

Now, starting from the first index, delete 3 elements `(start = 1, deleteCount = 3)`:

```javascript
const friends = ['Alice', 'Bill', 'Carson', 'KJ', 'Viktor'];

friends.splice(1, 3);

console.log(friends); // ['Alice', 'Viktor'], 'Bill', 'Carson', 'KJ' - deleted
```

Let's repeat everything we did in the last example, but now we replace the deleted items with `'Michael'`, that is, `(start = 1, deleteCount = 3, item1 = 'Michael')`. Let's also see what `splice()` returns:

```javascript
const friends = ['Alice', 'Bill', 'Carson', 'KJ', 'Viktor'];

const delElem = friends.splice(1, 3, 'Michael');

console.log(friends); // ['Alice', 'Michael', 'Viktor']
                      // 'Bill', 'Carson', 'KJ' - deleted, 
                      // 'Michael' - put in their place.

console.log(delElem); // ['Bill', 'Carson', 'KJ'], returns the array of deleted elements
```

Let's see what `splice()` returns if we don't delete anything from the array `(start = 1, deleteCount = 0, item1 = 'Michael')`:

```javascript
const friends = ['Alice', 'Bill', 'Carson', 'KJ', 'Viktor'];

const delElem = friends.splice(1, 0, 'Michael');

console.log(friends); // ['Alice', 'Michael', 'Bill', 'Carson', 'KJ', 'Viktor']
                      // 'Michael' - inserted into the array at index 1

console.log(delElem); // [], nothing was deleted
```
