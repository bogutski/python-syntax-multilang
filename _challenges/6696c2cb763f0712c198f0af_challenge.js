// NAMEEN:
// NAMERU:Найти и удвоить числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `doubleNumber` принимает массив, содержащий разные типы данных.

Необходимо удвоить все числа в массиве и вернуть массив с измененными данными.

Пример запуска функции:
```javascript
doubleNumber([1, 2, 3]) // [2, 4, 6]
doubleNumber([1, "hello", true, 5]) // [2, "hello", true, 10]
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function doubleNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number')
    arr[i] *= 2;
  }
  return arr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function doubleNumber', () => {
  expect(doubleNumber).to.be.a('function');
});

it('doubleNumber([1, 2, 3]) returns [2, 4, 6]', () => {
  expect(doubleNumber([1, 2, 3])).to.deep.equal([2, 4, 6]);
});

it('doubleNumber([1, "hello", true, 5]) returns [2, "hello", true, 10]', () => {
  expect(doubleNumber([1, "hello", true, 5])).to.deep.equal([2, "hello", true, 10]);
});

it('doubleNumber(["hello", true, NaN]) returns ["hello", true, NaN]', () => {
  expect(doubleNumber(["hello", true, NaN])).to.deep.equal(["hello", true, NaN]);
});

it('doubleNumber([]) returns []', () => {
  expect(doubleNumber([])).to.deep.equal([]);
});

it('doubleNumber(["a", "b", "c", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) returns ["a", "b", "c", 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]', () => {
  expect(doubleNumber(["a", "b", "c", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.deep.equal(["a", "b", "c", 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
