// NAMEEN:
// NAMERU:Массив от числа до нуля

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `fromNumberToZero` принимает число `num`.

Функция должна вернуть массив, который содержит все числа от `num` до `0` включительно.

Если `num` меньше `0`, то функция должна вернуть пустой массив.

Примеры запуска функции:
```javascript
fromNumberToZero(5) // [5, 4, 3, 2, 1, 0]
fromNumberToZero(10) // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fromNumberToZero(num) {
  let arr = []
  for (let i = num; i >= 0; i--) {
    arr.push(i)
  }
  return arr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function fromNumberToZero', () => {
  expect(fromNumberToZero).to.be.a('function');
});

it('fromNumberToZero(5) should return [5, 4, 3, 2, 1, 0]', () => {
  expect(fromNumberToZero(5)).eql([5, 4, 3, 2, 1, 0]);
});

it('fromNumberToZero(10) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]', () => {
  expect(fromNumberToZero(10)).eql([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
});

it('fromNumberToZero(0) should return [0]', () => {
  expect(fromNumberToZero(0)).eql([0]);
});

it('fromNumberToZero(-5) should return []', () => {
  expect(fromNumberToZero(-5)).eql([]);
});

it('fromNumberToZero(2) should return [2, 1, 0]', () => {
  expect(fromNumberToZero(2)).eql([2, 1, 0]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
