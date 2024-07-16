// NAMEEN:
// NAMERU:Сколько видов элементов в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countEachEl` принимает массив целых чисел и возвращает строку вида `Array has NN elements and N kinds of them",

где NN - число элементов массива, а второе - количество встречающихся видов элементов в массиве.

Пример запуска функции:
```javascript
countEachEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // "Array has 10 elements and 10 kinds of them"
countEachEl([1, 1, 1, 1, 1])                 // "Array has 5 elements and 1 kinds of them"
countEachEl([])                              // "Array has 0 elements and 0 kinds of them"
countEachEl([1, 1, 1, 2, 2, 2])  // "Array has 6 elements and 2 kinds of them"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countEachEl(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]]) result[arr[i]]++;
    else result[arr[i]] = 1;
  }
  return `Array has ${arr.length} elements and ${Object.keys(result).length} kinds of them`
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countEachEl', () => {
  expect(countEachEl).to.be.a('function');
});

it('countEachEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return "Array has 10 elements and 10 kinds of them"', () => {
  expect(countEachEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.equal('Array has 10 elements and 10 kinds of them');
});

it('countEachEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]) should return "Array has 11 elements and 10 kinds of them"', () => {
  expect(countEachEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10])).to.equal('Array has 11 elements and 10 kinds of them');
});

it('countEachEl([1]) should return "Array has 1 elements and 1 kinds of them"', () => {
  expect(countEachEl([1])).to.equal('Array has 1 elements and 1 kinds of them');
});

it('countEachEl([]) should return "Array has 0 elements and 0 kinds of them"', () => {
  expect(countEachEl([])).to.equal('Array has 0 elements and 0 kinds of them');
});

it('countEachEl([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) should return "Array has 10 elements and 1 kinds of them"', () => {
  expect(countEachEl([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).to.equal('Array has 10 elements and 1 kinds of them');
});

it('countEachEl([-1, 2, -1, 4, -4, 2]) should return "Array has 6 elements and 4 kinds of them"', () => {
  expect(countEachEl([-1, 2, -1, 4, -4, 2])).to.equal('Array has 6 elements and 4 kinds of them');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
