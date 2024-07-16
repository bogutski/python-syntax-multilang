// NAMEEN:
// NAMERU:Функция повторяет строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `repeater`, которая принимает строку и число, и возвращает новую строку, которая состоит из повторений исходной строки.

Пример использования функции:
```javascript
repeater('abc', 3); // 'abcabcabc'
repeater('qwe', 5); // 'qweqweqweqweqwe'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function repeater(str, n) {
  return str.repeat(n);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function repeater', () => {
  expect(repeater).to.be.a('function');
});

it('repeater("abc", 3) should return "abcabcabc"', () => {
  expect(repeater('abc', 3)).to.equal('abcabcabc');
});

it('repeater("qwe", 5) should return "qweqweqweqweqwe"', () => {
  expect(repeater('qwe', 5)).to.equal('qweqweqweqweqwe');
});

it('repeater("qwe", 0) should return ""', () => {
  expect(repeater('qwe', 0)).to.equal('');
});

it('repeater("qwe", 1) should return "qwe"', () => {
  expect(repeater('qwe', 1)).to.equal('qwe');
});

it('repeater("qwe", 2) should return "qweqwe"', () => {
  expect(repeater('qwe', 2)).to.equal('qweqwe');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
