// NAMEEN:Create a variable named `age` and assign a value of 20 to it
// NAMERU:Создайте переменную с именем `age` и присвойте ей значение числа 20

/*
INSTRUCTIONENSTART
This task requires creating a variable named `age` and assigning it the value of `20`.
Correct the errors in the code.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В этом задании требуется создать переменную с именем `age` и присвоить ей значение числа `20`.
Исправьте ошибки в коде.
INSTRUCTIONRUEND
*/

/*
HINTENSTART

HINTENEND
*/

/*
HINTRUSTART
```javascript
const age = 20;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
const age = '20';
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const age = 20;
// SOLUTIONEND


// OPENTESTSSTART
it('should the variable `age` exist', () => {
  expect(age).not.to.be.undefined;
});

it('should the variable `age` be a number', () => {
  expect(age).a('number');
});

it('should variable `age` have a value of 20', () => {
  expect(age).eq(20);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
