// NAMEEN:
// NAMERU:Сортировка массива чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortNumbersAscending`, которая принимает массив чисел и возвращает новый массив, где все числа отсортированы по возрастанию.

Функция должна использовать новый метод `toSorted()` для создания отсортированного массива, сохраняя исходный массив неизменным.


Примеры запуска функции:
```javascript
sortNumbersAscending([5, 3, 8, 1]); // [1, 3, 5, 8]
sortNumbersAscending([10, 22, 15, 2]); // [2, 10, 15, 22]
sortNumbersAscending([-1, -3, 2, 0]); // [-3, -1, 0, 2]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortNumbersAscending(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortNumbersAscending(arr) {
  return arr.toSorted((a, b) => a - b);
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSorted = function(compareFunction){
  const newArray = this.slice()
  if(compareFunction) return newArray.sort(compareFunction)
  else return newArray.sort()
}

it('Created function sortNumbersAscending', () => {
  expect(sortNumbersAscending).to.be.a('function');
});

it('Function sortNumbersAscending should include method toSorted()', () => {
  const res = sortNumbersAscending.toString()
  expect(res).to.include('.toSorted(')
});

it("sortNumbersAscending([4, 1, 3]) should return [1, 3, 4]", () => {
  expect(sortNumbersAscending([4, 1, 3])).to.deep.equal([1, 3, 4]);
});

it("sortNumbersAscending([0, -1, 1]) should return [-1, 0, 1]", () => {
  expect(sortNumbersAscending([0, -1, 1])).to.deep.equal([-1, 0, 1]);
});

it("sortNumbersAscending([100, 10, 1000]) should return [10, 100, 1000]", () => {
  expect(sortNumbersAscending([100, 10, 1000])).to.deep.equal([10, 100, 1000]);
});

it("sortNumbersAscending([-2, -2, -2]) should return [-2, -2, -2]", () => {
  expect(sortNumbersAscending([-2, -2, -2])).to.deep.equal([-2, -2, -2]);
});

it("sortNumbersAscending([]) should return []", () => {
  expect(sortNumbersAscending([])).to.deep.equal([]);
});

it("sortNumbersAscending([5]) should return [5]", () => {
  expect(sortNumbersAscending([5])).to.deep.equal([5]);
});

it("sortNumbersAscending([3, 3, 3, 3]) should return [3, 3, 3, 3]", () => {
  expect(sortNumbersAscending([3, 3, 3, 3])).to.deep.equal([3, 3, 3, 3]);
});

it("sortNumbersAscending([-10, -20, -30]) should return [-30, -20, -10]", () => {
  expect(sortNumbersAscending([-10, -20, -30])).to.deep.equal([-30, -20, -10]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
