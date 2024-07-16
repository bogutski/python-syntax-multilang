// NAMEEN:A non-strict equality of two numbers (==). Can a string be equal to a number?
// NAMERU:Нестрогое равенство двух чисел (==). Может ли строка быть равна числу?

/*
INSTRUCTIONENSTART
When comparing values of different types, JavaScript casts each value to a number.
The non-strict equality operator `==` checks for equality of values.
If `a` and `b` have the same values and different types, then the result of comparison `a == b` returns `true`.
For example, `'25' == 25; (true)`.

Create a variable named `a` and give it the string value `'100'`.
Create a variable named `b` and give it the value of `100`.
Create a variable named `isAEqualsB` and assign to it the result of a non-strict equality of the variables `a` and `b`.
The variable `isAEqualsB` must take the value `true` if `a == b`, and `false` otherwise.

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the requirements of the problem:
```
const x = '2';
const y = 2;
const comparison = x == y;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
При сравнении значений разных типов JavaScript приводит каждое из них к числу.
Оператор нестрогого равенства `==` проверяет равенство значений.
Если `a` и `b` имеют одинаковые значения и разные типы, то результат сравнения `a == b` возвращает `true`.
Например, `'25' == 25; (true)`.

Создайте переменную с именем `a` и присвойте ей значение строки `'100'`.
Создайте переменную с именем `b` и присвойте ей значение числа `100`.
Создайте переменную с именем `isAEqualsB` и присвойте ей результат нестрогого равенства переменных `a` и `b`.
Переменная `isAEqualsB` должна принимать значение `true`, если `a == b`, и `false` в противном случае.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const x = '2';
const y = 2;
const comparison = x == y;
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
const a = '100';
const b = 100;
const isAEqualsB = a == b;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = '100';
const b = 100;
const isAEqualsB = a == b;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `a ` exists and has a value', () => {
  expect(a).not.undefined;
});

it('Variable `a` has type `string`', () => {
  expect(a).a('string');
});

it('Variable `a` has value `100', () => {
  expect(a).equal('100');
});
it('Variable `b` exists and has a value', () => {
  expect(b).not.undefined;
});

it('Variable `b` has type `number`', () => {
  expect(b).a('number');
});

it('Variable `b` is not NaN', () => {
  expect(isNaN(b)).false;
});

it('Variable `b` has value 100', () => {
  expect(b).equal(100);
});

it('Variable `isAEqualsB` exists and has a value', () => {
  expect(isAEqualsB).not.undefined;
});

it('Variable `isAEqualsB` has type `boolean`', () => {
  expect(isAEqualsB).a('boolean');
});

it('Variable `isAEqualsB` has value a==b', () => {
  expect(isAEqualsB).equal(a == b);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
