// NAMEEN:
// NAMERU:Фильтрация и добавление элементов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterAndAdd`, которая принимает исходный массив и произвольное количество элементов elementsToAdd.

Функция должна отфильтровать `elementsToAdd`, оставляя только числа, и добавить их в новую копию исходного массива с использованием метода `toSpliced()`.

Возвращаемый результат должен быть новым массивом, содержащим исходные элементы плюс добавленные числовые элементы из `elementsToAdd`. Исходный массив должен оставаться неизменным.


Пример запуска функции:
```javascript
const originalArray = ['apple', 5, 'banana'];
const resultArray = filterAndAdd(originalArray, 'cherry', 10, 'durian', 15);

console.log(originalArray); // Вывод: ['apple', 5, 'banana']
console.log(resultArray);   // Вывод: ['apple', 5, 'banana', 10, 15]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterAndAdd(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterAndAdd(arr, ...elements) {
  const elementsToAdd = elements.filter(el => typeof el === 'number')
  return arr.toSpliced(arr.length, 0, ...elementsToAdd);
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSpliced = function(start, deleteCount, ...items) {
  let newArray = this.slice();
  if(deleteCount === undefined) deleteCount = newArray.length - start
  newArray.splice(start, deleteCount, ...items);
  return newArray;
};

it('Created function filterAndAdd', () => {
  expect(filterAndAdd).to.be.a('function');
});

it('Function filterAndAdd should include method toSpliced()', () => {
  const res = filterAndAdd.toString()
  expect(res).to.include('.toSpliced(')
});

it("filterAndAdd(['apple', 5, 'banana'], 'cherry', 10, 'durian', 15) should return ['apple', 5, 'banana', 10, 15]", () => {
  expect(filterAndAdd(['apple', 5, 'banana'], 'cherry', 10, 'durian', 15)).to.deep.equal(['apple', 5, 'banana', 10, 15]);
});

it("filterAndAdd([1, 2], 3, '4', 5) should return [1, 2, 3, 5]", () => {
  expect(filterAndAdd([1, 2], 3, '4', 5)).to.deep.equal([1, 2, 3, 5]);
});

it("filterAndAdd([], 'hello', 20, 'world', 30) should return [20, 30] for an empty original array", () => {
  expect(filterAndAdd([], 'hello', 20, 'world', 30)).to.deep.equal([20, 30]);
});

it("filterAndAdd(['a', 'b'], 'c', 'd') should return ['a', 'b'] when no numbers are added", () => {
  expect(filterAndAdd(['a', 'b'], 'c', 'd')).to.deep.equal(['a', 'b']);
});

it("filterAndAdd(['x'], 100) should return ['x', 100]", () => {
  expect(filterAndAdd(['x'], 100)).to.deep.equal(['x', 100]);
});

it("filterAndAdd([10, 20], 30, 40, '50') should ignore string '50' and return [10, 20, 30, 40]", () => {
  expect(filterAndAdd([10, 20], 30, 40, '50')).to.deep.equal([10, 20, 30, 40]);
});

it("filterAndAdd(['first'], 1, 'second') should return ['first', 1]", () => {
  expect(filterAndAdd(['first'], 1, 'second')).to.deep.equal(['first', 1]);
});

it("filterAndAdd([null, undefined], 0, false, 2) should return [null, undefined, 0, 2]", () => {
  expect(filterAndAdd([null, undefined], 0, false, 2)).to.deep.equal([null, undefined, 0, 2]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
