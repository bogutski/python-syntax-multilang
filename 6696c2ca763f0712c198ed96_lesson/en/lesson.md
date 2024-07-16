In the previous lesson we learned how to remove duplicate characters from a string, now let's learn how to **remove duplicate words**.

Let's look at an example
```javascript
const str = 'car js pasv car jsp coding js car';
//'car js pasv jsp coding' - we expect to get a string of this type as a result of the solution

const words = {} // create an object to collect already added words in it
let res = ''; //result string, where there will be no duplicates anymore
let acc = ''; //string accumulator, in which we will collect the word

//Let's loop through the string
for (let i = 0; i < str.length; i++) {
  if(str[i] !== ' ') acc += str[i] // if the current character is not a space, add it to the accumulator

  if(str[i] === ' ' || i === str.length-1){ //check if we reached a space or the end of the line
    if(acc && !words[acc]) { //check that if the accumulator is not empty and the words object with the key 'acc' returns false (i.e. this word is not in the object yet)
    words[acc] = 1; // add the word accumulator to the object and assign the key the value 1;
    res += acc + ' '; // add our accumulator and a space to the result string
    }
    acc = ''; //accumulator should be cleared after we hit a space
  }
}

console.log(res)
//'car js pasv jsp coding ''
```
Here we also got a space at the end of the line.

To get rid of this, you can do an extra check.

And at the same time, convert the code a little bit:
```javascript
const str = 'car js pasv car jsp coding js car';

const words = {}  
let res = '';   
let acc = '';   

for (let i = 0; i < str.length; i++) {
  if(str[i] !== ' ') acc += str[i]  

  if(str[i] === ' ' || i === str.length-1){  
    if(acc && !words[acc]) { 
    words[acc] = 1;  

    if(res) res += ' ' + acc; //if `res` is not an empty string and something has already been added there, then first we put a space, and then we add the word acc
    else res += acc; //otherwise (i.e. at the very beginning of the line) we add only word accumulator to the result
    }
    acc = '';   
  }
}

console.log(res)
//'car js pasv jsp coding'
```
We got the right result.

The code is compact and we don't check the last word or not, so we don't add a space after it,
but we check if we have the first word.

A little clarification of the check
```javascript
if(!words[acc]);
```
With this check we are not checking if the key exists in the object, we are checking the value of the key.
If there is no key, it will return `undefined` and `undefined` will be `false` in the logical context.

If we wanted to check if a key exists in the object, we would use the `in` or `hasOwnProperty` command

Work through this task again. Such tasks are often given at job interviews.
