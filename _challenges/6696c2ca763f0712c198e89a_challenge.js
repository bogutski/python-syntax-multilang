// NAMEEN:
// NAMERU:Объединение массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
`concat()` – метод, с помощью которого можно выполнить конкатенацию (объединение) двух или более массивов.

Пример объединения двух массивов:
```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayJoined = array1.concat(array2);  // [1, 2, 3, 4, 5, 6]
```

Пример объединения трех массивов:
```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const arrayJoined = array1.concat(array2, array3);  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Метод `concat()` не изменяет исходные массивы, а возвращает новый массив, состоящий из элементов исходных массивов.

Напишите функцию `arrayJoiner`, которая принимает четыре параметра:
* `array1` – массив;
* `array2` – массив;
* `array3` – массив;
* `array4` – массив.

Функция должна вернуть новый массив, составленный путем объединения всех четырех массивов в указанном порядке.

Примеры запуска функции:
```javascript
arrayJoiner([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function arrayJoiner(array1, array2, array3, array4) {
  return array1.concat(array2, array3, array4);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function `arrayJoiner`', () => {
  expect(typeof arrayJoiner).eq('function');
});

it('arrayJoiner([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]', () => {
  expect(arrayJoiner([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12])).deep.eq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});

it('arrayJoiner([""], ["", "", ""], ["", "", "", ""], ["", "", "", "", ""]);  // ["", "", "", "", "", "", "", "", "", "", "", "", ""]', () => {
  expect(arrayJoiner([""], ["", "", ""], ["", "", "", ""], ["", "", "", "", ""])).deep.eq(["", "", "", "", "", "", "", "", "", "", "", "", ""]);
});

it('arrayJoiner(["First", "Second"], ["A", "B", "C"], ["!", "?", ".", ","], ["1", "2", "3", "4", "5"]);  // ["First", "Second", "A", "B", "C", "!", "?", ".", ",", "1", "2", "3", "4", "5"]', () => {
  expect(arrayJoiner(["First", "Second"], ["A", "B", "C"], ["!", "?", ".", ","], ["1", "2", "3", "4", "5"])).deep.eq(["First", "Second", "A", "B", "C", "!", "?", ".", ",", "1", "2", "3", "4", "5"]);
});

it('arrayJoiner(["H", "e"], ["l", "l", "o"], [" ", "W", "o", "r"], ["l", "d", "!", "!", "!"]);  // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!", "!", "!"]', () => {
  expect(arrayJoiner(["H", "e"], ["l", "l", "o"], [" ", "W", "o", "r"], ["l", "d", "!", "!", "!"])).deep.eq(["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!", "!", "!"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
