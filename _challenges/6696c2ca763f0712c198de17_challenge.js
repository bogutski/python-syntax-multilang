// NAMEEN:Increasing the number by a factor of 2
// NAMERU:Увеличение числа в 2 раза

/*
INSTRUCTIONENSTART
Everyone is familiar with the 5-point scoring system: numbers from 1 to 5.
But with the introduction of the 10-point system, all marks were doubled.
For example, 5 became a 10, 4 became an 8, etc.

Set the variable `score` and assign a value of 5 to it.
Then write a command that increments the value of the `score` variable by a factor of 2.

Here's an example, which is fundamentally similar to what you need to do, but adapt it to the requirements of the task:
```
let number = 3;
number *= 2;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Всем знакома 5-балльная система отметок: числа от 1 до 5.
Но с введением 10-балльной системы все отметки увеличились в 2 раза.
Например, 5 стала десяткой, 4 - восьмеркой и т.п.

Задайте переменную `score` и присвойте ей значение 5.
Затем запишите команду, увеличивающую значение переменной `score` в 2 раза.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
let number = 3;
number *= 2;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART

HINTENEND
*/

/*
HINTRUSTART
```javascript
let score = 5;
score *= 2;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let score = 5;
score *= 2;
// SOLUTIONEND


// OPENTESTSSTART
it('The `score` variable contains a value', () => {
  expect(score).not.undefined;
});

it('The variable `score` type is a number', () => {
  expect(score).a('number');
});

it('the variable `score` is not NaN', () => {
  expect(isNaN(score)).false;
});

it('the `score` variable is 2 times', () => {
  expect(score).equal(10);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
