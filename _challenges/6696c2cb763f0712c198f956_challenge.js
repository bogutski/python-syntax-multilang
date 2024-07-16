// NAMEEN:
// NAMERU:Извлечение последних двух элементов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getLastTwoElements`, которая принимает массив и возвращает новый массив, содержащий последние два элемента исходного массива.


Примеры запуска функции:
```javascript
getLastTwoElements([10, 20]); // [10, 20]
getLastTwoElements([1, 2, 3, 4, 5]); // [4, 5]
getLastTwoElements(['a', 'b', 'c', 'd', 'e']); // ['d', 'e']
getLastTwoElements([true, false, true, false]); // [true, false]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function getLastTwoElements(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getLastTwoElements(arr) {
  return arr.slice(-2);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getLastTwoElements', () => {
  expect(getLastTwoElements).to.be.a('function');
});

it("Function getLastTwoElements should include slice method", () => {
  const result = getLastTwoElements.toString();
  expect(result).to.include('.slice(');
});

it('getLastTwoElements([1, 2, 3, 4, 5]) should return [4, 5]', function() {
  expect(getLastTwoElements([1, 2, 3, 4, 5])).to.eql([4, 5]);
});

it('getLastTwoElements(["a", "b", "c", "d", "e"]) should return ["d", "e"]', function() {
  expect(getLastTwoElements(["a", "b", "c", "d", "e"])).to.eql(["d", "e"]);
});

it('getLastTwoElements([true, false, true, false]) should return [true, false]', function() {
  expect(getLastTwoElements([true, false, true, false])).to.eql([true, false]);
});

it('getLastTwoElements([10, 20]) should return [10, 20]', function() {
  expect(getLastTwoElements([10, 20])).to.eql([10, 20]);
});

it('getLastTwoElements([1, 2, 3]) should return [2, 3]', function() {
  expect(getLastTwoElements([1, 2, 3])).to.eql([2, 3]);
});

it('getLastTwoElements(["apple", "banana", "cherry", "date"]) should return ["cherry", "date"]', function() {
  expect(getLastTwoElements(["apple", "banana", "cherry", "date"])).to.eql(["cherry", "date"]);
});

it('getLastTwoElements([]) should return []', function() {
  expect(getLastTwoElements([])).to.eql([]);
});

it('getLastTwoElements([null, undefined, false, true]) should return [false, true]', function() {
  expect(getLastTwoElements([null, undefined, false, true])).to.eql([false, true]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
