// NAMEEN:Increment, prefix form
// NAMERU:Инкремент, префиксная форма

/*
INSTRUCTIONENSTART
Assign a value of 99 to the `number` variable, then write a command that increments the variable by 1
(increment, prefix form).

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the task:
```
let x = 2;
++x;

```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Присвойте переменной `number` значение 99, затем запишите команду, увеличивающую значение переменной на 1
(инкремент, префиксная форма).

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
let x = 2;
++x;
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
let number = 99;
++number;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let number = 99;
++number;
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
  expect(number).equal(100);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
