// NAMEEN:
// NAMERU:Массив квадратов чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `arrayOfSquares` принимает один параметр `n1` - число.

Функция должна возвращать массив, состоящий из квадратов чисел от `n1` до `1` включительно в порядке убывания.

Если `n1` меньше `1`, то функция должна возвращать пустой массив.

Примеры запуска функции:
```javascript
arrayOfSquares(5) // [ 25, 16, 9, 4, 1 ]
arrayOfSquares(-5) // []
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function arrayOfSquares(n1) {
  let arr = [];
  for (let i = n1; i >= 1; i--) {
    arr.push(i ** 2);
  }
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function arrayOfSquares', () => {
  expect(arrayOfSquares).to.be.a('function');
});

it('arrayOfSquares(5) should return [ 25, 16, 9, 4, 1 ]', () => {
  expect(arrayOfSquares(5)).to.deep.equal([25, 16, 9, 4, 1]);
});

it('arrayOfSquares(10) should return [ 100, 81, 64, 49, 36, 25, 16, 9, 4, 1 ]', () => {
  expect(arrayOfSquares(10)).to.deep.equal([100, 81, 64, 49, 36, 25, 16, 9, 4, 1]);
});

it('arrayOfSquares(1) should return [ 1 ]', () => {
  expect(arrayOfSquares(1)).to.deep.equal([1]);
});

it('arrayOfSquares(0) should return []', () => {
  expect(arrayOfSquares(0)).to.deep.equal([]);
});

it('arrayOfSquares(-5) should return []', () => {
  expect(arrayOfSquares(-5)).to.deep.equal([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
