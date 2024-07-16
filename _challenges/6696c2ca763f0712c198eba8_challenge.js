// NAMEEN:
// NAMERU:Есть ли тут палиндромы?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция isAnyPalindrome принимает два аргумента - строки str1 и str2.

Необходимо проверить какая из этих строк является палиндромом, а какая нет.

Функция должна вернуть:
* "str1 is palindrome" если первая строка является палиндромом
* "str2 is palindrome" если вторая строка является палиндромом
* "both are palindrome" если обе строки являются палиндромами
* "none of them is palindrome" если ни одна из строк не является палиндромом

Примеры запуска функции:
```javascript
isAnyPalindrome("madam", "racecar") // "both are palindrome"
isAnyPalindrome("madam", "hello") // "madam is palindrome"
isAnyPalindrome("hello", "racecar") // "racecar is palindrome"
isAnyPalindrome("hello", "world") // "none of them is palindrome"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isAnyPalindrome(str1, str2) {
  let newStr1 = '';
  for (let i = 0; i < str1.length; i++) {
    newStr1 = str1[i] + newStr1;
  }
  let newStr2 = '';
  for (let i = 0; i < str2.length; i++) {
    newStr2 = str2[i] + newStr2;
  }
  return (newStr1 === str1 && newStr2 === str2) ? 'both are palindrome' : (newStr1 === str1) ? str1 + ' is palindrome' : (newStr2 === str2) ? str2 + ' is palindrome' : 'none of them is palindrome';
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function isAnyPalindrome', () => {
  expect(isAnyPalindrome).to.be.a('function');
});

it('isAnyPalindrome("madam", "racecar") should return "both are palindrome"', () => {
  expect(isAnyPalindrome("madam", "racecar")).to.equal("both are palindrome");
});

it('isAnyPalindrome("madam", "hello") should return "madam is palindrome"', () => {
  expect(isAnyPalindrome("madam", "hello")).to.equal("madam is palindrome");
});

it('isAnyPalindrome("hello", "racecar") should return "racecar is palindrome"', () => {
  expect(isAnyPalindrome("hello", "racecar")).to.equal("racecar is palindrome");
});

it('isAnyPalindrome("hello", "world") should return "none of them is palindrome"', () => {
  expect(isAnyPalindrome("hello", "world")).to.equal("none of them is palindrome");
});

it('isAnyPalindrome("madam", "madam") should return "both are palindrome"', () => {
  expect(isAnyPalindrome("madam", "madam")).to.equal("both are palindrome");
});

it('isAnyPalindrome("", "") should return "both are palindrome"', () => {
  expect(isAnyPalindrome("", "")).to.equal("both are palindrome");
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
