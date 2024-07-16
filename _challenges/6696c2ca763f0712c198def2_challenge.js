// NAMEEN:Decrement, prefix form
// NAMERU:Декремент, префиксная форма

/*
INSTRUCTIONENSTART
Assign a value of 16 to the `number` variable, then write a command that decrements the value of the variable by 1
(decrement, prefix form).

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
let x = 2;
--x;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Присвойте переменной `number` значение 16, затем запишите команду, уменьшающую значение переменной на 1
(декремент, префиксная форма).

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
let x = 2;
--x;
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
let number = 16;
--number;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let number = 16;
--number;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `number` contains a value', () => {
  expect(number).not.undefined;
});

it('The variable `number` type is a number', () => {
  expect(number).a('number');
});

it('the variable type `number` is not NaN', () => {
  expect(isNaN(number)).false;
});

it('the variable `number` has the correct value', () => {
  expect(number).equal(15);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
