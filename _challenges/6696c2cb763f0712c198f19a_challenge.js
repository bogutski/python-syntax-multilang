// NAMEEN:
// NAMERU:Проверка массива на симметричность с использованием методов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функцию `isArraySymmetrical`, которая принимает массив с числами и строками.

Функция должна вернуть `true`, если массив симметричный и `false`, если нет.

В данной задаче были использованы методы `join`, `reverse` и `toLowerCase`.

В этой задаче 3 ошибки, исправьте их и перепишите код самостоятельно.


Примеры запуска функции:
```javascript
isArraySymmetrical(['a', 'b', 'c', 'c', 'b', 'a']); // true
isArraySymmetrical(['A', 'b', 'c', 'b', 'o']);      // false
isArraySymmetrical(['A', 'a', 'd', 'b']);           // false
isArraySymmetrical([]);                             // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function isArraySymmetrical(arr) {
  if(!arr.length) return 'Array is empty';
  const str = arr.join('').toUpperCase()
  const reversed = arr.reverse().join(' ').toLowerCase()
  return reversed !== str
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isArraySymmetrical(arr) {
  if(!arr.length) return 'Array is empty';
  const str = arr.join('').toLowerCase()
  const reversed = arr.reverse().join('').toLowerCase()
  return reversed === str
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isArraySymmetrical', () => {
  expect(isArraySymmetrical).to.be.a('function');
});

it("Function isArraySymmetrical includes 'reverse' method", () => {
  expect(isArraySymmetrical.toString()).to.include('reverse');
});

it("Function isArraySymmetrical includes 'join' method", () => {
  expect(isArraySymmetrical.toString()).to.include('join');
});

it("isArraySymmetrical(['A', 'b', 'c', 'b', 'a']) should return true", () => {
  expect(isArraySymmetrical(['A', 'b', 'c', 'b', 'a'])).to.be.true;
});

it("isArraySymmetrical(['A', 'a', 'd', 'b']) should return false", () => {
  expect(isArraySymmetrical(['A', 'a', 'd', 'b'])).to.be.false;
});

it("isArraySymmetrical(['b', 'e', 'k', 't', 't', 'k', 'e', 'b']) should return true", () => {
  expect(isArraySymmetrical(['b', 'e', 'k', 't', 't', 'k', 'e', 'b'])).to.be.true;
});

it("isArraySymmetrical(['5', '4', '7', '5', '3', '4', '5']) should return false", () => {
  expect(isArraySymmetrical(['5', '4', '7', '5', '3', '4', '5'])).to.be.false;
});

it("isArraySymmetrical([9, 4, 3, 6, 3, 4, 9]) should return true", () => {
  expect(isArraySymmetrical([9, 4, 3, 6, 3, 4, 9])).to.be.true;
});

it("isArraySymmetrical([]) should return 'Array is empty'", () => {
  expect(isArraySymmetrical([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
