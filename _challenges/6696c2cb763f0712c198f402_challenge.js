// NAMEEN:
// NAMERU:Удаление элементов с конца массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `removeLastN`, которая принимает массив и число N в качестве аргументов.

Функция должна удалить N элементов с конца массива.

Функция должна возвращать исходный массив после удаления элементов.

Если N больше или равно длине исходного массива, функция должна возвращать пустой массив.


Пример запуска функции:
```javascript
removeLastN([1, 2, 3, 4, 5], 2); // [ 1, 2, 3 ]
removeLastN([true, false, true], 1);  // [ true, false ]
removeLastN(['a', 'b', 'c', 'd'], 3); // [ 'a' ]
removeLastN([1, 2, 3], 0); // [1, 2, 3]
removeLastN([1, 2, 3], 3); // []
removeLastN([1, 2, 3], 4); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function removeLastN(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function removeLastN(arr, num) {
  if(!num) return arr;
  else arr.splice(-num)

  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function removeLastN', () => {
  expect(removeLastN).to.be.a('function');
});

it('Function removeLastN should include methods splice()', () => {
  const res = removeLastN.toString()
  expect(res).to.include('.splice(')
});

it("removeLastN([1, 2, 3, 4, 5], 2) should return [1, 2, 3]", () => {
  expect(removeLastN([1, 2, 3, 4, 5], 2)).to.deep.equal([1, 2, 3]);
});

it("removeLastN(['a', 'b', 'c', 'd'], 3) should return ['a']", () => {
  expect(removeLastN(['a', 'b', 'c', 'd'], 3)).to.deep.equal(['a']);
});

it("removeLastN([true, false, true], 1) should return [true, false]", () => {
  expect(removeLastN([true, false, true], 1)).to.deep.equal([true, false]);
});

it("removeLastN([1, 2, 3], 0) should return [1, 2, 3]", () => {
  expect(removeLastN([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
});

it("removeLastN([1, 2, 3], 3) should return an empty array", () => {
  expect(removeLastN([1, 2, 3], 3)).to.deep.equal([]);
});

it("removeLastN([1, 2, 3], 4) should return an empty array when N is greater than array length", () => {
  expect(removeLastN([1, 2, 3], 4)).to.deep.equal([]);
});

it("removeLastN([], 1) should return an empty array if the input array is initially empty", () => {
  expect(removeLastN([], 1)).to.deep.equal([]);
});

it("should verify that the original array is modified correctly after removal", () => {
  let originalArray = [1, 2, 3, 4, 5];
  removeLastN(originalArray, 2);
  expect(originalArray).to.deep.equal([1, 2, 3]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
