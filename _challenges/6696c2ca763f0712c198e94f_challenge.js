// NAMEEN:
// NAMERU:Проверка на перевернутую строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reversedString`, которая принимает два аргумента: `string` и `reversedString`.

В этой задаче вам нужно будет проверить, является ли `string` перевернутой версией `reversedString`.

Разверните `string` задом наперед и сравните с `reversedString`. Если они совпадают, верните `true`, иначе `false`.

Примеры запуска функции:
```javascript
reversedString('hello', 'olleh'); // true
reversedString('apple', 'apple'); // false
reversedString('123', ''); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reversedString(string, reversedString) {
  let newStr = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }
  return newStr === reversedString;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reversedString', () => {
  expect(reversedString).to.be.a('function');
});

it('reversedString("hello", "olleh") should return true', () => {
  expect(reversedString('hello', 'olleh')).to.be.true;
});

it('reversedString("hello", "hello") should return false', () => {
  expect(reversedString('hello', 'hello')).to.be.false;
});

it('reversedString("1234 56789", "98765 4321") should return true', () => {
  expect(reversedString('1234 56789', '98765 4321')).to.be.true;
});

it('reversedString("1 2 3 4 5", "5 4 3 2 1") should return true', () => {
  expect(reversedString('1 2 3 4 5', '5 4 3 2 1')).to.be.true;
});

it('reversedString("true", "eurt") should return true', () => {
  expect(reversedString('true', 'eurt')).to.be.true;
});

it('reversedString("check", "") should return false', () => {
  expect(reversedString('check', '')).to.be.false;
});

it('reversedString("", "check") should return false', () => {
  expect(reversedString('', 'check')).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
