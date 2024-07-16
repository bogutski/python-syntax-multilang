We've already taken apart objects, strings, numbers, logical operators, and branching.

Now let's look at an array. Arrays are an ordered data type.

If an object is a bunch of properties piled together, an array is a list.

The data type of an array is an object.

To refer to some property of an object we use a key, because we cannot say,
that there is any order within an object: something first and something second. The properties of an object lie like
objects on the table.

In the case of an array, we are always talking about a list.
For example, a list of students, a list of class students, an order of days of the week, a to-do list are all examples of a list.

To create an array, we use square brackets.

Let's create a to-do list array:
```javascript
const todoList = [] //we created an empty array
```
Inside the array can be any type of data: strings, numbers, objects, other arrays.

Let's make a list of lines.
```javascript
const todoList = ['Wash Car', 'Store', 'Call']    
```

Elements of the array are separated by a comma.

To output the array to the console, we use the `console.log` command and put the name of the array in brackets.
```javascript
const todoList = ['Wash Car', 'Store', 'Call']    

console.log(todoList)    //["Wash Car", "Store", "Call"]
```
The creation of an array is based on an object. If you use the browser console, you can see that next to each element is a number (0, 1, 2).
The array elements have indices.

The indexes are numbered starting from zero. The same as in strings.

In the example above we have the indices 0, 1, 2.
```javascript
0: "Wash Car"
1: "Store"
2: "Call"
```
Just like strings, an array also has a length. To get the length of an array we use the `length` property.
```javascript
console.log(todoList.length)    //3
```
The array has 3 elements (on the first level!).

There can be other arrays inside the elements of an array. This is called nesting.
```javascript
const todoList = ['Wash Car', 'Store', 'Call', []] //the last array element is an empty array    

console.log(todoList.length)    //4
```

To refer to an array element, we use square brackets and specify the element index in square brackets.
```javascript
const todoList = ['Wash Car', 'Store', 'Call', []] // the last array element is an empty array   

console.log(todoList[0])    //'Wash Car'
```

An array can consist of different types of data.
```javascript
const todoList = ['Wash Car', 'Store', 'Call', [2, 3, 4]];    

console.log(todoList)         //["Wash Car", "Store", "Call", Array(3)]
console.log(todoList.length)  //4
```

The length of the array is still 4, even though there is another array of three elements inside the last element of the array.

Consider another example of an array containing different types of data.
```javascript
const todoList = ['Hello', {name: 'Alice'}, 123, true, [2, 3, 4]];
console.log(todoList)                  // [ 'Hello', { name: 'Alice' }, 123, true, [ 2, 3, 4 ] ]
console.log(todoList.length)      // 5

// Let's access each element and check its data type

console.log(todoList[0], typeof todoList[0])        // 'Hello', `string`
console.log(todoList[1], typeof todoList[1])        // { name: 'Alice' }, `object`
console.log(todoList[2], typeof todoList[2])        // 123, `number`
console.log(todoList[3], typeof todoList[3])        // true, `boolean`
console.log(todoList[4], typeof todoList[4])        // [ 2, 3, 4 ], `object`
```
