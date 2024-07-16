// NAMEEN:
// NAMERU:Две функции вызываются внутри третьей функции

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши первую функцию `positiveNumber`, которая возвращает число 123.
Напиши вторую функцию `negativeNumber`, которая возвращает число -321.

Напиши третью функцию `sum`, которая возвращает сумму двух чисел, которые возвращает функции `positiveNumber` и `negativeNumber`.

С созданием первых двух функций возникнуть сложностей не должно.

Принципиально похожий пример:

```js
function getFirstNumber() {
  return 1
}

function getSecondNumber() {
  return 2
}

function calculation() {
  return getFirstNumber() * getSecondNumber()
}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun here
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function positiveNumber() {
  return 123;
}

function negativeNumber() {
  return -321;
}

function sum() {
  return positiveNumber() + negativeNumber();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function positiveNumber', () => {
  expect(positiveNumber).to.be.a('function');
});

it('Created function negativeNumber', () => {
  expect(positiveNumber).to.be.a('function');
});

it('Created function sum', () => {
  expect(sum).to.be.a('function');
});

it('Function positiveNumber returns correct result', () => {
  expect(positiveNumber()).eq(123);
});

it('Function negativeNumber returns correct result', () => {
  expect(negativeNumber()).eq(-321);
});

it('Function sum returns correct result', () => {
  expect(sum()).eq(-198);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
