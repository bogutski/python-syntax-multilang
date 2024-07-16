// NAMEEN:Correct the errors in the code. Variable result
// NAMERU:Исправьте ошибки в коде. Переменная result

/*
INSTRUCTIONENSTART
You need to write a command which assigns to the variable `result` the value of `12.5` using
keyword `let`.

Correct the errors in the given code.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-17.png)

Требуется написать команду, которая присваивает переменной `result` значение числа `12.5` с использованием
ключевого слова `let`.

Исправьте ошибки в приведенном коде.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let result = 12.5;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let result = 12.5;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
let result = 12,5
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let result = 12.5;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable result is defined', () => {
  expect (result).not.to.be.undefined;
});

it('Variable result is a number', () => {
  expect (result).to.be.a('number');
});

it('Variable result is equal to 12.5', () => {
  expect (result).to.be.equal(12.5);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
