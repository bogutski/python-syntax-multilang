// NAMEEN:
// NAMERU:Удалить дубликаты из массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `noDuplicates` принимает массив и возвращает массив без дубликатов.

Для проверки наличия элемента в массиве используйте объект и метод `splice` для удаления дубликата.

Пример запуска функции:
```javascript
noDuplicates([1, 2, 2, 2, 5]) // [1, 2, 5]
noDuplicates([1]) // [1]
noDuplicates(["a1", "a1", 1, 1, "1", "1"]) // ["a1", 1]
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function noDuplicates(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if(!obj[array[i]]) {
      obj[array[i]] = 1;
    } else {array.splice(i, 1); i--}
  }
  return array
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function noDuplicates', () => {
  expect(noDuplicates).to.be.a('function');
});

it('noDuplicates includes statement splice', () => {
  expect(noDuplicates.toString()).to.include('splice');
});
it('noDuplicates([1, 2, 2, 2, 5]) should return [1, 2, 5]', () => {
  expect(noDuplicates([1, 2, 2, 2, 5])).to.deep.equal([1, 2, 5]);
});

it('noDuplicates([1, 2, 2, 2, 5, 5, 5, 5]) should return [1, 2, 5]', () => {
  expect(noDuplicates([1, 2, 2, 2, 5, 5, 5, 5])).to.deep.equal([1, 2, 5]);
});

it('noDuplicates([]) should return []', () => {
  expect(noDuplicates([])).to.deep.equal([]);
});

it('noDuplicates([1]) should return [1]', () => {
  expect(noDuplicates([1])).to.deep.equal([1]);
});

it('noDuplicates(["a1", "a1", 1, 1, "1", "1"]) should return ["a1", 1]', () => {
  expect(noDuplicates(["a1", "a1", 1, 1, "1", "1"])).to.deep.equal(["a1", 1]);
});

it('noDuplicates(["", ""]) should return [""]', () => {
  expect(noDuplicates(["", ""])).to.deep.equal([""]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
