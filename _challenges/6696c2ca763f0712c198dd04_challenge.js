// NAMEEN:Variable with value true
// NAMERU:Переменная со значением true

/*
INSTRUCTIONENSTART
Create a variable named `isStudy` and set it to `true`.
Create a variable named `typeOfIsStudy` and assign a variable type of `isStudy` to it.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
const isAdult = true;
const typeOfIsAdult = typeof isAdult;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `isStudy` и присвойте ей значение `true`.
Создайте переменную с именем `typeOfIsStudy` и присвойте ей тип переменной `isStudy`.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const isAdult = true;
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
const isStudy = true;
const typeOfIsStudy = typeof isStudy;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const isStudy = true;
const typeOfIsStudy = typeof isStudy;
// SOLUTIONEND


// OPENTESTSSTART
it('The `isStudy` variable exists and has a value', () => {
  expect(isStudy).not.undefined;
});

it('The `isStudy` variable has type `boolean`', () => {
  expect(isStudy).a('boolean');
});

it('The `isStudy` variable has a valid value', () => {
  expect(isStudy).equal(true);
});

it('The variable `typeOfIsStudy` exists and has a value', () => {
  expect(typeOfIsStudy).not.undefined;
});

it('Variable `typeOfIsStudy` has type `string`', () => {
  expect(typeOfIsStudy).a('string');
});

it('Variable `typeOfIsStudy` has the correct value', () => {
  expect(typeOfIsStudy).equal('boolean');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
