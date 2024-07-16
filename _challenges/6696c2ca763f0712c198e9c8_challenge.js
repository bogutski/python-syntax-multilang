// NAMEEN:
// NAMERU:Исправьте ошибку в коде. Метод continue

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `onlyNegative` принимает массив чисел.

Функция должна вернуть массив только с отрицательными числами.

Исправьте ошибку в коде, чтобы функция работала правильно.

Используйте метод `continue` для пропуска итерации цикла.

Решение будет проверяться на применение метода `continue`.

Пример запуска функции:
```javascript
onlyNegative([1, 2, 3, -1, -2, -3]); // [-1, -2, -3];
onlyNegative([1, 2, 3]); // [];
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function Negative(arr) {
  let onlyNegative = [];
  for (let i = 0, i < arr.length, i++) {
    if (arr[i] < 0) {
      continue;
    }
    result arr[i];
  }
  return onlyNegative;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function onlyNegative(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      continue;
    }
    result.push(arr[i]);
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function onlyNegative', () => {
  expect(onlyNegative).to.be.a('function');
});

it('onlyNegative([1, 2, 3, -1, -2, -3]) should return [-1, -2, -3]', () => {
  expect(onlyNegative([1, 2, 3, -1, -2, -3])).to.deep.equal([-1, -2, -3]);
});

it('onlyNegative([1, 2, 3]) should return []', () => {
  expect(onlyNegative([1, 2, 3])).to.deep.equal([]);
});

it('onlyNegative([-1, -2, 3]) should return [-1, -2]', () => {
  expect(onlyNegative([-1, -2, 3])).to.deep.equal([-1, -2]);
});

it('onlyNegative([1, 2, -1, 5, -5, 3, 9, -21) should return [-1, -5, -21]', () => {
  expect(onlyNegative([1, 2, -1, 5, -5, 3, 9, -21])).to.deep.equal([-1, -5, -21]);
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
