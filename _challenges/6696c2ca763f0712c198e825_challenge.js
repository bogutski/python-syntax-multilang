// NAMEEN:
// NAMERU:Удалить или добавить строку в массив

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `addOrDelete` принимает три параметра:
* `arr` - массив строк
* `str` - строка
* `num` число

Строка может быть пустой, содержать пробелы в начале и конце, а также содержать заглавные буквы.

Необходимо добавить или удалить строку `str` из массива в зависимости от ситуации:
* если строка пустая, то вернуть массив без изменений
* если строка содержится в массиве, то удалить ее из массива
* если строка не содержится в массиве, то добавить ее в массив на позицию, которая соответствует числу

Строка должна быть приведена к нижнему регистру, а также удалены пробелы в начале и конце.

Функция должна возвращать измененный массив строк.

Примеры запуска:
```javascript
addOrDelete(['a', 'b', 'c', 'd'], '  a', 2) // ['b', 'c', 'd']
addOrDelete(['a', 'b', 'c', 'd'], 'A ', 5) // ['b', 'c', 'd']
addOrDelete(['a', 'b', 'c', 'd'], 'f', 0) // ['f', 'a', 'b', 'c', 'd']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addOrDelete(arr, str, num) {
  str = str.trim().toLowerCase();
  if (str === '') {
    return arr
  }
  arr.includes(str) ? arr.splice(arr.indexOf(str), 1) : arr.splice(num, 0, str);
  return arr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function addOrDelete', () => {
  expect(addOrDelete).to.be.a('function');
});

it(`addOrDelete(['a', 'b', 'c', 'd'], '  a', 2) should return ['b', 'c', 'd']`, () => {
  expect(addOrDelete(['a', 'b', 'c', 'd'], '  a', 2)).to.eql(['b', 'c', 'd']);
});

it(`addOrDelete(['a', 'b', 'c', 'd'], 'A ', 5) should return ['b', 'c', 'd']`, () => {
  expect(addOrDelete(['a', 'b', 'c', 'd'], 'A ', 5)).to.eql(['b', 'c', 'd']);
});

it(`addOrDelete(['a', 'b', 'c', 'd'], 'f', 0) should return ['f', 'a', 'b', 'c', 'd']`, () => {
  expect(addOrDelete(['a', 'b', 'c', 'd'], 'f', 0)).to.eql(['f', 'a', 'b', 'c', 'd']);
});

it(`addOrDelete(['a', 'b', 'c', 'd'], 'F', 5) should return ['a', 'b', 'c', 'd', 'f']`, () => {
  expect(addOrDelete(['a', 'b', 'c', 'd'], 'F', 5)).to.eql(['a', 'b', 'c', 'd', 'f']);
});

it(`addOrDelete(['a'], 'a', 2) should return []`, () => {
  expect(addOrDelete(['a'], 'a', 2)).to.eql([]);
});

it(`addOrDelete(['a'], '', 0) should return ['a']`, () => {
  expect(addOrDelete(['a'], '', 0)).to.eql(['a']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
