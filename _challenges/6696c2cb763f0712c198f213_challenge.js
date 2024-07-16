// NAMEEN:
// NAMERU:Разделить массив чисел на 3 подмассива по интервалам

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `splitArray` должна принимать 3 аргумента
1. массив чисел `numbers`, который нужно разделить на 3 подмассива,
2. числа `num1` и `num2` такие, что `num1 <= `num2`, которые определяют интервалы, на которые нужно разделить массив `numbers`.

Функция должна разделить массив `numbers` на 3 подмассива таким образом, чтобы в первом подмассиве были числа из массива `numbers`, которые меньше или равны `num1`.
Во втором подмассиве должны быть числа из массива `numbers`, которые больше `num1` и меньше или равны `num2`.
В третьем подмассиве должны быть числа из массива `numbers`, которые больше `num2`.

Если массив `numbers` пустой, то функция должна вернуть пустой массив.

Примеры запуска функции:
```javascript
splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 6); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
splitArray([0, -5, 7, 4, 34, 6, -11, 8, 99], 0, 10); // [[0, -5, -11], [7, 4, 6, 8], [34, 99]]
splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 10, 20); // [[1, 2, 3, 4, 5, 6, 7, 8, 9], [], []]
splitArray([], 10, 20); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function splitArray(numbers, num1, num2) {
  const result = [[], [], []];
  for (const number of numbers) {
    if (number <= num1) {
      result[0].push(number);
    } else if (number > num1 && number <= num2) {
      result[1].push(number);
    } else if (number > num2) {
      result[2].push(number);
    }
  }
  if ( !numbers.length || (!result[0].length  && !result[1].length  && !result[2].length)) {
    return [];
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function splitArray', () => {
  expect(splitArray).to.be.a('function');
});

it('splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 6) should return [[1, 2, 3], [4, 5, 6], [7, 8, 9]]', () => {
  expect(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 6)).to.deep.equal([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
});

it('splitArray([0, -5, 7, 4, 34, 6, -11, 8, 99], 0, 10) should return [[0, -5, -11], [7, 4, 6, 8], [34, 99]]', () => {
  expect(splitArray([0, -5, 7, 4, 34, 6, -11, 8, 99], 0, 10)).to.deep.equal([[0, -5, -11], [7, 4, 6, 8], [34, 99]]);
});

it('splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 10, 20) should return [[1, 2, 3, 4, 5, 6, 7, 8, 9], [], []]', () => {
  expect(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 10, 20)).to.deep.equal([[1, 2, 3, 4, 5, 6, 7, 8, 9], [], []]);
});

it('splitArray([], 10, 20) should return []', () => {
  expect(splitArray([], 10, 20)).to.deep.equal([]);
});

it('splitArray([-1, 20, 300, -4.5, 55, 0.6, -7, 8, 0.9, -2200, 0, 777, 4, 5, -1, 8, -7], -2, 600) should return [[-4.5, -7, -2200, -7], [-1, 20, 300, 55, 0.6, 8, 0.9, 0, 4, 5, -1, 8], [777]]', () => {
  expect(splitArray([-1, 20, 300, -4.5, 55, 0.6, -7, 8, 0.9, -2200, 0, 777, 4, 5, -1, 8, -7], -2, 600)).to.deep.equal([[-4.5, -7, -2200, -7], [-1, 20, 300, 55, 0.6, 8, 0.9, 0, 4, 5, -1, 8], [777]]);
});

it('splitArray([10, 20], 10, 20) should return [[10], [20], []]', () => {
  expect(splitArray([10, 20], 10, 20)).to.deep.equal([[10], [20], []]);
});

it('splitArray([10, 20], 5, 10) should return [[], [10], [20]]', () => {
  expect(splitArray([10, 20], 5, 10)).to.deep.equal([[], [10], [20]]);
});

it('splitArray([10, 20], 20, 30) should return [[10, 20], [], []]', () => {
  expect(splitArray([10, 20], 20, 30)).to.deep.equal([[10, 20], [], []]);
});

it('splitArray([10, 20], 0, 5) should return [[], [], [10, 20]]', () => {
  expect(splitArray([10, 20], 0, 5)).to.deep.equal([[], [], [10, 20]]);
});

it('splitArray([100, -200], 0, 10) should return [[-200], [], [100 ]]', () => {
  expect(splitArray([100, -200], 0, 10)).to.deep.equal([[-200], [], [100]]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
