// NAMEEN:
// NAMERU:Удаление последних элементов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `modifyArray` принимает массив `arr` в качестве аргумента.

Функция возвращает измененный массив, в котором удалены последние элементы массива `arr`, пока длина массива не станет кратной 3.

Если длина массива `arr` кратна 3, то необходимо удалить последние 3 элемента массива.

Примеры запуска функции:
```javascript
modifyArray([1, 2, 3, 4, 5, 6, 7, 8, 9]) // [1, 2, 3, 4, 5, 6]
modifyArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function modifyArray(arr) {
  if (arr.length % 3 === 1) {
    arr.pop()
  } else if (arr.length % 3 === 2) {
    arr.pop();
    arr.pop()
  } else {
    arr.pop();
    arr.pop();
    arr.pop()
  }
  return arr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function modifyArray', () => {
  expect(modifyArray).to.be.a('function');
});

it('modifyArray([1, 2, 3, 4, 5, 6, 7, 8, 9]) should return [1, 2, 3, 4, 5, 6]', () => {
  expect(modifyArray([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.be.eql([1, 2, 3, 4, 5, 6]);
});

it('modifyArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
  expect(modifyArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

it('modifyArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
  expect(modifyArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

it('modifyArray([1, 2, 3]) should return []', () => {
  expect(modifyArray([1, 2, 3])).to.be.eql([]);
});

it('modifyArray([1, 2, 3, 4]) should return [1, 2, 3]', () => {
  expect(modifyArray([1, 2, 3, 4])).to.be.eql([1, 2, 3]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
