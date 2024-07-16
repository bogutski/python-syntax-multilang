// NAMEEN:
// NAMERU:Расчет среднего рейтинга продуктов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `calculateAverageRatings`, которая принимает массив объектов, каждый из которых содержит массив рейтингов.

Функция должна использовать `flatMap` для объединения всех рейтингов в один массив, а затем вычислить и вернуть средний рейтинг всех продуктов.

Если в переданном массиве либо в объекте массивы пустые, верните строку `Array is empty`.


Пример запуска функции:
```javascript
const products = [
  { ratings: [5, 4, 3] },
  { ratings: [3, 2, 1] },
  { ratings: [4, 5] }
];
console.log(calculateAverageRatings(products)); // 3.375

console.log(calculateAverageRatings([])) // "Array is empty"
console.log(calculateAverageRatings([{ ratings: [] }])) // "Array is empty"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function calculateAverageRatings(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function calculateAverageRatings(product) {
  const allRating = product.flatMap(arr => arr.ratings)
  if(!allRating.length) return 'Array is empty';

  const sum = allRating.reduce((acc, el) => acc + el)
  return sum / allRating.length;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function calculateAverageRatings', () => {
  expect(calculateAverageRatings).to.be.a('function');
});

it('Function calculateAverageRatings should include method flatMap()', () => {
  const res = calculateAverageRatings.toString()
  expect(res).to.include('.flatMap(')
});

it('calculateAverageRatings([{ ratings: [5, 4, 3] }, { ratings: [3, 2, 1] }, { ratings: [4, 5] }]) should return 3.375', () => {
  const products = [
    { ratings: [5, 4, 3] },
    { ratings: [3, 2, 1] },
    { ratings: [4, 5] }
  ];
  expect(calculateAverageRatings(products)).to.equal(3.375);
});

it('calculateAverageRatings([]) should return "Array is empty"', () => {
  expect(calculateAverageRatings([])).to.equal('Array is empty');
});

it('calculateAverageRatings([{ ratings: [] }]) should return "Array is empty"', () => {
  const products = [{ ratings: [] }];
  expect(calculateAverageRatings(products)).to.equal('Array is empty');
});

it('calculateAverageRatings([{ ratings: [10] }, { ratings: [20] }, { ratings: [30] }]) should return 20', () => {
  const products = [{ ratings: [10] }, { ratings: [20] }, { ratings: [30] }];
  expect(calculateAverageRatings(products)).to.equal(20);
});

it('calculateAverageRatings([{ ratings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]) should return 5.5', () => {
  const products = [{ ratings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }];
  expect(calculateAverageRatings(products)).to.equal(5.5);
});

it('calculateAverageRatings([{ ratings: [2, 2, 2, 2] }, { ratings: [3, 3, 3, 3] }]) should return 2.5', () => {
  const products = [{ ratings: [2, 2, 2, 2] }, { ratings: [3, 3, 3, 3] }];
  expect(calculateAverageRatings(products)).to.equal(2.5);
});

it('calculateAverageRatings(large array of 1000 entries) should process correctly', () => {
  const largeArray = Array.from({ length: 1000 }, (_, i) => ({ ratings: [i % 5 + 1] }));
  const expectedAverage = (1 + 2 + 3 + 4 + 5) / 5;
  expect(calculateAverageRatings(largeArray)).to.equal(expectedAverage);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
