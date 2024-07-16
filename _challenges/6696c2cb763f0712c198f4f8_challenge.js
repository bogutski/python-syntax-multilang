// NAMEEN:
// NAMERU:Замена элемента в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `replaceElement`, которая принимает три аргумента:

* массив,
* индекс элемента (который нужно заменить),
* новое значение для этой позиции.

Функция должна возвращать новый массив, в котором элемент на указанной позиции заменен на новое значение, при этом исходный массив должен остаться неизменным.

Для обновления элемента используйте метод `with()`, чтобы гарантировать неизменяемость исходного массива.


Пример запуска функции:
```javascript
replaceElement(['apple', 'banana', 'cherry'], 1, 'orange'); // ['apple', 'orange', 'cherry']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function replaceElement(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function replaceElement(arr, i, newValue) {
  return arr.with(i, newValue);
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.with = function(index, value){
  const newArray = this.slice();
  newArray.splice(index, 1, value);
  return newArray;
}

it('Created function replaceElement', () => {
  expect(replaceElement).to.be.a('function');
});

it('Function replaceElement should include method with()', () => {
  const res = replaceElement.toString()
  expect(res).to.include('.with(')
});

it("replaceElement(['apple', 'banana', 'cherry'], 1, 'orange') should return ['apple', 'orange', 'cherry']", () => {
  const originalArray = ['apple', 'banana', 'cherry'];
  const result = replaceElement(originalArray, 1, 'orange');
  expect(result).to.deep.equal(['apple', 'orange', 'cherry']);
});

it("replaceElement(['dog', 'cat', 'bird'], 0, 'fish') should return ['fish', 'cat', 'bird']", () => {
  const originalArray = ['dog', 'cat', 'bird'];
  const result = replaceElement(originalArray, 0, 'fish');
  expect(result).to.deep.equal(['fish', 'cat', 'bird']);
});

it("replaceElement([1, 2, 3], 2, 4) should return [1, 2, 4]", () => {
  const originalArray = [1, 2, 3];
  const result = replaceElement(originalArray, 2, 4);
  expect(result).to.deep.equal([1, 2, 4]);
});

it("replaceElement(['old'], 0, 'new') should return ['new']", () => {
  const originalArray = ['old'];
  const result = replaceElement(originalArray, 0, 'new');
  expect(result).to.deep.equal(['new']);
});

it("replaceElement(['single'], 0, 'replaced') should not alter the original array", () => {
  const originalArray = ['single'];
  replaceElement(originalArray, 0, 'replaced');
  expect(originalArray).to.deep.equal(['single']);
});

it("replaceElement(['first', 'second', 'third'], 2, 'updated') should return ['first', 'second', 'updated']", () => {
  const originalArray = ['first', 'second', 'third'];
  const result = replaceElement(originalArray, 2, 'updated');
  expect(result).to.deep.equal(['first', 'second', 'updated']);
});

it("replaceElement(['one', 'two', 'three', 'four'], -1, 'last') should return ['one', 'two', 'three', 'last']", () => {
  const originalArray = ['one', 'two', 'three', 'four'];
  const result = replaceElement(originalArray, -1, 'last');
  expect(result).to.deep.equal(['one', 'two', 'three', 'last']);
});

it("replaceElement([10, 20, 30, 35], 3, 40) should return [10, 20, 30, 40]", () => {
  const originalArray = [10, 20, 30, 35];
  const result = replaceElement(originalArray, 3, 40);
  expect(result).to.deep.equal([10, 20, 30, 40]);
});

it("The original array remains unchanged after the replaceElement operation", () => {
  const originalArray = [1, 2, 3];
  replaceElement(originalArray, 1, 5);
  expect(originalArray).to.deep.equal([1, 2, 3]);
});

it("replaceElement(['a', 'b', 'c'], -1, 'w') should return ", () => {
  const originalArray = ['a', 'b', 'c'];
  const result = replaceElement(originalArray, -1, 'w');
  expect(result).to.deep.equal(['a', 'b', 'w']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
