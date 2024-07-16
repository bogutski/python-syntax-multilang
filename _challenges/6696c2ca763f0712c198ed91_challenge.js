// NAMEEN:
// NAMERU:Найти дубликат последнего слова в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `lastDuplicate`, которая принимает строку и возвращает `true`, если есть дубликат последнего слова
 в строке `str`, `false` в противном случае.

Между словами есть лишь один пробел.

Если строка пустая или в ней одно слово (иными словами нет пробелов), то функция должна вернуть `false`.


Примеры запуска функции:
```javascript
lastDuplicate('Little A from Column A'); // true
lastDuplicate('Fight Fire With Fire') // true
lastDuplicate('a wolf, Lone Wolf'); // false
lastDuplicate('Raining Cats and Dogs') // false
lastDuplicate('Little Art from Column Ar') // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function lastDuplicate(str) {
  let lastWord = '';
  let lastSpace = str.lastIndexOf(' ');
  for (let i = lastSpace + 1 ; i < str.length; i++) {
    lastWord += str[i];
  }
  return str.lastIndexOf(lastWord + ' ', lastSpace) !== -1;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function lastDuplicate', () => {
  expect(lastDuplicate).to.be.a('function');
});

it("lastDuplicate('chery chery') should return true", () => {
  expect(lastDuplicate('chery chery')).true
});

it("lastDuplicate('red chery') should return false", () => {
  expect(lastDuplicate('red chery')).false
});

it("lastDuplicate('chery') should return false", () => {
  expect(lastDuplicate('chery')).false
});

it("lastDuplicate('Little A from Column A') should return true", () => {
  expect(lastDuplicate('Little A from Column A')).true
});

it("lastDuplicate('Fight Fire With Fire') should return true", () => {
  expect(lastDuplicate('Fight Fire With Fire')).true
});

it("lastDuplicate('a wolf, Lone Wolf') should return false", () => {
  expect(lastDuplicate('a wolf, Lone Wolf')).false
});

it("lastDuplicate('Raining Cats and Dogs') should return false", () => {
  expect(lastDuplicate('Raining Cats and Dogs')).false
});

it("lastDuplicate('Little Art from Column Li') should return false", () => {
  expect(lastDuplicate('Little Art from Column Li')).false
});

it("lastDuplicate('Little Art from Column Ar') should return false", () => {
  expect(lastDuplicate('Little Art from Column Ar')).false
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND