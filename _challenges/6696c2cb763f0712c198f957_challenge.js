// NAMEEN:
// NAMERU:Извлечение части массива с отрицательными индексами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getMiddleElements`, которая принимает массив и возвращает новый массив, содержащий элементы, начиная с третьего с конца и заканчивая предпоследним элементом массива.


Примеры запуска функции:
```javascript
getMiddleElements([1, 2, 3, 4, 5]); // [3, 4]
getMiddleElements([10, 20, 30, 40]); // [20, 30]
getMiddleElements(['a', 'b', 'c', 'd', 'e']); // ['c', 'd']
getMiddleElements([true, false, true, false, true]); // [true, false, true]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function getMiddleElements(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getMiddleElements(arr) {
  return arr.slice(-3, -1);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getMiddleElements', () => {
  expect(getMiddleElements).to.be.a('function');
});

it("Function getMiddleElements should include slice method", () => {
  const result = getMiddleElements.toString();
  expect(result).to.include('.slice(');
});

it('getMiddleElements([1, 2, 3, 4, 5]) should return [3, 4]', function() {
  expect(getMiddleElements([1, 2, 3, 4, 5])).to.eql([3, 4]);
});

it('getMiddleElements(["a", "b", "c", "d", "e"]) should return ["c", "d"]', function() {
  expect(getMiddleElements(["a", "b", "c", "d", "e"])).to.eql(["c", "d"]);
});

it('getMiddleElements([true, false, true, false, true]) should return [true, false]', function() {
  expect(getMiddleElements([true, false, true, false, true])).to.eql([true, false]);
});

it('getMiddleElements([10, 20, 30, 40]) should return [20, 30]', function() {
  expect(getMiddleElements([10, 20, 30, 40])).to.eql([20, 30]);
});

it('getMiddleElements([1, 2, 3]) should return [1, 2]', function() {
  expect(getMiddleElements([1, 2, 3])).to.eql([1, 2]);
});

it('getMiddleElements(["apple", "banana", "cherry", "date"]) should return ["banana", "cherry"]', function() {
  expect(getMiddleElements(["apple", "banana", "cherry", "date"])).to.eql(["banana", "cherry"]);
});

it('getMiddleElements([null, undefined, false, true]) should return [undefined, false]', function() {
  expect(getMiddleElements([null, undefined, false, true])).to.eql([undefined, false]);
});

it('getMiddleElements([]) should return []', function() {
  expect(getMiddleElements([])).to.eql([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
