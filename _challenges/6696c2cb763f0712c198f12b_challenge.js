// NAMEEN:
// NAMERU:Удалить дубликаты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `deleteDuplicate` принимает массив `arr` и возвращает новый массив, в котором удалены все дубликаты из массива `arr`.

Не используйте метод `splice` для решения этой задачи.

Пример запуска функции:
```javascript
deleteDuplicate([1, 2, 3, 3, 4, 5, 5, 6]) // [1, 2, 3, 4, 5, 6]
deleteDuplicate([1, 1, 1, 1, 1, 1, 1, 1]) // [1]
deleteDuplicate([]) // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function deleteDuplicate(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function deleteDuplicate', () => {
  expect(deleteDuplicate).to.be.a('function');
});

it('deleteDuplicate does not include statement splice', () => {
  expect(deleteDuplicate.toString()).to.not.contain('splice');
});

it('deleteDuplicate([1, 2, 3, 3, 4, 5, 5, 6]) returns [1, 2, 3, 4, 5, 6]', () => {
  expect(deleteDuplicate([1, 2, 3, 3, 4, 5, 5, 6])).to.deep.equal([1, 2, 3, 4, 5, 6]);
});

it('deleteDuplicate([1, 1, 1, 1, 1, 1, 1, 1]) returns [1]', () => {
  expect(deleteDuplicate([1, 1, 1, 1, 1, 1, 1, 1])).to.deep.equal([1]);
});

it('deleteDuplicate([1, 2, 3, 4, 5, 6, 7, 8]) returns [1, 2, 3, 4, 5, 6, 7, 8]', () => {
  expect(deleteDuplicate([1, 2, 3, 4, 5, 6, 7, 8])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
});

it('deleteDuplicate([""]) returns [""]', () => {
  expect(deleteDuplicate([""])).to.deep.equal([""]);
});

it('deleteDuplicate([]) returns []', () => {
  expect(deleteDuplicate([])).to.deep.equal([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
