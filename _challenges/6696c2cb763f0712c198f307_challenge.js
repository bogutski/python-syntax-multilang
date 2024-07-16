// NAMEEN:
// NAMERU:Добавить элементы в конец массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `appendElements` принимает массив и список элементов. Она должна добавить эти элементы в конец массива и вернуть новую длину массива.

Количество элементов на добавление будет разный.

Примеры запуска функции:
```javascript
appendElements([], 1, 2)  // возвращает 2, массив теперь [1, 2]
appendElements([1, 2, 3]) // возвращает 1, массив теперь [1, 2, 3]
appendElements([1, 2, 3], 4, 5) // возвращает 5, массив теперь [1, 2, 3, 4, 5]
appendElements(['a', 'b'], 'c', 'd', 'e') // возвращает 5, массив теперь ['a', 'b', 'c', 'd', 'e']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function appendElements(arr, ...elements) {
  return arr.push(...elements);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function appendElements', () => {
  expect(appendElements).to.be.a('function');
});

it('appendElements([1, 2, 3], 4, 5) should return 5', () => {
  expect(appendElements([1, 2, 3], 4, 5)).to.equal(5);
});

it('appendElements(["a", "b"], "c", "d", "e") should return 5', () => {
  expect(appendElements(['a', 'b'], 'c', 'd', 'e')).to.equal(5);
});

it('appendElements([], "first", "second") should return 2', () => {
  expect(appendElements([], 'first', 'second')).to.equal(2);
});

it('appendElements([0], 1) should return 2', () => {
  expect(appendElements([0], 1)).to.equal(2);
});

it('appendElements(["x", "y"], "z") should return 3', () => {
  expect(appendElements(['x', 'y'], 'z')).to.equal(3);
});
it('appendElements with an empty array and no elements to add should return 0', () => {
  expect(appendElements([])).to.equal(0);
});

it('appendElements with null values should correctly add them to the array', () => {
  expect(appendElements([1, 2], null, null)).to.equal(4);
});

it('appendElements should correctly handle adding arrays as elements', () => {
  expect(appendElements([1], [2, 3])).to.equal(2);
});

it('appendElements should correctly handle adding an object as an element', () => {
  const arrLength = appendElements([1, 2], {a: 3});
  expect(arrLength).to.equal(3);
  expect(typeof arrLength).to.equal('number');
});

it('appendElements should maintain the order of added elements', () => {
  const originalArray = ['start'];
  const newArrayLength = appendElements(originalArray, 'middle', 'end');
  expect(newArrayLength).to.equal(3);
  expect(originalArray[1]).to.equal('middle');
  expect(originalArray[2]).to.equal('end');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
