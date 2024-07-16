// NAMEEN:Define the type of special value null
// NAMERU:Определите тип специального значения null

/*
INSTRUCTIONENSTART
Create a variable named `empty` and set it to `null`.
Create a variable named `typeOfEmpty` and give it a value of `empty`.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
const money = null;
const type = typeof money;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `empty` и присвойте ей значение `null`.
Создайте переменную с именем `typeOfEmpty` и присвойте ей значение типа переменной `empty`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const money = null;
const type = typeof money;
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
const empty = null;
const typeOfEmpty = typeof empty;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const empty = null;
const typeOfEmpty = typeof empty;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `empty` exists and has a value', () => {
  expect(empty).not.undefined;
});

it('The `empty` variable is of type object', () => {
  expect(typeof empty).equal('object');
});

it('Variable `empty` has value null', () => {
  expect(empty).to.be.null;
});

it('Variable `typeOfEmpty` exists and has a value', () => {
  expect(typeOfEmpty).not.undefined;
});

it('Variable `typeOfEmpty` has type string', () => {
  expect(typeOfEmpty).a('string');
});

it('Variable `typeOfEmpty` has type `object` ', () => {
  expect(typeOfEmpty).equal('object');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
