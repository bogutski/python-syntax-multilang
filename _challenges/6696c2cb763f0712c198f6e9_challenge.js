// NAMEEN:
// NAMERU:Фильтрация чётных чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterEvenNumbers`, которая принимает массив чисел и возвращает новый массив, содержащий только чётные числа из исходного массива.


Примеры запуска функции:
```javascript
filterEvenNumbers([1, 2, 3, 4, 5, 6]); // [2, 4, 6]
filterEvenNumbers([12, 15, 23, 42]);   // [12, 42]
filterEvenNumbers([11, 22]);           // [22]
filterEvenNumbers([]);                 // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterEvenNumbers(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterEvenNumbers(array) {
  return array.filter(n => n % 2 === 0);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterEvenNumbers', () => {
  expect(filterEvenNumbers).to.be.a('function');
});

it("Function filterEvenNumbers should include filter method", () => {
  const result = filterEvenNumbers.toString();
  expect(result).to.include('.filter(');
});

it("filterEvenNumbers([1, 2, 3, 4, 5, 6]) should return [2, 4, 6]", () => {
  expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).to.deep.equal([2, 4, 6]);
});

it("filterEvenNumbers([12, 15, 23, 42]) should return [12, 42]", () => {
  expect(filterEvenNumbers([12, 15, 23, 42])).to.deep.equal([12, 42]);
});

it("filterEvenNumbers([11, 22]) should return [22]", () => {
  expect(filterEvenNumbers([11, 22])).to.deep.equal([22]);
});

it("filterEvenNumbers([]) should return []", () => {
  expect(filterEvenNumbers([])).to.deep.equal([]);
});

it("filterEvenNumbers([1, 3, 5]) should return []", () => {
  expect(filterEvenNumbers([1, 3, 5])).to.deep.equal([]);
});

it("filterEvenNumbers([2, 4, 6, 8, 10]) should return [2, 4, 6, 8, 10]", () => {
  expect(filterEvenNumbers([2, 4, 6, 8, 10])).to.deep.equal([2, 4, 6, 8, 10]);
});

it("filterEvenNumbers([21, 43, 65]) should return []", () => {
  expect(filterEvenNumbers([21, 43, 65])).to.deep.equal([]);
});

it("filterEvenNumbers([20, 25, 30, 35, 40]) should return [20, 30, 40]", () => {
  expect(filterEvenNumbers([20, 25, 30, 35, 40])).to.deep.equal([20, 30, 40]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
