// NAMEEN:Is null equal to an empty string?
// NAMERU:Равен ли null пустой строке?

/*
INSTRUCTIONENSTART
Create a variable named `isNullEqualEmpty` and set it to the result of a strict comparison between null and empty string.
(Check the result in the console).

Here is an example that is fundamentally similar to what you need to do,
But adapt it to the requirements of the task:
```
const comparison = null === '' ;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `isNullEqualEmpty` и присвойте ей результат строгого сравнения значения `null` и пустой строки.
(Проверьте результат в консоли).

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const comparison = null === '' ;
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
const isNullEqualEmpty = null === '';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const isNullEqualEmpty = null === '';
// SOLUTIONEND


// OPENTESTSSTART
it('The `isNullEqualEmpty` variable exists and has a value', () => {
  expect(isNullEqualEmpty).not.undefined;
});

it('Variable `isNullEqualEmpty` is of type boolean', () => {
  expect(isNullEqualEmpty).a('boolean');
});

it('Variable `isNullEqualEmpty` is false ', () => {
  expect(isNullEqualEmpty).false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
