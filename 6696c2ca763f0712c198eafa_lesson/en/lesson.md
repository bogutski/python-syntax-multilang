### Let's break down the array method `join()`

The `join()` method is an array method that is used to combine all the elements of an array into a string.

The syntax of the `join()` method looks like this

```javascript
array.join(separator);
```
* where `array` is the array you want to combine into a string,
* and `separator` is a string that will be used as a separator between the array elements. 

If you do not specify a delimiter, the comma will be used by default:

```javascript
const array = ['Hello', 'World', '!', '!', '!'];
const string = array.join();        // don't use any delimiter
console.log(string);                // "Hello,World,!,!,!"
```

Now let's look at the separator example:

```javascript
const array = [123, true, false, 'Hello', 'JavaScript'];
const string1 = array.join(' '); // use delimiter: " " - space
console.log(string1); // "123 true false Hello JavaScript"

const string2 = array.join('-*-'); // use delimiter: "-*-" - hyphen, asterisk, hyphen
console.log(string2); // "123-*-true-*-false-*-Hello-*-JavaScript"
```


### How to convert an array to a string using the `for` loop

Consider the simplest way, without the separator:

```javascript
const array = ['Hello', 'World', '!', '!', '!'];
let string = '';

for (let i = 0; i < array.length; i++) {
  string += array[i];                     // add each element of the array to the string
}
console.log(string);                      // "HelloWorld!!!"
```

Now let's add a separator:

```javascript
const array = ['Hello', 'World', '!', '!', '!'];
let string = '';

for (let i = 0; i < array.length; i++) {
  string += array[i] + ' -*- ';           // add the element plus delimiter
}
console.log(string);                      // "Hello -*- World -*- ! -*- ! -*- ! -*- "
```

Let's improve our code and add a check so that a separator is not added after the last element:

```javascript
const arr = ['How', 'are', 'you', '?', '!'];
let str = '';

for (let i = 0; i < arr.length; i++) {
  if (i !== arr.length - 1) str += arr[i] + ' - ';     // add an element and a delimiter
  else str += arr[i];                                  // add only the last element
}
console.log(str);                                      // "How - are - you - ? - !"
```

Now let's add a check by data type.

Create three variables: `str`, `num` and `otherTypes`.
In the variable `str` we write all elements with data type `string`, in the variable `num` we write all elements with data type `number`, and in the variable `otherTypes` we write all other data types.

```javascript
const array = [true, 'just', 123, false, 'text', 456, 'here!', true, {name: 'Alice'}, '!', 789, '!'];

let str = '';
let num = '';
let otherTypes = '';

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === 'string') str += array[i];       // add an element if the data type is a `string`
  else if (typeof array[i] === 'number') num += array[i];  // add an element if the data type is a `number`
  else otherTypes += array[i];                             // add an element if the data type is not a `string` and not a `number`
}

console.log(str);         // "justtexthere!!!"
console.log(num);         // "123456789"
console.log(otherTypes);  // "truefalsetrue[object Object]"
```

Practice and think about how we can improve our code so that the separator is added only between elements and not at the beginning or end of the line.
