A string in JavaScript must be enclosed in quotation marks. There are three types of quotes in JavaScript.
```
let str ='Hello world';
let str2 = "World"; 
let str3 = `Sum  ${1+2}`;
```
Double or single quotes are "simple"; there is no difference between them in JavaScript.

Reverse quotes, on the other hand, have "advanced functionality". They allow us to embed expressions in a string by enclosing them in `${...}`. 

For example,
```
let price = 30;
let count = 15;
console.log(`Price of ${count} toys is ${price * count} dollars`); // print "Price of 15 toys is 450 dollars"
```
The `length` property lets you calculate the length of a string, i.e. the number of characters in the string. It happens that people with practice in other languages accidentally try to call it by adding parentheses: they write str.length() instead of `str.length`. This will cause an error. Since `str.length` is a numeric property, not a function, there is no need to add parentheses.

```
let str ='Hello world';
console.log(str.length); //displays the length of str, i.e. 11 
```
The numbering of characters in the string starts from zero.

You can refer to a particular string character by its index. For example, `str[0] ` - str character by index 0.
```
let str ='I like JavaScript';
console.log(str[0]); //will print "I";
console.log(str[7]); //will display "J";
console.log(str[str.length - 1]); //will display the last character of the string, i.e. "t";
```

With strings you can perform a merge operation (concatenation operation), which is denoted by `+`.
```
let str1 ='How';
let str2 = 'do';
let str3 = 'you';
console.log(str1 + ' ' + str2 + ' ' + str3 + ' ' + str2 + '?'); //will print "How do you do?"
```
Sometimes it is necessary to insert special characters into a string, such as line feeds, quotation marks, etc. All special characters begin with a backslash, `\` - the so-called **"escape character"**. Examples of special characters:
- `\n` - line translation
- `\"`, `\'` - quotation marks
- `\t` - tab character
- `\\` - backslash

**The content of a line in JavaScript cannot be changed**.

 You can't take a character in the middle and replace it. Once a string is created, it is forever.
Strings in JavaScript are **immutable**. All string methods provide either read-only capabilities or return a new string. Imutability implies that once a string is created, it cannot be changed. 

