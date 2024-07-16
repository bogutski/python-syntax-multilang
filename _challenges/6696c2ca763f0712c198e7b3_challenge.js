// NAMEEN:
// NAMERU:Изменение элемента массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `changeElement`, которая принимает два параметра - массив и число.

Массив произвольной длины и состоит из чисел.

Если нужное число есть в массиве, то функция должна заменить его на противоположное по знаку.

Если нужного числа нет в массиве, то присвойте значению последнего элемента массива значение искомого числа.

Функция должна вернуть измененный массив.

Пример запуска функции:
```javascript
changeElement([1, 2, 3, 4, 5], 3) // [1, 2, -3, 4, 5]
changeElement([1, 2, 3, 4, 5], 6) // [1, 2, 3, 4, 6]
changeElement([1, 2, 3, 4, 5, 7, 9, 13, 8], 0) // [1, 2, 3, 4, 5, 7, 9, 13, 0]
changeElement([1, 2, 3, 4, 5, 7, 9, 13, 8], 8) // [1, 2, 3, 4, 5, 7, 9, 13, -8]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function changeElement(arr, num) {
  if (arr.indexOf(num) >= 0) {
    arr[arr.indexOf(num)] = -num
  } else if (arr.indexOf(num) === -1) {
    arr[arr.length - 1] = num;
  }
  return arr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function changeElement', () => {
  expect(changeElement).to.be.a('function');
});

it("changeElement([1, 2, 3, 4, 5], 3) should return [1, 2, -3, 4, 5]", () => {
  expect(changeElement([1, 2, 3, 4, 5], 3)).to.eql([1, 2, -3, 4, 5]);
});

it("changeElement([1, 2, 3, 4, 5], 6) should return [1, 2, 3, 4, 6]", () => {
  expect(changeElement([1, 2, 3, 4, 5], 6)).to.eql([1, 2, 3, 4, 6]);
});

it("changeElement([1, 2, 3, 4, 5, 7, 9, 13, 8], 0) should return [1, 2, 3, 4, 5, 7, 9, 13, 0]", () => {
  expect(changeElement([1, 2, 3, 4, 5, 7, 9, 13, 8], 0)).to.eql([1, 2, 3, 4, 5, 7, 9, 13, 0]);
});

it("changeElement([1, 2, 3, 4, 5, 7, 9, 13, 8], 8) should return [1, 2, 3, 4, 5, 7, 9, 13, -8]", () => {
  expect(changeElement([1, 2, 3, 4, 5, 7, 9, 13, 8], 8)).to.eql([1, 2, 3, 4, 5, 7, 9, 13, -8]);
});

it("changeElement([100, 200, 300, 400, 579, 130], 400) should return [100, 200, 300, -400, 579, 130]", () => {
  expect(changeElement([100, 200, 300, 400, 579, 130], 400)).to.eql([100, 200, 300, -400, 579, 130]);
});

it("changeElement([100, 200, 300, 400, 579, 130], 105) should return [100, 200, 300, 400, 579, 105]", () => {
  expect(changeElement([100, 200, 300, 400, 579, 130], 105)).to.eql([100, 200, 300, 400, 579, 105]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
