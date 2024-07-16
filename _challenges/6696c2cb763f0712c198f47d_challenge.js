// NAMEEN:
// NAMERU:Удвоение значений в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `doubleValues`, которая принимает массив чисел и возвращает новый массив, где каждое число удвоено.

Используйте метод map() для этой задачи.


Пример запуска функции:
```javascript
doubleValues([1, 2, 3, 4]); // [ 2, 4, 6, 8 ]
doubleValues([-100, -50, -10, - 5]); // [ -200, -100, -20, -10 ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function doubleValues(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function doubleValues(arr) {
  return arr.map(num => num * 2);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function doubleValues', () => {
  expect(doubleValues).to.be.a('function');
});

it('Function doubleValues should include method map()', () => {
  const res = doubleValues.toString()
  expect(res).to.include('.map(')
});

it("doubleValues([1, 2, 3, 4]) should return [2, 4, 6, 8]", () => {
  expect(doubleValues([1, 2, 3, 4])).to.deep.equal([2, 4, 6, 8]);
});

it("doubleValues([-1, -2, -3, -4]) should return [-2, -4, -6, -8]", () => {
  expect(doubleValues([-1, -2, -3, -4])).to.deep.equal([-2, -4, -6, -8]);
});

it("doubleValues([0, 0, 0]) should return [0, 0, 0]", () => {
  expect(doubleValues([0, 0, 0])).to.deep.equal([0, 0, 0]);
});

it("doubleValues([]) should return []", () => {
  expect(doubleValues([])).to.deep.equal([]);
});

it("doubleValues([1.5, 2.5, 3.5]) should return [3.0, 5.0, 7.0]", () => {
  expect(doubleValues([1.5, 2.5, 3.5])).to.deep.equal([3.0, 5.0, 7.0]);
});

it("doubleValues([10, 20, 30]) should return [20, 40, 60]", () => {
  expect(doubleValues([10, 20, 30])).to.deep.equal([20, 40, 60]);
});

it("doubleValues([-2, 0, 2]) should return [-4, 0, 4]", () => {
  expect(doubleValues([-2, 0, 2])).to.deep.equal([-4, 0, 4]);
});

it("doubleValues([2]) should return [4]", () => {
  expect(doubleValues([2])).to.deep.equal([4]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
