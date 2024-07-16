// NAMEEN:
// NAMERU:Добавить строку в массив в определенную позицию

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `addStr` принимает три параметра:
* `array` - массив, содержит строки
* `str` - строка
* `n` - число.

Функция должна добавить строку `str` в массив по порядковому номеру, равному числу `n`.

Если число `n` больше длины массива, то добавить строку в конец массива.

Функция должна вернуть измененный массив.

Примеры запуска функции:
```javascript
addStr(["x", "y", "z"], "a", 10) // ["x", "y", "z", "a"]
addStr(["a", "b", "c", "x"], "a", 2) // ["a", "a", "b", "c", "x"]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addStr(array, str, n) {
  if(n < array.length) array.splice((n-1), 0, str)
  else array.push(str)
  return array
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function addStr', () => {
  expect(addStr).to.be.a('function');
});

it('addStr(["Alice", "Tom", "Tomas","Leo"], "Dina", 1) should return ["Dina", "Alice", "Tom", "Tomas","Leo"]', () => {
  expect(addStr(["Alice", "Tom", "Tomas","Leo"], "Dina", 1)).to.eql(["Dina", "Alice", "Tom", "Tomas","Leo"]);
});

it('addStr(["Alice", "Tom","Tomas","Leo"], "Dina", 2) should return ["Alice", "Dina", "Tom","Tomas","Leo"]', () => {
  expect(addStr(['Alice', 'Tom', 'Tomas','Leo'], 'Dina', 2)).to.eql(['Alice', 'Dina', 'Tom', 'Tomas','Leo']);
});

it(`addStr(["Alice", "Dina", "Tom","Tomas","Leo"], "Dina", 3) should return ["Alice", "Dina", "Dina", "Tom", "Tomas","Leo"]`, () => {
  expect(addStr(['Alice', 'Dina', 'Tom', 'Tomas', 'Leo'], 'Dina', 3)).to.eql(["Alice", "Dina", "Dina", "Tom", "Tomas","Leo"]);
});

it(`addStr(["Alice", "Tom","Tomas","Leo"], "Dina", 10) should return ["Alice", "Tom","Tomas","Leo", "Dina"]`, () => {
  expect(addStr(['Alice', 'Tom', 'Tomas', 'Leo'], 'Dina', 10)).to.eql(['Alice', 'Tom', 'Tomas', 'Leo', 'Dina']);
});

it(`addStr(['apple', 'banana', 'mango', 'mango', 'kiwi'] 'mango', 1) should return ['mango', 'apple', 'banana', 'mango', 'mango', 'kiwi'`, () => {
  expect(addStr(['apple', 'banana', 'mango', 'mango', 'kiwi'], 'mango', 1)).to.eql(['mango', 'apple', 'banana', 'mango', 'mango', 'kiwi']);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
