// NAMEEN:
// NAMERU:Найти разницу между последним и остальными числами в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `getDifference` принимает массив чисел.

Необходимо найти разницу между последним и остальными числами в массиве, то есть вычесть из последнего числа все остальные.

Пример запуска функции:
```javascript
getDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 10 - 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 = -35
getDifference([0, 0, 0, 4]); // 4 - 0 - 0 - 0 = 4
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getDifference(arr) {
  let difference=arr[arr.length-1];
  for (let i = arr.length-2; i >= 0; i--) {
    difference-=arr[i];
  }
  return difference;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getDifference', () => {
  expect(getDifference).to.be.a('function');
});

it('getDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) return -35', () => {
  expect(getDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.equal(-35);
});

it('getDifference[0, 0, 0, 4] return 4', () => {
  expect(getDifference([0, 0, 0, 4])).to.equal(4);
});

it('getDifference([8, 9, 100]) return 83', () => {
  expect(getDifference([8, 9, 100])).to.equal(83);
});

it('getDifference([1) return 1', () => {
  expect(getDifference([1])).to.equal(1);
});

it('getDifference([10, 5, 20, 3]) return -32', () => {
  expect(getDifference([10, 5, 20, 3])).to.equal(-32);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
