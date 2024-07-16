// NAMEEN:
// NAMERU:Заполнить массив последовательными числами от n до m

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `fillArray`, которая принимает два целых числа `n` и `m`, таких что `n` <= `m`, и возвращает массив, заполненный целыми последовательными числами от `n` до `m`.

Примеры запуска функции:

```javascript
fillArray(1, 5);   // [1, 2, 3, 4, 5]
fillArray(-5, 1);  // [-5, -4, -3, -2, -1, 0, 1]
fillArray(5, 5);   // [5]
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function fillArray(n, m) {
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fillArray(n, m) {
  const result = [];
  for (let i = n; i <= m; i += 1) {
    result.push(i);
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function fillArray', () => {
  expect(fillArray).to.be.a('function');
});

it(`fillArray(1, 5) should return [1, 2, 3, 4, 5]`, () => {
  expect(fillArray(1, 5)).to.deep.equal([1, 2, 3, 4, 5]);
});

it(`fillArray(-3, 5) should return [-3, -2, -1, 0, 1, 2, 3, 4, 5]`, () => {
  expect(fillArray(-3, 5)).to.deep.equal([-3, -2, -1, 0, 1, 2, 3, 4, 5]);
});

it(`fillArray(1, 1) should return [1]`, () => {
  expect(fillArray(1, 1)).to.deep.equal([1]);
});

it(`fillArray(-10, 10) should return [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, () => {
  expect(fillArray(-10, 10)).to.deep.equal([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
