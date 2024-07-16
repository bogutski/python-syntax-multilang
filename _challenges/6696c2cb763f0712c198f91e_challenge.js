// NAMEEN:
// NAMERU:Проверка наличия числа в массивах чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `hasArrayWithTargetNumbers`, которая принимает массив массивов чисел и несколько чисел.

Функция должна возвращать `true`, если хотя бы один массив содержит хотя бы одно из указанных чисел, и `false` в противном случае.


Примеры запуска функции:
```javascript
hasArrayWithTargetNumbers([[5, 10, 15], [20, 25, 30]], 35); // false
hasArrayWithTargetNumbers([[23, 4, 8], [88, 63, 7]], 3, 5); // false
hasArrayWithTargetNumbers([[10, 20, 30], [40, 50, 60]], 50, 70, 60, 80);  // true
hasArrayWithTargetNumbers([[1, 2], [1, 2, 2, 1], [2, 3, 1, 5]], 6, 5, 4); // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function hasArrayWithTargetNumbers(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hasArrayWithTargetNumbers(numbers, ...arguments) {
  const targetArr = [...arguments]

  return numbers.some(arr => {
    return targetArr.some(n => arr.includes(n))
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function hasArrayWithTargetNumbers', () => {
  expect(hasArrayWithTargetNumbers).to.be.a('function');
});

it('hasArrayWithTargetNumbers([[1, 2], [1, 2, 2, 1], [2, 3, 1, 5]], 6, 5, 4) should return true', function() {
  expect(hasArrayWithTargetNumbers([[1, 2], [1, 2, 2, 1], [2, 3, 1, 5]], 6, 5, 4)).to.equal(true);
});

it('hasArrayWithTargetNumbers([[23, 4, 8], [88, 63, 7]], 3, 5) should return false', function() {
  expect(hasArrayWithTargetNumbers([[23, 4, 8], [88, 63, 7]], 3, 5)).to.equal(false);
});

it('hasArrayWithTargetNumbers([[10, 20, 30], [40, 50, 60]], 50, 70) should return true', function() {
  expect(hasArrayWithTargetNumbers([[10, 20, 30], [40, 50, 60]], 50, 70)).to.equal(true);
});

it('hasArrayWithTargetNumbers([[5, 10, 15], [20, 25, 30]], 35, 40) should return false', function() {
  expect(hasArrayWithTargetNumbers([[5, 10, 15], [20, 25, 30]], 35, 40)).to.equal(false);
});

it('hasArrayWithTargetNumbers([[1, 1, 1], [2, 2, 2], [3, 3, 3]], 3) should return true', function() {
  expect(hasArrayWithTargetNumbers([[1, 1, 1], [2, 2, 2], [3, 3, 3]], 3)).to.equal(true);
});

it('hasArrayWithTargetNumbers([[9, 8, 7], [6, 5, 4]], 1, 2, 3) should return false', function() {
  expect(hasArrayWithTargetNumbers([[9, 8, 7], [6, 5, 4]], 1, 2, 3)).to.equal(false);
});

it('hasArrayWithTargetNumbers([[11, 22, 33], [44, 55, 66]], 22, 44) should return true', function() {
  expect(hasArrayWithTargetNumbers([[11, 22, 33], [44, 55, 66]], 22, 44)).to.equal(true);
});

it('hasArrayWithTargetNumbers([[0, 1, 2], [3, 4, 5]], 6, 7, 8) should return false', function() {
  expect(hasArrayWithTargetNumbers([[0, 1, 2], [3, 4, 5]], 6, 7, 8)).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
