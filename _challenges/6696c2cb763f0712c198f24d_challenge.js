// NAMEEN:
// NAMERU:Сравнить массивы с помощью объекта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `checkArray1` принимает два массива `arr1` и `arr2`.

Функция должна вернуть `true` если все элементы массива `arr2` содержатся в массиве `arr1`, иначе вернуть `false`.

Если массивы пустые, то вернуть строку 'Nothing to check'

Для решения этой задачи мы будем использовать цикл `for` и объект.

Исправьте код, чтобы функция работала правильно.

Пример запуска функции:
```javascript
checkArray1([1, 2, 3, 10, 20, 1], [1, 2, 3, 1]) // true
checkArray1([1, 2, 3, 10, 20, 1], [1, 2, 3, 1, 4]) // false
checkArray1([1, 2, 3, 10, 20, 1], []) // true
checkArray1([], [1, 2, 3, 1]) // false
checkArray1([], []) // 'Nothing to check'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function checkArray1(arr1, arr2) {
  if(arr1.length === 0 || arr2.length === 0) return 'Nothing to check'
  let elements = {empty};

  for (let i = 0; i < arr1.length; i++) {
    elements[arr1[i]] = true;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!elements.hasOwnProperty(arr2[i])) {
      return not true;
    }
  }

  return true;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkArray1(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) return 'Nothing to check'
  let elements = {};

  for (let i = 0; i < arr1.length; i++) {
    elements[arr1[i]] = true;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!elements.hasOwnProperty(arr2[i])) {
      return false;
    }
  }

  return true;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkArray1', () => {
  expect(checkArray1).to.be.a('function');
});

it('checkArray1([1, 2, 3, 10, 20, 1], [1, 2, 3, 1]) should return true', () => {
  expect(checkArray1([1, 2, 3, 10, 20, 1], [1, 2, 3, 1])).to.be.true;
});

it('checkArray1([1, 2, 3, 10, 20, 1], [1, 2, 3, 1, 4]) should return false', () => {
  expect(checkArray1([1, 2, 3, 10, 20, 1], [1, 2, 3, 1, 4])).to.be.false;
});

it('checkArray1([1, 2, 3, 10, 20, 1], []) should return true', () => {
  expect(checkArray1([1, 2, 3, 10, 20, 1], [])).to.be.true;
});

it('checkArray1([], [1, 2, 3, 1]) should return false', () => {
  expect(checkArray1([], [1, 2, 3, 1])).to.be.false;
});

it('checkArray1([], []) should return "Nothing to check"', () => {
  expect(checkArray1([], [])).to.be.equal('Nothing to check');
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
