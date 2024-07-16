// NAMEEN:Variable with value false
// NAMERU:Переменная со значением false

/*
INSTRUCTIONENSTART
Create a variable named `isCold` and set it to `false`.
Create a variable named `typeOfIsCold` and assign to it the variable type `isCold`.

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the requirements of the task:
```
const isAdult = false;
const typeOfIsAdult = typeof isAdult;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `isCold` и присвойте ей значение `false`.
Создайте переменную с именем `typeOfIsCold` и присвойте ей тип переменной `isCold`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const isAdult = false;
const typeOfIsAdult = typeof isAdult;
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
const isCold = false;
const typeOfIsCold = typeof isCold;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const isCold = false;
const typeOfIsCold = typeof isCold;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `isCold ` exists and has a value', () => {
  expect(isCold).not.undefined;
});

it('Variable `isCold` has type `boolean`', () => {
  expect(isCold).a('boolean');
});

it('The `isCold` variable has the correct value', () => {
  expect(isCold).equal(false);
});

it('The variable `typeOfIsCold` exists and has a value', () => {
  expect(typeOfIsCold).not.undefined;
});

it('Variable `typeOfIsCold` has type `string`', () => {
  expect(typeOfIsCold).a('string');
});

it('Variable `typeOfIsCold` has the correct value', () => {
  expect(typeOfIsCold).equal('boolean');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
