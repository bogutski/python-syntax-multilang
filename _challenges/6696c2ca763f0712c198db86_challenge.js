// NAMEEN:Correct errors in the code. Variable weather
// NAMERU:Исправьте ошибки в коде. Переменная weather

/*
INSTRUCTIONENSTART
You need to write a command that assigns the string `'Sunny day'` to the variable `weather` using the keyword `const`.

Correct the errors in the above code.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-3-task-3.png)

Требуется написать команду, которая присваивает переменной `weather` значение строки `'Sunny day'` с использованием ключевого слова `const`.

Исправьте ошибки в приведенном коде.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const weather = 'Sunny day';
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const weather = 'Sunny day';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
Const weather = Sunny day
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const weather = 'Sunny day';
// SOLUTIONEND


// OPENTESTSSTART
it('Variable weather is defined', () => {
  expect (weather).not.to.be.undefined;
});

it('Variable weather is a string', () => {
  expect (weather).to.be.a('string');
});

it('Variable weather is equal to "Sunny day"', () => {
  expect (weather).to.be.equal('Sunny day');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
