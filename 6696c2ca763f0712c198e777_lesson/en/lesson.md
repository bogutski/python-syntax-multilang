![](https://course-qa-basics.s3.us-west-1.amazonaws.com/boy-change.png)

Each element of the array has its own unique index, starting from zero.

To change an element of an array, you need to address it by its index and assign it a new value.

```javascript
const students = ['Alice', 'Bill', 'Carson'];

students[1] = 'Bob';
console.log(students); // ['Alice', 'Bob', 'Carson']

// let's capitalize the second element of the array
students[1] = students[1].toUpperCase();
console.log(students); // ['Alice', 'BOB', 'Carson']
```

If we want to swap two elements in an array, we need to enter an additional variable.

Let's look at an example:

```javascript
const students = ['Alice', 'Bill', 'Carson'];

const firstEl = students[0];
students[0] = students[1];
students[1] = firstEl;

console.log(students); // ['Bill', 'Alice', 'Carson']
```

In addition, arrays can contain not only primitive data types such as numbers and strings, but also other complex data types such as objects.

```javascript
const students = [
  { name: 'Alice', id: 987 }, 
  { name: 'Bob', id: 357 }, 
  { name: 'Carson', id: 753 }
];

students[1].name = 'Bill';

console.log(students); // [{ ... }, { name: 'Bill', id: 357 }, { ... }]
```

In JavaScript, objects are a reference data type, which means that a variable containing an object actually stores a reference to the object in memory, not the object itself.

When working with objects in arrays, keep in mind that if you change a property of an object stored in an array, that change will be reflected wherever that object is used.

This can lead to unpredictable results if this feature is not taken into account:

```javascript
const student1 = { name: 'Alice', id: 987 }; 
const student2 = { name: 'Bob', id: 357 };
const student3 = { name: 'Carson', id: 753 };

const students = [student1, student2, student3]
students[1].name = 'Bill';

console.log(students); // [{ ... }, { name: 'Bill', id: 357 }, { ... }]
console.log(student2); // { name: 'Bill', id: 357 }
```

Now completely change the second element of the array :

```javascript
const student1 = { name: 'Alice', id: 987 }; 
const student2 = { name: 'Bob', id: 357 };
const student3 = { name: 'Carson', id: 753 };

const students = [student1, student2, student3]
students[1] = { name: 'Alan', id: 432 };

console.log(students); // [{ ... }, { name: 'Alan', id: 432 }, { ... }]
console.log(student2); // { name: 'Bob', id: 357 }
```

Let's write a function `tenToZero` that takes the `arr` array, finds the `target` element, replaces it with `replacement`, and returns the changed array: 

```javascript
function tenToZero(arr, target, replacement) {
  const targetIndex = arr.indexOf(target);
  arr[targetIndex] = replacement;
  return arr;
}

console.log(tenToZero([1, 23, 4, 1, 4, 6], 4, 'four')); // [1, 23, 'four', 1, 4, 6]
```
