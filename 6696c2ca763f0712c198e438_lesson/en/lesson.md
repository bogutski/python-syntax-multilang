The repeat method is used to repeat the string as many times as necessary.

```javascript
const str = 'pasv';
console.log(str.repeat(3)); // 'pasvpasvpasv'
```

If you need a space between repetitions.

```javascript
const str = 'pasv ';
console.log(str.repeat(3)); // 'pasv pasv pasv '
```

Let's make a function that repeats the string the required number of times with spaces between repetitions. No space will be added at the end of the string.

The function takes a string and the number of repetitions as parameters.

```javascript
function repeatWords(str, n) {
  return (str + ' ').repeat(n - 1) + str;
}

console.log(repeatWords('js', 3)); // 'js js js'
```

`repeat(n - 1)` - reduce the number of repetitions by 1. If not reduced, there will be a space at the end of the string.

Figure out how the `repeatWords` function works with each part of the code.

### Wrap the repeated line in asterisks

Expect to receive:

```javascript
**********
*js js js*
**********
```

Let's write the `repeatWords` function

```javascript
function repeatWords(str, n) {
  const content = (str + ' ').repeat(n - 1) + str; 
  const line = '*'.repeat(content.length + 2); 
  return line + '\n' + '*' + content + '*\n' + line; // '\n' is a line break. Without it `line` and `content` will be rendered as one line.
}

console.log(repeatWords('js', 3));
```

The `content` is what we want to frame with asterisks. In our case `js js js`;

The `line` is the top and bottom row of asterisks. Repeat `*` a number of times equal to the length of `content` with the addition of additional `*` at the beginning and at the end.

The `\n` is a line break character. Without it `line` and `content` will be output as one line.

### Consider another example based on the previous one

Increase the height of the frame and add spaces before and after the entered text.

```javascript
************
*          *
* js js js *
*          *
************
```

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/js-green.png)

Enter an additional line `subline` which consists of `*` at the beginning, then a space, repeated as many times as necessary, and `*` at the end.

```javascript
function repeatWords(str, n) {
  const content = (str + ' ').repeat(n - 1) + str;
  const line = '*'.repeat(content.length + 4); 
  const subline = '*' + ' '.repeat(content.length + 2) + '*';
  return line + '\n' + subline + '\n' + '* ' + content + ' *\n' + subline + '\n' + line;
}

console.log(repeatWords('js', 3));
```

Break down each line in the example. Experiment!
