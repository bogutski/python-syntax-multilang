// NAMEEN:
// NAMERU:Создание шахматной доски

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `createChessBoard`, которая принимает один аргумент: размер стороны шахматной доски `n`.

Функция должна возвращать двумерный массив, представляющий шахматную доску размером `n x n`, где строка массива содержит строки доски, и каждый элемент строки представляет собой `B` для черной ячейки и `W` для белой ячейки.


Примеры Запуска Функции:
```javascript
console.log(createChessBoard(2));
// [
//   ['B', 'W'],
//   ['W', 'B']
// ]

console.log(createChessBoard(3));
// [
//   ['B', 'W', 'B'],
//   ['W', 'B', 'W'],
//   ['B', 'W', 'B']
// ]

console.log(createChessBoard(4));
// [
//   [ 'B', 'W', 'B', 'W' ],
//   [ 'W', 'B', 'W', 'B' ],
//   [ 'B', 'W', 'B', 'W' ],
//   [ 'W', 'B', 'W', 'B' ]
// ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function createChessBoard(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function createChessBoard(n) {
  let res = []

  for(let i = 0; i < n; i++){
    let chunk = []
    for(let j = 0; j < n; j++){

      if(i % 2){
        if(j % 2) chunk.push('B')
        else chunk.push('W')
      }

      if(i % 2 === 0){
        if(j % 2) chunk.push('W')
        else chunk.push('B')
      }
    }

    res.push(chunk)
    chunk = []
  }

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function createChessBoard', () => {
  expect(createChessBoard).to.be.a('function');
});

it("createChessBoard(2) should return [['B', 'W'], ['W', 'B']]", function() {
  expect(createChessBoard(2)).to.deep.equal([['B', 'W'], ['W', 'B']]);
});

it("createChessBoard(3) should return [['B', 'W', 'B'], ['W', 'B', 'W'], ['B', 'W', 'B']]", function() {
  expect(createChessBoard(3)).to.deep.equal([['B', 'W', 'B'], ['W', 'B', 'W'], ['B', 'W', 'B']]);
});

it("createChessBoard(1) should return [['B']]", function() {
  expect(createChessBoard(1)).to.deep.equal([['B']]);
});

it("createChessBoard(4) should create a 4x4 chess board", function() {
  expect(createChessBoard(4)).to.deep.equal([['B', 'W', 'B', 'W'], ['W', 'B', 'W', 'B'], ['B', 'W', 'B', 'W'], ['W', 'B', 'W', 'B']]);
});

it("createChessBoard(5) should create a 5x5 chess board", function() {
  expect(createChessBoard(5)).to.deep.equal([['B', 'W', 'B', 'W', 'B'], ['W', 'B', 'W', 'B', 'W'], ['B', 'W', 'B', 'W', 'B'], ['W', 'B', 'W', 'B', 'W'], ['B', 'W', 'B', 'W', 'B']]);
});

it("createChessBoard(0) should return an empty array", function() {
  expect(createChessBoard(0)).to.deep.equal([]);
});

it("createChessBoard(6) includes 6 'W' in the first two rows", function() {
  const board = createChessBoard(6);
  const countW = board.slice(0, 2).flat().filter(x => x === 'W').length;
  expect(countW).to.equal(6);
});

it("createChessBoard(7) includes 7 'B' in the last row", function() {
  const board = createChessBoard(7);
  const lastRowBCount = board[board.length - 1].filter(x => x === 'B').length;
  expect(lastRowBCount).to.equal(4);
});

it("createChessBoard(8) should have alternating 'B' and 'W' starting with 'B' in top left corner", function() {
  const board = createChessBoard(8);
  let isValidChessBoard = true;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        if (board[i][j] !== 'B') {
          isValidChessBoard = false;
          break;
        }
      } else {
        if (board[i][j] !== 'W') {
          isValidChessBoard = false;
          break;
        }
      }
    }
    if (!isValidChessBoard) break;
  }
  expect(isValidChessBoard).to.be.true;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
