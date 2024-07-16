// NAMEEN:
// NAMERU:Найти среднее арифметическое всех чисел в подмассивах

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `averageInSubArr` принимает один параметр - массив `arr`.

Массив `arr` состоит из произвольного количества подмассивов, которые содержат только целые числа или могут быть пустыми.

Функция рассчитывает количество всех чисел и их сумму во всех подмассивах и возвращает среднее арифметическое.

Результат округляется до ближайшего `целого числа`.

Если все подмассивы пустые, то функция возвращает строку `'Arrays are empty'`.

Исправьте ошибки в коде, чтобы функция работала правильно.

Пример запуска функции:
```javascript
averageInSubArr([[2, 2], [3, 3, 5]]); // (2 + 2 + 3 + 3 + 5) / 5 = 3
averageInSubArr([[12, -3, 474], [], [-9, -474]]); // (12 + (-3) + 474 + (-9) + (-474)) / 5 = 0
averageInSubArr([[], [3, 3, 5], []]); // (3 + 3 + 5) / 3 = 4
averageInSubArr([[], [], [], []]); // 'Arrays are empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function averageInSubArr(arr) {
  let sum === 0;
  let count === 0;
  for (let i === 0; i < arr.length; i++) {
    for (let j === 0; j < arr[i].length; j++) {
      sum += arr[i][j];
      count--;
    }
  }
  if (count !== 0) return 'Arrays are empty';
  return Math.round(sum / count);

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function averageInSubArr(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
      count++;
    }
  }
  if (count === 0) return 'Arrays are empty';
  return Math.round(sum / count);
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function averageInSubArr', () => {
  expect(averageInSubArr).to.be.a('function');
});

it("averageInSubArr([[2, 2], [3, 3, 5]]) should return 3", () => {
  expect(averageInSubArr([[2, 2], [3, 3, 5]])).to.equal(3);
});

it("averageInSubArr([[4], [11], [9]]) should return 8", () => {
  expect(averageInSubArr([[4], [11], [9]])).to.equal(8);
});

it("averageInSubArr([[12, -3, 474], [], [-9, -474]]) should return 0", () => {
  expect(averageInSubArr([[12, -3, 474], [], [-9, -474]])).to.equal(0);
});

it("averageInSubArr([[], [3, 3, 5], [], [14, -50]]) should return -5", () => {
  expect(averageInSubArr([[], [3, 3, 5], [], [14, -50]])).to.equal(-5);
});

it("averageInSubArr([[100], [-50]]) should return 25", () => {
  expect(averageInSubArr([[100], [-50]])).to.equal(25);
});

it("averageInSubArr([[], [3, 3, 5], []]) should return 4", () => {
  expect(averageInSubArr([[], [3, 3, 5], []])).to.equal(4);
});

it("averageInSubArr([[], [], [], []]) should return 'Arrays are empty'", () => {
  expect(averageInSubArr([[], [], [], []])).to.equal('Arrays are empty');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
