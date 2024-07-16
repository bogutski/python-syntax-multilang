// NAMEEN:
// NAMERU:Слияние чисел из массива объектов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `mergeAllNumbers`, которая принимает массив объектов.

Каждый объект содержит ключ `numbers`, который ассоциируется с массивом чисел.

Функция должна возвращать один массив, содержащий все числа из всех объектов, слитые в один массив.


Пример запуска функции
```javascript
const data = [
  { numbers: [5, 3, 9] },
  { numbers: [1, 7] },
  { numbers: [3, 9, 2] }
];

console.log(mergeAllNumbers(data)); // [5, 3, 9, 1, 7, 3, 9, 2]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function mergeAllNumbers(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function mergeAllNumbers(arr) {
  return arr.flatMap(({numbers}) => numbers);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function mergeAllNumbers', () => {
  expect(mergeAllNumbers).to.be.a('function');
});

it('Function mergeAllNumbers should include method flatMap()', () => {
  const res = mergeAllNumbers.toString()
  expect(res).to.include('.flatMap(')
});

it('should merge numbers from an array of objects', () => {
  const data = [
    { numbers: [5, 3, 9] },
    { numbers: [1, 7] },
    { numbers: [3, 9, 2] }
  ];
  expect(mergeAllNumbers(data)).to.deep.equal([5, 3, 9, 1, 7, 3, 9, 2]);
});

it('should return an empty array if the input array is empty', () => {
  expect(mergeAllNumbers([])).to.deep.equal([]);
});

it('should handle objects with empty number arrays', () => {
  const data = [{ numbers: [] }, { numbers: [1, 2] }];
  expect(mergeAllNumbers(data)).to.deep.equal([1, 2]);
});

it('should handle all empty number arrays in objects', () => {
  const data = [{ numbers: [] }, { numbers: [] }];
  expect(mergeAllNumbers(data)).to.deep.equal([]);
});

it('should handle single number arrays in all objects', () => {
  const data = [{ numbers: [1] }, { numbers: [2] }, { numbers: [3] }];
  expect(mergeAllNumbers(data)).to.deep.equal([1, 2, 3]);
});

it('should handle duplicates as they are without removing them', () => {
  const data = [{ numbers: [1, 2, 2] }, { numbers: [2, 3, 3] }];
  expect(mergeAllNumbers(data)).to.deep.equal([1, 2, 2, 2, 3, 3]);
});

it('should merge numbers correctly regardless of the order in the input objects', () => {
  const data = [{ numbers: [5, 3] }, { numbers: [1, 7] }, { numbers: [2] }];
  expect(mergeAllNumbers(data)).to.deep.equal([5, 3, 1, 7, 2]);
});

it('should handle a large array of objects efficiently', () => {
  const largeArray = Array.from({ length: 1000 }, (_, i) => ({ numbers: [i, i + 1] }));
  const expectedResult = Array.from({ length: 2000 }, (_, i) => i % 2 === 0 ? i / 2 : (i - 1) / 2 + 1);
  expect(mergeAllNumbers(largeArray)).to.deep.equal(expectedResult);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
