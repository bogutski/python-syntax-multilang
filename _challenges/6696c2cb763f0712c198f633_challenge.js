// NAMEEN:
// NAMERU:Двойная сортировка объектов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `doubleSortObjects`, которая принимает массив объектов.

Каждый объект содержит три ключа: `id`, `numericKey` (числовое значение), и `stringKey` (строковое значение).

Функция должна создать два новых массива: первый будет отсортирован по значению `numericKey` в порядке возрастания, а второй — по значению `stringKey` в порядке убывания.

Функция возвращает объект, где ключи указывают, по какому свойству была выполнена сортировка: `sortedByNumericKey`, `sortedByStringKey`, а значения — это отсортированные массивы.


Примеры запуска функции:
```javascript
console.log(doubleSortObjects([
  { id: 1, numericKey: 25, stringKey: 'apple' },
  { id: 2, numericKey: 5, stringKey: 'banana' },
  { id: 3, numericKey: 10, stringKey: 'cherry' }
]));
// Вывод:
// {
//   sortedByNumericKey: [
//     { id: 3, numericKey: 10, stringKey: 'cherry' },
//     { id: 2, numericKey: 15, stringKey: 'banana' },
//     { id: 1, numericKey: 20, stringKey: 'apple' }
//   ],
//   sortedByStringKey: [
//     { id: 3, numericKey: 10, stringKey: 'cherry' },
//     { id: 2, numericKey: 15, stringKey: 'banana' },
//     { id: 1, numericKey: 20, stringKey: 'apple' }
//   ]
// }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function doubleSortObjects(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function doubleSortObjects(arr) {
  const sortedByNumericKey = arr.toSorted((a, b) => a.numericKey - b.numericKey)
  const sortedByStringKey = arr.toSorted((a, b) => b.stringKey.localeCompare(a.stringKey))
  return {sortedByNumericKey, sortedByStringKey};
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSorted = function(compareFunction){
  const newArray = this.slice()
  if(compareFunction) return newArray.sort(compareFunction)
  else return newArray.sort()
}

it('Created function doubleSortObjects', () => {
  expect(doubleSortObjects).to.be.a('function');
});

it('Function doubleSortObjects should include method toSorted()', () => {
  const res = doubleSortObjects.toString()
  expect(res).to.include('.toSorted(')
});

it('Function doubleSortObjects should not include method sort()', () => {
  const res = doubleSortObjects.toString()
  expect(res).to.not.include('.sort(')
});

it("doubleSortObjects sorts array by numericKey ascending", () => {
  const input = [
    { id: 1, numericKey: 20, stringKey: 'apple' },
    { id: 2, numericKey: 15, stringKey: 'banana' },
    { id: 3, numericKey: 10, stringKey: 'cherry' }
  ];
  const result = doubleSortObjects(input);
  expect(result.sortedByNumericKey).to.deep.equal([
    { id: 3, numericKey: 10, stringKey: 'cherry' },
    { id: 2, numericKey: 15, stringKey: 'banana' },
    { id: 1, numericKey: 20, stringKey: 'apple' }
  ]);
});

it("doubleSortObjects sorts array by stringKey descending", () => {
  const input = [
    { id: 1, numericKey: 20, stringKey: 'apple' },
    { id: 2, numericKey: 15, stringKey: 'banana' },
    { id: 3, numericKey: 10, stringKey: 'cherry' }
  ];
  const result = doubleSortObjects(input);
  expect(result.sortedByStringKey).to.deep.equal([
    { id: 3, numericKey: 10, stringKey: 'cherry' },
    { id: 2, numericKey: 15, stringKey: 'banana' },
    { id: 1, numericKey: 20, stringKey: 'apple' }
  ]);
});

it("doubleSortObjects handles empty array correctly", () => {
  expect(doubleSortObjects([])).to.deep.equal({ sortedByNumericKey: [], sortedByStringKey: [] });
});

it("doubleSortObjects handles single item array correctly", () => {
  const input = [{ id: 1, numericKey: 10, stringKey: 'apple' }];
  const result = doubleSortObjects(input);
  expect(result.sortedByNumericKey).to.deep.equal([{ id: 1, numericKey: 10, stringKey: 'apple' }]);
  expect(result.sortedByStringKey).to.deep.equal([{ id: 1, numericKey: 10, stringKey: 'apple' }]);
});

it("doubleSortObjects verifies that sorting by numericKey does not affect stringKey order in the resulting object", () => {
  const input = [
    { id: 1, numericKey: 10, stringKey: 'cherry' },
    { id: 2, numericKey: 5, stringKey: 'banana' },
    { id: 3, numericKey: 20, stringKey: 'apple' }
  ];
  const result = doubleSortObjects(input);
  expect(result.sortedByNumericKey).to.deep.equal([
    { id: 2, numericKey: 5, stringKey: 'banana' },
    { id: 1, numericKey: 10, stringKey: 'cherry' },
    { id: 3, numericKey: 20, stringKey: 'apple' }
  ]);
  // Verifying that the stringKey order remains intact within the sortedByNumericKey array
  expect(result.sortedByNumericKey.map(item => item.stringKey)).to.deep.equal(['banana', 'cherry', 'apple']);
});

it("doubleSortObjects handles numericKey ties by maintaining original order", () => {
  const input = [
    { id: 1, numericKey: 25, stringKey: 'banana' },
    { id: 2, numericKey: 25, stringKey: 'apple' },
    { id: 3, numericKey: 25, stringKey: 'cherry' }
  ];
  const result = doubleSortObjects(input);
  expect(result.sortedByNumericKey).to.deep.equal([
    { id: 1, numericKey: 25, stringKey: 'banana' },
    { id: 2, numericKey: 25, stringKey: 'apple' },
    { id: 3, numericKey: 25, stringKey: 'cherry' }
  ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
