The `indexOf()` and `lastIndexOf()` methods determine whether a string contains a substring.

The syntax of the `indexOf()` method:

```javascript
let index = str.indexOf(substr, fromIndex);
```

In the first argument they pass the desired value `substr`.

The second argument `fromIndex` is optional - it specifies the string index from which to start the search.

The principle of `indexOf()`:

* Searches for a substring of `substr` in a string `str` starting from the specified index `fromIndex` (inclusive) and searches from left to right.

* Returns the index of the first occurrence of substring `substr` in string `str`.

* Returns `-1` if no value is found.

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/girl-indexof.png)

```javascript
const message = "Welcome";

console.log(message.indexOf("l")); // 2, the index of the "l" substring in the "Welcome" string
console.log(message.indexOf("co")); // 3
console.log(message.indexOf("W")); // 0
console.log(message.indexOf("w")); // -1, substring "w" is not found in the "Welcome" string

console.log(message.indexOf("e", 2)); // 6, starting from index 2 in the line look for the substring "e"
console.log(message.indexOf("e", 1)); // 1, starting from index 1 in the line look for substring "e"
```

The `indexOf()` method searches from the beginning of the string to the end, and the `lastIndexOf()` method searches from the end to the beginning.

The syntax of the `lastIndexOf()` method:

```javascript
let index = str.lastIndexOf(substr, fromIndex);
```

The principle of `lastIndexOf()`:

* Searches for a substring of `substr` in a string `str` starting from the specified index `fromIndex` (inclusive) and searches from right to left.

* Returns the index of the last occurrence of substring `substr` in string `str`.

* Returns -1 if no value is found.

```javascript
const message = "Welcome";

console.log(message.lastIndexOf("e")); // 6, the last occurrence of the substring "e" in the "Welcome" string
console.log(message.lastIndexOf("l")); // 2
console.log(message.lastIndexOf("e", 2)); // 1, starting from index 2 in the "Welcome" string look for the substring "e" from right to left

```

Let's look at a couple of examples in combination with other string methods:

```javascript
const message = "Welcome ";

console.log(message.trim()); // "Welcome", the trim() method has removed spaces
console.log(message.trim().length); // // 7, length returns string length
console.log(message.trim().toUpperCase()); // "WELCOME", toUpperCase() has uppercased the string
console.log(message.trim().toUpperCase().indexOf("E")); // 1
console.log(message.trim().toUpperCase().repeat(3)); // "WELCOMEWELCOMEWELCOME"
console.log(message.trim().toUpperCase().repeat(3).toLowerCase()); // "welcomewelcomewelcome"
```

A method chain is a mechanism for calling a method for another method of the same string. This provides cleaner and more readable code.

```javascript
const message = "Welcome ";

const result = message
               .trim()
               .toUpperCase()
               .repeat(2)
               .toLowerCase()
               .indexOf('e', 2)

console.log(result); // 6
```

Let's write a function `searchIndex` that takes 2 parameters `str` and `subStr`.

The function must return the index of the substring `subStr` in `str` regardless of the case.

```javascript
function searchIndex(str, subStr) {
  // lowercase str
  // also lowercase subStr
  // search for the index of a substring subStr in string str
  return str.toLowerCase().indexOf(subStr.toLowerCase()); 
}

console.log(searchIndex('HeLlo','ll')) // 2
console.log(searchIndex('HeLlo','Ll')) // 2
console.log(searchIndex('HeLlo','LL')) // 2
console.log(searchIndex('HeLlo','Ll')) // 2
```
