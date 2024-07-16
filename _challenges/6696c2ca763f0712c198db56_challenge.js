// NAMEEN:Fix bugs in the code
// NAMERU:Исправьте ошибки в коде

/*
INSTRUCTIONENSTART
It is required to write a command which assigns to the variable `number`
negative number `-12` using the keyword `let`.

Correct the errors in the given code.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-21.png)

Требуется написать команду, которая присваивает переменной `number`
отрицательное число `-12` с использованием ключевого слова `let`.

Исправьте ошибки в приведенном коде.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let number = -12;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let number = -12;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
let number = 12
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let number = -12;
// SOLUTIONEND


// OPENTESTSSTART
it('number is defined', () => {
  expect (number).not.to.be.undefined;
});

it('number is -12', () => {
  expect (number).to.equal(-12);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
