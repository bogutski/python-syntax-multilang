// NAMEEN:Correct errors in the code. Variable line and empty string
// NAMERU:Исправьте ошибки в коде. Переменная line и пустая строка

/*
INSTRUCTIONENSTART
You need to write a command that assigns the variable `line`
The value of the empty string `''` using the
keyword `let`.

Correct the errors in the given code.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-20.png)

Требуется написать команду, которая присваивает переменной `line`
значение пустой строки `''` с использованием
ключевого слова `let`.

Исправьте ошибки в приведенном коде.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let line = '';
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let line = '';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
let line = ' '
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let line = '';
// SOLUTIONEND


// OPENTESTSSTART
it('line should be defined', () => {
  expect(line).not.to.be.undefined;
});

it('line should be a string', () => {
  expect(line).to.be.a('string');
});

it("line should be equal to ''", () => {
  expect(line).to.be.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
