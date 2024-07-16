// NAMEEN:
// NAMERU:Количество положительных и отрицательных чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функцию `positiveAndNegative` так, чтобы она возвращала массив, из двух элементов.

 * первый элемент - количество положительных чисел в диапазоне от `n1` до `n2`,
 * второй элемент - количество отрицательных чисел в этом же диапазоне.

Ноль не считается ни положительным, ни отрицательным числом.

Примеры запуска функции:
```javascript
positiveAndNegative(-10, 5) // [ 5, 10 ]
positiveAndNegative(-5, 10) // [ 10, 5 ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function positiveAndNegative(n1, n2){
  const positive = 0;
  let negative = 0;
  for (let i === n1; j <= n2; i+){
    if (i > 0) positive++;
    else (i < 0) negative++;
  }
  return (positive, negative);
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function positiveAndNegative(n1, n2){
  let positive = 0;
  let negative = 0;
  for (let i = n1; i <= n2; i++){
    if (i > 0) positive++;
    else if (i < 0) negative++;
  }
  return [positive, negative];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function positiveAndNegative', () => {
  expect(positiveAndNegative).to.be.a('function');
});

it('positiveAndNegative(-10, 5) should return [ 5, 10 ]', () => {
  expect(positiveAndNegative(-10, 5)).to.deep.equal([ 5, 10 ]);
});

it('positiveAndNegative(-5, 10) should return [ 10, 5 ]', () => {
  expect(positiveAndNegative(-5, 10)).to.deep.equal([ 10, 5 ]);
});

it('positiveAndNegative(0, 15) should return [ 15, 0 ]', () => {
  expect(positiveAndNegative(0, 15)).to.deep.equal([ 15, 0 ]);
});

it('positiveAndNegative(-12, -5) should return [ 0, 8 ]', () => {
  expect(positiveAndNegative(-12, -5)).to.deep.equal([ 0, 8 ]);
});

it('positiveAndNegative(5, 5) should return [ 1, 0 ]', () => {
  expect(positiveAndNegative(5, 5)).to.deep.equal([ 1, 0 ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
