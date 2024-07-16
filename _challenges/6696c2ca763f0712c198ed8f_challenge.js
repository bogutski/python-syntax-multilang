// NAMEEN:
// NAMERU:Найти дубликат первого слова в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `firstDuplicate`, которая принимает строку и возвращает `true`, если есть дубликат первого слова в
 строке `str`, `false` в противном случае.

Между словами есть лишь один пробел.

Если строка пустая или в ней одно слово (иными словами нет пробелов), то функция должна вернуть `false`.

Примеры запуска функции:
```javascript
firstDuplicate('chery chery'); // true
firstDuplicate('red chery'); // false
firstDuplicate('red'); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function firstDuplicate(str) {
  let firstWord = '';
  if (str.indexOf(' ') === -1) return false;
  for (let i = 0; i < str.length; i++) {
    if(str[i] !== ' ') firstWord += str[i];
    else break;
  }
  return str.indexOf(firstWord, str.indexOf(' ')) !== -1;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function firstDuplicate', () => {
  expect(firstDuplicate).to.be.a('function');
});

it("firstDuplicate('chery chery') should return true", () => {
  expect(firstDuplicate('chery chery')).true
});

it("firstDuplicate('red chery') should return false", () => {
  expect(firstDuplicate('red chery')).false
});

it("firstDuplicate('chery') should return false", () => {
  expect(firstDuplicate('chery')).false
});

it("firstDuplicate('What are you doing? What have you done?') should return true", () => {
  expect(firstDuplicate('What are you doing? What have you done?')).true
});

it("firstDuplicate('What is your favorite number?') should return false", () => {
  expect(firstDuplicate('What is your favorite number?')).false
});

it("firstDuplicate('') should return false", () => {
  expect(firstDuplicate('')).false
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
