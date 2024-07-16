// NAMEEN:
// NAMERU:Поиск ближайшего к числу элемента в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findClosestNumber`, которая принимает массив чисел и число в качестве аргументов и возвращает значение элемента массива, которое находится ближе всего к указанному числу.

Если таких элементов несколько, вернуть первый из них.


Пример запуска функции:
```javascript
findClosestNumber([1, 2, 4, 6, 8], 5);    // 4
findClosestNumber([-3, 0, 2, 7, 10], -1); // 0
findClosestNumber([-5, -3, 0, 3, 5], -2); // -3
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findClosestNumber(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findClosestNumber(numbers, n) {
  let obj = {}

  for(let i = 0; i < numbers.length; i++){
    obj[numbers[i]] = Math.abs(n - numbers[i])
  }

  let sortedArray = Object.entries(obj).sort((a, b) => a[1] - b[1])

  return +sortedArray[0][0];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findClosestNumber', () => {
  expect(findClosestNumber).to.be.a('function');
});

it("findClosestNumber([1, 2, 4, 6, 8], 5) should return 4", () => {
  expect(findClosestNumber([1, 2, 4, 6, 8], 5)).to.equal(4);
});

it("findClosestNumber([-3, 0, 2, 7, 10], -1) should return 0", () => {
  expect(findClosestNumber([-3, 0, 2, 7, 10], -1)).to.equal(0);
});

it("findClosestNumber([5, 7, 9, 11, 13], 9) should return 9", () => {
  expect(findClosestNumber([5, 7, 9, 11, 13], 9)).to.equal(9);
});

it("findClosestNumber([5, 7, 9, 11, 13], 12) should return 11", () => {
  expect(findClosestNumber([5, 7, 9, 11, 13], 12)).to.equal(11);
});

it("findClosestNumber([-5, -3, 0, 3, 5], -2) should return -3", () => {
  expect(findClosestNumber([-5, -3, 0, 3, 5], -2)).to.equal(-3);
});

it("findClosestNumber([100, 200, 300, 400, 500], 350) should return 300", () => {
  expect(findClosestNumber([100, 200, 300, 400, 500], 350)).to.equal(300);
});

it("findClosestNumber([1, 2, 3, 4, 5], 3.5) should return 3", () => {
  expect(findClosestNumber([1, 2, 3, 4, 5], 3.5)).to.equal(3);
});

it("findClosestNumber([10, 20, 30, 40, 50], 55) should return 50", () => {
  expect(findClosestNumber([10, 20, 30, 40, 50], 55)).to.equal(50);
});

it("findClosestNumber([-10, -20, -30, -40, -50], -45) should return -40", () => {
  expect(findClosestNumber([-10, -20, -30, -40, -50], -45)).to.equal(-40);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
