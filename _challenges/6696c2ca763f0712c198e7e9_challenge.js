// NAMEEN:
// NAMERU:Добавление элемента с нулевым значением в начало массива.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `addFirstZero`.

Параметр функции:
* `array` – массив чисел

Функция принимает массив целых положительных чисел. Числа в массиве упорядочены по возрастанию. Переданный массив не может быть пустым.
Нужно проверить, является ли первый элемент массива нулем. Если нет, то нужно добавить значение нуль в начало массива.

Функция должна вернуть массив, полученный в результате добавления нового нулевого значения.

Если элемент со значением нуль уже есть в массиве, тогда функция должна вернуть сообщение `"Zero value already exists"`.

Для решения задачи используйте метод `unshift`.

Индекс первого элемента в массиве всегда равен нулю.

Примеры запуска функции:

```javascript
addFirstZero([1, 2, 3 ,4, 5]);      // [0, 1, 2, 3, 4, 5]
addFirstZero([0, 2, 55, 103, 234]); // "Zero value already exists"
addFirstZero([5]);                  // [0, 5]
addFirstZero([0]);                  // "Zero value already exists"
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
func
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addFirstZero(arr) {
  if ( arr[0] === 0 ) {
    return "Zero value already exists";
  }
  arr.unshift(0);
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function addFirstZero', () => {
  expect(addFirstZero).to.be.a('function');
});

it('addFirstZero([11, 22, 33 ,44]) should return [0, 11, 22, 33 ,44]', () => {
  expect(addFirstZero([11, 22, 33 ,44])).eql([0, 11, 22, 33 ,44]);
});

it('addFirstZero([1, 4, 6 ,10, 12, 25, 26]) should return [0, 1, 4, 6 ,10, 12, 25, 26]', () => {
  expect(addFirstZero([1, 4, 6 ,10, 12, 25, 26])).eql([0, 1, 4, 6 ,10, 12, 25, 26]);
});

it('addFirstZero([0, 1, 2, 3, 4]) should return "Zero value already exists"', () => {
  expect(addFirstZero([0, 1, 2, 3, 4])).eql("Zero value already exists");
});

it('addFirstZero([400) should return [0, 400]', () => {
  expect(addFirstZero([400])).eql([0, 400]);
});

it('addFirstZero([0]) should return "Zero value already exists"', () => {
  expect(addFirstZero([0])).eql("Zero value already exists");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
