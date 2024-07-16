### What is `Anagram`?

`Anagram` is a word or phrase formed by rearranging the letters of another word or phrase. 

For example, `brush` is an anagram of `shrub`, `listen` is an anagram of `silent`, and `laptop machines` is an anagram of `Apple Macintosh`.


### Anagram check function using only cycles

Let's write a function that will check if two strings are anagrams.

```javascript
function isAnagram(str1, str2){
  const s1 = str1.trim().toLowerCase(); // remove spaces and lowercase
  const s2 = str2.trim().toLowerCase();

  if(s1.length !== s2.length) return false; // if string length is not equal, it is not anagram

  for(let i = 0; i < s1.length; i++){ // the first loop goes through all letters of the first string
    for(let j = 0; j < s2.length; j++){ // the second loop goes through all letters of the second string
      if(s1[i] === s2[j]) break; // if the letter of the first string is equal to the letter of the second string, then exit the loop
      if(s2.length -1 === j) return false; // if we have got to the end of the second line and have not found a match, then it is not anagram
    }
  }

  return true;
}

console.log(isAnagram('elbow', 'below')); // true
```



### Anagram check function using an object

We will now look at how we can optimize our function with an object. 

```javascript
function isAnagram(str1, str2){
    const s1 = str1.trim().toLowerCase();
    const s2 = str2.trim().toLowerCase();

    if(s1.length !== s2.length) return false;

    const s2object = {}; // create an object to store the letters of the second string

    for(let i = 0; i < s2.length; i++){ // loop through all letters of the second string
        const el = s2[i]; // store the letter in a variable to improve code readability
        s2object[el] = true; // add the letter to the object: `the key will be the letter, the value will be true`
    }

    for(let i = 0; i < s1.length; i++){ // the loop goes through all the letters of the first line
        const el = s1[i]; // we save the letter in a variable to improve code readability
        if(!s2object[el]) return false; // if there is no letter in the object, it is not an anagram
    }

    return true;
}

console.log(isAnagram('123', '923')); // false
console.log(isAnagram('elbow', 'below')); // true
console.log(isAnagram('laptop 123', 'toplap 125')); // false
console.log(isAnagram('laptop 123', 'toplap 123')); // true
console.log(isAnagram('laptop machines', 'Apple Macintosh')); // true
```



### Anagram check function using array and string methods

In the next problem we will see how we can shorten our problem using array and string methods.

Let's break down what methods we will use besides `trim` and `toLowerCase`.

* `split` is a string method that splits a string into an array by a delimiter
* `sort` is an array method that sorts the array alphabetically. By default it sorts in ascending order. You can also pass a parameter to this method that will determine the sort order.
* `join` is an array method that combines an array into a string

```javascript
function isAnagram(str1, str2){
    const s1 = str1.trim().toLowerCase();
    const s2 = str2.trim().toLowerCase();

    if(s1.length !== s2.length) return false;

    const s1mod = s1.split('').sort(').join(''); // 'below'
                                                  // for the second line let's break it down in steps
    const s2mod = s2.split('') // ['e', 'l', 'b', 'o', 'w' ] - convert string to array
    const s2mod2 = s2mod.sort() // ['b', 'e', 'l', 'o', 'w' ] - sort array
    const s2mod3 = s2mod2.join(''); // 'below' - convert array to string

    return s1mod === s2mod3; // compare strings
}

console.log(isAnagram('below', 'elbow')); // true
```

Practice solving this problem again on your own to reinforce the material.