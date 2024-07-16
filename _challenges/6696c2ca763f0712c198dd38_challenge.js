// NAMEEN:Create a variable with the value null
// NAMERU:Создайте переменную со значением null

/*
INSTRUCTIONENSTART
The special value null means "nothing", "no value is given" or "value is intentionally missing".
Create a variable named `name` and assign a value of `null` to it.


Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```
let job = null;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Специальное значение null означает «ничего», «значение не задано» или «значение намеренно отсутствует».
Создайте переменную с именем `name` и присвойте ей значение `null`.


Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let job = null;
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
let name = null;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let name = null;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `name` exists and has a value', () => {
  expect(name).not.undefined;
});

it('Variable `name` has typeof object', () => {
  expect(typeof name).equal('object');
});

it('Variable `name` has value null', () => {
  expect(name).equal(null);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
