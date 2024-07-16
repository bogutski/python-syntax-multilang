// NAMEEN:
// NAMERU:Заполнение диагонали матрицы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `fillMatrixDiagonal`, которая принимает два аргумента:

* размерность квадратной матрицы `n`,
* значение `value`, которым будет заполнена главная диагональ матрицы.

Функция должна создать и вернуть двумерный массив размером `n x n`, где каждый элемент главной диагонали равен `value`, а все остальные элементы равны `0`.

Используйте метод `Array.prototype.fill()` для инициализации массива и элементов.


Примеры запуска функции:
```javascript
console.log(fillMatrixDiagonal(3, 1));
// [
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1]
// ]

console.log(fillMatrixDiagonal(2, 'x'));
// [
//   ['x', 0],
//   [0, 'x']
// ]

console.log(fillMatrixDiagonal(4, true));
// [
//   [true, 0, 0, 0],
//   [0, true, 0, 0],
//   [0, 0, true, 0],
//   [0, 0, 0, true]
// ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function fillMatrixDiagonal(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fillMatrixDiagonal(n, value) {
  let res = []

  for(let i = 0; i < n; i++){
    let chunk = new Array(n).fill(0)
    chunk[i] = value

    res.push(chunk)
  }

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function fillMatrixDiagonal', () => {
  expect(fillMatrixDiagonal).to.be.a('function');
});

it('Function fillMatrixDiagonal should include method fill()', () => {
  const res = fillMatrixDiagonal.toString()
  expect(res).to.include('.fill(')
});

it("fillMatrixDiagonal(3, 1) should create a 3x3 matrix with 1s on the diagonal", function() {
  expect(fillMatrixDiagonal(3, 1)).to.deep.equal([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
});

it("fillMatrixDiagonal(2, 'x') should create a 2x2 matrix with 'x' on the diagonal", function() {
  expect(fillMatrixDiagonal(2, 'x')).to.deep.equal([['x', 0], [0, 'x']]);
});

it("fillMatrixDiagonal(4, true) should create a 4x4 matrix with true on the diagonal", function() {
  expect(fillMatrixDiagonal(4, true)).to.deep.equal([[true, 0, 0, 0], [0, true, 0, 0], [0, 0, true, 0], [0, 0, 0, true]]);
});

it("fillMatrixDiagonal(1, 5) should return a single element matrix [[5]]", function() {
  expect(fillMatrixDiagonal(1, 5)).to.deep.equal([[5]]);
});

it("fillMatrixDiagonal(0, 'empty') should return an empty array", function() {
  expect(fillMatrixDiagonal(0, 'empty')).to.deep.equal([]);
});

it("fillMatrixDiagonal(5, 2) should have 2 as each element on its diagonal", function() {
  const matrix = fillMatrixDiagonal(5, 2);
  const diagonalValues = matrix.map((row, i) => row[i]);
  expect(diagonalValues.every(value => value === 2)).to.be.true;
});

it("fillMatrixDiagonal(3, false) should create a matrix with false on the diagonal and 0 elsewhere", function() {
  expect(fillMatrixDiagonal(3, false)).to.deep.equal([[false, 0, 0], [0, false, 0], [0, 0, false]]);
});

it("fillMatrixDiagonal(2, null) should create a 2x2 matrix with null on the diagonal", function() {
  expect(fillMatrixDiagonal(2, null)).to.deep.equal([[null, 0], [0, null]]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
