// NAMEEN:
// NAMERU:Ограничение длины строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `limitedLength`, которая принимает два аргумента:

* `string` - строка,
* `num` - количество символов, которое всегда меньше длины `string`.

Функция должна брать первые `num` символов из строки `string` и возвращать новую строку.

Примеры запуска функции:
```javascript
limitedLength('123456', 3); // '123'
limitedLength('abc', 1); // 'a'
limitedLength('abc', 0); // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function limitedLength(string, num) {
  let newString = '';
  for (let i = 0; i < num; i++) {
    newString += string[i];
  }
  return newString;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function limitedLength', () => {
  expect(limitedLength).to.be.a('function');
});

it("limitedLength('12345', 3) should return '123'", () => {
  expect(limitedLength('12345', 3)).to.equal('123');
});

it("limitedLength('1234567890', 5) should return '12345'", () => {
  expect(limitedLength('1234567890', 5)).to.equal('12345');
});

it("limitedLength('abcdefg', 2) should return 'ab'", () => {
  expect(limitedLength('abcdefg', 2)).to.equal('ab');
});

it("limitedLength('abcdefg', 0) should return ''", () => {
  expect(limitedLength('abcdefg', 0)).to.equal('');
});

it("limitedLength('abckmlkfmsfuewfksfkjsdbfksdefg', 20) should return 'abckmlkfmsfuewfksfkj'", () => {
  expect(limitedLength('abckmlkfmsfuewfksfkjsdbfksdefg', 20)).to.equal('abckmlkfmsfuewfksfkj');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
