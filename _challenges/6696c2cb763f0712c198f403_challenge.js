// NAMEEN:
// NAMERU:Замена элементов в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `replaceElements`, которая принимает массив, индекс начального элемента для замены, количество элементов для удаления и произвольное количество новых элементов.

Функция должна заменить указанное количество элементов в массиве, начиная с заданного индекса, на новые элементы, переданные в функцию.

Возвращать ничего не нужно, так как изменения происходят в исходном массиве.


Пример запуска функции:
```javascript
let numbers = [1, 2, 3, 4, 5];
replaceElements(numbers, 2, 2, 6, 7);
console.log(numbers); // Должен вернуть [1, 2, 6, 7, 5]

let letters = ['a', 'b', 'c', 'd', 'e'];
replaceElements(letters, 1, 3, 'x', 'y', 'z');
console.log(letters); // Должен вернуть ['a', 'x', 'y', 'z', 'e']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function replaceElements(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function replaceElements(arr, start, deleteCount, ...elements) {
  arr.splice(start, deleteCount, ...elements)
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function replaceElements', () => {
  expect(replaceElements).to.be.a('function');
});

it('Function replaceElements should include methods splice()', () => {
  const res = replaceElements.toString()
  expect(res).to.include('.splice(')
});

it("replaceElements([1, 2, 3, 4, 5], 2, 2, 6, 7) should modify array to [1, 2, 6, 7, 5]", () => {
  let numbers = [1, 2, 3, 4, 5];
  replaceElements(numbers, 2, 2, 6, 7);
  expect(numbers).to.deep.equal([1, 2, 6, 7, 5]);
});

it("replaceElements(['a', 'b', 'c', 'd', 'e'], 1, 3, 'x', 'y', 'z') should modify array to ['a', 'x', 'y', 'z', 'e']", () => {
  let letters = ['a', 'b', 'c', 'd', 'e'];
  replaceElements(letters, 1, 3, 'x', 'y', 'z');
  expect(letters).to.deep.equal(['a', 'x', 'y', 'z', 'e']);
});

it("replaceElements(['first', 'second', 'third'], 0, 1, 'newFirst') should replace the first element", () => {
  let array = ['first', 'second', 'third'];
  replaceElements(array, 0, 1, 'newFirst');
  expect(array).to.deep.equal(['newFirst', 'second', 'third']);
});

it("replaceElements([10, 20, 30], 1, 2, 40, 50) should replace the last two elements with two new ones", () => {
  let numbers = [10, 20, 30];
  replaceElements(numbers, 1, 2, 40, 50);
  expect(numbers).to.deep.equal([10, 40, 50]);
});

it("replaceElements([], 0, 0, 'new') should add an element to an empty array", () => {
  let emptyArray = [];
  replaceElements(emptyArray, 0, 0, 'new');
  expect(emptyArray).to.deep.equal(['new']);
});

it("replaceElements([1, 2, 3], 1, 0, 'a') should insert 'a' without removing any elements", () => {
  let numbers = [1, 2, 3];
  replaceElements(numbers, 1, 0, 'a');
  expect(numbers).to.deep.equal([1, 'a', 2, 3]);
});

it("replaceElements(['apple', 'banana', 'cherry'], 2, 1, 'orange', 'grape') should modify array to ['apple', 'banana', 'orange', 'grape']", () => {
  let fruits = ['apple', 'banana', 'cherry'];
  replaceElements(fruits, 2, 1, 'orange', 'grape');
  expect(fruits).to.deep.equal(['apple', 'banana', 'orange', 'grape']);
});

it("should verify that replaceElements can handle large deleteCount beyond array length", () => {
  let array = ['start', 'middle', 'end'];
  replaceElements(array, 1, 10, 'new');
  expect(array).to.deep.equal(['start', 'new']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
