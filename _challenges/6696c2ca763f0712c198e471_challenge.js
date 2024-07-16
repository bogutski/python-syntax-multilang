// NAMEEN:
// NAMERU:Проставить точки между словами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `insertDots`, которая принимает 3 параметра:

- `string1` - строка 1
- `string2` - строка 2
- `length` - общая длина строки

Например, `string1 = 'abc'`, `string2 = 'def'`, `length = 10`.

Надо чтобы функция вернула строку `abc....def`, где `....` - это точки, которые нужно поставить между словами `abc` и `def`, чтобы длина строки была равна `length`.

Если длина строки `string1 + string2` больше или равна `length`, то функция должна вернуть строку `string1 + string2`.

Примеры запуска функции:
```javascript
insertDots('abc', 'def', 10); // 'abc....def'
insertDots('abc', 'def', 9); // 'abc...def'
insertDots('abc', 'def', 8); // 'abc..def'
insertDots('abc', 'def', 7); // 'abc.def'

insertDots('ab', 'ef', 6); // 'ab..ef'
insertDots('ab', 'ef', 5); // 'ab.ef'
insertDots('ab', 'ef', 4); // 'abef'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function insertDots(string1, string2, length) {
  if (string1.length + string2.length >= length) {
    return string1 + string2;
  }
  const dots = '.'.repeat(length - string1.length - string2.length);
  return string1 + dots + string2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function insertDots', () => {
  expect(insertDots).to.be.a('function');
});

it('insertDots("abc", "def", 10) should return "abc....def"', () => {
  expect(insertDots('abc', 'def', 10)).to.equal('abc....def');
});

it('insertDots("abc", "def", 9) should return "abc...def"', () => {
  expect(insertDots('abc', 'def', 9)).to.equal('abc...def');
});

it('insertDots("abc", "def", 8) should return "abc..def"', () => {
  expect(insertDots('abc', 'def', 8)).to.equal('abc..def');
});

it('insertDots("abc", "def", 7) should return "abc.def"', () => {
  expect(insertDots('abc', 'def', 7)).to.equal('abc.def');
});

it('insertDots("ab", "ef", 6) should return "ab..ef"', () => {
  expect(insertDots('ab', 'ef', 6)).to.equal('ab..ef');
});

it('insertDots("ab", "ef", 5) should return "ab.ef"', () => {
  expect(insertDots('ab', 'ef', 5)).to.equal('ab.ef');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
