// NAMEEN:
// NAMERU:Возвести числа в квадрат

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `squareNumbers`, которая принимает массив чисел и возвращает новый массив, где каждое число было возведено в квадрат.

Используйте метод `Array.prototype.forEach()` для этого преобразования.


Пример запуска функции:
```javascript
squareNumbers([1, 2, 3, 4]); // [1, 4, 9, 16]
squareNumbers([-4, -10, 0, 100]); // [ 16, 100, 0, 10000 ]
squareNumbers([]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function squareNumbers(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function squareNumbers(arr) {
  let res = []

  arr.forEach(n => res.push(n * n))

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function squareNumbers', () => {
  expect(squareNumbers).to.be.a('function');
});

it('Function squareNumbers should include method forEach()', () => {
  const res = squareNumbers.toString()
  expect(res).to.include('.forEach(')
});

it("squareNumbers([1, 2, 3, 4]) should return [1, 4, 9, 16]", () => {
  expect(squareNumbers([1, 2, 3, 4])).to.deep.equal([1, 4, 9, 16]);
});

it("squareNumbers([-1, -2, -3, -4]) should return [1, 4, 9, 16]", () => {
  expect(squareNumbers([-1, -2, -3, -4])).to.deep.equal([1, 4, 9, 16]);
});

it("squareNumbers([0]) should return [0]", () => {
  expect(squareNumbers([0])).to.deep.equal([0]);
});

it("squareNumbers([]) should return []", () => {
  expect(squareNumbers([])).to.deep.equal([]);
});

it("squareNumbers([10, 100, 1000]) should return [100, 10000, 1000000]", () => {
  expect(squareNumbers([10, 100, 1000])).to.deep.equal([100, 10000, 1000000]);
});

it("squareNumbers([5, 6, 7, 8]) should return [25, 36, 49, 64]", () => {
  expect(squareNumbers([5, 6, 7, 8])).to.deep.equal([25, 36, 49, 64]);
});

it("squareNumbers([2, 4, 6, 8, 10]) should return [4, 16, 36, 64, 100]", () => {
  expect(squareNumbers([2, 4, 6, 8, 10])).to.deep.equal([4, 16, 36, 64, 100]);
});

it("squareNumbers([1.5, 2.5, 3.5]) should return [2.25, 6.25, 12.25]", () => {
  expect(squareNumbers([1.5, 2.5, 3.5])).to.deep.equal([2.25, 6.25, 12.25]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
