// NAMEEN:
// NAMERU:Поиск числа в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findNumber`, которая принимает массив чисел и число, которое нужно найти, в качестве аргументов.

Функция должна вернуть первое вхождение числа в массиве. Если число не найдено, функция должна вернуть `undefined`.


Пример запуска функции:
```javascript
findNumber([1, 2, 3, 4, 5], 3); // 3
findNumber([10, 20, 30, 40, 50], 25); // undefined
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findNumber(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findNumber(numbers, n) {
  return numbers.find(el => el === n);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findNumber', () => {
  expect(findNumber).to.be.a('function');
});

it("Function findNumber should include find method", () => {
  const result = findNumber.toString();
  expect(result).to.include('.find(');
});

it("findNumber([1, 2, 3, 4, 5], 3) should return 3", () => {
  expect(findNumber([1, 2, 3, 4, 5], 3)).to.equal(3);
});

it("findNumber([10, 20, 30, 40, 50], 25) should return undefined", () => {
  expect(findNumber([10, 20, 30, 40, 50], 25)).to.be.undefined;
});

it("findNumber([1, 2, 3, 4, 5], 6) should return undefined", () => {
  expect(findNumber([1, 2, 3, 4, 5], 6)).to.be.undefined;
});

it("findNumber([], 5) should return undefined if array is empty", () => {
  expect(findNumber([], 5)).to.be.undefined;
});

it("findNumber([1, 2, 3, 4, 5], 3) should return the first occurrence of the number", () => {
  expect(findNumber([1, 2, 3, 3, 3, 4, 5], 3)).to.equal(3);
});

it("findNumber([5, 5, 5, 5, 5], 5) should return the first occurrence of the number", () => {
  expect(findNumber([5, 5, 5, 5, 5], 5)).to.equal(5);
});

it("findNumber([1, 2, 3, 4, 5], 5) should return 5", () => {
  expect(findNumber([1, 2, 3, 4, 5], 5)).to.equal(5);
});

it("findNumber([1, 2, 3, 4, 5], 1) should return 1", () => {
  expect(findNumber([1, 2, 3, 4, 5], 1)).to.equal(1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
