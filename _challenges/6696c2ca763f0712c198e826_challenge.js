// NAMEEN:
// NAMERU:Удалить элементы из двумерного массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `doubleArray` принимает двумерный массив и число.

Необходимо удалить из каждого массива заданное количество элементов с начала массива и вернуть получившийся двумерный массив.

Количество подмассивов равно 2.

Пример задания функции c двумя подмассивами:
```javascript
doubleArray([["a", "a", "a", "a", "a"], ["b", "b", "b", "b", "b"]], 2)
```

Пример запуска функции:
```javascript
doubleArray([["a", "b", "c", "d", "e"], ["f", "g", "h", "i", "j"]], 2) // [["c", "d", "e"], ["h", "i", "j"]]
doubleArray([[0, 0, 0, 0, 0], [1, 1]], 3) // [[0, 0], []]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function doubleArray(arr, num) {
  const arr1 = arr[0];
  arr1.splice(0, num)
  const arr2 = arr[1];
  arr2.splice(0, num)
  return [arr1, arr2]
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function doubleArray', () => {
  expect(doubleArray).to.be.a('function');
});

it(`doubleArray([["a", "b", "c", "d", "e"], ["f", "g", "h", "i", "j"]], 2) should return [["c", "d", "e"], ["h", "i", "j"]]`, () => {
  expect(doubleArray([["a", "b", "c", "d", "e"], ["f", "g", "h", "i", "j"]], 2)).to.eql([["c", "d", "e"], ["h", "i", "j"]]);
});

it(`doubleArray([["a", "b", "c", "d", "e"], ["f", "g", "h", "i", "j"]], 1) should return [["b", "c", "d", "e"], ["g", "h", "i", "j"]]`, () => {
  expect(doubleArray([["a", "b", "c", "d", "e"], ["f", "g", "h", "i", "j"]], 1)).to.eql([["b", "c", "d", "e"], ["g", "h", "i", "j"]]);
});

it(`doubleArray([["a"], []], 0) should return [["a"], []]`, () => {
  expect(doubleArray([["a"], []], 0)).to.eql([["a"], []]);
});

it(`doubleArray([[1, 2, 3, 4, 5], [0, '', 3, 5]], 3) should return [[4, 5], [5]]`, () => {
  expect(doubleArray([[1, 2, 3, 4, 5], [0, '', 3, 5]], 3)).to.eql([[4, 5], [5]]);
});

it(`doubleArray([[0, 0, 0, 0, 0], [1, 1]], 3) should return [[0, 0], []]`, () => {
  expect(doubleArray([[0, 0, 0, 0, 0], [1, 1]], 3)).to.eql([[0, 0], []]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
