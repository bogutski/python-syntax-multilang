// NAMEEN:Create a variable named `distanceToSun` and assign a value of 92960000
// NAMERU:Создайте переменную с именем `distanceToSun` и присвойте ей значение 92960000

/*
INSTRUCTIONENSTART
Create a variable named `distanceToSun` and assign a value of `92960000` to it.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `distanceToSun` и присвойте ей значение `92960000` числом.
INSTRUCTIONRUEND
*/

/*
HINTENSTART

HINTENEND
*/

/*
HINTRUSTART
```javascript
const distanceToSun = 92960000;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const distanceToSun = 92960000;
// SOLUTIONEND


// OPENTESTSSTART
it('is variable `distanceToSun ` exists', () => {
  expect(distanceToSun).not.to.be.undefined;
});

it('should variable `distanceToSun ` be a number', () => {
  expect(distanceToSun).a('number');
});

it('should the variable `distanceToSun` be equal to 92960000', () => {
  expect(distanceToSun).eq(92960000);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
