### Finding the number of vowel letters in a string using the `includes()` method

Let's look at an example in which we will look for the number of vowel letters in a string. 

For this we will use the `for` loop and the `includes()` method.

```javascript
const str = 'HELLO WORLD!
const vowels = 'aeiouAEIOU'; // vowels

let count = 0; // the counter of vowels

for(let i = 0; i < str.length; i++){ // loop the string
    if(vowels.includes(str[i])){ // if an element is found in the `vowels` variable
        count++; // increment counter by 1
    }
}

console.log(count); // 6
```


### Finding the number of vowel letters in a string using only the `for` loop

In this example we will use two `for` loops to find the number of vowels in a string.

The first loop will run along the line with our sentence, and the second loop will run along the line with the vowel letters.

```javascript
const str = "Let's try to count the number of vowels in this sentence";
const vowels = 'aeiouAEIOU'; // vowels

let count = 0;

for(let i = 0; i < str.length; i++){ // loop through the string in the `str` variable
    for(let j = 0; j < vowels.length; j++){ // loop through the string in the `vowels` variable
        if(str[i] === vowels[j]){ // if item is found in the `vowels` variable
            count++; // increment counter by 1
        }
    }
}

console.log(count); // 15
```


### Finding the number of consonant letters in a string using loops

In this example we will create a variable `consonants` in which all consonants will be stored.

Then we will use two `for` loops to find the number of consonant letters in the string.

```javascript
const str = "Let's try to count the number of consonants in this sentence";
const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';      // consonants

let count = 0;

for(let i = 0; i < str.length; i++){
    for(let j = 0; j < consonants.length; j++){
        if(str[i] === consonants[j]){            // if the item occurs in the `consonants` variable
            count++;                             //  increment counter by 1
        }
    }
}

console.log(count);                              // 33
```


### Finding digits in a string and adding them to an array

In this task we will look for numbers in a string and add them to the array.

```javascript
const str = "0Le1t's f2ind 34 all5 6numbers 789";
const numbers = '0123456789';                          // all digits

const array = [];                                      // creating an empty array

for(let i = 0; i < str.length; i++){
    for(let j = 0; j < numbers.length; j++){
        if(str[i] === numbers[j]) array.push(str[i]);  // if the element from the string is equal to digit, adding it into the array
    }
}

console.log(array);   // [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
```


### Sort the string into vowels, consonants and other characters

In this example we will sort the string into `vowels`, `vowels` and `other characters`.

To do this, create three arrays and add elements to them that meet certain conditions.

```javascript
const str = "789 Let's 456 sort 0123";
const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'; // all consonants
const vowels = 'aeiouAEIOU'; // all vowels

const arrOfConsonants = []; // array for consonants
const arrOfVowels = []; // array for vowels
const arrElse = []; // array for the rest elements

for(let i = 0; i < str.length; i++){
    if (consonants.includes(str[i])) arrOfConsonants.push(str[i]); // if the element is part of the string with consonants, add it to the array with consonants
    else if (vowels.includes(str[i])) arrOfVowels.push(str[i]); // if the element is in the string with vowels, add it to the array with vowels
    else arrElse.push(str[i]); // otherwise add it to the array with other elements
}

console.log(arrOfConsonants); // [ 'L', 't', 's', 's', 'r', 't' ]
console.log(arrOfVowels); // [ 'e', 'o' ]
console.log(arrElse); // ['7', '8', '9', ' ', ' ', "'", ' ', ' ', '4', '5', '6', ' ', ' ', ' ', '0', '1', '2', '3']
```