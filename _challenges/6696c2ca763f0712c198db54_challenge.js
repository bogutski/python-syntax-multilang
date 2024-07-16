// NAMEEN:Correct the errors in the code. Number zero
// NAMERU:Исправьте ошибки в коде. Число ноль

/*
INSTRUCTIONENSTART
You need to write a command which assigns to the variable `sum`
variable `0` using the keyword `let`.

Correct the errors in the given code.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-19.png)

Требуется написать команду, которая присваивает переменной `sum`
значение числа `0` с использованием ключевого слова `let`.

Исправьте ошибки в приведенном коде.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let sum = 0;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let sum = 0;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
let sum = '0';
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let sum = 0;
// SOLUTIONEND


// OPENTESTSSTART
it('sum should be defined', () => {
  expect(sum).not.to.be.undefined;
});

it('sum should be a number', () => {
  expect(sum).to.be.a('number');
});

it('sum should be equal to 0', () => {
  expect(sum).to.be.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
