// NAMEEN:
// NAMERU:Является ли строка палиндромом без учета регистра

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `isPalindrome` должна принимать строку и возвращать `true`, если строка является палиндромом, и `false`, если нет.

Строка может содержать заглавные и строчные буквы, необходимо сравнивать без учета регистра.

Примеры запуска функции:

```javascript
isPalindrome("Eye") // true
isPalindrome("Hello") // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isPalindrome(str) {
  str = str.toLowerCase();
  let newStr = '';
  for (i = 0; i < str.length; i++) {
    newStr = str[i] + newStr;
  }
  return newStr === str;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function isPalindrome', () => {
  expect(isPalindrome).to.be.a('function');
});

it('isPalindrome("eye") should return true', () => {
  expect(isPalindrome("eye")).to.be.true;
});

it('isPalindrome("Hello") should return false', () => {
  expect(isPalindrome("Hello")).to.be.false;
});

it('isPalindrome("Racecar") should return true', () => {
  expect(isPalindrome("Racecar")).to.be.true;
});

it('isPalindrome("") should return true', () => {
  expect(isPalindrome("")).to.be.true;
});

it('isPalindrome("Palindrome") should return false', () => {
  expect(isPalindrome("Palindrome")).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
