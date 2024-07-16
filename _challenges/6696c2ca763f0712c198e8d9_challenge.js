// NAMEEN:
// NAMERU:Заполнение массива отрицательными целыми числами от -n до -1.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Нужно создать функцию `negativeArray`, которая принимает одно целое положительное число `n` и возвращает массив, заполненный целыми последовательными числами от `-n` до `-1`.

Примеры запуска функции:

```javascript
negativeArray(5);   // [-5, -4, -3, -2, -1]
negativeArray(10);  // [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]
negativeArray(1);   // [-1]
negativeArray(0);   // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
func
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function negativeArray(n) {
  const result = [];
  for (let i = -n; i <= -1; i += 1) {
    result.push(i);
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function negativeArray', () => {
  expect(negativeArray).to.be.a('function');
});

it('negativeArray(5) should return [-5, -4, -3, -2, -1]', () => {
  expect(negativeArray(5)).to.deep.equal([-5, -4, -3, -2, -1]);
});

it('negativeArray(15) should return [-15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1]', () => {
  expect(negativeArray(15)).to.deep.equal([-15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1]);
});

it('negativeArray(1) should return [-1]', () => {
  expect(negativeArray(1)).to.deep.equal([-1]);
});

it('negativeArray(0) should return []', () => {
  expect(negativeArray(0)).to.deep.equal([]);
});

it('negativeArray(10) should return [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]', () => {
  expect(negativeArray(10)).to.deep.equal([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
