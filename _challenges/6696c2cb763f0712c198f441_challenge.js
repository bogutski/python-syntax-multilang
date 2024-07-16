// NAMEEN:
// NAMERU:Интеграция новых элементов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `integrateElements`, которая принимает три аргумента: массив, позицию вставки - `position`, и массив элементов - `elements` для добавления.

Используя метод `toSpliced()`, функция должна вставлять элементы из `elements` в массив начиная с позиции - `position`, не изменяя исходный массив.

Функция возвращает новый массив с вставленными элементами.


Пример запуска функции:
```javascript
const originalArray = [10, 20, 30, 40];
const elementsToAdd = [50, 60];
const resultArray = integrateElements(originalArray, 2, elementsToAdd);

console.log(originalArray); // Вывод: [10, 20, 30, 40]
console.log(resultArray);   // Вывод: [10, 20, 50, 60, 30, 40]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function integrateElements(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function integrateElements(arr, position, elements) {
  if(position > arr.length) return 'Position is out of bounds'
  return arr.toSpliced(position, 0, ...elements);
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSpliced = function(start, deleteCount, ...items) {
  let newArray = this.slice();
  if(deleteCount === undefined) deleteCount = newArray.length - start
  newArray.splice(start, deleteCount, ...items);
  return newArray;
};

it('Created function integrateElements', () => {
  expect(integrateElements).to.be.a('function');
});

it('Function integrateElements should include method toSpliced()', () => {
  const res = integrateElements.toString()
  expect(res).to.include('.toSpliced(')
});

it("integrateElements([10, 20, 30, 40], 2, [50, 60]) should return [10, 20, 50, 60, 30, 40]", () => {
  expect(integrateElements([10, 20, 30, 40], 2, [50, 60])).to.deep.equal([10, 20, 50, 60, 30, 40]);
});

it("integrateElements(['a', 'b', 'c'], 1, ['x']) should return ['a', 'x', 'b', 'c']", () => {
  expect(integrateElements(['a', 'b', 'c'], 1, ['x'])).to.deep.equal(['a', 'x', 'b', 'c']);
});

it("integrateElements([], 0, [1, 2, 3]) should return [1, 2, 3] for an empty original array", () => {
  expect(integrateElements([], 0, [1, 2, 3])).to.deep.equal([1, 2, 3]);
});

it("integrateElements([1], 1, [2, 3]) should insert elements at the end of the array", () => {
  expect(integrateElements([1], 1, [2, 3])).to.deep.equal([1, 2, 3]);
});

it("integrateElements([1, 2, 3], 0, [0]) should insert element at the beginning", () => {
  expect(integrateElements([1, 2, 3], 0, [0])).to.deep.equal([0, 1, 2, 3]);
});

it("integrateElements([1, 2, 3], 4, [4]) should return 'Position is out of bounds'", () => {
  expect(integrateElements([1, 2, 3], 4, [4])).to.equal('Position is out of bounds');
});

it("integrateElements(['apple', 'banana'], 2, ['cherry']) should add 'cherry' at the end", () => {
  expect(integrateElements(['apple', 'banana'], 2, ['cherry'])).to.deep.equal(['apple', 'banana', 'cherry']);
});

it("integrateElements(['first', 'second'], 0, ['start']) should return ['start', 'first', 'second']", () => {
  expect(integrateElements(['first', 'second'], 0, ['start'])).to.deep.equal(['start', 'first', 'second']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
