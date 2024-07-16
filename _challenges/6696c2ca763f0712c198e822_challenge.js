// NAMEEN:
// NAMERU:Добавить строку в массив в определенную позицию

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `addStr` принимает три параметра:
* `array` - массив, может содержать числа, строки
* `str` - строка
* `n` - число.

Функция должна добавить строку в массив по индексу, равному числу `n`.
Если число n больше длины массива, то добавить элемент последним.

Функция должна вернуть измененный массив.

Примеры запуска функции:
```javascript
addStr([1, 2, 3], "a", 1) // [1, "a", 2, 3]
addStr(["a", "b", "c"], "a", 2) // ["a", "b", "a", "c"]
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
  if(n <= array.length) {array.splice(n, 0, str)}
  else {array.push(str)}
  return array
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function addStr', () => {
  expect(addStr).to.be.a('function');
});

it('addStr([1, 2, 3], "a", 1) should return [1, "a", 2, 3]', () => {
  expect(addStr([1, 2, 3], "a", 1)).eql([1, "a", 2, 3]);
});

it('addStr(["a", "b", "c"], "a", 2) should return ["a", "b", "a", "c"]', () => {
  expect(addStr(["a", "b", "c"], "a", 2)).eql(["a", "b", "a", "c"]);
});

it('addStr([1, 2], "x", 0) should return ["x", 1, 2]', () => {
  expect(addStr([1, 2], "x", 0)).eql(["x", 1, 2]);
});

it('addStr(["banana", "apple", "mango", "peach"], "orange", 3) should return ["banana", "apple", "mango", "orange", "peach"]', () => {
  expect(addStr(["banana", "apple", "mango", "peach"], "orange", 3)).eql(["banana", "apple", "mango", "orange", "peach"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
