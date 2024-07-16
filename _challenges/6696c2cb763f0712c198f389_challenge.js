// NAMEEN:
// NAMERU:Сокращение массива до заданной длины

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `trimArrayToSize`, которая принимает массив и целое число `n` в качестве аргументов.

Функция должна удалять элементы с конца массива с использованием метода `pop()`, пока его длина не станет равной `n`.

* Если `n` больше текущей длины массива или равно ей, функция должна вернуть исходный массив без изменений.
* Если `n` меньше нуля, функция также должна вернуть исходный массив без изменений.


Пример запуска функции:
```javascript
trimArrayToSize(['single'], 2);           // [ 'single' ]
trimArrayToSize([1, 2, 3], -1);           // [ 1, 2, 3 ]
trimArrayToSize([1, 2, 3, 4, 5], 3);      // [ 1, 2, 3 ]
trimArrayToSize(['a', 'b', 'c', 'd'], 4); // [ 'a', 'b', 'c', 'd' ]
trimArrayToSize([true, false, true], 0);  // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function trimArrayToSize(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function trimArrayToSize(arr, n) {
  if(n > arr.length || n < 0) return arr
  const numOfIteration = arr.length - n

  for(let i = 0; i < numOfIteration; i++){
    arr.pop()
  }

  return arr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function trimArrayToSize', () => {
  expect(trimArrayToSize).to.be.a('function');
});

it("trimArrayToSize([1, 2, 3, 4, 5], 3) should return [1, 2, 3]", () => {
  expect(trimArrayToSize([1, 2, 3, 4, 5], 3)).to.deep.equal([1, 2, 3]);
});

it("trimArrayToSize(['a', 'b', 'c', 'd'], 4) should return ['a', 'b', 'c', 'd']", () => {
  expect(trimArrayToSize(['a', 'b', 'c', 'd'], 4)).to.deep.equal(['a', 'b', 'c', 'd']);
});

it("trimArrayToSize([true, false, true], 0) should return []", () => {
  expect(trimArrayToSize([true, false, true], 0)).to.deep.equal([]);
});

it("trimArrayToSize([], 2) should return [] for an initially empty array", () => {
  expect(trimArrayToSize([], 2)).to.deep.equal([]);
});

it("trimArrayToSize([1, 2, 3], -1) should return [1, 2, 3] for negative size", () => {
  expect(trimArrayToSize([1, 2, 3], -1)).to.deep.equal([1, 2, 3]);
});

it("should modify the original array", () => {
  let originalArray = [1, 2, 3, 4];
  trimArrayToSize(originalArray, 2);
  expect(originalArray).to.deep.equal([1, 2]);
});

it("trimArrayToSize(['x', 'y', 'z'], 3) should return the unmodified array if size equals current length", () => {
  expect(trimArrayToSize(['x', 'y', 'z'], 3)).to.deep.equal(['x', 'y', 'z']);
});

it("trimArrayToSize([10, 20, 30, 40, 50], 5) should return the unmodified array if size equals the array's length", () => {
  expect(trimArrayToSize([10, 20, 30, 40, 50], 5)).to.deep.equal([10, 20, 30, 40, 50]);
});

it("trimArrayToSize(['a', 'b'], 1) should return ['a']", () => {
  expect(trimArrayToSize(['a', 'b'], 1)).to.deep.equal(['a']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
