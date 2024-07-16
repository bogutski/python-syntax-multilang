// NAMEEN:
// NAMERU:Строка начинается и заканчивается на один и тот же символ

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isSameStartAndEnd`, которая принимает строку и возвращает `true`, если строка начинается и заканчивается на один и тот же символ.

Не учитывайте пробелы в начале и конце строки.

Не чувствительна к регистру.

Примеры:
```javascript
isSameStartAndEnd('a'); // true
isSameStartAndEnd('  aa'); // true
isSameStartAndEnd('abA '); // true
isSameStartAndEnd('a b a '); // true
isSameStartAndEnd('a b b'); // false
isSameStartAndEnd('a b a b'); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isSameStartAndEnd(text) {
  const str = text.trim().toLowerCase();
  return str[0] === str[str.length - 1];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isSameStartAndEnd', () => {
  expect(isSameStartAndEnd).to.be.a('function');
});

it('isSameStartAndEnd("a") should return true', () => {
  expect(isSameStartAndEnd('a')).to.be.true;
});

it('isSameStartAndEnd("  aa") should return true', () => {
  expect(isSameStartAndEnd('  aa')).to.be.true;
});

it('isSameStartAndEnd("abA ") should return true', () => {
  expect(isSameStartAndEnd('abA ')).to.be.true;
});

it('isSameStartAndEnd("a b a ") should return true', () => {
  expect(isSameStartAndEnd('a b a ')).to.be.true;
});

it('isSameStartAndEnd("a b b") should return false', () => {
  expect(isSameStartAndEnd('a b b')).to.be.false;
});

it('isSameStartAndEnd("a b a b") should return false', () => {
  expect(isSameStartAndEnd('a b a b')).to.be.false;
});

it('isSameStartAndEnd("  jw  WJ ") should return true', () => {
  expect(isSameStartAndEnd('  jw  WJ ')).to.be.true;
});

it('isSameStartAndEnd(" H e l l o ") should return false', () => {
  expect(isSameStartAndEnd(' H e l l o ')).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
