// NAMEEN:
// NAMERU:Исправьте ошибки в коде

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `stopAt10Element`, принимает 3 параметра:

* Пустой массив `arr`

* Начальное значение `num1` - это число, с которого начинается заполнение массива.

* Конечное значение `num2` - это число, которым заканчивается заполнение массива.

Начальное значение всегда будет меньше конечного значения.

Массив заполняется числами от начального значения до конечного значения включительно.

Заполнение массива прерывается на 10 элементе.

Функция возвращает заполненный массив.

Исправьте ошибки в коде, чтобы он соответствовал условиям задачи.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function StopAt10element(arr, num1, num2) {
  for (let i = num2; i <= num1; i++) {
    arr.push(i)
    if (i = arr[10]) break[9];
  }
  return arr[i]
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stopAt10Element(arr, num1, num2) {
  for (let i = num1; i <= num2; i++) {
    arr.push(i)
    if (i === arr[9]) break;
  }
  return arr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function stopAt10Element', () => {
  expect(stopAt10Element).to.be.a('function');
});

it('stopAt10Element([], 1, 10) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
  expect(stopAt10Element([], 1, 10)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it('stopAt10Element([], -5, 20) should return [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]', () => {
  expect(stopAt10Element([], -5, 20)).to.eql([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]);
});

it('stopAt10Element([], 10, 20) should return [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]', () => {
  expect(stopAt10Element([], 10, 20)).to.eql([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
});

it('stopAt10Element([], -10, 10) should return [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]', () => {
  expect(stopAt10Element([], -10, 10)).to.eql([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]);
});

it('stopAt10Element([], -10, -5) should return [-10, -9, -8, -7, -6, -5]', () => {
  expect(stopAt10Element([], -10, -5)).to.eql([-10, -9, -8, -7, -6, -5]);
});

it('stopAt10Element([], 0, 7) should return [0, 1, 2, 3, 4, 5, 6, 7]', () => {
  expect(stopAt10Element([], 0, 7)).to.eql([0, 1, 2, 3, 4, 5, 6, 7]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
