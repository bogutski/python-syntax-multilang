// NAMEEN:Correct errors in the code. The isCorrect Boolean variable
// NAMERU:Исправьте ошибки в коде. Переменная isCorrect Boolean

/*
INSTRUCTIONENSTART
You need to write a command which assigns the variable `isCorrect`
variable `true` using the keyword `const`.

Correct the errors in the given code.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-3-task-2.png)

Требуется написать команду, которая присваивает переменной `isCorrect`
логическое значение `true` с использованием ключевого слова `const`.

Исправьте ошибки в приведенном коде.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const isCorrect = true;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const isCorrect = true;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
const isCorrect = 'true'
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const isCorrect = true;
// SOLUTIONEND


// OPENTESTSSTART
it('isCorrect is a variable', () => {
  expect (isCorrect).to.exist;
});

it('isCorrect is a Boolean', () => {
  expect (isCorrect).to.be.a('boolean');
});

it('isCorrect is true', () => {
  expect (isCorrect).to.be.true;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
