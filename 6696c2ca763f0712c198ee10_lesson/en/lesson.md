There is a line in which you need to swap the first and the last word:

```javascript
const str = 'hello js pasv coding'
```

Expect to get results:

```javascript
const str = 'coding js pasv hello'
```

If several methods of solving such a problem.

1. First way.

   Convert this string to an array using `split` with space separation:

```javascript
const str = 'hello js pasv coding';
const arr = str.split(' ');

console.log(arr); // [ 'hello', 'js', 'pasv', 'coding' ]  // all words are separated by a space and an index is assigned to each word
```

Create a variable `first` and assign it the value of the first element of the array and a variable `last` and assign it the value of
of the last element of the array:

```javascript
const str = 'hello js pasv coding';
const arr = str.split(' ');

const first = arr[0];
const last = arr[arr.length - 1];

// check the result in the console
console.log(arr, first, last); // [ 'hello', 'js', 'pasv', 'coding' ] 'hello' 'coding'
``` 

You didn't need to create two variables to swap words, you could have done with one variable.
Think about how to do this as an independent study.

Now you need to swap out the first and last words:

```javascript
arr[0] = last;
arr[arr.length - 1] = first;

console.log(arr); // [ 'coding', 'js', 'pasv', 'hello' ]
```

And now we return our array back to a string using the `join` method with a space delimiter.

The complete solution looks like this:

```javascript
const str = 'hello js pasv coding';
const arr = str.split(' ');

const first = arr[0];
const last = arr[arr.length - 1];

arr[0] = last;
arr[arr.length - 1] = first;

const res = arr.join(' ');

console.log(res); // "coding js pasv hello"
```

The task is done!
In doing so, we have made some unnecessary operations. We would like not to translate the string into an array and back.

2. The second way

   Use the loop to go from the beginning to the end of the line and find the first word (by space), then find the last word.

To find the last word, you can use the `lastIndexOf` method, which can find the last space. And from that space go through a loop
to the end of the line to get the last word.

But let's try to solve this problem without any methods. Just `if else` and extra variables. Classic
programmers way.

```javascript
const str = 'hello js pasv coding';

let first = '';
let last = ''; // create two variables in which we write the first and the last word
```
How do we search for the first and last words?

There's an interesting way:

* We can go from the beginning of the line, found a space (the first word) and that's it, we can go no further.
* When you need to find the last word, you can go from the end of the line, found a space and means the last word before that space.

In this case you need to write 2 loops, one from the beginning of the string, the second from the end of the string.

```javascript
const str = 'hello js pasv coding';

let first = '';
let last = '';

for(let i = 0; i < str.length; i++) {
    if(str[i] === ' ' ') break // if str[i] is a space, break the loop
    else first += str[i] // otherwise write into the first variable
}

// check in the console what we got
console.log(first); // "hello"
```

Now do the same for the last word, but loop from the end of the line

```javascript
for(let i = str.length-1; i >= 0; i--) {
    if(str[i] === ' ') break // if str[i] is a space, break the loop
    else last = str[i] + last // otherwise write into the last variable
}

// see what we got in the console

console.log(first, last); // "hello" "coding
```
How do we create a new result string now?
Let's create a variable `res` as well as variables that will store the indices of the spaces.

```javascript
const str = 'hello js pasv coding';

let first = '';
let last = '';

let firstSpaceIndex, lastSpaceIndex; // create variables to store the space indices
let res = '';

for(let i = 0; i < str.length; i++) {
  if (str[i] === ' ') {
    firstSpaceIndex = i; // write the space index in the firstSpaceIndex variable
    break;
  } else first += str[i];
}

for(let i = str.length-1; i >= 0; i--) {
    if(str[i] === ' ') {
    lastSpaceIndex = i; // write the space index in the lastSpaceIndex variable
    break;
    } else last = str[i] + last;     
}

console.log(first, last, firstSpaceIndex, lastSpaceIndex); // "hello" "coding" 5 13
```

Now we assign the resulting string `res` to the word `last` and loop from `firstSpaceIndex` to `lastSpaceIndex` and add to `res` all the characters from the string `str`.

```javascript
res = last; // assign the result string res to the value of the word last and the string res does not contain spaces

for(let i = firstSpaceIndex; i <= lastSpaceIndex; i++) { // the loop goes from the first problem to the last one inclusive, so that both spaces get into the string
    res += str[i];
}
res += first; // add the value of first variable to the end of res string

console.log(res); // "coding js pasv hello"
```

The code works correctly. We didn't use any additional methods, neither strings nor arrays.

This is most likely the decision that will be expected of you at the interview.

Try repeating this code yourself.