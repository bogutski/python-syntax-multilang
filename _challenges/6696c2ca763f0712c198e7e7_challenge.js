// NAMEEN:
// NAMERU:Добавление нового элемента в конец массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `addElement`.

Параметры функции:
* `array` – массив чисел
* `endElement` – число, которое нужно добавить в конец массива

Функция должна вернуть массив, полученный в результате добавления `endElement`.
Для решения задачи используйте метод `push`.

Примеры запуска функции:

```javascript
addElement([1, 2, 3 ,4], 5); // [1, 2, 3, 4, 5]
addElement([2, 13, 64], 0);  // [2, 13, 64, 0]
addElement([2, 0], 56);      // [2, 0, 56]
addElement([], 56);          // [56]
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addElement(arr, elm) {
  arr.push(elm);
  return arr;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function addElement', () => {
  expect(addElement).to.be.a('function');
});

it('addElement([1, 2, 3 ,4], 10) should return [1, 2, 3 , 4, 10]', () => {
  expect(addElement([1, 2, 3, 4], 10)).eql([1, 2, 3, 4, 10]);
});

it('addElement([26, 30 ], 0) should return [26, 30, 0]', () => {
  expect(addElement([26, 30], 0)).eql([26, 30, 0]);
});

it('addElement([100], 200) should return [100, 200]', () => {
  expect(addElement([100], 200)).eql([100, 200]);
});

it('addElement([], 505) should return [505]', () => {
  expect(addElement([], 505)).eql([505]);
});

it('addElement([10, 20, 30 ,40, 50, 60, 70, 80, 90], 10000) should return [10, 20, 30 ,40, 50, 60, 70, 80, 90, 10000]', () => {
  expect(addElement([10, 20, 30, 40, 50, 60, 70, 80, 90], 10000)).eql([
    10, 20, 30, 40, 50, 60, 70, 80, 90, 10000,
  ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
