// NAMEEN:
// NAMERU:Найти последнее четное число в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastEven`, которая принимает массив целых чисел и возвращает последнее четное число в этом массиве.

Если четных чисел в массиве нет, функция должна вернуть `undefined`.


Примеры запуска функции:
```javascript
findLastEven([1, 2, 3, 4, 5, 6]) // 6
findLastEven([2, 4, 6, 8, 11])   // 8
findLastEven([1, 3, 5, 7])       // undefined
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastEven(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastEven(arr) {
  return arr.findLast(el => el % 2 === 0);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastEven', () => {
  expect(findLastEven).to.be.a('function');
});

it("Function findLastEven should include findLast method", () => {
  const result = findLastEven.toString();
  expect(result).to.include('.findLast(');
});

it('findLastEven([1, 2, 3, 4, 5, 6]) should return 6', function() {
  expect(findLastEven([1, 2, 3, 4, 5, 6])).to.equal(6);
});

it('findLastEven([1, 3, 5, 7]) should return undefined', function() {
  expect(findLastEven([1, 3, 5, 7])).to.be.undefined;
});

it('findLastEven([2, 4, 6, 8, 11]) should return 8', function() {
  expect(findLastEven([2, 4, 6, 8, 11])).to.equal(8);
});

it('findLastEven([42]) should return 42', function() {
  expect(findLastEven([42])).to.equal(42);
});

it('findLastEven([]) should return undefined', function() {
  expect(findLastEven([])).to.be.undefined;
});

it('findLastEven([21, 23, 20]) should return 20', function() {
  expect(findLastEven([21, 23, 20])).to.equal(20);
});

it('findAfindLastEven([0, 1, 3, 5]) should return 0', function() {
  expect(findLastEven([0, 1, 3, 5])).to.equal(0);
});

it('findLastEven([-1, -2, -3]) should return -2', function() {
  expect(findLastEven([-1, -2, -3])).to.equal(-2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
