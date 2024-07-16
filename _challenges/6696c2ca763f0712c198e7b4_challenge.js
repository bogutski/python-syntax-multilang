// NAMEEN:
// NAMERU:Поменять первый и n-ый элементы массива местами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `switchElem`, которая принимает два параметра - массив и число.

Массив произвольной длины, в котором могут быть любые значения.

Число - это порядковый номер элемента в массиве (не путать с индексом элемента).

Поменяйте местами первый и n-ый элементы массива.

Функция должна вернуть изменённый массив.

Пример запуска функции:
```javascript
switchElem([1, 2, 3, 4, 5], 3) // [3, 2, 1, 4, 5]
switchElem([1, 2, 3, 4, 5, ['a', 'b', 'c']], 6) // [['a', 'b', 'c'], 2, 3, 4, 5, 1]
switchElem(['a', 2, true, 4, '5', false, 113, 'k'], 7) // [113, 2, true, 4, '5', false, 'a', 'k']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function switchElem(arr, num) {
  let element = arr[0]
  console.log(element)
  arr[0] = arr[num - 1]
  arr[num - 1] = element
  return arr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function switchElem', () => {
  expect(switchElem).to.be.a('function');
});

it("switchElem([1, 2, 3, 4, 5], 3) should return [3, 2, 1, 4, 5]", () => {
  expect(switchElem([1, 2, 3, 4, 5], 3)).to.deep.equal([3, 2, 1, 4, 5]);
});

it("switchElem([1, 2, 3, 4, 5, ['a', 'b', 'c']], 6) should return [['a', 'b', 'c'], 2, 3, 4, 5, 1]", () => {
  expect(switchElem([1, 2, 3, 4, 5, ['a', 'b', 'c']], 6)).to.deep.equal([['a', 'b', 'c'], 2, 3, 4, 5, 1]);
});

it("switchElem(['a', 2, true, 4, '5', false, 113, 'k'], 7) should return [113, 2, true, 4, '5', false, 'a', 'k']", () => {
  expect(switchElem(['a', 2, true, 4, '5', false, 113, 'k'], 7)).to.deep.equal([113, 2, true, 4, '5', false, 'a', 'k']);
});

it("switchElem(['a', [2, true, 4], 5, 7, 13, 8], 2) should return [[2, true, 4], 'a', 5, 7, 13, 8]", () => {
  expect(switchElem(['a', [2, true, 4], 5, 7, 13, 8], 2)).to.deep.equal([[2, true, 4], 'a', 5, 7, 13, 8]);
});

it("switchElem(['a', [2, true, 4], '5', false, 113, 'k'], 6) should return ['k', [2, true, 4], '5', false, 113, 'a']", () => {
  expect(switchElem(['a', [2, true, 4], '5', false, 113, 'k'], 6)).to.deep.equal(['k', [2, true, 4], '5', false, 113, 'a']);
});

it("switchElem([['a', 2], true, 4, '5', false, 113, 'k'], 3) should return [4, true, ['a', 2], '5', false, 113, 'k']", () => {
  expect(switchElem([['a', 2], true, 4, '5', false, 113, 'k'], 3)).to.deep.equal([4, true, ['a', 2], '5', false, 113, 'k']);
});

it("switchElem([['a', 2], true, 4, '5', [false, 113], 'k'], 5) should return [[false, 113], true, 4, '5', ['a', 2], 'k']", () => {
  expect(switchElem([['a', 2], true, 4, '5', [false, 113], 'k'], 5)).to.deep.equal([[false, 113], true, 4, '5', ['a', 2], 'k']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
