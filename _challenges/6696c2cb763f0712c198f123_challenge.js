// NAMEEN:
// NAMERU:Удаление дубликатов из массива с помощью `splice`

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Давайте решим похожую на предыдущую задачу, но с помощью метода `splice`.

Функция `deleteDuplicate` должна принимать массив чисел и строк и возвращать массив без дубликатов.

Необходимо исправить пунктуационные ошибки в коде, чтобы функция работала правильно.

Попробуйте понять этот код и повторить его самостоятельно.

Примеры запуска функции:
```javascript
deleteDuplicate(["hello", "hello", "js", "JavaScript"]) // ["hello", "js", "JavaScript"]
deleteDuplicate([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) // [1]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function deleteDuplicate(array) {
  for (let i = 0, i < array.length, i++) {
    for (let j = i + 1, j < array.length, j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1);
        j--;   //так как мы удалили элемент массива, то индекс j сдвинулся на 1 влево, поэтому мы должны уменьшить j на 1, чтобы не пропустить следующий элемент массива
      }
    }
  }
  return array;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART[

function deleteDuplicate(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1);
        j--;
      }
    }
  }
  return array;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function deleteDuplicate', () => {
  expect(deleteDuplicate).to.be.a('function');
});

it('deleteDuplicate(["hello", "hello", "js", "JavaScript"]) should return ["hello", "js", "JavaScript"]', () => {
  expect(deleteDuplicate(["hello", "hello", "js", "JavaScript"])).to.be.deep.equal(["hello", "js", "JavaScript"]);
});

it('deleteDuplicate([1, 2, 3, 4, 5, 5, 5, 6, 7, 8]) should return [1, 2, 3, 4, 5, 6, 7, 8]', () => {
  expect(deleteDuplicate([1, 2, 3, 4, 5, 5, 5, 6, 7, 8])).to.be.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
});

it('deleteDuplicate([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) should return [1]', () => {
  expect(deleteDuplicate([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).to.be.deep.equal([1]);
});

it('deleteDuplicate([]) should return []', () => {
  expect(deleteDuplicate([])).to.be.deep.equal([]);
});

it('deleteDuplicate([1, 1, 1, "", "", ""]) should return [1, ""]', () => {
  expect(deleteDuplicate([1, 1, 1, "", "", ""])).to.be.deep.equal([1, ""]);
});

it('deleteDuplicate([""]) should return [""]', () => {
  expect(deleteDuplicate([""])).to.be.deep.equal([""]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
