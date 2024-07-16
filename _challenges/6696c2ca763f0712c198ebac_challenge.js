// NAMEEN:
// NAMERU:Проверить строку на палиндром

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `checkStr` принимает строку `str` в качестве параметра и проверяет, является ли эта строка палиндромом.

Строка `str` не может быть пустой и все буквы в нижнем регистре.

Функция должна возвращать строку вида: `str is palindrome` или `str is not palindrome`, где `str` - это значение параметра функции.

Примеры запуска функции:
```javascript
checkStr("abba") // "abba is palindrome"
checkStr("car") // "car is not palindrome"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkStr(str) {
  let middle = str.length / 2;
  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[str.length - 1 - i])
      return `${str} is not palindrome`;
  }
  return `${str} is palindrome`;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkStr', () => {
  expect(checkStr).to.be.a('function');
});

it('checkStr("abba") should return "abba is palindrome"', () => {
  expect(checkStr("abba")).to.equal("abba is palindrome");
});

it('checkStr("car") should return "car is not palindrome"', () => {
  expect(checkStr("car")).to.equal("car is not palindrome");
});

it('checkStr("modem") should return "modem is not palindrome"', () => {
  expect(checkStr("modem")).to.equal("modem is not palindrome");
});

it('checkStr("madam") should return "madam is palindrome"', () => {
  expect(checkStr("madam")).to.equal("madam is palindrome");
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
