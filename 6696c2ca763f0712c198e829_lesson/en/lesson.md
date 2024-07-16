Copying an array is an important operation when working with arrays. You may need it in various situations, for example when you want to save a copy of the original array for later use, without changing the original array.

Let's look at an example:

```javascript
const f1 = ['Bill', 'Alice', 'Carson', 'KJ', 'Viktor'];

const f2 = f1;

console.log(f2); // ['Bill', 'Alice', 'Carson', 'KJ', 'Viktor']
console.log(f1 === f2); // true

f1[0] = 'Bob'; // change the first element in the array f1

console.log(f2); // ['Bob', 'Alice', 'Carson', 'KJ', 'Viktor']
console.log(f1); // ['Bob', 'Alice', 'Carson', 'KJ', 'Viktor']
```

In this example, the `f2` array is a reference to the `f1` array, not a copy of it. Therefore, if `f2` is changed, `f1` will also be changed, and vice versa.

This behavior is due to the fact that in JavaScript the primitive data types (e.g., numbers, strings, boolean values) are copied by value, not by reference, while arrays and objects are copied by reference. This means that when you assign a variable to an array or object, it does not create a new object, but only a new reference to an existing object.

There are several ways to copy arrays, let's consider them in detail.

### The `slice()` method

The `slice()` method is used to create a new array containing a copy of part or all of the original array.

The syntax of the `slice()` method:

```javascript
array.slice(begin, end)
```

The `begin` and `end` arguments are optional and specify the start and end indexes between which the array elements should be copied. If no arguments are specified, the `slice()` method will copy the whole array.

The `slice()` method does not change the original array, but returns a new array.

```javascript
const f1 = ['Bill', 'Alice', 'Carson', 'KJ', 'Viktor'];

const f2 = f1.slice();

console.log(f2); // ['Bill', 'Alice', 'Carson', 'KJ', 'Viktor']
console.log(f2 === f1); // false

f1[0] = 'Bob'; // change the first element in the array f1

console.log(f2); // ['Bill', 'Alice', 'Carson', 'KJ', 'Viktor'], f2 has not changed
console.log(f1); // ['Bob', 'Alice', 'Carson', 'KJ', 'Viktor']
```

Consider the disadvantages of this method :

```javascript
const f1 = [{name: 'Alex'}, {name: 'Joe'}];

const f2 = f1.slice();

console.log(f2); // [{name: 'Alex'}, {name: 'Joe'}]
console.log(f2 === f1); // false

f1[0].name = 'Viktor'; // change the name in the first element in the f1 array

console.log(f2); // [{name: 'Viktor'}, {name: 'Joe'}], f2 has changed
console.log(f1); // [{name: 'Viktor'}, {name: 'Joe'}]
```

We see that the `f2` array has also changed and now contains an object with the changed `name` property.

This is because the `slice()` method only copies the values of the array elements, not their references. In this case, when we copy an array, we copy references to objects contained in the array. So when we change an object property in `f1`, this change is also reflected in `f2`, because both arrays contain a reference to the same object.

To avoid this problem, you must create a complete copy of the objects contained in the array.

`JSON.stringify()` and `JSON.parse()` are methods that are used to convert data into `JSON` format and back.

* `JSON.stringify()` takes an object or array and converts it to a JSON string.
* `JSON.parse()` takes a JSON string and converts it to an object or array.

```javascript
const f1 = [{name: 'Alex'}, {name: 'Joe'}];

const f1String = JSON.stringify(f1);

console.log(f1String); // '[{name: 'Alex'}, {name: 'Joe'}]' - string
console.log(typeof f1String); // string
console.log(f1String[0]); // '['
console.log(f1); // [{name: 'Viktor'}, {name: 'Joe'}] is an array

const f2 = JSON.parse(f1String)
console.log(f2); // [{name: 'Viktor'}, {name: 'Joe'}] - array
console.log(f1); // [{name: 'Viktor'}, {name: 'Joe'}] - array

console.log(f2 === f1); // false

//check or now if we change the name in the first element f1 will change f2
f1[0].name = 'Abb'

console.log(f2); // [{name: 'Viktor'}, {name: 'Joe'}], not changed
console.log(f1); // [{name: 'Abb'}, {name: 'Joe'}], changed
```

You can also use the `spread` operator to copy an array.

### Spread operator `...`

The spread `...` operator is used to expand arrays, objects or strings into individual elements, as well as to copy arrays or objects.

The syntax of the `spread` operator:

```javascript
const array1 = [...array]
```

Here the `...` operator before the `array` array unfolds its elements and creates a new `array1` array containing the same elements.

It is important to note that this approach creates a new array, not just a reference to an existing array, so changes to the copy of the array will not affect the original.

However, as already mentioned, if an array contains objects, a surface copy is created, that is, the new array will contain the same object references as the original. If you change the properties of one of the objects, this change will also be visible in the original array and its copy:

```javascript
const f1 = [{name: 'Alex'}, {name: 'Joe'}];

const f2 = [...f1];

f1[0].name = 'Abb'

console.log(f2); // [{name: 'Abb'}, {name: 'Joe'}], changed
console.log(f1); // [{name: 'Abb'}, {name: 'Joe'}], changed
```

Consider an example of using the `...` operator with an array containing primitive data types:

```javascript
const f1 = [1, 2, 3, 4, 5];

const f2 = [...f1];

console.log(f2); // [1, 2, 3, 4, 5]
console.log(f2 === f1); // false

f1[0] = 200 // change the first element in the f1 array

console.log(f2); // [1, 2, 3, 4, 5], f2 has not changed
console.log(f1); // [200, 2, 3, 4, 5]
```

Using the `...` operator, we can copy the elements of an array as many times as we like.
Consider the example :

```javascript
const f1 = [1, 2, 3, 4, 5];

const f2 = [...f1, ...f1];

console.log(f2); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
console.log(f1); // [1, 2, 3, 4, 5]
```
