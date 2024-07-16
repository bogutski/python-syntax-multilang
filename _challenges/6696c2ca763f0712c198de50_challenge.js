// NAMEEN:Everything is beautiful!
// NAMERU:Everything is beautiful!

/*
INSTRUCTIONENSTART
The `+` operation is used not only to add numbers, but also to join (merge) strings.
This operation is called concatenation.

Define a variable `str1` and assign to it the value of the string `'Everything'`.
Define a variable `str2` and assign to it the value of the string `'is'`.
Set the variable `str3` and assign to it the value of the string `'beautiful'`.

Set variable `message` and assign to it the result of merging variables `str1`, `str2` and `str3` with space separator and exclamation mark at the end.

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the task:
```
const x = 'best';
const y = 'day';
const res = x + ' ' + y;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Операция `+` используется не только для сложения чисел, но и для соединения (слияния) строк.
Эта операция называется "конкатенация".

Задайте переменную `str1` и присвойте ей значение строки `'Everything'`.
Задайте переменную `str2` и присвойте ей значение строки `'is'`.
Задайте переменную `str3` и присвойте ей значение строки `'beautiful'`.

Задайте переменную `message` и присвойте ей результат слияния переменных `str1`, `str2` и `str3` с разделителем-пробелом и восклицательным знаком в конце.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const x = 'best';
const y = 'day';
const res = x + ' ' + y;
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
const str1 = 'Everything';
const str2 = 'is';
const str3 = 'beautiful';
const message = str1 + ' ' + str2 + ' ' + str3 + '!';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const str1 = 'Everything';
const str2 = 'is';
const str3 = 'beautiful';
const message = str1 + ' ' + str2 + ' ' + str3 + '!';
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `str1` contains a value', () => {
  expect(str1).not.undefined;
});

it('the variable type `str1` is a string', () => {
  expect(str1).a('string');
});

it('the variable `str1` has the correct value', () => {
  expect(str1).equal('Everything');
});

it('Variable `str2` has a value', () => {
  expect(str2).not.undefined;
});

it('the variable type `str2` is a string', () => {
  expect(str2).a('string');
});

it('the variable `str2` has the correct value', () => {
  expect(str2).equal('is');
});

it('Variable `str3` has a value', () => {
  expect(str3).not.undefined;
});

it('the variable type `str3` is a string', () => {
  expect(str3).a('string');
});

it('the variable `str3` has the correct value', () => {
  expect(str3).equal('beautiful');
});

it('The `message` variable has a value', () => {
  expect(message).not.undefined;
});

it('the variable type `message` is a string', () => {
  expect(message).a('string');
});

it('the variable `message` has the correct value', () => {
  expect(message).equal('Everything is beautiful!');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
