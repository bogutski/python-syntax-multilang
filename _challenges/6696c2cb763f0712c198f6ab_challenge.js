// NAMEEN:
// NAMERU:Анализ и фильтрация данных

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterAndReverse`, которая принимает массив чисел и возвращает новый массив, содержащий только чётные числа в обратном порядке.

Используйте методы `toReversed()` для их инвертирования массива.


Примеры запуска функции:
```javascript
filterAndReverse([1, 2, 3, 4, 5, 6]); // [6, 4, 2]
filterAndReverse([12, 15, 23, 42]);   // [42, 12]
filterAndReverse([11, 22]);           // [22]
filterAndReverse([]);                 // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterAndReverse(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterAndReverse(array) {
  let newArr = []

  array.forEach(el => {
    if(el % 2 === 0) newArr.push(el)
  })

  return newArr.toReversed();
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toReversed = function(){
  return this.slice().reverse()
}

it('Created function filterAndReverse', () => {
  expect(filterAndReverse).to.be.a('function');
});

it("Function filterAndReverse() should include toReversed method", () => {
  const result = filterAndReverse.toString();
  expect(result).to.include('.toReversed()');
});

it("Function filterAndReverse() should not modify the original array", () => {
  let originalArray = [1, 2, 3, 4, 5];
  filterAndReverse(originalArray);
  expect(originalArray).to.deep.equal([1, 2, 3, 4, 5]);
});

it("filterAndReverse([1, 2, 3, 4, 5, 6]) should return [6, 4, 2]", () => {
  expect(filterAndReverse([1, 2, 3, 4, 5, 6])).to.deep.equal([6, 4, 2]);
});

it("filterAndReverse([12, 15, 23, 42]) should return [42, 12]", () => {
  expect(filterAndReverse([12, 15, 23, 42])).to.deep.equal([42, 12]);
});

it("filterAndReverse([11, 22]) should return [22]", () => {
  expect(filterAndReverse([11, 22])).to.deep.equal([22]);
});

it("filterAndReverse([10, 20, 30, 40]) should return [40, 30, 20, 10]", () => {
  expect(filterAndReverse([10, 20, 30, 40])).to.deep.equal([40, 30, 20, 10]);
});

it("filterAndReverse([]) should return []", () => {
  expect(filterAndReverse([])).to.deep.equal([]);
});

it("filterAndReverse([1, 3, 5]) should return []", () => {
  expect(filterAndReverse([1, 3, 5])).to.deep.equal([]);
});

it("filterAndReverse([2, 4, 6, 8]) should return [8, 6, 4, 2]", () => {
  expect(filterAndReverse([2, 4, 6, 8])).to.deep.equal([8, 6, 4, 2]);
});

it("filterAndReverse([123, 456, 789]) should return [456]", () => {
  expect(filterAndReverse([123, 456, 789])).to.deep.equal([456]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
