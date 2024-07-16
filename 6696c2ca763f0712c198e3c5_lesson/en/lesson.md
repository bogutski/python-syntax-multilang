The `indexes` are used to search and refer to characters in a string.

Each character in the string is in its place, and this place is numbered.

### The first character is always at index `0`.

Let's look at an example to illustrate:

```javascript
const str = 'Hello PASV';
```

The first character of this string is `H` and corresponds to the index `0`. 

The last character is `V`, corresponding to the index `9`. 

The symbol `space` also has an index at the `5` position.

The string has a total of `10` characters, that is, the length of the string `str.length` equals `10`.

The index of the last character will always be equal to the string length minus 1:

`str.length - 1`

In our example:

The `index of the last character = str.length - 1 = 10 - 1 = 9`

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/str-length.png)

Characters in a string can be referred to by their indexes, indicating them in square brackets. 

Let's look at an example:

```javascript
const str = 'Hello PASV';
console.log(str[0]); // H is the reference to the first character of the string (index 0)
console.log(str[1]); // e
console.log(str[5]); // - there is a space at this index
console.log(str[9]); // V
```

Inside the square brackets you can write the value of the variable:

```javascript
const str = 'Hello PASV';

const i = 9;
console.log(str[i]); // V

const j = 8;
console.log(str[j]); // S
```

The last character in a string, regardless of its contents, can be accessed using the `length` property:

```javascript
const str = 'Hello JS';
const i = str.length - 1;
console.log(str[i]); // S is the last character of the string
```

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/hello-pasv.png)

Similarly, you can get the penultimate character:

```javascript
const j = str.length - 2;
console.log(str[j]); // J
```

If you specify indices whose value is less than zero, and if they are outside the string boundaries, we get `undefined`:

```javascript
const str = 'Hello JS';
const i = 8;
const j = -1;
console.log(str[i]); // undefined
console.log(str[j]); // undefined
```

Let's create a function to which we will pass a string, and it will return only the first and the last characters:

```javascript
function firstAndLast(str){
  return str[0] + str[str.length - 1];
};

console.log(firstAndLast('Hello JS')); // HS
console.log(firstAndLast('ABC')); // AC
console.log(firstAndLast('AB')); // AB
console.log(firstAndLast('A')); // AA
```

To make our function work more accurately, let's add a length check condition - if the string consists of one character, then let only that character be returned:

```javascript
function firstAndLast(str){
  if(str.length === 1) return str;
  return str[0] + str[str.length - 1];
};

console.log(firstAndLast('A')); // A
```