JavaScript provides several ways to check if an element exists in an array. In this lesson, we will examine the `includes()`, `indexOf()` and `lastIndexOf()` methods.

### Method `includes()`

The syntax of the `includes()` method looks like this

```javascript
array.includes(searchElement, fromIndex)
```

* The `searchElement` is a mandatory parameter that represents the element whose presence should be checked in the array.

* `fromIndex` is an optional parameter that specifies the index of the element from which the search starts.

The `includes()` method returns `true` if the element is found in the array, and `false` if not.

Also note that the `includes()` method is sensitive to data type and case. If the item being searched for has a different data type, or case, than the array elements, the method will always return `false`.

Let's look at an example:

```javascript
const fruits = ['banana', 'orange', 'cherry']

console.log(fruits.includes('cherry')) // true, 'cherry' is in the array
console.log(fruits.includes('Cherry')) // false, 'Cherry' is absent in the array
```
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/boy-search.png)

The principles of `fromIndex`:

* If `fromIndex` is not passed or its value is not a number, the search starts with index `0`.
* If `fromIndex` is a positive number, the search starts from that index inclusive.
* If `fromIndex` is a negative number, the search starts with an index equal to `array.length + fromIndex`, including that index.
* If you pass a value that exceeds the number of elements in the array, the `includes()` method will always return `false`.

Consider an example using `fromIndex`:

```javascript
const fruits = ['banana', 'orange', 'cherry']
const element = 'banana'

console.log(fruits.includes(element, 1)) // false, check starts with 'orange', no 'banana'
console.log(fruits.includes(element, -2)); // false, 3+(-2)=1, check starts with 'orange', no 'banana'
```

### The `indexOf()` method

The syntax of the `indexOf()` method looks like this

```javascript
array.indexOf(searchElement, fromIndex)
```

* The `searchElement` is a mandatory parameter that represents the element whose presence should be checked in the array.

* `fromIndex` is an optional parameter that specifies the index of the element from which the search starts.

The `indexOf()` method is a method that returns the index (position) of the **first** occurrence of an element in the array. If no element is found in the array, the method returns `-1`.

Let's look at an example:

```javascript
const fruits = ['banana', 'orange', 'cherry']

console.log(fruits.indexOf('orange')) // 1, 'orange' is in the array, element index 'orange' = 1
console.log(fruits.indexOf(' orange')) // -1, 'orange' is not in the array
console.log(fruits.indexOf('banana.')) // -1, 'banana.' is missing in the array
```

If there are several identical elements in the array, `indexOf()` will return the index of the first one found:

```javascript
const fruits = ['orange', 'orange', 'cherry']

console.log(fruits.indexOf('orange')) // 0, 'orange' is in the array, element index 'orange' = 0
```

The principle of `fromIndex` is exactly the same as the `includes()` method:

```javascript
const fruits = ['banana', 'orange', 'cherry']
const element = 'orange'

// search for 'orange' index starting from index 1 in the array
console.log(fruits.indexOf(element, 1)) // 1, 'orange' is in the array, element index 'orange' = 1
console.log(fruits.indexOf(element, 2)) // -1, 'orange' is missing when searching from 2 indexes in the array
```

### The `lastIndexOf()` method

The syntax of the `lastIndexOf()` method looks like this

```javascript
array.lastIndexOf(searchElement, fromIndex)
```

* The `searchElement` is a mandatory parameter that represents the element whose presence should be checked in the array.

* `fromIndex` is an optional parameter that defines the index of the element from which the search starts. The search starts from the end of the array.

The `lastIndexOf()` method is a method that returns the index (position) of the **last** occurrence of an element in the array. If no element is found in the array, the method returns `-1`.

Let's look at an example:

```javascript
const fruits = ['banana', 'orange', 'cherry']

console.log(fruits.indexOf('orange')) // 1, 'orange' is in the array, element index 'orange' = 1
console.log(fruits.indexOf(' orange')) // -1, 'orange' is not in the array
console.log(fruits.indexOf('banana.')) // -1, 'banana.' is missing in the array
```

If there are several identical elements in the array, `indexOf()` will return the index of the first one found, starting from the end:

```javascript
const fruits = ['orange', 'orange', 'cherry']

console.log(fruits.indexOf('orange')) // 1, 'orange' is in the array, element index 'orange' = 1
```

Let's write a function `search` that will take an array of strings, and an element that should be checked to be in the array. The function should return the result regardless of the case.

```javascript
function search(arr, el) {
  return arr.includes(el.trim().toLowerCase())
}

console.log(search(['a', 'd', 'lq', 'rw'], 'LQ')) // true
console.log(search(['a', 'd', 'lq', 'rw'], 'LQ  ')) // true
console.log(search(['a', 'd', 'lq', 'rw'], ' lQ')) // true
```

Let's rewrite `search` so that the function takes an array of numbers, and the number of hundreds:

```javascript
function search(arr, el) {
  return arr.includes(el * 100)
}

// check if the array contains 4 hundreds
console.log(search([100, 200, 400, 500], 4)) // true
```

Now let's write a function that will check if the sought element is present in the array 2 or more times.

```javascript
function countTwo(arr, el) {
  const firstIndex = arr.indexOf(el)
  const secondIndex = arr.indexOf(el, firstIndex + 1)

  return firstIndex >= 0 && secondIndex >= 0
}

console.log(countTwo([1, 2, 5, 4, 6, 7, 4, 5], 4)) // true
console.log(countTwo([1, 2, 5, 4, 6, 7, 4, 5], 1)) // false
console.log(countTwo([1, 2, 5, 4, 6, 7, 4, 5], 5)) // true
```

Let's rewrite this function using the `lastIndexOf()` method:

```javascript
function countTwo(arr, el) {
  const firstIndex = arr.indexOf(el)
  const secondIndex = arr.lastIndexOf(el)

  return firstIndex >= 0 && secondIndex >= 0 && firstIndex !== secondIndex
}

console.log(countTwo([1, 2, 5, 4, 6, 7, 4, 5], 4)) // true
console.log(countTwo([1, 2, 5, 4, 6, 7, 4, 5], 1)) // false
console.log(countTwo([1, 2, 5, 4, 6, 7, 4, 5], 5)) // true
```
