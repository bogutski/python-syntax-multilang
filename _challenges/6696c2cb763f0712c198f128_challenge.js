// NAMEEN:
// NAMERU:Удалить из массива дубликаты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `cleanDuplicates` принимает массив и возвращает массив без дубликатов.

Примеры запуска функции:
```javascript
cleanDuplicates([1, 2, 3, 3, 2, 1, 4]) // [1, 2, 3, 4]
cleanDuplicates([1]) // [1]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function cleanDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function cleanDuplicates', () => {
  expect(cleanDuplicates).to.be.a('function');
});

it('cleanDuplicates([1, 2, 3, 3, 2, 1, 4]) should return [1, 2, 3, 4]', () => {
  expect(cleanDuplicates([1, 2, 3, 3, 2, 1, 4])).to.deep.equal([1, 2, 3, 4]);
});

it('cleanDuplicates([1, 2, 3, 3, 2, 1, 4, 4, 4, 4]) should return [1, 2, 3, 4]', () => {
  expect(cleanDuplicates([1, 2, 3, 3, 2, 1, 4, 4, 4, 4])).to.deep.equal([1, 2, 3, 4]);
});

it('cleanDuplicates([1] should return [1]', () => {
  expect(cleanDuplicates([1])).to.deep.equal([1]);
});

it('cleanDuplicates([]) should return []', () => {
  expect(cleanDuplicates([])).to.deep.equal([]);
});

it('cleanDuplicates([1, 1, 1, 1, 1, 1, 1]) should return [1]', () => {
  expect(cleanDuplicates([1, 1, 1, 1, 1, 1, 1])).to.deep.equal([1]);
});

it('cleanDuplicates([true, true, true, true]) should return [true]', () => {
  expect(cleanDuplicates([true, true, true, true])).to.deep.equal([true]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
