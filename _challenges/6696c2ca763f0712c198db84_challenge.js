// NAMEEN:Correct errors in the code. Strange assignment
// NAMERU:Исправьте ошибки в коде. Странное присваивание

/*
INSTRUCTIONENSTART
It is required to write a command which assigns to the variable `a`
the value of `18` using the keyword `let`.

Correct the errors in the given code.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-3-task-1.png)

Требуется написать команду, которая присваивает переменной `a`
значение числа `18` с использованием ключевого слова `let`.

Исправьте ошибки в приведенном коде.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let a = 18;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let a = 18;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
let a := 18
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let a = 18;
// SOLUTIONEND


// OPENTESTSSTART
it('a is 18', () => {
  expect (a).to.equal(18);
});

it('a should be a number', () => {
  expect (typeof a).to.equal('number');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
