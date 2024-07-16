// NAMEEN:Is it true that the string starts with 'A'?
// NAMERU:Верно ли, что строка начинается с 'A'?

/*
INSTRUCTIONENSTART
Create a variable named `str` and assign to it the value of an arbitrary non-empty string.
Create a variable named `firstSymbol` and give it the value of the first character of the string.

Create a variable named `isStartWithA` and assign to it the result of comparing the first character of the string with `'A'`,
That is, the variable `isStartWithA` will have a value of `true` if the string starts with 'A', and `false` otherwise.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
const name = 'Andrew';
const first = name[0];
const comparison = first === 'A';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `str` и присвойте ей значение произвольной непустой строки.
Создайте переменную `firstSymbol` и присвойте ей значение первого символа строки.

Создайте переменную с именем `isStartWithA` и присвойте ей результат сравнения первого символа строки с `'A'`,
т.е. переменная `isStartWithA` будет иметь значение `true`, если строка начинается с 'A', и `false` в противном случае.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const name = 'Andrew';
const first = name[0];
const comparison = first === 'A';
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
const str = 'Andrew';
const firstSymbol = str[0];
const isStartWithA = firstSymbol === 'A';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const str = 'Andrew';
const firstSymbol = str[0];
const isStartWithA = firstSymbol === 'A';
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `str` exists and has a value', () => {
  expect(str).not.undefined;
});

it('Variable `str` has type string', () => {
  expect(str).a('string');
});

it('Variable `str` is a non-empty string', () => {
  expect(str === '').false;
});

it('The variable `firstSymbol` exists and has a value', () => {
  expect(firstSymbol).not.undefined;
});

it('The `firstSymbol` variable is of type string', () => {
  expect(firstSymbol).a('string');
});

it('The `firstSymbol` variable is equal to the first character', () => {
  expect(firstSymbol).equal(str[0]);
});

it('The variable `isStartWithA` exists and has a value', () => {
  expect(isStartWithA).not.undefined;
});

it('The `isStartWithA` variable is of type boolean', () => {
  expect(isStartWithA).a('boolean');
});

it('The `isStartWithA` variable has a valid value', () => {
  expect(isStartWithA).equal(firstSymbol === 'A');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
