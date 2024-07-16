// NAMEEN:
// NAMERU:Перестановка элементов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `rearrangeArray`, которая принимает массив и два индекса: `indexFrom` и `indexTo`.

Функция должна переместить элемент из позиции `indexFrom` в позицию `indexTo`, используя метод `toSpliced()`, не изменяя исходный массив.

Ваша функция должна возвращать новый массив с измененным порядком элементов.

Если один из индексов больше длины массива либо меньше нуля, функция должна вернуть строку: `Index is out of range`.


Пример запуска функции:
```javascript
const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = rearrangeArray(originalArray, 1, 3);

console.log(originalArray); // Вывод: ['a', 'b', 'c', 'd', 'e']
console.log(resultArray);   // Вывод: ['a', 'c', 'd', 'b', 'e']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function rearrangeArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function rearrangeArray(arr, from, to) {
  if (from < 0 || from >= arr.length || to < 0 || to >= arr.length) return 'Index is out of range'

  const newArr = [...arr]
  newArr.splice(from, 1)

  return newArr.toSpliced(to, 0, arr[from])
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSpliced = function(start, deleteCount, ...items) {
  let newArray = this.slice();
  if(deleteCount === undefined) deleteCount = newArray.length - start
  newArray.splice(start, deleteCount, ...items);
  return newArray;
};

it('Created function rearrangeArray', () => {
  expect(rearrangeArray).to.be.a('function');
});

it('Function rearrangeArray should include method toSpliced()', () => {
  const res = rearrangeArray.toString()
  expect(res).to.include('.toSpliced(')
});

it("rearrangeArray(['a', 'b', 'c', 'd', 'e'], 1, 3) should return ['a', 'c', 'd', 'b', 'e']", () => {
  expect(rearrangeArray(['a', 'b', 'c', 'd', 'e'], 1, 3)).to.deep.equal(['a', 'c', 'd', 'b', 'e']);
});

it("rearrangeArray(['apple', 'banana', 'cherry'], 2, 0) should return ['cherry', 'apple', 'banana']", () => {
  expect(rearrangeArray(['apple', 'banana', 'cherry'], 2, 0)).to.deep.equal(['cherry', 'apple', 'banana']);
});

it("rearrangeArray([1, 2, 3, 4], 0, 3) should return [2, 3, 4, 1]", () => {
  expect(rearrangeArray([1, 2, 3, 4], 0, 3)).to.deep.equal([2, 3, 4, 1]);
});

it("rearrangeArray(['first', 'second', 'third'], 1, 1) should return ['first', 'second', 'third']", () => {
  expect(rearrangeArray(['first', 'second', 'third'], 1, 1)).to.deep.equal(['first', 'second', 'third']);
});

it("rearrangeArray(['x', 'y', 'z'], 2, 1) should return ['x', 'z', 'y']", () => {
  expect(rearrangeArray(['x', 'y', 'z'], 2, 1)).to.deep.equal(['x', 'z', 'y']);
});

it("should throw an error if indexFrom is out of bounds", () => {
  expect(rearrangeArray(['a', 'b', 'c'], -1, 2)).to.equal('Index is out of range');
});

it("should throw an error if indexTo is out of bounds", () => {
  expect(rearrangeArray(['a', 'b', 'c'], 0, 3)).to.equal('Index is out of range');
});

it("rearrangeArray([10, 20, 30, 40], 3, 0) should return [40, 10, 20, 30]", () => {
  expect(rearrangeArray([10, 20, 30, 40], 3, 0)).to.deep.equal([40, 10, 20, 30]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
