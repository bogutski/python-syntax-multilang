// NAMEEN:Binary plus - merging of lines
// NAMERU:Бинарный плюс - слияние строк

/*
INSTRUCTIONENSTART
Define a variable `century` and assign it the value of the string `'20'`.

Set the variable `years` and assign to it the value of the string `'22'`.

Set the variable `date` and assign to it the result of merging the variables `century` and `years`.

Here is an example, which is fundamentally similar to what you need to do, but adapt it to the requirements of the task:
```
const redBalls = '13';
const greenBalls = '15';
const balls = redBalls + greenBalls;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Задайте переменную `century` и присвойте ей значение строки `'20'`.

Задайте переменную `years` и присвойте ей значение строки `'22'`.

Задайте переменную `date` и присвойте ей результат слияния переменных `century` и `years`.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const redBalls = '13';
const greenBalls = '15';
const balls = redBalls + greenBalls;
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
const century = '20';
const years = '22';
const date = century + years;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const century = '20';
const years = '22';
const date = century + years;
// SOLUTIONEND


// OPENTESTSSTART
it('The `century` variable contains a value', () => {
  expect(century).not.undefined;
});

it('the variable type `century` is a string', () => {
  expect(century).a('string');
});

it('the variable `century` has the correct value', () => {
  expect(century).equal('20');
});

it('The `years` variable has a value', () => {
  expect(years).not.undefined;
});

it('the variable type `years` is a string', () => {
  expect(years).a('string');
});

it('the variable `years` has the correct value', () => {
  expect(years).equal('22');
});

it('The `date` variable has a value', () => {
  expect(date).not.undefined;
});

it('the variable type `date` is a string', () => {
  expect(date).a('string');
});

it('the variable `date` has the correct value', () => {
  expect(date).equal('2022');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
