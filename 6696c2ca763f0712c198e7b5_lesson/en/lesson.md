![](https://course-qa-basics.s3.us-west-1.amazonaws.com/boy-and-cubes.png)

Arrays in JavaScript are collections of elements with indexes starting from zero. To add a new element to an array, you can use several methods. Let's take a look at some of them.

### Method `push()`

The `push()` method adds one or more elements to the end of the array. This method changes the original array and returns the new length of the array.

The syntax of the `push()` method:

```javascript
arr.push(element1, ..., elementN)
```

where `arr` is the array you want to add elements to, `element1, ..., elementN` are the elements you want to add to the end of the array.

Add an element `'Alex'` to the end of the array `friends` using the method `push()`. Then display the contents of the array and its length using the `length` property:

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends.push('Alex')
console.log(friends); // ['Alice', 'Bill', 'Carson', 'Alex']
console.log(friends.length); // 4
```

The `push()` method can take several arguments. In the following example we will pass two arguments:

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends.push('Alex', 'Viktor')

console.log(friends); // ['Alice', 'Bill', 'Carson', 'Alex', 'Viktor']
console.log(friends.length); // 5
```

### The `unshift()` method

The `unshift()` method takes one or more arguments that will become new array elements, and then shifts all existing elements to the right by one position to make room for new elements. This method also changes the original array and returns the new length of the array.

The syntax of the `unshift()` method:

```javascript
arr.unshift(element1, ..., elementN)
```

where `arr` is the array you want to add elements to, `element1, ..., elementN` are the elements you want to add to the beginning of the array.

Add the elements `'Alex'` and `'Viktor'` to the beginning of the array `friends`:

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends.unshift('Alex', 'Viktor')

console.log(friends); // ['Alex', 'Viktor', 'Alice', 'Bill', 'Carson']
```

### Changing array elements

Also, array elements can be added by assigning them an index value.

Let's add an element `'Alex'` to the `friends` array:

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends[3] = 'Alex'

console.log(friends); // ['Alice', 'Bill', 'Carson', 'Alex']
```

### Adding elements outside the array

You can add elements to an array by specifying an index that is outside the current array length. In this case all indexes between the last element and the element to be added will be filled with `empty` value (empty value).

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends[4] = 'Alex'

console.log(friends); // ['Alice', 'Bill', 'Carson', empty, 'Alex']
```

When we output the array using `console.log()`, we see that we have an array with five elements, the element `'Alex'` was successfully added in place of 4, and the cell with index 3 was left empty (value `empty`).

We can add elements to the array in any sequence. Let's add elements `'Alex'` and `'Viktor'` to cells with indexes 5 and 4, respectively, using direct access to the array cell:

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends[5] = 'Alex'
friends[4] = 'Viktor'


console.log(friends); // ['Alice', 'Bill', 'Carson', empty, 'Viktor', 'Alex']
```

If the index is outside the boundaries of existing array elements, the elements will be added with the corresponding indexes and `undefined` values.

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends[5] = 'Alex'

console.log(friends); // ['Alice', 'Bill', 'Carson', empty, empty, 'Alex']
console.log(friends[4]); // undefined
```

Note that if the value of an array element has not been explicitly specified, as in the case of the `undefined` element, the `undefined` keyword is displayed in the array.

```javascript
const friends = ['Alice', 'Bill', undefined, 'Carson'];

console.log(friends); // ['Alice', 'Bill', undefined, 'Carson']
```

In these examples, we can see that adding elements outside the array is possible, but it is not recommended. Instead, use the `push()` method to add an element to the end of the array, and use the `unshift()` method to add an element to the beginning of the array.
