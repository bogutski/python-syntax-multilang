// NAMEEN:
// NAMERU:Сравнение массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `compareArrays` принимает два массива.

Необходимо сравнить содержит ли первый массив все элементы второго массива.

Второй массив содержит любое количество уникальных элементов.

Если содержит, то функция должна вернуть `true`, если нет, то `false`.

Исправьте ошибки в коде, чтобы функция работала правильно.

Ошибки могут быть только в синтаксисе.

Пример запуска функции:
```javascript
compareArrays([1, 2, 3], [1, 2, 3]) // true
compareArrays([1, 2, 4, 14, 5, 13], [1, 2, 3, 4]) // false
compareArrays([1, 2, 3], [1, 2, 3, 4]) // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function compareArrays([arr1], [arr2]) {
  for (let i = 0, i < arr2.length, i++) {
    let include = false;
    for (let j = 0, j < arr1.length, j++) {
      if (arr1[j] === arr2[i]) {
        include = true;
        break;
      }
    }

    if (!include) {
      return false;
    }
  }
  return true;
}

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function compareArrays(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    let include = false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[i]) {
        include = true;
        break;
      }
    }

    if (!include) {
      return false;
    }
  }
  return true;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function compareArrays', () => {
  expect(compareArrays).to.be.a('function');
});

it('compareArrays([1, 2, 3], [1, 2, 3]) returns true', () => {
  expect(compareArrays([1, 2, 3], [1, 2, 3])).to.be.true;
});

it('compareArrays([1, 2, 4, 14, 5, 13], [1, 2, 4]) returns true', () => {
  expect(compareArrays([1, 2, 4, 14, 5, 13], [1, 2, 4])).to.be.true;
});
it('compareArrays([1, 2, 4, 14, 5, 13], [1, 2, 3, 4]) returns false', () => {
  expect(compareArrays([1, 2, 4, 14, 5, 13], [1, 2, 3, 4])).to.be.false;
});

it('compareArrays([1, 2, 3], [1, 2, 3, 4]) returns false', () => {
  expect(compareArrays([1, 2, 3], [1, 2, 3, 4])).to.be.false;
});

it('compareArrays([1, 2, 3, 4], []) returns true', () => {
  expect(compareArrays([1, 2, 3, 4], [])).to.be.true;
});

it('compareArrays([], []) returns true', () => {
  expect(compareArrays([], [])).to.be.true;
});

it('compareArrays([], [1, 2, 3, 4]) returns false', () => {
  expect(compareArrays([], [1, 2, 3, 4])).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
