// NAMEEN:
// NAMERU:Добавление массива в качестве нового элемента в другой массив

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `addArray`, которая должна принимать два массива `arr1` и `arr2`, содержащие значения смешанных типов.

Добавьте массив `arr2` как последний элемент в массив `arr1`.

Функция должна вернуть измененный массив `arr1`.

Пример добавления одного массива, как элемента, в другой массив:

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

//добавим массив array2 как новый элемент в конец массива array1
array1.push(array2);

console.log(array1);    // [1, 2, 3, [4, 5, 6]]
console.log(array1[3]); // [4, 5, 6]
```

Примеры запуска функции:

```javascript
addArray([1, 2, 3], [4, 5, 6]);         // [1, 2, 3, [4, 5, 6]]
addArray([10], [false, true, 0, 'ed']); // [10, [false, true, 0, 'ed']]
addArray([], [false, 5, -6, 'd']);      // [[false, 5, -6, 'd']]
addArray([1, 2, 3], []);                // [1, 2, 3, []]
addArray([], []);                       // [[]]
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
func
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addArray(arr1, arr2) {
  arr1.push(arr2);
  return arr1;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function addArray', () => {
  expect(addArray).to.be.a('function');
});

it('addArray([1, 2, 3, 4, 5], [6, 7]) should return [1, 2, 3, 4, 5, [6, 7]]', () => {
  expect(addArray([1, 2, 3, 4, 5], [6, 7])).to.deep.equal([1, 2, 3, 4, 5, [6, 7]]);
});

it(`addArray([11, -2, "rust", false, 5.45], ["e", -33, true, 0]) should return [11, -2, "rust", false, 5.45, ["e", -33, true, 0]]`, () => {
  expect(addArray([11, -2, 'rust', false, 5.45], ['e', -33, true, 0])).to.deep.equal([11, -2, 'rust', false, 5.45, ['e', -33, true, 0]]);
});

it('addArray([false, 0.25], []) should return [false, 0.25, []]', () => {
  expect(addArray([false, 0.25], [])).to.deep.equal([false, 0.25, []]);
});

it('addArray([], []) should return [[]]', () => {
  expect(addArray([], [])).to.deep.equal([[]]);
});

it(`addArray([], ["good", "time"]) should return [["good", "time"]]`, () => {
  expect(addArray([], ['good', 'time'])).to.deep.equal([['good', 'time']]);
});

it(`addArray([-21, "test"], [true]) should return [-21, "test", [true]]`, () => {
  expect(addArray([-21, 'test'], [true])).to.deep.equal([-21, 'test', [true]]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
