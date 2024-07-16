// NAMEEN:
// NAMERU:Палиндром для слова из пяти букв

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Палиндром — это слово или фраза, которые одинаково читаются в обоих направлениях.

Например, слово `kayak` является палиндромом, так как оно читается одинаково слева направо и справа налево.

Слово `canoe` не является палиндромом.

Напиши функцию `isPalindrome`, которая принимает строку и возвращает `true`, если строка является палиндромом, и `false` в противном случае.

Строка будет всегда состоять из пяти букв.

Для решения это задачи сравните на равенство первый и последний символ строки, второй и предпоследний символ строки. Средний символ не учитывайте.

Примеры запуска функции:
```javascript
isPalindrome('kayak'); // true
isPalindrome('canoe'); // false
isPalindrome('rutur'); // true
isPalindrome('racer'); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isPalindrome(str) {
  return str[0] === str[4] && str[1] === str[3];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isPalindrome', () => {
  expect(isPalindrome).to.be.a('function');
});

it('isPalindrome("kayak") should return true', () => {
  expect(isPalindrome('kayak')).to.equal(true);
});

it('isPalindrome("canoe") should return false', () => {
  expect(isPalindrome('canoe')).to.equal(false);
});

it('isPalindrome("rutur") should return true', () => {
  expect(isPalindrome('rutur')).to.equal(true);
});

it('isPalindrome("racer") should return false', () => {
  expect(isPalindrome('racer')).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
