// NAMEEN:
// NAMERU:Исправьте ошибки в коде функции

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `fixStr` принимает строку `str` и возвращает `true`, если строка является палиндромом, и `false`, если нет.

Необходимо исправить ошибки в коде функции `fixStr`, чтобы она работала правильно.

Ошибок в коде нет, но есть синтаксические ошибки, которые не позволяют функции работать правильно.

Пример запуска функции:
```javascript
fixStr('abba'); // true
fixStr('abca'); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function fixStr(str) {
  let middleStr = str.length / 2;
  for (let i = 0, i < middle, i++) {
    if (str[i] !== str[str.length - 1 - i])
      return False;
  }
  return True;
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fixStr(str) {
  let middle = str.length / 2;
  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[str.length - 1 - i])
      return false;
  }
  return true;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function fixStr', () => {
  expect(fixStr).to.be.a('function');
});

it('fixStr("abba") should return true', () => {
  expect(fixStr('abba')).to.be.true;
});

it('fixStr("abca") should return false', () => {
  expect(fixStr('abca')).to.be.false;
});

it('fixStr("abcba") should return true', () => {
  expect(fixStr('abcba')).to.be.true;
});

it('fixStr("abcda") should return false', () => {
  expect(fixStr('abcda')).to.be.false;
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
