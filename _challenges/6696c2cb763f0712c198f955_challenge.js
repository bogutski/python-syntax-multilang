// NAMEEN:
// NAMERU:Извлечение первых трех элементов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getFirstThreeElements`, которая принимает массив и возвращает новый массив, содержащий первые три элемента исходного массива.


Примеры запуска функции:
```javascript
getFirstThreeElements([10, 20]); // [10, 20]
getFirstThreeElements([1, 2, 3, 4, 5]); // [1, 2, 3]
getFirstThreeElements(['a', 'b', 'c', 'd', 'e']); // ['a', 'b', 'c']
getFirstThreeElements([true, false, true, false]); // [true, false, true]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function getFirstThreeElements(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getFirstThreeElements(arr) {
  return arr.slice(0, 3);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getFirstThreeElements', () => {
  expect(getFirstThreeElements).to.be.a('function');
});

it("Function getFirstThreeElements should include slice method", () => {
  const result = getFirstThreeElements.toString();
  expect(result).to.include('.slice(');
});

it('getFirstThreeElements([1, 2, 3, 4, 5]) should return [1, 2, 3]', function() {
  expect(getFirstThreeElements([1, 2, 3, 4, 5])).to.eql([1, 2, 3]);
});

it('getFirstThreeElements(["a", "b", "c", "d", "e"]) should return ["a", "b", "c"]', function() {
  expect(getFirstThreeElements(["a", "b", "c", "d", "e"])).to.eql(["a", "b", "c"]);
});

it('getFirstThreeElements([true, false, true, false]) should return [true, false, true]', function() {
  expect(getFirstThreeElements([true, false, true, false])).to.eql([true, false, true]);
});

it('getFirstThreeElements([10, 20]) should return [10, 20]', function() {
  expect(getFirstThreeElements([10, 20])).to.eql([10, 20]);
});

it('getFirstThreeElements([1, 2, 3]) should return [1, 2, 3]', function() {
  expect(getFirstThreeElements([1, 2, 3])).to.eql([1, 2, 3]);
});

it('getFirstThreeElements(["apple", "banana", "cherry", "date"]) should return ["apple", "banana", "cherry"]', function() {
  expect(getFirstThreeElements(["apple", "banana", "cherry", "date"])).to.eql(["apple", "banana", "cherry"]);
});

it('getFirstThreeElements([]) should return []', function() {
  expect(getFirstThreeElements([])).to.eql([]);
});

it('getFirstThreeElements([null, undefined, false, true]) should return [null, undefined, false]', function() {
  expect(getFirstThreeElements([null, undefined, false, true])).to.eql([null, undefined, false]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
