// NAMEEN:Line comparison. Which word is bigger?
// NAMERU:Сравнение строк. Какое слово больше?

/*
INSTRUCTIONENSTART
To determine that one line is larger than another, JavaScript uses "alphabetical" or
"lexicographic" ordering. In other words, strings are compared character by character. The comparison stops and returns a result as soon as a character in one string is not equal to a character in the other string. Only if all characters in both strings are identical, the strings are equal.

Create variables named `a` and `b` and give them arbitrary string values.

Create a variable named `isABiggerThanB` and assign it the result of comparing variables `a` and `b`.
The variable `isABiggerThanB` must take value `true` if `a > b`, and `false` otherwise.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```
const x = 'son';
const y = 'dad';
const comparison = x > y;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Чтобы определить, что одна строка больше другой, JavaScript использует «алфавитный» или «лексикографический»
 порядок. Другими словами, строки сравниваются посимвольно.

Сравнение останавливается и возвращает результат, как только символ в одной строке не равен символу в другой строке.

Только если все символы в обеих строках идентичны, строки равны.

Создайте переменные с именами `a` и `b` и присвойте им произвольные строковые значения.

Создайте переменную с именем `isABiggerThanB` и присвойте ей результат сравнения переменных `a` и `b`.
Переменная `isABiggerThanB` должна принимать значение `true`, если `a > b`, и `false` в противном случае.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const x = 'son';
const y = 'dad';
const comparison = x > y;
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
const a = 'Grape';
const b = 'Banana';
const isABiggerThanB = a > b;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = 'Grape';
const b = 'Banana';
const isABiggerThanB = a > b;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `a ` exists and has a value', () => {
  expect(a).not.undefined;
});

it('Variable `a` has type `string`', () => {
  expect(a).a('string');
});

it('Variable `b` exists and has a value', () => {
  expect(b).not.undefined;
});

it('Variable `b` has type `string`', () => {
  expect(b).a('string');
});

it('Variable `isABiggerThanB` exists and has a value', () => {
  expect(isABiggerThanB).not.undefined;
});

it('Variable `isABiggerThanB` has type `boolean`', () => {
  expect(isABiggerThanB).a('boolean');
});

it('Variable `isABiggerThanB` has value a>b', () => {
  expect(isABiggerThanB).equal(a > b);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
