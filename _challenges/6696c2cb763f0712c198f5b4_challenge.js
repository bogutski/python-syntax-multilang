// NAMEEN:
// NAMERU:Извлечение и объединение свойств из массива объектов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `extractAndCombineProperties`, которая принимает массив объектов.

Каждый объект содержит ключ `tags`, который ассоциируется с массивом строк (тегов).

Функция должна возвращать один массив, содержащий все теги из всех объектов, сохраняя их порядок и включая повторения.


Пример запуска функции:
```javascript
const items = [
  { tags: ['apple', 'banana'] },
  { tags: ['banana', 'cherry'] },
  { tags: ['apple', 'date'] }
];

console.log(extractAndCombineProperties(items));
// Вывод: ['apple', 'banana', 'banana', 'cherry', 'apple', 'date']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function extractAndCombineProperties(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function extractAndCombineProperties(arr) {
  return arr.flatMap(({tags}) => tags);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function extractAndCombineProperties', () => {
  expect(extractAndCombineProperties).to.be.a('function');
});

it('Function extractAndCombineProperties should include method flatMap()', () => {
  const res = extractAndCombineProperties.toString()
  expect(res).to.include('.flatMap(')
});

it('should extract and combine tags from an array of objects', () => {
  const items = [
    { tags: ['apple', 'banana'] },
    { tags: ['banana', 'cherry'] },
    { tags: ['apple', 'date'] }
  ];
  expect(extractAndCombineProperties(items)).to.deep.equal(['apple', 'banana', 'banana', 'cherry', 'apple', 'date']);
});

it('should return an empty array if the input array is empty', () => {
  expect(extractAndCombineProperties([])).to.deep.equal([]);
});

it('should handle objects with empty tags arrays', () => {
  const items = [{ tags: [] }, { tags: ['apple', 'banana'] }];
  expect(extractAndCombineProperties(items)).to.deep.equal(['apple', 'banana']);
});

it('should return an empty array if all objects have empty tags arrays', () => {
  const items = [{ tags: [] }, { tags: [] }];
  expect(extractAndCombineProperties(items)).to.deep.equal([]);
});

it('should handle single-tag arrays in all objects', () => {
  const items = [{ tags: ['apple'] }, { tags: ['banana'] }, { tags: ['cherry'] }];
  expect(extractAndCombineProperties(items)).to.deep.equal(['apple', 'banana', 'cherry']);
});

it('should not remove duplicates from the combined array', () => {
  const items = [{ tags: ['apple', 'apple'] }, { tags: ['banana', 'banana'] }];
  expect(extractAndCombineProperties(items)).to.deep.equal(['apple', 'apple', 'banana', 'banana']);
});

it('should combine tags correctly regardless of the order in the input objects', () => {
  const items = [{ tags: ['date', 'cherry'] }, { tags: ['banana', 'apple'] }, { tags: ['fig'] }];
  expect(extractAndCombineProperties(items)).to.deep.equal(['date', 'cherry', 'banana', 'apple', 'fig']);
});

it('should handle a large array of objects efficiently', () => {
  const largeArray = Array.from({ length: 1000 }, (_,) => ({ tags: ['tag1', 'tag2'] }));
  const expectedResult = Array.from({ length: 2000 }, (_, i) => i % 2 === 0 ? 'tag1' : 'tag2');
  expect(extractAndCombineProperties(largeArray)).to.deep.equal(expectedResult);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
