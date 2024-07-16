// NAMEEN:What type is undefined?
// NAMERU:Какой тип имеет значение undefined?

/*
INSTRUCTIONENSTART
In JavaScript there is a special value `undefined`.

If you create a variable and do not assign it a value, then it will have the value `undefined`.

Let's see what type this value will be.

Create a variable named `noValue` using the `let` keyword and do not assign it a value.

Create a variable `typeOfNoValue` and assign it the type value of the variable `noValue`.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the needs of the task:
```
let nothing;
const typeOfNothing = typeof nothing;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В JavaScript есть специальное значение `undefined`.

Если создать переменную и не присвоить ей значение, то она будет иметь значение `undefined`.

Давайте посмотрим какого типа будет это значение.

Создайте переменную с именем `noValue` с использованием ключевого слова `let` и не присваивайте ей значение.

Создайте переменную `typeOfNoValue` и присвойте ей значение типа переменной `noValue`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let nothing;
const typeOfNothing = typeof nothing;
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
let noValue;
const typeOfNoValue = typeof noValue;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let noValue;
const typeOfNoValue = typeof noValue;
// SOLUTIONEND


// OPENTESTSSTART
it('the variable `noValue` exists and is undefined', () => {
  expect(noValue).to.be.undefined;
});

it('the variable `typeOfNoValue` exists and has a value', () => {
  expect(typeOfNoValue).not.undefined;
});

it('the variable `typeOfNoValue` has type string', () => {
  expect(typeOfNoValue).a('string');
});

it('the variable `typeOfNoValue` is equal to `undefined`', () => {
  expect(typeOfNoValue).equal('undefined');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
