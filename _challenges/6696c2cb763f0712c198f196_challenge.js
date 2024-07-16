// NAMEEN:
// NAMERU:Симметричны ли массивы?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `areTwoArraysSymmetrical`, которая принимает два массива и возвращает `true`, если они симметричны, и `false` в противном случае.

Что бы два массива были симметричны, их длина должна быть одинаковой, а элементы расположены в обратном порядке.

Например: `[1, 2, 3]` и `[3, 2, 1]` - симметричны. `[1, 2, 3]` и `[3, 2, 4]` - не симметричны.


Пример запуска функции:
```javascript
areTwoArraysSymmetrical([10, 20, 30], [30, 20, 10]);       // true
areTwoArraysSymmetrical(['a', 'b', 'c'], ['c', 'b', 'd']); // false
areTwoArraysSymmetrical([1, 2, 3, 4, 5], [5, 4, 3]);       // false
areTwoArraysSymmetrical([], []);                           // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function areTwoArraysSymmetrical(arr1, arr2){
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[arr2.length - 1 - i]) return false;
  }
  return true;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function areTwoArraysSymmetrical', () => {
  expect(areTwoArraysSymmetrical).to.be.a('function');
});

it("Function areTwoArraysSymmetrical does not include 'reverse' method", () => {
  expect(areTwoArraysSymmetrical.toString()).to.not.include('reverse');
});

it("Function areTwoArraysSymmetrical does not include 'join' method", () => {
  expect(areTwoArraysSymmetrical.toString()).to.not.include('join');
});

it("areTwoArraysSymmetrical([1, 2, 3], [3, 2, 1]) should return true", () => {
  expect(areTwoArraysSymmetrical([1, 2, 3], [3, 2, 1])).to.equal(true);
});

it("areTwoArraysSymmetrical([1, 2, 3], [4, 2, 1]) should return false", () => {
  expect(areTwoArraysSymmetrical([1, 2, 3], [4, 2, 1])).to.equal(false);
});

it("areTwoArraysSymmetrical([150, true, 'hello'], ['hello', true, 150]) should return true", () => {
  expect(areTwoArraysSymmetrical([150, true, 'hello'], ['hello', true, 150])).to.equal(true);
});

it("areTwoArraysSymmetrical(['567', true, 'hello'], ['hello', false, 567]) should return false", () => {
  expect(areTwoArraysSymmetrical(['567', true, 'hello'], ['hello', false, 567])).to.equal(false);
});

it("areTwoArraysSymmetrical(['hello', 'world', 'js'], ['js', 'World', 'hello']) should return false", () => {
  expect(areTwoArraysSymmetrical(['hello', 'world', 'js'], ['js', 'World', 'hello'])).to.equal(false);
});

it("areTwoArraysSymmetrical(['hello', 'world', 'js'], ['js', 'hello']) should return false", () => {
  expect(areTwoArraysSymmetrical(['hello', 'world', 'js'], ['js', 'hello'])).to.equal(false);
});

it("areTwoArraysSymmetrical([], []) should return true", () => {
  expect(areTwoArraysSymmetrical([], [])).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
