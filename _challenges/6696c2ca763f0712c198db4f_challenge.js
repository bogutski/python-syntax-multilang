// NAMEEN:Correct the errors in the code. Number 3.125
// NAMERU:Исправьте ошибки в коде. Число 3.125

/*
INSTRUCTIONENSTART
It is required to write a command that assigns the number 3.125 to the variable `a`.
The correct solution is:
```
let a = 3.125;
```
Correct the errors in the given code.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-14.png)

Требуется написать команду, которая присваивает переменной `a` число 3.125.

Похожее решение:
```javascript
let b = 5.345;
```

Исправьте ошибки в приведенном коде.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let a = 3.125;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let a = 3.125;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
let a = 3,125
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let a = 3.125;
// SOLUTIONEND


// OPENTESTSSTART
it('a is defined', () => {
  expect (a).not.to.be.undefined;
});

it('a is a number', () => {
  expect (a).to.be.a('number');
});

it('a is equal to 3.125', () => {
  expect (a).to.be.equal(3.125);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
