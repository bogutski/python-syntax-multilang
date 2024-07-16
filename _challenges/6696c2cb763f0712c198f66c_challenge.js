// NAMEEN:
// NAMERU:Обращение порядка элементов в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseArray`, которая принимает массив любых типов данных.

Функция должна вернуть измененный массив, в котором элементы следуют в обратном порядке.


Примеры запуска функции:
```javascript
reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]
reverseArray(['a', 'b', 'c']); // ['c', 'b', 'a']
reverseArray([]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function reverseArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseArray(arr) {
  return arr.reverse();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseArray', () => {
  expect(reverseArray).to.be.a('function');
});

it("reverseArray([1, 2, 3, 4, 5]) should return [5, 4, 3, 2, 1]", () => {
  let originalArray = [1, 2, 3, 4, 5];
  reverseArray(originalArray);
  expect(originalArray).to.deep.equal([5, 4, 3, 2, 1]);
});

it("reverseArray(['a', 'b', 'c']) should return ['c', 'b', 'a']", () => {
  let originalArray = ['a', 'b', 'c'];
  reverseArray(originalArray);
  expect(originalArray).to.deep.equal(['c', 'b', 'a']);
});

it("reverseArray([]) should return []", () => {
  let originalArray = [];
  reverseArray(originalArray);
  expect(originalArray).to.deep.equal([]);
});

it("reverseArray([1]) should return [1]", () => {
  let originalArray = [1];
  reverseArray(originalArray);
  expect(originalArray).to.deep.equal([1]);
});

it("reverseArray([1, 2]) should return [2, 1]", () => {
  let originalArray = [1, 2];
  reverseArray(originalArray);
  expect(originalArray).to.deep.equal([2, 1]);
});

it("reverseArray(['Hello', 'world']) should return ['world', 'Hello']", () => {
  let originalArray = ['Hello', 'world'];
  reverseArray(originalArray);
  expect(originalArray).to.deep.equal(['world', 'Hello']);
});

it("reverseArray([null, undefined, '']) should return ['', undefined, null]", () => {
  let originalArray = [null, undefined, ''];
  reverseArray(originalArray);
  expect(originalArray).to.deep.equal(['', undefined, null]);
});

it("reverseArray([true, false, true]) should return [true, false, true]", () => {
  let originalArray = [true, false, true];
  reverseArray(originalArray);
  expect(originalArray).to.deep.equal([true, false, true]);
});

it("reverseArray(['a', 1, null, undefined]) should return [undefined, null, 1, 'a']", () => {
  let originalArray = ['a', 1, null, undefined];
  reverseArray(originalArray);
  expect(originalArray).to.deep.equal([undefined, null, 1, 'a']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
