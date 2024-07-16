// NAMEEN:
// NAMERU:Сортировка по алфавиту

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortAlphabetically`, которая принимает массив строк и возвращает новый массив, где строки отсортированы в алфавитном порядке.

Функция должна использовать метод `toSorted()`, чтобы исходный массив оставался неизменным.


Примеры запуска функции:
```javascript
sortAlphabetically(["table", "chair", "lamp"]); // ["chair", "lamp", "table"]
sortAlphabetically(["banana", "apple", "cherry"]); // ["apple", "banana", "cherry"]
sortAlphabetically(["dog", "cat", "bird", "elephant"]); // ["bird", "cat", "dog", "elephant"]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortAlphabetically(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortAlphabetically(arr) {
  return arr.toSorted();
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSorted = function(compareFunction){
  const newArray = this.slice()
  if(compareFunction) return newArray.sort(compareFunction)
  else return newArray.sort()
}

it('Created function sortAlphabetically', () => {
  expect(sortAlphabetically).to.be.a('function');
});

it('Function sortAlphabetically should include method toSorted()', () => {
  const res = sortAlphabetically.toString()
  expect(res).to.include('.toSorted(')
});

it('Function sortAlphabetically should not include method sort()', () => {
  const res = sortAlphabetically.toString()
  expect(res).to.not.include('.sort(')
});

it("sortAlphabetically(['banana', 'apple', 'cherry']) should return ['apple', 'banana', 'cherry']", () => {
  expect(sortAlphabetically(["banana", "apple", "cherry"])).to.deep.equal(["apple", "banana", "cherry"]);
});

it("sortAlphabetically(['dog', 'cat', 'bird', 'elephant']) should return ['bird', 'cat', 'dog', 'elephant']", () => {
  expect(sortAlphabetically(["dog", "cat", "bird", "elephant"])).to.deep.equal(["bird", "cat", "dog", "elephant"]);
});

it("sortAlphabetically(['table', 'chair', 'lamp']) should return ['chair', 'lamp', 'table']", () => {
  expect(sortAlphabetically(["table", "chair", "lamp"])).to.deep.equal(["chair", "lamp", "table"]);
});

it("sortAlphabetically(['a', 'b', 'c']) should return ['a', 'b', 'c']", () => {
  expect(sortAlphabetically(['a', 'b', 'c'])).to.deep.equal(['a', 'b', 'c']);
});

it("sortAlphabetically(['z', 'y', 'x']) should return ['x', 'y', 'z']", () => {
  expect(sortAlphabetically(['z', 'y', 'x'])).to.deep.equal(['x', 'y', 'z']);
});

it("sortAlphabetically([]) should return an empty array", () => {
  expect(sortAlphabetically([])).to.deep.equal([]);
});

it("sortAlphabetically(['same', 'same', 'same']) should return ['same', 'same', 'same']", () => {
  expect(sortAlphabetically(['same', 'same', 'same'])).to.deep.equal(['same', 'same', 'same']);
});

it("sortAlphabetically(['Apple', 'apple']) should consider case sensitivity and return ['Apple', 'apple']", () => {
  expect(sortAlphabetically(['Apple', 'apple'])).to.deep.equal(['Apple', 'apple']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
