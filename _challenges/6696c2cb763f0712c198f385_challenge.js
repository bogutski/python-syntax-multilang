// NAMEEN:
// NAMERU:Удаление N элементов с конца массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `removeNElements`, которая принимает массив и число `n`.

Функция должна удалить `n` элементов с конца переданного массива.

Если `n` больше длины массива или равно ей, функция должна вернуть пустой массив.

Функция должна возвращать измененный исходный массив.

Пример запуска функции:
```javascript
removeNElements([1, 2, 3, 4, 5], 2);      // [ 1, 2, 3 ]
removeNElements(['a', 'b', 'c', 'd'], 4); // []
removeNElements([true, false, true], 1);  // [ true, false ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function removeNElements(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function removeNElements(arr, n){
  const length = arr.length >= n ? n : arr.length

  for(let i = 0; i < length; i++){
    arr.pop()
  }

  return arr;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function removeNElements', () => {
  expect(removeNElements).to.be.a('function');
});

it("removeNElements([1, 2, 3, 4, 5], 2) should modify and return [1, 2, 3]", () => {
  expect(removeNElements([1, 2, 3, 4, 5], 2)).to.deep.equal([1, 2, 3]);
});

it("removeNElements(['a', 'b', 'c', 'd'], 4) should modify and return []", () => {
  let array = ['a', 'b', 'c', 'd'];
  expect(removeNElements(array, 4)).to.deep.equal([]);
  expect(array).to.deep.equal([]);
});

it("removeNElements([true, false, true], 1) should modify and return [true, false]", () => {
  expect(removeNElements([true, false, true], 1)).to.deep.equal([true, false]);
});

it("removeNElements([1, 2, 3], 0) should return the unmodified original array", () => {
  expect(removeNElements([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
});

it("removeNElements([], 5) should return an unmodified empty array", () => {
  expect(removeNElements([], 5)).to.deep.equal([]);
});

it("removeNElements([1, 2, 3, 4, 5], 10) should return an empty array if n is greater than array length", () => {
  expect(removeNElements([1, 2, 3, 4, 5], 10)).to.deep.equal([]);
});

it("removeNElements(['hello', 'world'], 1) should modify and return ['hello']", () => {
  expect(removeNElements(['hello', 'world'], 1)).to.deep.equal(['hello']);
});

it("removeNElements([10, 20, 30], 3) should return an empty array if n equals array length", () => {
  expect(removeNElements([10, 20, 30], 3)).to.deep.equal([]);
});

it("removeNElements(['a', 'b', 'c', 'd', 'e'], 3) should modify and return ['a', 'b']", () => {
  expect(removeNElements(['a', 'b', 'c', 'd', 'e'], 3)).to.deep.equal(['a', 'b']);
});

it("should confirm that the original array has been modified", () => {
  let originalArray = [1, 2, 3, 4, 5];
  removeNElements(originalArray, 2);
  expect(originalArray).to.deep.equal([1, 2, 3]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
