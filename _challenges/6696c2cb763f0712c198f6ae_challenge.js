// NAMEEN:
// NAMERU:Агрегация и инверсия данных

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `aggregateAndReverse`, которая принимает массив объектов, каждый из которых содержит ключи `id` и `value`.

Функция должна возвращать новый массив, состоящий из значений `value`, умноженных на их `id`, и массив должен быть в обратном порядке.

Используйте метод `toReversed()` для инвертирования.


Примеры запуска функции:
```javascript
const data = [{id: 1, value: 10}, {id: 2, value: 20}, {id: 3, value: 30}];
console.log(aggregateAndReverse(data)); // [90, 40, 10]

const moreData = [{id: 1, value: 5}, {id: 2, value: 10}, {id: 3, value: 15}];
console.log(aggregateAndReverse(moreData)); // [45, 20, 5]

console.log(aggregateAndReverse([])); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function aggregateAndReverse(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function aggregateAndReverse(array) {
  const res = array.map(({id, value}) => id * value)
  return res.toReversed();
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toReversed = function(){
  return this.slice().reverse()
}

it('Created function aggregateAndReverse', () => {
  expect(aggregateAndReverse).to.be.a('function');
});

it("Function aggregateAndReverse() should include toReversed method", () => {
  const result = aggregateAndReverse.toString();
  expect(result).to.include('.toReversed()');
});

it("Function aggregateAndReverse() should not modify the original array", () => {
  let originalArray = [{id: 1, value: 10}, {id: 2, value: 20}];
  aggregateAndReverse(originalArray);
  expect(originalArray).to.deep.equal([{id: 1, value: 10}, {id: 2, value: 20}]);
});

it("aggregateAndReverse([{id: 1, value: 10}, {id: 2, value: 20}, {id: 3, value: 30}]) should return [90, 40, 10]", () => {
  expect(aggregateAndReverse([{id: 1, value: 10}, {id: 2, value: 20}, {id: 3, value: 30}])).to.deep.equal([90, 40, 10]);
});

it("aggregateAndReverse([{id: 1, value: 5}, {id: 2, value: 10}, {id: 3, value: 15}]) should return [45, 20, 5]", () => {
  expect(aggregateAndReverse([{id: 1, value: 5}, {id: 2, value: 10}, {id: 3, value: 15}])).to.deep.equal([45, 20, 5]);
});

it("aggregateAndReverse([]) should return []", () => {
  expect(aggregateAndReverse([])).to.deep.equal([]);
});

it("aggregateAndReverse([{id: 5, value: 100}]) should return [500]", () => {
  expect(aggregateAndReverse([{id: 5, value: 100}])).to.deep.equal([500]);
});

it("aggregateAndReverse([{id: 1, value: 1}, {id: 2, value: 2}, {id: 3, value: 3}, {id: 4, value: 4}]) should return [16, 9, 4, 1]", () => {
  expect(aggregateAndReverse([{id: 1, value: 1}, {id: 2, value: 2}, {id: 3, value: 3}, {id: 4, value: 4}])).to.deep.equal([16, 9, 4, 1]);
});

it("aggregateAndReverse([{id: 2, value: 0}, {id: 3, value: 10}]) should return [30, 0]", () => {
  expect(aggregateAndReverse([{id: 2, value: 0}, {id: 3, value: 10}])).to.deep.equal([30, 0]);
});

it("aggregateAndReverse([{id: 0, value: 5}, {id: 0, value: 10}]) should return [0, 0]", () => {
  expect(aggregateAndReverse([{id: 0, value: 5}, {id: 0, value: 10}])).to.deep.equal([0, 0]);
});

it("aggregateAndReverse([{id: 1, value: 5}, {id: 2, value: 10}, {id: 2, value: 15}]) should return [30, 20, 5]", () => {
  expect(aggregateAndReverse([{id: 1, value: 5}, {id: 2, value: 10}, {id: 2, value: 15}])).to.deep.equal([30, 20, 5]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
