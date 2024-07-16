// NAMEEN:
// NAMERU:Извлечение, модификация и нахождение подстрок

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getStringsContainingSubstring`, которая принимает массив строк, два числа и строку.

Функция должна возвращать новый массив, содержащий строки, извлеченные между указанными индексами (включительно для начала и конца).

Каждая строка должна быть модифицирована: все символы преобразуются в нижний регистр.

Затем функция должна отфильтровать строки, которые содержат указанную подстроку.


Примеры запуска функции:
```javascript
getStringsContainingSubstring(['Apple', 'Banana', 'Cherry', 'Date', 'Fig'], 1, 4, 'a');
// ['banana', 'date']

getStringsContainingSubstring(['Dog', 'Cat', 'Rabbit', 'Hamster'], 0, 2, 'b');
// ['rabbit']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function getSortedModifiedObjects(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getStringsContainingSubstring(arr, start, end, subStr) {
  return arr.slice(start, end + 1)
      .map(str => str.toLowerCase())
      .filter(str => str.includes(subStr))
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getStringsContainingSubstring', () => {
  expect(getStringsContainingSubstring).to.be.a('function');
});

it('getStringsContainingSubstring(["Apple", "Banana", "Cherry", "Date", "Fig"], 1, 4, "a") should return ["banana", "date"]', function() {
  expect(getStringsContainingSubstring(["Apple", "Banana", "Cherry", "Date", "Fig"], 1, 4, "a")).to.deep.equal(["banana", "date"]);
});

it('getStringsContainingSubstring(["Dog", "Cat", "Rabbit", "Hamster"], 0, 2, "b") should return ["rabbit"]', function() {
  expect(getStringsContainingSubstring(["Dog", "Cat", "Rabbit", "Hamster"], 0, 2, "b")).to.deep.equal(["rabbit"]);
});

it('getStringsContainingSubstring(["Sun", "Moon", "Stars", "Galaxy"], 0, 3, "o") should return ["moon"]', function() {
  expect(getStringsContainingSubstring(["Sun", "Moon", "Stars", "Galaxy"], 0, 3, "o")).to.deep.equal(["moon"]);
});

it('getStringsContainingSubstring(["blue", "green", "red", "yellow"], 1, 3, "e") should return ["green", "red", "yellow"]', function() {
  expect(getStringsContainingSubstring(["blue", "green", "red", "yellow"], 1, 3, "e")).to.deep.equal(["green", "red", "yellow"]);
});

it('getStringsContainingSubstring(["one", "two", "three", "four"], 2, 3, "o") should return ["four"]', function() {
  expect(getStringsContainingSubstring(["one", "two", "three", "four"], 2, 3, "o")).to.deep.equal(["four"]);
});

it('getStringsContainingSubstring(["abc", "def", "ghi", "jkl"], 0, 1, "e") should return ["def"]', function() {
  expect(getStringsContainingSubstring(["abc", "def", "ghi", "jkl"], 0, 1, "e")).to.deep.equal(["def"]);
});

it('getStringsContainingSubstring(["AB", "CD", "EF", "GH"], 1, 3, "f") should return ["ef"]', function() {
  expect(getStringsContainingSubstring(["AB", "CD", "EF", "GH"], 1, 3, "f")).to.deep.equal(["ef"]);
});

it('getStringsContainingSubstring(["IJ", "KL", "MN", "OP"], 0, 2, "j") should return ["ij"]', function() {
  expect(getStringsContainingSubstring(["IJ", "KL", "MN", "OP"], 0, 2, "j")).to.deep.equal(["ij"]);
});

it('getStringsContainingSubstring(["123ABC", "DEFG", "HIJKL", "MNOP"], 1, 3, "m") should return ["mnop"]', function() {
  expect(getStringsContainingSubstring(["123ABC", "DEFG", "HIJKL", "MNOP"], 1, 3, "m")).to.deep.equal(["mnop"]);
});

it('getStringsContainingSubstring(["wOrLd", "PLANET", "STAR", "SUN"], 1, 3, "a") should return ["planet", "star"]', function() {
  expect(getStringsContainingSubstring(["wOrLd", "PLANET", "STAR", "SUN"], 1, 3, "a")).to.deep.equal(["planet", "star"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
