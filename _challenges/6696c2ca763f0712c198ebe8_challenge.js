// NAMEEN:
// NAMERU:Проверка на анаграмму массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isAnagram`, которая принимает `два массива` и возвращает `true`, если они являются анаграммами друг друга, и `false` в противном случае.

В массиве будут только буквы, цифры и пробелы, но у всех элементов строковый тип данных.

Пробелы нужно игнорировать при проверке. Все буквы в нижнем регистре.

Можно использовать любые методы.


Примеры запуска функции:
```javascript
isAnagram(['1', '2', '3'], [' ', '3', '1', ' ', '2']);                         // true
isAnagram([' ', '9', '2', ' ', '3', ' '], [' ', '', '9', '3', ' ', '2', ' ']); // true
isAnagram(['a', 'b', 'c'], [' ', '', 'b', 'c', ' ', 'b']);                     // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isAnagram(arr1, arr2){
  const str1 = arr1.sort().join('').trim();
  const str2 = arr2.sort().join('').trim();

  return str1 === str2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isAnagram', () => {
  expect(isAnagram).to.be.a('function');
});

it("isAnagram(['1', '2', '3'], [' ', '', '3', '1', ' ', '2']) should return true", () => {
  expect(isAnagram(['1', '2', '3'], [' ', '', '3', '1', ' ', '2'])).to.be.true;
});

it("isAnagram([' ', '9', '2', ' ', '3', '0'], ['0', '', '9', '3', ' ', '2', ' ']) should return true", () => {
  expect(isAnagram([' ', '9', '2', ' ', '3', '0'], ['0', '', '9', '3', ' ', '2', ' '])).to.be.true;
});

it("isAnagram(['e', 'l', 'b', 'o', 'w'], ['b', 'e', 'l', 'o', 'w']) should return true", () => {
  expect(isAnagram(['e', 'l', 'b', 'o', 'w'], ['b', 'e', 'l', 'o', 'w'])).to.be.true;
});

it("isAnagram(['c', ' ', 'a', '8', 'r'], ['8', 'r', 'a', 'c']) should return true", () => {
  expect(isAnagram(['c', ' ', 'a', '8', 'r'], ['8', 'r', 'a', 'c'])).to.be.true;
});

it("isAnagram(['l', 'a', 'p', 't', 'o', 'p'], ['t', 'o', 'o', 'p', 'l', 'a', 'p']) should return false", () => {
  expect(isAnagram(['l', 'a', 'p', 't', 'o', 'p'], ['t', 'o', 'o', 'p', 'l', 'a', 'p'])).to.be.false;
});

it("isAnagram(['l', 'i', 's', 't', 'e', 'n'], ['s', 'i', 'l', 'l', 'e', 'n', 't']) should return false", () => {
  expect(isAnagram(['l', 'i', 's', 't', 'e', 'n'], ['s', 'i', 'l', 'l', 'e', 'n', 't'])).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
