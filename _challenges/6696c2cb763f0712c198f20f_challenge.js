// NAMEEN:
// NAMERU:Разделить положительные и отрицательных числа в подмассивы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Разделить массив целых чисел на два массива: массив положительных чисел и массив отрицательных чисел.
Функция `splitPosNeg` принимает массив целых чисел и возвращает массив, содержащий два подмассива.
В первом подмассиве должны быть только положительные числа, а во втором только отрицательные.
Если в массиве есть нули, то они не входят ни в один из подмассивов.
Порядок чисел в подмассивах должен быть такой же, как и в исходном массиве.

Если входящий массив пустой или в нем нет ни положительных, ни отрицательных чисел, то вернуть пустой массив.

Примеры вызова функции:
```javascript
splitPosNeg([1, 2, 3, -1, -2, -3, 0]); // [[1, 2, 3], [-1, -2, -3]]
splitPosNeg([1, 2, 3]); // [[1, 2, 3], []]
splitPosNeg([-1, -2, -3]); // [[], [-1, -2, -3]]
splitPosNeg([0, 0 , 0]); // []
splitPosNeg([]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function splitPosNeg(arr) {
  const positive = [];
  const negative = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive.push(arr[i]);
    } else if (arr[i] < 0) {
      negative.push(arr[i]);
    }
  }

  if (arr.length === 0 || (positive.length === 0 && negative.length === 0)) {
    return [];
  }

  return [positive, negative];

}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function splitPosNeg', () => {
  expect(splitPosNeg).to.be.a('function');
});

it('splitPosNeg([1, 2, 3, -1, -2, -3, 0]) should return [[1, 2, 3], [-1, -2, -3]]', () => {
  expect(splitPosNeg([1, 2, 3, -1, -2, -3, 0])).to.be.eql([[1, 2, 3], [-1, -2, -3]]);
});

it('splitPosNeg([1, 2, 3]) should return [[1, 2, 3], []]', () => {
  expect(splitPosNeg([1, 2, 3])).to.be.eql([[1, 2, 3], []]);
});

it('splitPosNeg([-1, -2, -3]) should return [[], [-1, -2, -3]]', () => {
  expect(splitPosNeg([-1, -2, -3])).to.be.eql([[], [-1, -2, -3]]);
});

it('splitPosNeg([0, 0 , 0]) should return []', () => {
  expect(splitPosNeg([0, 0 , 0])).to.be.eql([]);
});

it('splitPosNeg([]) should return []', () => {
  expect(splitPosNeg([])).to.be.eql([]);
});

it('splitPosNeg([1, -2, 0, 3, 11, 0, -22, -3, 0, -60, 110]) should return [[1, 3, 11, 110], [-2, -22, -3, -60]]', () => {
  expect(splitPosNeg([1, -2, 0, 3, 11, 0, -22, -3, 0, -60, 110])).to.be.eql([[1, 3, 11, 110], [-2, -22, -3, -60]]);
});

it('splitPosNeg([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []]', () => {
  expect(splitPosNeg([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.be.eql([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []]);
});

it('splitPosNeg([0,-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]) should return [[], [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]]', () => {
  expect(splitPosNeg([0,-1, -2, -3, -4, -5, -6, -7, -8, -9, -10])).to.be.eql([[], [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]]);
});

it('splitPosNeg([0]) should return []', () => {
  expect(splitPosNeg([0])).to.be.eql([]);
});

it('splitPosNeg([1]) should return [[1], []]', () => {
  expect(splitPosNeg([1])).to.be.eql([[1], []]);
});

it('splitPosNeg([-1]) should return [[], [-1]]', () => {
  expect(splitPosNeg([-1])).to.be.eql([[], [-1]]);
});

it('splitPosNeg([0, -10, 0, 10, 0, -10, 0, 10, 0, -10]) should return [[10, 10], [-10, -10, -10]]', () => {
  expect(splitPosNeg([0, -10, 0, 10, 0, -10, 0, 10, 0, -10])).to.be.eql([[10, 10], [-10, -10, -10]]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
