// NAMEEN:
// NAMERU:Найти индекс первого четного числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findFirstEvenIndex`, которая принимает многоуровневый массив чисел.

Функция должна вернуть индекс первого четного числа в массиве после его "выпрямления".

Если такого числа нет, функция должна вернуть строку "Even number not found".


Примеры запуска функции:
```javascript
findFirstEvenIndex([[2], 4, [6, 8]]); // 0
findFirstEvenIndex([[11, 13], [15, 18]]); // 3
findFirstEvenIndex([1, [3, 5], [7, 8, 10]]); // 4
findFirstEvenIndex([1, [3, 5], [7, 9]]); // "Even number not found"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findFirstEvenIndex(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findFirstEvenIndex(arr) {
  const result = arr.flat(Infinity).findIndex(num => num % 2 === 0)
  return result !== -1 ? result : 'Even number not found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findFirstEvenIndex', () => {
  expect(findFirstEvenIndex).to.be.a('function');
});

it("Function findFirstEvenIndex should include findIndex method", () => {
  const result = findFirstEvenIndex.toString();
  expect(result).to.include('.findIndex(');
});

it('findFirstEvenIndex([1, [3, 5], [7, 8, 10]]) should return 4', function() {
  expect(findFirstEvenIndex([1, [3, 5], [7, 8, 10]])).to.equal(4);
});

it('findFirstEvenIndex([1, [3, 5], [7, 9]]) should return "Even number not found"', function() {
  expect(findFirstEvenIndex([1, [3, 5], [7, 9]])).to.equal("Even number not found");
});

it('findFirstEvenIndex([[2], 4, [6, 8]]) should return 0', function() {
  expect(findFirstEvenIndex([[2], 4, [6, 8]])).to.equal(0);
});

it('findFirstEvenIndex([[11, 13], [15, 18]]) should return 3', function() {
  expect(findFirstEvenIndex([[11, 13], [15, 18]])).to.equal(3);
});

it('findFirstEvenIndex([[5], 7, 9, [10]]) should return 3', function() {
  expect(findFirstEvenIndex([[5], 7, 9, [10]])).to.equal(3);
});

it('findFirstEvenIndex([1, [2, 3], 4, 5, [6]]) should return 1', function() {
  expect(findFirstEvenIndex([1, [2, 3], 4, 5, [6]])).to.equal(1);
});

it('findFirstEvenIndex([[3], 5, [7, 9]]) should return "Even number not found"', function() {
  expect(findFirstEvenIndex([[3], 5, [7, 9]])).to.equal("Even number not found");
});

it('findFirstEvenIndex([[0, 2], 4, [6]]) should return 0', function() {
  expect(findFirstEvenIndex([[0, 2], 4, [6]])).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
