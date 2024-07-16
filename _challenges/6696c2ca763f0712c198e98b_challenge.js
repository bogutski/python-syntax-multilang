// NAMEEN:
// NAMERU:Остановить заполнение массива на 8-м элементе

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `stopAt8Element`, которая принимает 3 параметра - пустой массив, начальное число и конечное число.

Массив будет заполняться числами от начального значения до конечного значения включительно.

Начальное значение - это число, с которого начинается заполнение массива.

Конечное значение - это число, которым заканчивается заполнение массива.

Начальное значение всегда будет меньше конечного значения.

Заполнение массива прерывается на 8-м элементе.

Функция должна вернуть заполненный массив.

Пример запуска функции:
```javascript
stopAt8Element([], 1, 30); // [1, 2, 3, 4, 5, 6, 7, 8]
stopAt8Element([], -3, 25); // [-3, -2, -1, 0, 1, 2, 3, 4]
stopAt8Element([], 5, 9); // [5, 6, 7, 8, 9]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stopAt8Element(arr, n, n1) {
  for (let i = n; i <= n1; i++) {
    arr.push(i)
    if (i === arr[7]) break;
  }
  return arr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function stopAt8Element', () => {
  expect(stopAt8Element).to.be.a('function');
});

it('stopAt8Element([], 1, 30) should return [1, 2, 3, 4, 5, 6, 7, 8]', () => {
  expect(stopAt8Element([], 1, 30)).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
} );

it('stopAt8Element([], -3, 25) should return [-3, -2, -1, 0, 1, 2, 3, 4]', () => {
  expect(stopAt8Element([], -3, 25)).to.eql([-3, -2, -1, 0, 1, 2, 3, 4]);
} );

it('stopAt8Element([], 5, 19) should return [5, 6, 7, 8, 9, 10, 11, 12]', () => {
  expect(stopAt8Element([], 5, 19)).to.eql([5, 6, 7, 8, 9, 10, 11, 12]);
} );

it('stopAt8Element([], 1, 8) should return [1, 2, 3, 4, 5, 6, 7, 8]', () => {
  expect(stopAt8Element([], 1, 8)).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
} );

it('stopAt8Element([], 1, 7) should return [1, 2, 3, 4, 5, 6, 7]', () => {
  expect(stopAt8Element([], 1, 7)).to.eql([1, 2, 3, 4, 5, 6, 7]);
} );

it('stopAt8Element([], 1, 5) should return [1, 2, 3, 4, 5]', () => {
  expect(stopAt8Element([], 1, 5)).to.eql([1, 2, 3, 4, 5]);
} );

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
