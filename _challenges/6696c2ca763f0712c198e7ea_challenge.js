// NAMEEN:
// NAMERU:Добавление новых элементов в начало массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `addNewElements`.

Функция принимает 3 параметра:
* `array` – массив чисел
* `elm1` и `elm2` – числа

Добавьте в начало массива `array` 3 новых элемента: `elm1`, `elm2`, сумму `elm1` и `elm2`.

Функция должна вернуть массив, полученный в результате добавления новых элементов.

Массив `array` может быть пустым.

Для решения задачи используйте метод `unshift`.

Примеры запуска функции:

```javascript
addNewElements([1, 2, 3 ,4], -1, 1); // [-1, 1, 0, 1, 2, 3, 4]
addNewElements([22, 53, 64], 3, 12); // [3, 12, 15, 22, 53, 64]
addNewElements([10], 3, 4);          // [3, 4, 7, 10]
addNewElements([], 4, 6);            // [4, 6, 10]
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addNewElements(arr, elm1, elm2) {
  arr.unshift(elm1, elm2, elm1 + elm2);
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function addNewElements', () => {
  expect(addNewElements).to.be.a('function');
});

it('addNewElements([11, 21, 31, 41], 4, 5) should return [4, 5, 9, 11, 21, 31, 41]', () => {
  expect(addNewElements([11, 21, 31, 41], 4, 5)).eql([4, 5, 9, 11, 21, 31, 41]);
});

it('addNewElements([8, 104, -65], 2, 13) should return [2, 13, 15, 8, 104, -65]', () => {
  expect(addNewElements([8, 104, -65], 2, 13)).eql([2, 13, 15, 8, 104, -65]);
});

it('addNewElements([10], -2, 4) should return [ -2, 4, 2, 10]', () => {
  expect(addNewElements([10], -2, 4)).eql([-2, 4, 2, 10]);
});

it('addNewElements([], 3, 7) should return [3, 7, 10]', () => {
  expect(addNewElements([], 3, 7)).eql([3, 7, 10]);
});

it('addNewElements([1, -2, 3, 4, -5, 26, 2, 0, 11, 77], 0, -15) should return [0, -15, -15, 1, -2, 3, 4, -5, 26, 2, 0, 11, 77]', () => {
  expect(addNewElements([1, -2, 3, 4, -5, 26, 2, 0, 11, 77], 0, -15)).eql([0, -15, -15, 1, -2, 3, 4, -5, 26, 2, 0, 11, 77]);
});

it('addNewElements([1], 0, 0) should return [ 0, 0, 0, 1]', () => {
  expect(addNewElements([1], 0, 0)).eql([0, 0, 0, 1]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
