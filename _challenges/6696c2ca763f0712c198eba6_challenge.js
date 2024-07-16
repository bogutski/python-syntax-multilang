// NAMEEN:
// NAMERU: Палиндром или нет?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Палиндром — это слово или фраза, которые одинаково читаются слева направо и справа налево. Например, слово "мадам" является палиндромом, а слово "привет" — нет.

Функция `checkTheString` принимает строку `str`.

Строка `str` написана со строчной буквы, не содержит пробелов, но может содержать цифры.

Необходимо проверить является ли строка палиндромом.

Функция должна вернуть true, если строка является палиндромом, и false, если нет.

Пример запуска функции:
```javascript
checkTheString("abba") // true
checkTheString("hello") // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkTheString(str) {
  let check = '';
  for (let i = str.length - 1; i >= 0; i--) {
    check += str[i]
  }
  return str === check
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkTheString', () => {
  expect(checkTheString).to.be.a('function');
});

it('checkTheString("abba") should return true', () => {
  expect(checkTheString("abba")).to.equal(true);
});

it('checkTheString("lol") should return true', () => {
  expect(checkTheString("lol")).to.equal(true);
});

it('checkTheString("hello") should return false', () => {
  expect(checkTheString("hello")).to.equal(false);
});

it('checkTheString("12321") should return true', () => {
  expect(checkTheString("12321")).to.equal(true);
});

it('checkTheString("") should return true', () => {
  expect(checkTheString("")).to.equal(true);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
