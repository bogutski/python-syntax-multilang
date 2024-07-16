// NAMEEN:
// NAMERU:Проверка наличия элемента в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `containsElement`, которая принимает массив и элемент, и возвращает `true`, если элемент содержится в массиве, и `false` в противном случае.


Примеры запуска функции:
```javascript
containsElement(['apple', 'banana', 'mango'], 'banana') // true
containsElement([1, 2, 3, 4, 5], 6)   // false
containsElement(['a', 'b', 'c'], 'd') // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function containsElement(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function containsElement(arr, element) {
  return arr.includes(element);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function containsElement', () => {
  expect(containsElement).to.be.a('function');
});

it("Function containsElement should include includes method", () => {
  const result = containsElement.toString();
  expect(result).to.include('.includes(');
});

it('containsElement(["apple", "banana", "mango"], "banana") should return true', function() {
  expect(containsElement(["apple", "banana", "mango"], "banana")).to.equal(true);
});

it('containsElement([1, 2, 3, 4, 5], 6) should return false', function() {
  expect(containsElement([1, 2, 3, 4, 5], 6)).to.equal(false);
});

it('containsElement(["a", "b", "c"], "d") should return false', function() {
  expect(containsElement(["a", "b", "c"], "d")).to.equal(false);
});

it('containsElement([true, false, true], false) should return true', function() {
  expect(containsElement([true, false, true], false)).to.equal(true);
});

it('containsElement([null, undefined, null], undefined) should return true', function() {
  expect(containsElement([null, undefined, null], undefined)).to.equal(true);
});

it('containsElement([NaN, 1, 2], NaN) should return true', function() {
  expect(containsElement([NaN, 1, 2], NaN)).to.equal(true);
});

it('containsElement(["apple", "banana", "mango"], "APPLE") should return false', function() {
  expect(containsElement(["apple", "banana", "mango"], "APPLE")).to.equal(false);
});

it('containsElement([], "anything") should return false', function() {
  expect(containsElement([], "anything")).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
