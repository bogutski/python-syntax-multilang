// NAMEEN:
// NAMERU:Сортировка и обращение массива по индивидуальным критериям

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortAndReverseByCriteria`, которая принимает массив объектов и строку, представляющую ключ объекта.

Функция должна сортировать массив по значению этого ключа в порядке убывания. После сортировки, функция должна перевернуть порядок объектов в массиве и вернуть результат.


Примеры запуска функции:
```javascript
const items = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jim", age: 20 }
];
console.log(sortAndReverseByCriteria(items, 'age'));
// [{ name: "John", age: 25 },
//  { name: "Jane", age: 30 },
//  { name: "Jim", age: 20 }]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortAndReverseByCriteria(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortAndReverseByCriteria(array, key) {
  return array.toSorted((a, b) => a[key] - b[key]).reverse();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sortAndReverseByCriteria', () => {
  expect(sortAndReverseByCriteria).to.be.a('function');
});

it("Original array should not be modified", () => {
  const array  = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Jim", age: 20 }
  ];
  sortAndReverseByCriteria(array, 'age')
  expect(array).to.deep.equal([
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Jim", age: 20 }
  ]);
});

it("sortAndReverseByCriteria should have the reverse method", () => {
  const result = sortAndReverseByCriteria.toString();
  expect(result).to.include('.reverse()');
});

it("sortAndReverseByCriteria([{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }, { name: 'Jim', age: 20 }], 'age') should return [{ name: 'Jane', age: 30 }, { name: 'John', age: 25 }, { name: 'Jim', age: 20 }]", () => {
  expect(sortAndReverseByCriteria([{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }, { name: 'Jim', age: 20 }], 'age'))
      .to.deep.equal([{ name: 'Jane', age: 30 }, { name: 'John', age: 25 }, { name: 'Jim', age: 20 }]);
});

it("sortAndReverseByCriteria([{ name: 'Apple', value: 2 }, { name: 'Banana', value: 3 }, { name: 'Cherry', value: 1 }], 'value') should return [{ name: 'Banana', value: 3 }, { name: 'Apple', value: 2 }, { name: 'Cherry', value: 1 }]", () => {
  expect(sortAndReverseByCriteria([{ name: 'Apple', value: 2 }, { name: 'Banana', value: 3 }, { name: 'Cherry', value: 1 }], 'value'))
      .to.deep.equal([{ name: 'Banana', value: 3 }, { name: 'Apple', value: 2 }, { name: 'Cherry', value: 1 }]);
});

it("sortAndReverseByCriteria([], 'value') should return an empty array", () => {
  expect(sortAndReverseByCriteria([], 'value')).to.deep.equal([]);
});

it("sortAndReverseByCriteria([{ name: 'Alpha' }, { name: 'Beta' }], 'name') should return [{ name: 'Beta' }, { name: 'Alpha' }]", () => {
  expect(sortAndReverseByCriteria([{ name: 'Alpha' }, { name: 'Beta' }], 'name')).to.deep.equal([{ name: 'Beta' }, { name: 'Alpha' }]);
});

it("sortAndReverseByCriteria([{ name: 'Dog', age: 5 }, { name: 'Cat', age: 7 }, { name: 'Bird', age: 3 }], 'age') should return [{ name: 'Cat', age: 7 }, { name: 'Dog', age: 5 }, { name: 'Bird', age: 3 }]", () => {
  expect(sortAndReverseByCriteria([{ name: 'Dog', age: 5 }, { name: 'Cat', age: 7 }, { name: 'Bird', age: 3 }], 'age'))
      .to.deep.equal([{ name: 'Cat', age: 7 }, { name: 'Dog', age: 5 }, { name: 'Bird', age: 3 }]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
