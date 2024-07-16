// NAMEEN:
// NAMERU:Гибкое добавление и удаление в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `flexibleSplice`, которая принимает четыре параметра:

* массив `arr`,
* число `startIndex` для определения начальной позиции изменений в массиве,
* число `deleteCount` для указания количества удаляемых элементов,
* элемент `newElement`, который нужно добавить.

Функция должна обрабатывать следующие условия:

* Если `startIndex` не указан или выходит за пределы массива, `newElement` должен быть добавлен в конец массива.
* Если `deleteCount` не указан, из массива ничего не удаляется.
* Если `newElement` не указан, в массив добавляется 'undefined'.

Функция возвращает модифицированный массив.


Пример запуска функции:
```javascript
flexibleSplice(['x', 'y', 'z'], 1, 0); // [ 'x', undefined, 'y', 'z' ]
flexibleSplice(['x', 'y'], -1, 1, 'z');  // [ 'x', 'z' ]
flexibleSplice([10, 20, 30], 3, 0, 40);  // [ 10, 20, 30, 40 ]
flexibleSplice([1, 2, 3, 4], 2, 1, 'a'); // [ 1, 2, 'a', 4 ]
flexibleSplice(['apple', 'banana', 'cherry'], 1, 1); // [ 'apple', undefined, 'cherry' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function flexibleSplice(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function flexibleSplice(arr, start = arr.length, deleteCount = 0, el) {
  arr.splice(start, deleteCount, el)

  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function flexibleSplice', () => {
  expect(flexibleSplice).to.be.a('function');
});

it('Function flexibleSplice should include methods splice()', () => {
  const res = flexibleSplice.toString()
  expect(res).to.include('.splice(')
});

it("flexibleSplice([1, 2, 3, 4], 2, 1, 'a') should correctly modify the array", () => {
  expect(flexibleSplice([1, 2, 3, 4], 2, 1, 'a')).to.deep.equal([1, 2, 'a', 4]);
});

it("flexibleSplice(['apple', 'banana', 'cherry'], 1, 1) should return ['apple', undefined, 'cherry']", () => {
  expect(flexibleSplice(['apple', 'banana', 'cherry'], 1, 1)).to.deep.equal(['apple', undefined, 'cherry']);
});

it("flexibleSplice([10, 20, 30], 3, 0, 40) should add an element at the end", () => {
  expect(flexibleSplice([10, 20, 30], 3, 0, 40)).to.deep.equal([10, 20, 30, 40]);
});

it("flexibleSplice(['x', 'y'], -1, 1, 'z') should correctly handle negative start indices", () => {
  expect(flexibleSplice(['x', 'y'], -1, 1, 'z')).to.deep.equal(['x', 'z']);
});

it("flexibleSplice(['x', 'y', 'z'], 1, 0) should add undefined when el is not provided", () => {
  expect(flexibleSplice(['x', 'y', 'z'], 1, 0)).to.deep.equal(['x', undefined, 'y', 'z']);
});

it("flexibleSplice(['a', 'b', 'c'], 0, 1) should return [undefined, 'b', 'c']", () => {
  expect(flexibleSplice(['a', 'b', 'c'], 0, 1)).to.deep.equal([undefined, 'b', 'c']);
});

it("flexibleSplice(['d', 'e', 'f'], 2, 0, 'g') should insert 'g' before the last element", () => {
  expect(flexibleSplice(['d', 'e', 'f'], 2, 0, 'g')).to.deep.equal(['d', 'e', 'g', 'f']);
});

it("flexibleSplice(['a', 'b', 'c', 'd'], 1, 2) should return ['a', undefined, 'd']", () => {
  expect(flexibleSplice(['a', 'b', 'c', 'd'], 1, 2)).to.deep.equal(['a', undefined, 'd']);
});

it("flexibleSplice([10, 20, 30], 0, 3, 40) should replace all elements with a new one", () => {
  expect(flexibleSplice([10, 20, 30], 0, 3, 40)).to.deep.equal([40]);
});

it("flexibleSplice(['hello', 'world'], 2, 0, 'goodbye') should add 'goodbye' at the end when start index is equal to array length", () => {
  expect(flexibleSplice(['hello', 'world'], 2, 0, 'goodbye')).to.deep.equal(['hello', 'world', 'goodbye']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
