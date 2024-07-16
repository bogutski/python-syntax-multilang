### Count the number of occurrences of each character in the string

Sometimes there are also tasks, including in interviews - to count how many times 
character appears in the string. That is, count the number of occurrences
Example:
```javascript
const str = 'abc coding ace';
```
We need to output in some structure, the number of occurrences of characters in a string.

In the example above you can see that the symbol "a" occurs 2 times, "c" occurs 3 times
and the other characters occur once each.

As a structure we can use an object or an array.

Let's output the result to an object:
```javascript
const str = 'abc coding ace';

const obj = {} //create an empty object and then loop over the string
for (let i = 0; i < str.length; i++) {

  //do it incorrectly at first and then correct it
  obj[str[i]] = true //assign to the property with the character value from the string `true`
}
//watch what it comes up with in the console
console.log(obj)
//{" ": true, a: true, b: true, c: true, d: true, e: true, g: true, i: true, n: true, o: true}
```
We got an object where each letter of the string became an object key with the value true.

Let's take a closer look at the record
```javascript
 obj[str[i]]
```
Double square brackets are used here. Why? Try to explain.
The first outside square brackets 
```javascript
 obj[**]
```
we are referring to an object, to some key of it.

And the internal square brackets `str[i]` is the string element that will/is the key.
```javascript
 obj[str[i]]
```

Now let's write the correct solution to the problem.

If we don't find such a property (as we set above), we assign it a value of one.

And if we find it, we increase the value by one.
```javascript
const str = 'abc coding ace';

const obj = {}  
for (let i = 0; i < str.length; i++) {
  if (obj[str[i]]) obj[str[i]]++ //if the object has a property with a key equal to the character from the string then increase the value of this property by one
  else obj[str[i]] = 1; //otherwise we assign value 1 to this property
}

console.log(obj)

//{" ": 2, a: 2, b: 1, c: 3, d: 1, e: 1, g: 1, i: 1, n: 1, o: 1}
``` 
The code works correctly

Add two more spaces
```javascript
const str = 'abc co di ng ace';

const obj = {}        
for (let i = 0; i < str.length; i++) {
  if (obj[str[i]]) obj[str[i]]++
  else obj[str[i]] = 1;
}
console.log(obj)

//{" ": 4, a: 2, b: 1, c: 3, d: 1, e: 1, g: 1, i: 1, n: 1, o: 1}
``` 
This method can be used to count how many characters occur in a string.

In the problems above, we used the object to output the results.
We can apply this structure to count duplicates. We can translate the object into an array.

How to translate an object into an array.
We can array its keys, we can array its values
```javascript
Object.keys(obj)
``` 
The `Object` is a global object, we have no control over it.
And `obj` is our object, which we can name however we want

```javascript
const str = 'abc codi ng ace';

const obj = {}        
for (let i = 0; i < str.length; i++) {
  if (obj[str[i]]) obj[str[i]]++
  else obj[str[i]] = 1;
}
console.log(Object.keys(obj))

//["a", " b", "c", " ", "o", "d", "i", "n", "g", "e"]
```
As a result, we got an array with string elements. They are not ordered!
Additionally, we need to sort the array.

Let's now get an array of values:
```javascript
console.log(Object.values(obj))

// [2, 1, 3, 3, 1, 1, 1, 1, 1, 1, ]
```

Note that here the order in the key array corresponds to the order in the value array.

You can also use the following command
```javascript
console.log(Object.entries(obj))

// [["a", 2], ["b", 1], ["c", 3], [" ", 3], ["o", 1], ["d", 1], ["i", 1], ["n", 1], ["g", 1], ["e", 1]]
```
In this case we get an array of arrays.

For example, we want to get our result as a string in the following form:
`a = 2, b = 1, c = 3...`
How do we do that? We should loop through the array again and concatenate the elements

```javascript
const str = 'abc codi ng ace';

const obj = {}  
for (let i = 0; i &lt; str.length; i++) {
  if (obj[str[i]]) obj[str[i]]++
  else obj[str[i]] = 1;
}
 const arr = Object.entries(obj); //assign to the arr variable the value of our object's translation into an array
 let acc = ''; //create the string accumulator, where we will collect the elements

for (let i = 0; i < arr.length; i++) {
  acc += arr[i][0] + ' = ' + arr[i][1] + ', '
}

console.log(acc)
//"a = 2, b = 1, c = 3, = 3, o = 1, d = 1, i = 1, n = 1, g = 1, e = 1, "
```
Note that there is also a comma and a space at the end of the line

```javascript
const str = 'abc codi ng ace';

const obj = {}  
for (let i = 0; i < str.length; i++) {
  if (obj[str[i]]) obj[str[i]]++
  else obj[str[i]] = 1;
}
 const keys = Object.keys(obj);     
 let acc = '';   

for (let i = 0; i < keys.length; i++) {
  acc += obj[keys[i]]
}

console.log(acc)
//"2133111111" //we have stringed together the value of the keys
```

How to assemble a string like in the above example `a = 2, b = 1, c = 3...` if we only have keys:

```javascript
const str = 'abc codi ng ace';

const obj = {}  
for (let i = 0; i < str.length; i++) {
  if (obj[str[i]]) obj[str[i]]++
  else obj[str[i]] = 1;
}
 const keys = Object.keys(obj);     
 let acc = '';   

for (let i = 0; i < keys.length; i++) {
  acc += keys[i] + '=' + obj[keys[i]] + ', '
}

console.log(acc)
//"a=2, b=1, c=3, =3, o=1, d=1, i=1, n=1, g=1, e=1, "
```

Try to understand and repeat these tasks yourself.
Especially how to translate an object into an array using `keys, values and entries `.