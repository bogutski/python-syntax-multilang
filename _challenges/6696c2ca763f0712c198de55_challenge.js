// NAMEEN:Convert a string containing a number to a number
// NAMERU:Преобразуйте строку, содержащую число, в число

/*
INSTRUCTIONENSTART
Define a variable `str` and assign it the value of a string containing a number, for example `'23'`.

Define a variable `num` and assign to it the value of the variable `str` converted to a number.

Here is an example that is fundamentally similar to what needs to be done, but adapt it to the requirements of the task:
```
const x = '1';
const y = +x;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Задайте переменную `str` и присвойте ей значение строки, содержащей число, например,  `'23'`.

Задайте переменную `num` и присвойте ей значение переменной `str`, преобразованное в число.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const x = '1';
const y = +x;
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
const str = '23';
const num = +str;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const str = '23';
const num = +str;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `str` contains a value', () => {
  expect(str).not.undefined;
});

it('the variable type `str` is a string', () => {
  expect(str).a('string');
});

it('the variable `str` is not NaN', () => {
  expect(isNaN(str)).false;
});

it('Variable `num` contains a value', () => {
  expect(num).not.undefined;
});

it('the variable type `str` is a number', () => {
  expect(num).a('number');
});

it('the variable `num` has the correct value', () => {
  expect(num).equal(+str);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
