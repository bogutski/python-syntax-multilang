Arrays in JavaScript are collections of elements that can be accessed by an index. In this tutorial we will look at how to access and manipulate array elements.

**Reference to an array element**.

To access an array element, you need to access the array by its index:

```js
arr[index] // where arr is an array, index is an index
```

The array indexes start with `zero`. That is, the first element of the array has index 0, the second has index 1, and so on.

For example, if we have a `todoList` array containing a list of tasks, we can access the first element of the `Wash Car` array as follows:

```js
const todoList = ["Wash Car", "Store", "Call", [2, 3, 4]];
console.log(todoList[0]); // Print the first element of the array (Wash Car)
```

You can also use variables to index array elements:

```js
const todoList = ["Wash Car", "Store", "Call", [2, 3, 4]];
const index = 2;
console.log(todoList[index]); // "Call"
```

We can also access the elements of a nested array in `todoList`:

```js
const todoList = ["Wash Car", "Store", "Call", [2, 3, 4]];
console.log(todoList[3][2]); // display the third element of the nested array (4)
console.log(todoList[3][4]); // output undefined, element with this index does not exist
```

An element of an array can also be an object. And we can access all its properties in the same way:

```js
const todoList = [
  "Wash Car",
  "Store",
  "Call",
  [2, 3, 4],
  {
    name: "Alice",
    age: 45,
    friends: ["Bob", "John", "Joe"],
  },
];
console.log(todoList); // Will print list todoList
console.log(todoList[4]); // { name: "Alice", age: 45, friends: ["Bob", "John", "Joe"]}
console.log(todoList[4].age); // 45
console.log(todoList[4].'age'); // Will print an error: 'SyntaxError: Unexpected string'
console.log(todoList[4].name); // "Alice"
console.log(todoList[4].friends[1][0]); // J, first letter from 'John' in the list friends
```
