// NAMEEN:Is it true that the first character of a string is equal to the last character?
// NAMERU:Верно ли, что первый символ строки равен последнему символу?

/*
INSTRUCTIONENSTART
Create a variable named `str` and assign to it the value of an arbitrary non-empty string.
Create a variable named `firstSymbol` and give it the value of the first character of the string.
Create a variable `lastSymbol` and assign to it the value of the last character of the string.

Create a variable named `areTheSame` and assign to it the result of comparing the first character of the string with the last character.
That is, the variable `areTheSame` will have the value `true` if the first character is equal to the last character, and `false` otherwise.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
const name = 'Andrew';
const first = name[0];
const last = name[name.length - 1];
const comparison = first === last;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `str` и присвойте ей значение произвольной непустой строки.
Создайте переменную `firstSymbol` и присвойте ей значение первого символа строки.
Создайте переменную `lastSymbol` и присвойте ей значение последнего символа строки.

Создайте переменную с именем `areTheSame` и присвойте ей результат сравнения первого символа строки с последним,
т.е. переменная `areTheSame` будет иметь значение `true`, если первый символ равен последнему, и `false` в противном случае.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const name = 'Andrew';
const first = name[0];
const last = name[name.length - 1];
const comparison = first === last;
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
const str = 'abracadabra';
const firstSymbol = str[0];
const lastSymbol = str[str.length - 1];
const areTheSame = firstSymbol === lastSymbol;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const str = 'abracadabra';
const firstSymbol = str[0];
const lastSymbol = str[str.length - 1];
const areTheSame = firstSymbol === lastSymbol;
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

it('The `lastSymbol` variable exists and has a value', () => {
  expect(lastSymbol).not.undefined;
});

it('The `lastSymbol` variable is of type string', () => {
  expect(lastSymbol).a('string');
});

it('Variable `lastSymbol` is equal to the last character', () => {
  expect(lastSymbol).equal(str[str.length - 1]);
});

it('The variable `areTheSame` exists and has a value', () => {
  expect(areTheSame).not.undefined;
});

it('TheTheSame` variable is of type boolean', () => {
  expect(areTheSame).a('boolean');
});

it('Variable `areTheSame` has the correct value', () => {
  expect(areTheSame).equal(firstSymbol === lastSymbol);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
