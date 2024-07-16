// NAMEEN:
// NAMERU:Это две гласные?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В английском языке есть 5 гласных букв: `a`, `e`, `i`, `o`, `u`.

Напишите функцию `isVowel`, которая принимает строку из двух букв нижнего регистра и возвращает `true`, если строка содержит только гласные буквы, и `false` в противном случае.

Примеры запуска функции:
```javascript
isVowel('aa'); // true
isVowel('ae'); // true
isVowel('ai'); // true
isVowel('oa'); // true
isVowel('uu'); // true
isVowel('ab'); // false
isVowel('ba'); // false
isVowel('ac'); // false
isVowel('ca'); // false
```

Сравнивайте каждый символ строки с каждой гласной буквой. Вам пригодятся операторы сравнения и логические операторы.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isVowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(str[0]) && vowels.includes(str[1]);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isVowel', () => {
  expect(isVowel).to.be.a('function');
});

it('isVowel("aa") should return true', () => {
  expect(isVowel('aa')).to.equal(true);
});

it('isVowel("ae") should return true', () => {
  expect(isVowel('ae')).to.equal(true);
});

it('isVowel("ai") should return true', () => {
  expect(isVowel('ai')).to.equal(true);
});

it('isVowel("oa") should return true', () => {
  expect(isVowel('oa')).to.equal(true);
});

it('isVowel("uu") should return true', () => {
  expect(isVowel('uu')).to.equal(true);
});

it('isVowel("ab") should return false', () => {
  expect(isVowel('ab')).to.equal(false);
});

it('isVowel("ba") should return false', () => {
  expect(isVowel('ba')).to.equal(false);
});

it('isVowel("ac") should return false', () => {
  expect(isVowel('ac')).to.equal(false);
});

it('isVowel("ca") should return false', () => {
  expect(isVowel('ca')).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
