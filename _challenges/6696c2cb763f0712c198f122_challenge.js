// NAMEEN:
// NAMERU:Удалить дубликаты чисел из массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `deleteDuplicate` принимает массив чисел `arr` и возвращает новый массив, в котором удалены все дубликаты из массива `arr`.

Данная задача решена с помощью цикла и объекта. Исправьте ошибки в коде, чтобы функция работала правильно.

Ошибок в цикле нет. Попробуйте повторить код самостоятельно.

Пример запуска функции:
```javascript
deleteDuplicate([1, 2, 1, 3, 4, 1, 5, 3, 2]); // [1, 2, 3, 4, 5]
deleteDuplicate([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
Function deleteDuplicate([arr]) {
  const newArr = [empty];
  const obj = {empty};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function deleteDuplicate(arr) {
  const newArr = [];
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function deleteDuplicate', () => {
  expect(deleteDuplicate).to.be.a('function');
});

it('deleteDuplicate([1, 2, 1, 3, 4, 1, 5, 3, 2]) should return [1, 2, 3, 4, 5]', () => {
  expect(deleteDuplicate([1, 2, 1, 3, 4, 1, 5, 3, 2])).to.deep.equal([1, 2, 3, 4, 5]);
});

it('deleteDuplicate([1, 2, 3, 4, 5]) should return [1, 2, 3, 4, 5]', () => {
  expect(deleteDuplicate([1, 2, 3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
});

it('deleteDuplicate([1, 1, 1, 1, 1]) should return [1]', () => {
  expect(deleteDuplicate([1, 1, 1, 1, 1])).to.deep.equal([1]);
});

it('deleteDuplicate([]) should return []', () => {
  expect(deleteDuplicate([])).to.deep.equal([]);
});

it('deleteDuplicate([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]) should return [1, 2, 3, 4, 5]', () => {
  expect(deleteDuplicate([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
