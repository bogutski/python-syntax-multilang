### Reverse a string using a loop. Passing the string from left to right

Let's figure out how to flip a string using an array that goes from the beginning to the end of the string.

```javascript
const string = '1234';

let reversed = ''; // create a variable for the reversed string

for (let i = 0; i < string.length; i++) { // loop from the beginning to the end of the string
  reversed = string[i] + reversed; // adding each element to the beginning of the string
  console.log(reversed) // print the variable to see its state at each loop iteration
                                           // "1" -> "21" -> "321" -> "4321"
}

console.log(reversed); // "4321"
```


### Reverse a string using a loop. Passing a line from right to left

Now let's perform the same task, only the loop will go from the last to the first element of the string.

```javascript
const str = 'a-b-c';
let rev = ''; // create a variable for the inverted string

for (let i = str.length - 1; i >= 0; i--) { // notice how the loop condition has changed
  rev += str[i]; // add each element to the end of the string
  console.log(rev) // print the variable to see its state at each loop iteration
                                              //  "c" -> "c-" -> "c-b" -> "c-b-" -> "c-b-a"
}
console.log(rev); // "c-b-a"
```


### Flip the numeric data type

In the next problem we will try to invert the number

```javascript
const number = 12345; // create a variable and assign it a numeric data type
console.log(typeof number); // number

const numToString1 = number + ''; // any of these three options turns a numeric data type into a string
const numToString2 = String(number);
const numToString3 = number.toString();

let revStr = ''; // create a variable for the reversed string

for (let i = 0; i < numToString1.length; i++) { // the loop will go from left to right
  revStr = numToString1[i] + revStr; // adding each element to the beginning of the string
}

const strToNumber1 = +revStr; // these two variants will help us to translate string value back into numeric value
const strToNumber2 = Number(revStr);

console.log(revStr); // "54321"
console.log(typeof revStr); // string

console.log(strToNumber1); // 54321
console.log(typeof strToNumber1); // number
```

In this problem we figured out: how to convert a number to a string, how to reverse a string, and how to convert a string back to a number.



### Reverse a string using methods: `split()`, `reverse()`, `join()`

Let's break down each of these methods:

* `split()` is a string method, converts string elements to an array.
* `reverse()` is an array method that flips the elements of an array.
* `join()` is an array method, converts array elements to a string.


```javascript
const str = 'Hello JS';

const rev = str.split('').reverse().join('')

console.log(rev); // "SJ olleH"
```

For a better understanding, let's break down what each method returns.

```javascript
const str = 'Hello JS';

const strToArray = str.split('');        // [ 'H', 'e', 'l', 'l', 'o', ' ', 'J', 'S' ]
const revArray = strToArray.reverse();   // [ 'S', 'J', ' ', 'o', 'l', 'l', 'e', 'H' ]
const arrToString = revArray.join('');   // "SJ olleH"
```



### Reverse each word in the string using the `for` loop

In this problem we will have to turn over each word in the line, but the words will remain in their places.

For example, the string `Hello World` becomes -> `olleH dlroW`.

```javascript
const str = 'Hello World';

let result = '';        // variable in which our new string will be stored
let word = '';          // this variable will hold each word separately
let revWord = '';       // this variable will hold the reversed word

for (let i = 0; i < str.length; i++){       // loop that will go through the entire string
    const isLast = i === str.length - 1;    // variable that will hold the condition

    if (str[i] === ' ' || isLast){             // if the element is equal to space or `i` is equal to the last index of the string
        if(isLast) word += str[i];             // if `i` is equal to the last index of the string, then we add it to the variable

        for (let j = 0; j < word.length; j++){     // the purpose of the second loop is to reverse the elements that are in the `word` variable
            revWord = word[j] + revWord;           // we reverse the elements in the word `word` and store it in the `revWord` variable
        }

        if (isLast) result += revWord;      // if `i` is equal to the last index of the string, then we write the reversed word to the result
        else result += revWord + ' ';       // otherwise, we write the reversed word plus a space to the `result` variable

        revWord = '';   // clear everything from the `revWord` variable so that a new word can be written in the next iteration of the loop
        word = '';      // clear everything from the `word` variable so that a new word can be written in the next iteration of the loop
    } else {                    // if the element is not an empty string and i is not equal to the last index, then the following block will be executed
        word += str[i];         // add the element to the `word` variable
    }
}

console.log(result);   // "olleH dlroW"
```


### Writing a function and improving the code

Let's write a function that takes a string and returns a new string with each word reversed.

Also, we will try to improve our code and get rid of the second loop.

```javascript
function revString(str){
    let result = '';
    let word = '';

    for (let i = 0; i < str.length; i++){
        if(str[i] !== ' ' && i !== str.length - 1){
            word = str[i] + word;
        } else {
            if(i === str.length - 1) {
                word = str[i] + word;
                result += word;
            } else {
                result += word + ' ';
                word = '';
            }
        }
    }
    return result;
}

console.log(revString('Hello World'));           // "olleH dlroW"
console.log(revString('12 345 67890'));          // "21 543 09876"
console.log(revString("Hi, It's Java Script!")); // ",iH s'tI avaJ !tpircS"
```

From the example of the last problem, you should already know what is going on in this function.

Rewrite the code yourself several times to better understand and understand how the function works.
