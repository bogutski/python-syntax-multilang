
The cycle generates a sequence of numbers. 

We can use these numbers to refer to array element indices or string characters.

Consider cycles in which iterator values change from less to more.

Set two variables: `min` and `max`. The variable `min` will store the minimum value and the variable `max` will store the maximum value. 
The iterator of the loop, the variable `i`, will change sequentially from the minimum to the maximum value in steps of one.

```javascript
const min = 12;
const max = 52;

for (let i = min; i <= max; i++){
    console.log(i);
}

//12, 13, 14, 15, 16, 17, 18, 19, 20, 21, ... , 52
```
As a result, the console will display a sequence of numbers from `12` to `52` inclusive.

You can change the iteration step, for example, by increasing `i` each time by `3`

```javascript
const min = 12;
const max = 52;

for (let i = min; i <= max; i += 3){
    console.log(i);
}

//12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51
```
The console will print numbers from `12` to `51` in increments of `3`. 
The number `52` will not be output because `51 + 3 = 54`, and `54 > 52`.

The step does not have to be an integer. You can increase `i` by a fractional number, for example, by `1.5`.

```javascript
const min = 12;
const max = 52;

for (let i = min; i <= max; i += 1.5){
    console.log(i);
}

//12, 13.5, 15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 28.5, 30, 31.5, 33, 34.5, 36, 37.5, 39, 40.5, 42, 43.5, 45, 46.5, 48, 49.5, 51
```
The console will display numbers from `12` to `51` in increments of `1.5`.

You can set the step `0.9`, `0.1`, etc.

#### The iteration step can be any number: integer or fractional, negative or positive.

### Filling an array in a loop
If we create an empty array before we run the loop, we can fill it with the values the loop generates.

```javascript
const min = 12;
const max = 52;
const arr = [];

for (let i = min; i <= max; i += 2){
    arr.push(i);
}

console.log(arr);

//[12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52]
```
As a result, numbers from `12` to `52` will be added to the `arr` array in increments of `2` - a total of 21 numbers. 

You can change values before adding them to an array. 

For example, `multiply by 3`:

```javascript
const min = 12;
const max = 52;
const arr = [];

for (let i = min; i <= max; i += 2){
    arr.push(i * 3);
}

console.log(arr);

//[36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126, 132, 138, 144, 150, 156]
```

Or `squared` or `cube`:

```javascript
const min = 12;
const max = 52;
const arr = [];

for (let i = min; i <= max; i += 2){
    arr.push(i ** 3);
}

console.log(arr);

//[1728, 2744, 4096, 5832, 8000, 10648, 13824, 17576, 21952, 27000, 32768, 39304, 46656, 54872, 64000, 74088, 85184, 97336, 110592, 125000, 140608]
```
### Filling a string in the loop

Now consider loops with strings. 

Create an empty string with the keyword `let`, because we will need to change its value in the loop.
Write numbers from `12` to `52` in increments of `2`.

```javascript
const min = 12;
const max = 52;
let str = '';

for (let i = min; i <= max; i += 2){
    str += i;
}

console.log(str);

//"121416182022242628303234363840424446485052"
```
The numbers are written in a row, without spaces. Such an entry is hard to read.
We modify the loop to add spaces `' '` between the numbers:

```javascript
const min = 12;
const max = 52;
let str = '';

for (let i = min; i <= max; i += 2){
    str += i + ' ';
}

console.log(str);

//"12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 "
```
Replace the spaces with the minuses `-`:
```javascript
const min = 12;
const max = 52;
let str = '';

for (let i = min; i <= max; i += 2){
    str += i + '-';
}

console.log(str);

//"12-14-16-18-20-22-24-26-28-30-32-34-36-38-40-42-44-46-48-50-52-"
``` 
### Skipping numbers in a loop
You can use the `if` operators to skip some numbers in the loop.

For example, let's figure out how we can skip all the numbers in the interval from `22` to `32`:
```javascript
const min = 12;
const max = 52;
const arr = [];

for (let i = min; i <= max; i += 2){
  if (i >= 22 && i <= 32) arr.push(i);
}

console.log(arr);

//[22, 24, 26, 28, 30, 32]
```
The logical operator AND `&&` means that the value of `i` must be both `exceed or equal to 22` and `less than or equal to 32` in order for the action `arr.push(i)` to be executed.
As a result, instead of skipping numbers from the given interval, we skipped all numbers except them.
This solution does not satisfy the problem, but we can skip the numbers from `22` to `32` with the `continue` operator if we put `arr.push(i)` outside the `if` operator on the next line:

```javascript
const min = 12;
const max = 52;
const arr = [];

for (let i = min; i <= max; i += 2) {
  if (i >= 22 && i <= 32) continue;
  arr.push(i);
}

console.log(arr);

//[12, 14, 16, 18, 20, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52]
```
By rewriting the condition using the logical OR `||` you can do without the `continue` operator:

```javascript
const min = 12;
const max = 52;
const arr = [];

for (let i = min; i <= max; i += 2){
  if (i < 22 || i > 32) arr.push(i);
}

console.log(arr);
//[12, 14, 16, 18, 20, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52]
```
