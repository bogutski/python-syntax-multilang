// NAMEEN:
// NAMERU:Извлечение уникальных значений

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `extractUnique`, которая принимает массив элементов.

Функция должна использовать метод `shift()` для последовательного удаления каждого элемента из начала массива и добавления его в новый массив, только если такой элемент еще не присутствует в новом массиве, тем самым гарантируя уникальность элементов в результирующем массиве.

Функция должна возвращать новый массив с уникальными элементами.


Пример запуска функции:
```javascript
extractUnique([1, 2, 2, 3, 4, 3, 5]);          // [1, 2, 3, 4, 5]
extractUnique(['a', 'b', 'a', 'c', 'd', 'c']); // ['a', 'b', 'c', 'd']
extractUnique([true, false, true, false]);     // [true, false]
extractUnique([]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function extractUnique(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function extractUnique(arr) {
  let res = []

  while(arr.length){
    const el = arr.shift()
    if(res.indexOf(el) === -1) res.push(el)
  }

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function extractUnique', () => {
  expect(extractUnique).to.be.a('function');
});

it('extractUnique includes method shift()', () => {
  const res = extractUnique.toString()
  expect(res).to.include('.shift()');
});

it("extractUnique([1, 2, 2, 3, 4, 3, 5]) should return [1, 2, 3, 4, 5]", () => {
  expect(extractUnique([1, 2, 2, 3, 4, 3, 5])).to.deep.equal([1, 2, 3, 4, 5]);
});

it("extractUnique(['a', 'b', 'a', 'c', 'd', 'c']) should return ['a', 'b', 'c', 'd']", () => {
  expect(extractUnique(['a', 'b', 'a', 'c', 'd', 'c'])).to.deep.equal(['a', 'b', 'c', 'd']);
});

it("extractUnique([true, false, true, false]) should return [true, false]", () => {
  expect(extractUnique([true, false, true, false])).to.deep.equal([true, false]);
});

it("extractUnique([]) should return an empty array for an initially empty array", () => {
  expect(extractUnique([])).to.deep.equal([]);
});

it("should handle array with mixed types", () => {
  let mixedArray = [1, '1', 2, '2', 1];
  expect(extractUnique(mixedArray)).to.deep.equal([1, '1', 2, '2']);
});

it("extractUnique([undefined, null, false, 0, '', undefined, null]) should return [undefined, null, false, 0, '']", () => {
  expect(extractUnique([undefined, null, false, 0, '', undefined, null])).to.deep.equal([undefined, null, false, 0, '']);
});

it("extractUnique([NaN, 0.1, undefined]) should return [NaN, 0.1, undefined]", () => {
  expect(extractUnique([NaN, 0.1, undefined])).to.deep.equal([NaN, 0.1, undefined]);
});

it("should handle large array with only two unique values efficiently", () => {
  let largeArray = new Array(10000).fill('a');
  largeArray.push('b');
  largeArray.unshift('b');
  let startTime = process.hrtime();
  let uniqueArray = extractUnique(largeArray);
  let elapsedTime = process.hrtime(startTime);
  let elapsedTimeInMs = (elapsedTime[0] * 1000 + elapsedTime[1] / 1e6).toFixed(3);

  expect(uniqueArray).to.deep.equal(['b', 'a']);
  console.log(`Execution time for large array: ${elapsedTimeInMs} ms`);
  // Note: This test doesn't fail based on execution time but provides insight into the function's efficiency.
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
