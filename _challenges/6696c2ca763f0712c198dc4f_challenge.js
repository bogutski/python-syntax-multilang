// NAMEEN:Create a variable named `zero` and set it to 0
// NAMERU:Создайте переменную с именем `zero` и присвойте ей значение 0

/*
INSTRUCTIONENSTART
Create a variable named `zero` and give it a value of `0` by number.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `zero` и присвойте ей значение `0` числом.
INSTRUCTIONRUEND
*/

/*
HINTENSTART

HINTENEND
*/

/*
HINTRUSTART
```javascript
const zero = 0;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const zero = 0;
// SOLUTIONEND


// OPENTESTSSTART
it('is variable `zero` exists', () => {
  expect(zero).not.to.be.undefined;
});

it('should variable `zero` be a number', () => {
  expect(zero).a('number');
});

it('should the variable `zero` be equal 0', () => {
  expect(zero).eq(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
