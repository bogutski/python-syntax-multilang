// NAMEEN:
// NAMERU:Выпрямление и суммирование уникальных значений

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `flattenAndSumUnique`, которая принимает один аргумент — вложенный массив `nestedArray`, содержащий числа.

Функция должна сначала "выпрямить" все элементы массивов до одного уровня. Затем функция должна суммировать только уникальные числа в результирующем массиве.


Примеры Запуска Функции:
```javascript
flattenAndSumUnique([[0], [-1], [1], [0]]); // 0 (-1 + 0 + 1)
flattenAndSumUnique([1, [2, 2], [3, [4, 4]]]); // 10 (1 + 2 + 3 + 4)
flattenAndSumUnique([[6, 5, 5], [4], [3, 6], [1, 2, 3, 1]]); //  21 (6 + 5 + 4 + 3 + 2 + 1)
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function flattenAndSumUnique(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function flattenAndSumUnique(arr) {
  arr = arr.flat(Infinity)
  let sum = 0

  arr.forEach((el, index, original) => {
    if(original.indexOf(el, index + 1) === -1) sum += el
  })

  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function flattenAndSumUnique', () => {
  expect(flattenAndSumUnique).to.be.a('function');
});

it('Function flattenAndSumUnique should include method flat()', () => {
  const res = flattenAndSumUnique.toString()
  expect(res).to.include('.flat(')
});

it("flattenAndSumUnique([1, [2, 2], [3, [4, 4]]]) should return 10", function() {
  expect(flattenAndSumUnique([1, [2, 2], [3, [4, 4]]])).to.equal(10);
});

it("flattenAndSumUnique([[6, 5, 5], [4], [3, 6], [1, 2, 3, 1]]) should return 21", function() {
  expect(flattenAndSumUnique([[6, 5, 5], [4], [3, 6], [1, 2, 3, 1]])).to.equal(21);
});

it("flattenAndSumUnique([[0], [-1], [1], [0]]) should return 0", function() {
  expect(flattenAndSumUnique([[0], [-1], [1], [0]])).to.equal(0);
});

it("flattenAndSumUnique([[100], [100], [100]]) should return 100", function() {
  expect(flattenAndSumUnique([[100], [100], [100]])).to.equal(100);
});

it("flattenAndSumUnique([[], [], [1, 2, 3]]) should return 6", function() {
  expect(flattenAndSumUnique([[], [], [1, 2, 3]])).to.equal(6);
});

it("flattenAndSumUnique([[-10, 20], [-20, 10, 30]]) should return 30", function() {
  expect(flattenAndSumUnique([[-10, 20], [-20, 10, 30]])).to.equal(30);
});

it("flattenAndSumUnique([[3, 3], [3], [3, [3]]]) should return 3", function() {
  expect(flattenAndSumUnique([[3, 3], [3], [3, [3]]])).to.equal(3);
});

it("flattenAndSumUnique([[7, 8, 9], [], [10, 11, 12], [7, 8, 9]]) should return 57", function() {
  expect(flattenAndSumUnique([[7, 8, 9], [], [10, 11, 12], [7, 8, 9]])).to.equal(57);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
