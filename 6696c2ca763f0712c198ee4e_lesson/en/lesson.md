Let's solve a problem where you need to expand each word in a line.

It is necessary that each word remain in its place, the spaces remain in their places, and each word unfolds.

```javascript
const str = 'hello js pasv coding com';
           //olleh sj vsap gnidoc moc // assume this result

let res = ''; // we introduce a variable in which we will write the result
let word = ''; // type a variable for accumulating the word

for(let i = 0; i < str.length; i++){ // create a loop to loop through each character of the string
    if(str[i] === ' '){ // if a character is a space
    res +=reverse(word) //reverse the word
    } else if(i === str.length - 1) { // when we got to the last character
      word += str[i]; // add symbol to the word variable
      res +=reverse(word) 
    } else { // otherwise
        word += str[i]; // add a symbol to the word variable
    }

}

function reverse(str){ //create function reverse
return str.toUpperCase() // for the moment the function will only uppercase the string
} // to let us see that this function works


console.log(res); // "HELLOHELLOHELLOJSHELLOJSPASVHELLOJSPASVCODINGHELLOJSPASVCODINGCOM"
```
We got a very strange result.

This happened because we don't clear the `word` variable anywhere in the code.

```javascript
const str = 'hello js pasv coding com';
           //olleh sj vsap gnidoc moc   
let res = '';   
let word = '';   

for(let i = 0; i < str.length; i++){    
    if(str[i] === ' '){   
    res +=reverse(word);
    word = ''; // clear the word variable
    } else if(i === str.length - 1) { 
      word += str[i];       
      res +=reverse(word) 
      word = ''; // clear the word variable
    } else { 
        word += str[i];       
    }

}

function reverse(str){             
return str.toUpperCase()               
} 


console.log(res); // "HELLOJSPASVCODINGCOM"
```
It's gotten better, but there are no gaps.

```javascript
const str = 'hello js pasv coding com';
           //olleh sj vsap gnidoc moc   
let res = '';   
let word = '';   

for(let i = 0; i < str.length; i++){    
    if(str[i] === ' '){   
    res +=reverse(word);
    word = '';
    res += ' '; // add a space
    } else if(i === str.length - 1) { 
      word += str[i];       
      res +=reverse(word) // the last word must not contain a space
      word = '';   
    } else { 
        word += str[i];       
    }

}

function reverse(str){             
return str.toUpperCase()               
} 


console.log(res); // "HELLO JS PASV CODING COM"
```
Now everything is fine, the spaces are in place.
Let's now write the `reverse` function correctly, so that it expands words instead of uppercasing them.

```javascript
const str = 'hello js pasv coding com';
let res = '';
let word = '';

for(let i = 0; i < str.length; i++){
  if(str[i] === ' '){
    res +=reverse(word);
    word = '';
    res += ' ';  
  } else if(i === str.length - 1) {
    word += str[i];
    res +=reverse(word)              
    word = '';
  } else {
    word += str[i];
  }

}

function reverse(str){             
  let res = ''; // create a variable to store the result
  for(let i = 0; i < str.length; i++) { // create a loop to loop through each character of the string
    res = str[i] + res; // add each character to the beginning of the string
  }
  return res;
}

console.log(res); // "olleh sj vsap gnidoc moc"
```

It turned out just right! The words are reversed, the spaces are in their places.

Note that inside the `reverse` function we use the variable `res`. Although it has the same name as the `res` variable outside the function, 
they are different variables. The `res` variable inside the function is called a local variable. It is only visible inside the function. The variable `res` outside the function is called a global variable. It is visible everywhere.

To improve the code:

We can see that some parts of the code are repeated

```javascript
res +=reverse(word)              
word = '';
```

We can think of ways in which we can simplify or shorten the code. For your own consideration.

Notice that in the code we use the `reverse` function before it is declared.

You can do this with functions. This is called `"hoisting"`.

But you can't do that with variables!
