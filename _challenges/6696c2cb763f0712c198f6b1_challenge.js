// NAMEEN:
// NAMERU:Вычисление среднего и инверсия массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `averageAndReverse`, которая принимает массив чисел.

Функция должна найти среднее значение этих чисел, и вернуть массив, в котором каждый элемент является разностью между средним значением и соответствующим элементом массива, расположенными в обратном порядке.

Используйте метод `toReversed()` для инверсии массива после выполнения вычислений.


Примеры запуска функции:
```javascript
averageAndReverse([10, 20, 30, 40, 50]); // [20, 10, 0, -10, -20]
averageAndReverse([1, 2, 3, 4, 5]); // [2, 1, 0, -1, -2]
averageAndReverse([100, 200]); // [50, -50]
averageAndReverse([]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function averageAndReverse(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function averageAndReverse(array) {
  const average = array.reduce((acc, n) => acc + n, 0) / array.length
  return array.map(n => n - average).toReversed()
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toReversed = function(){
  return this.slice().reverse()
}

it('Created function averageAndReverse', () => {
  expect(averageAndReverse).to.be.a('function');
});

it("Function averageAndReverse() should include toReversed method", () => {
  const result = averageAndReverse.toString();
  expect(result).to.include('.toReversed()');
});

it("Function averageAndReverse() should not include comments", () => {
  const result = averageAndReverse.toString();
  expect(result).to.not.include('//');
  expect(result).to.not.include('/*');
});

it("Function averageAndReverse() should not modify the original array", () => {
  let originalArray = [1, 2, 3, 4];
  averageAndReverse(originalArray);
  expect(originalArray).to.deep.equal([1, 2, 3, 4]);
});

it("averageAndReverse([1, 2, 3, 4, 5]) should return [2, 1, 0, -1, -2]", () => {
  expect(averageAndReverse([1, 2, 3, 4, 5])).to.deep.equal([2, 1, 0, -1, -2]);
});

it("averageAndReverse([10, 20, 30, 40, 50]) should return [20, 10, 0, -10, -20]", () => {
  expect(averageAndReverse([10, 20, 30, 40, 50])).to.deep.equal([20, 10, 0, -10, -20]);
});

it("averageAndReverse([100, 200]) should return [50, -50]", () => {
  expect(averageAndReverse([100, 200])).to.deep.equal([50, -50]);
});

it("averageAndReverse([]) should return []", () => {
  expect(averageAndReverse([])).to.deep.equal([]);
});

it("averageAndReverse([-10, 0, 10, 20]) should return [15, 5, -5, -15]", () => {
  expect(averageAndReverse([-10, 0, 10, 20])).to.deep.equal([15, 5, -5, -15]);
});

it("averageAndReverse([5]) should return [0]", () => {
  expect(averageAndReverse([5])).to.deep.equal([0]);
});

it("averageAndReverse([1, 1, 1, 1, 1]) should return [0, 0, 0, 0, 0]", () => {
  expect(averageAndReverse([1, 1, 1, 1, 1])).to.deep.equal([0, 0, 0, 0, 0]);
});

it("averageAndReverse([15, -15, 0]) should return [0, -15, 15]", () => {
  expect(averageAndReverse([15, -15, 0])).to.deep.equal([0, -15, 15]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
