// NAMEEN:
// NAMERU:Извлечение уникальных идентификаторов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `extractUniqueIDs`, которая принимает массив объектов.

Каждый объект содержит ключ `ids`, который ассоциируется с массивом идентификаторов (целых чисел).

Функция должна возвращать один массив, содержащий все уникальные идентификаторы из всех объектов, сохраняя порядок их первого появления.


Пример запуска функции:
```javascript
const records = [
  { ids: [101, 102] },
  { ids: [102, 103, 104] },
  { ids: [104, 105, 106] }
];

console.log(extractUniqueIDs(records));
// Вывод: [101, 102, 103, 104, 105, 106]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function extractUniqueIDs(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function extractUniqueIDs(arr) {
  const getAllIds = arr.flatMap(obj => obj.ids)
  let res = []

  getAllIds.forEach((el, index, array) => {
    if(array.indexOf(el, index + 1) === -1) res.push(el)
  })

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function extractUniqueIDs', () => {
  expect(extractUniqueIDs).to.be.a('function');
});

it('should extract and combine unique ids from an array of objects', () => {
  const records = [
    { ids: [101, 102] },
    { ids: [102, 103, 104] },
    { ids: [104, 105, 106] }
  ];
  expect(extractUniqueIDs(records)).to.deep.equal([101, 102, 103, 104, 105, 106]);
});

it('should return an empty array if the input array is empty', () => {
  expect(extractUniqueIDs([])).to.deep.equal([]);
});

it('should handle objects with empty id arrays', () => {
  const records = [{ ids: [] }, { ids: [101, 102] }];
  expect(extractUniqueIDs(records)).to.deep.equal([101, 102]);
});

it('should return an empty array if all objects have empty id arrays', () => {
  const records = [{ ids: [] }, { ids: [] }];
  expect(extractUniqueIDs(records)).to.deep.equal([]);
});

it('should handle single-id arrays in all objects', () => {
  const records = [{ ids: [101] }, { ids: [102] }, { ids: [103] }];
  expect(extractUniqueIDs(records)).to.deep.equal([101, 102, 103]);
});

it('should not include duplicates from the combined array', () => {
  const records = [{ ids: [101, 101] }, { ids: [102, 102] }];
  expect(extractUniqueIDs(records)).to.deep.equal([101, 102]);
});

it('should combine ids correctly regardless of the order in the input objects', () => {
  const records = [{ ids: [106, 105] }, { ids: [104, 103] }, { ids: [102, 101] }];
  expect(extractUniqueIDs(records)).to.deep.equal([106, 105, 104, 103, 102, 101]);
});

it('should handle a large array of objects efficiently', () => {
  const largeArray = Array.from({ length: 1000 }, (_, i) => ({ ids: [i, i + 1] }));
  const expectedResult = Array.from({ length: 1001 }, (_, i) => i);
  expect(extractUniqueIDs(largeArray)).to.deep.equal(expectedResult);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
