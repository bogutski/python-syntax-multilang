### Count the number of uppercase and lowercase letters in the string

Let's look at an example:
```javascript
const str = 'Hello Coding JS!';
```
In the line above we have 4 letters in upper case and 9 in lower case.

Let's write the code to get the result as
`U:4 L:9`.
First let's count the number of letters in uppercase.

We don't have any built-in functions to determine case, so we take a character,
convert it to lower case and if the converted letter is not equal to the original letter, then the original letter was in
upper case. If they are equal, then the letter was originally in lower case.

Let's test this hypothesis:
```javascript
let upper = 0, lower = 0 
// let's introduce counters. The variable `upper` will count uppercase letters, `lower` - lowercase letters. The initial value of the counters is zero.

for (let i = 0; i < str.length; i++){ // create a loop over the string
  if(str[i].toUpperCase() === str[i]) upper++ // if the uppercase character is equal to the character itself, it is a capital letter and the counter is incremented
   else lower + + // otherwise increment the lowercase counter
}

console.log(upper, lower)
// 7 9
```
We got that there are 7 capital letters, although in fact there are 4. The number of lowercase letters is correct.
Let's think why?

The reason is that we translate not only letters, but any characters at all. A space converted to uppercase is not transformed in any way and is equal to
to the space itself. So the counter increased when the loop reached the space.

Let's try to do some kind of check to know whether or not we are converting a character somewhere:
```
// H - h
// h - H
// @ - @
```
```javascript
const str = 'Hello !';
let upper = 0, lower = 0

for (let i = 0; i < str.length; i++){     
  if(str[i].toUpperCase() === str[i] && str[i].toLowerCase() !== str[i]) upper++   
  // we have specified the condition that if we translate a character into upper case, it is equal to itself before the transformation
  // and the same character converted to lower case is not equal to itself before the transformation (we assume that we are working with a capital letter)  
   else lower ++  
}

console.log(upper, lower)
// 1 6
```
We got that the upper case letters are counted correctly, but the lower case letters are not.

Let's think about how to fix it.

Maybe instead of `else` write a second `if`
```javascript
const str = 'Hello JS !';
let upper = 0, lower = 0 

for (let i = 0; i < str.length; i++){              
  if(str[i].toUpperCase() === str[i] && str[i].toLowerCase() !== str[i]) upper++   
  if(str[i].toUpperCase() !== str[i]) lower++
}

console.log(upper, lower)
// 3 4
```
In the second `if` condition, we only needed one check to get the correct result.

Maybe we should simplify the first condition, too.
```javascript
const str = 'Hello JS !';
let upper = 0, lower = 0 

for (let i = 0; i < str.length; i++){              
  if(str[i].toLowerCase() !== str[i]) upper++   
  if(str[i].toUpperCase() !== str[i]) lower++
}

console.log(upper, lower)
// 3 4
```

Everything works correctly! That is, this variant covers all cases: when upper and lower case letters come into the string,
and spaces, and some symbols.

Using this problem as an example, we have tried to build a logic for how we can arrive at a solution to a problem, even if
we don't know how to solve it. And having got the solution, how we can optimize the code.