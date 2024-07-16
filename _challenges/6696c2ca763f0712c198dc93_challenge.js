// NAMEEN:Mr. and Mrs. Smith
// NAMERU:Мистер и миссис Смит

/*
INSTRUCTIONENSTART
Create a variable `abbreviation` and set it to ``Mr. & Mrs.'`

Create a second variable `lastName` and set it to `'Smith'`.

Create a third variable `familyName` and assign it the value resulting from the addition of the variables `abbreviation`, space and `lastName`.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the needs of the task:
```
const firstName = 'Ivan';
const lastName = 'Ivanov';
const name = firstName + ' ' + lastName;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную `abbreviation` и присвойте ей значение `'Mr. & Mrs.'`

Создайте вторую переменную `lastName` и присвойте ей значение `'Smith'`.

Создайте третью переменную `familyName` и присвойте ей значение, получаемое в результате сложения переменных `abbreviation`, пробела и `lastName`

Приведем пример, который принципиально похож на то что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const firstName = 'Ivan';
const lastName = 'Ivanov';
const name = firstName + ' ' + lastName;
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
const abbreviation = 'Mr. & Mrs.';
const lastName = 'Smith';
const familyName = abbreviation + ' ' + lastName;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const abbreviation = 'Mr. & Mrs.';
const lastName = 'Smith';
const familyName = abbreviation + ' ' + lastName;
// SOLUTIONEND


// OPENTESTSSTART
it('The `abbreviation` variable exists ', () => {
  expect(abbreviation).not.undefined;
});

it('The `abbreviation` variable contains data type string', () => {
  expect(abbreviation).a('string');
});

it('The `abbreviation` variable contains the value `Mr. & Mrs.`', () => {
  expect(abbreviation).eq('Mr. & Mrs.');
});

it('The variable `lastName` exists ', () => {
  expect(lastName).not.undefined;
});

it('Variable `lastName` contains data type string', () => {
  expect(lastName).a('string');
});

it('The `lastName` variable contains the value `Smith`', () => {
  expect(lastName).eq('Smith');
});

it('The variable `familyName` exists', () => {
  expect(familyName).not.undefined;
});

it('Variable `familyName` contains data type string', () => {
  expect(familyName).a('string');
});

it('The `familyName` variable contains `Mr. & Mrs. Smith`', () => {
  expect(familyName).eq('Mr. & Mrs. Smith');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
