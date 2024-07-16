// NAMEEN:
// NAMERU:Поиск первого положительного нечетного числа в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findFirstPositiveOdd`, которая принимает массив чисел в качестве аргумента и возвращает первое положительное нечетное число в массиве.

Если такое число не найдено, функция должна вернуть строку `Positive odd number hasn't been found`.


Пример запуска функции:
```javascript
findFirstPositiveOdd([0, 1, 2, -3, -4]); // 1
findFirstPositiveOdd([-2, -4, -1, 0, 2, 4]); // "Positive odd number hasn't been found"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findFirstPositiveOdd(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findFirstPositiveOdd(numbers) {
  return numbers.find(n => n > 0 && n % 2) || "Positive odd number hasn't been found";
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findFirstPositiveOdd', () => {
  expect(findFirstPositiveOdd).to.be.a('function');
});

it("Function findFirstPositiveOdd should include find method", () => {
  const result = findFirstPositiveOdd.toString();
  expect(result).to.include('.find(');
});

it("findFirstPositiveOdd([0, -1, 2, 3, 4]) should return 3", () => {
  expect(findFirstPositiveOdd([0, -1, 2, 3, 4])).to.equal(3);
});

it("findFirstPositiveOdd([-2, -4, 0, 2, 4]) should return 'Positive odd number hasn't been found'", () => {
  expect(findFirstPositiveOdd([-2, -4, 0, 2, 4])).to.equal("Positive odd number hasn't been found");
});

it("findFirstPositiveOdd([1, 2, 3, 4, 5]) should return 1", () => {
  expect(findFirstPositiveOdd([1, 2, 3, 4, 5])).to.equal(1);
});

it("findFirstPositiveOdd([2, 4, 6, 8, 10]) should return 'Positive odd number hasn't been found'", () => {
  expect(findFirstPositiveOdd([2, 4, 6, 8, 10])).to.equal("Positive odd number hasn't been found");
});

it("findFirstPositiveOdd([-1, -3, -5, 7, -9, 11]) should return 7", () => {
  expect(findFirstPositiveOdd([-1, -3, -5, 7, -9, 11])).to.equal(7);
});

it("findFirstPositiveOdd([]) should return 'Positive odd number hasn't been found'", () => {
  expect(findFirstPositiveOdd([])).to.equal("Positive odd number hasn't been found");
});

it("findFirstPositiveOdd([-2, -4, 0, 2, 3]) should return 3", () => {
  expect(findFirstPositiveOdd([-2, -4, 0, 2, 3])).to.equal(3);
});

it("findFirstPositiveOdd([2, -4, 6, -8, 10]) should return 'Positive odd number hasn't been found'", () => {
  expect(findFirstPositiveOdd([2, -4, 6, -8, 10])).to.equal("Positive odd number hasn't been found");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
