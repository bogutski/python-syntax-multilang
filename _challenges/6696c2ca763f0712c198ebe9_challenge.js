// NAMEEN:
// NAMERU:Проверка на анаграмму с учетом регистра

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isAnagram`, которая принимает `два массива` и возвращает `true`, если они являются анаграммами друг друга, и `false` в противном случае.

В массиве будут только буквы, цифры и пробелы, но у всех элементов строковый тип данных.

Пробелы нужно игнорировать при проверке.

Важно! Буквы в массивах могут быть в разном регистре и имеет значение когда приводить их к одному регистру.

Можно использовать любые методы.


Примеры запуска функции:
```javascript
isAnagram(['1', '2', '3'], [' ', '3', '1', ' ', '2']);                     // true
isAnagram(['A', 'B', 'C'], [' ', '', 'b', 'c', ' ', 'b']);                 // false
isAnagram(['A', 'B', 'C'], [' ', 'b', 'a', 'c', ' ', ' ']);                // true
isAnagram(['5', '9', '2', ' ', '3', '0'], ['0', '9', '3', ' ', '2', ' ']); // false
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
  const str1lowerCase = arr1.join('').toLowerCase();
  const str2lowerCase = arr2.join('').toLowerCase();

  const str1 = str1lowerCase.split('').sort().join('').trim();
  const str2 = str2lowerCase.split('').sort().join('').trim();

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

it("isAnagram(['e', 'L', 'b', 'o', 'W'], ['b', 'E', 'l', 'o', 'w']) should return true", () => {
  expect(isAnagram(['e', 'L', 'b', 'o', 'W'], ['b', 'E', 'l', 'o', 'w'])).to.be.true;
});

it("isAnagram(['c', ' ', 'A', '8', 'R'], ['8', 'r', 'a', 'C']) should return true", () => {
  expect(isAnagram(['c', ' ', 'A', '8', 'R'], ['8', 'r', 'a', 'C'])).to.be.true;
});

it("isAnagram(['L', 'A', 'P', 'T', 'O', 'P'], ['t', 'o', 'o', 'p', 'l', 'a', 'p']) should return false", () => {
  expect(isAnagram(['L', 'A', 'P', 'T', 'O', 'P'], ['t', 'o', 'o', 'p', 'l', 'a', 'p'])).to.be.false;
});

it("isAnagram(['l', 'i', 's', 't', 'e', 'n'], ['s', 'i', 'l', 'l', 'e', 'n', 't']) should return true", () => {
  expect(isAnagram(['l', 'i', 's', 't', 'e', 'n'], ['S', 'I', 'L', 'E', 'N', 'T'])).to.be.true;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
