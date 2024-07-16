// NAMEEN:Increasing the variable by 1
// NAMERU:Увеличение переменной на 1

/*
INSTRUCTIONENSTART
Assign a value of 10 to the `num` variable, then write a command that increments the value of the variable by 1.

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
let x = 2;
x = x + 1;

```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Присвойте переменной `num` значение 10, затем запишите команду, увеличивающую значение переменной на 1.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
let x = 2;
x = x + 1;
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
let num = 10;
num = num + 1;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let num = 10;
num = num + 1;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `num` contains a value', () => {
  expect(num).not.undefined;
});

it('The variable `num` type is a number', () => {
  expect(num).a('number');
});

it('the variable type `num` is not NaN', () => {
  expect(isNaN(num)).false;
});

it('the variable `num` has the correct value', () => {
  expect(num).equal(11);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
