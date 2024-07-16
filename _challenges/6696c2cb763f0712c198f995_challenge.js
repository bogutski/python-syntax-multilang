// NAMEEN:
// NAMERU:Проверка строки на палиндром

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isPalindrome`, которая проверяет, является ли строка палиндромом.

Строка может содержать пробелы и знаки препинания, которые нужно игнорировать.


Примеры запуска функции:
```javascript
isPalindrome("A man, a plan, a canal: Panama"); // true
isPalindrome("race a car"); // false
isPalindrome("12321"); // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function isPalindrome(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isPalindrome(string) {
  const modified = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  for(let i = 0; i < modified.length / 2; i++) {
    if(modified[i] !== modified[modified.length - 1 - i]) return false
  }

  return true;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isPalindrome', () => {
  expect(isPalindrome).to.be.a('function');
});

it('isPalindrome("A man, a plan, a canal: Panama") should return true', function() {
  expect(isPalindrome("A man, a plan, a canal: Panama")).to.equal(true);
});

it('isPalindrome("race a car") should return false', function() {
  expect(isPalindrome("race a car")).to.equal(false);
});

it('isPalindrome(" ") should return true', function() {
  expect(isPalindrome(" ")).to.equal(true);
});

it('isPalindrome("No lemon, no melon") should return true', function() {
  expect(isPalindrome("No lemon, no melon")).to.equal(true);
});

it('isPalindrome("Was it a car or a cat I saw?") should return true', function() {
  expect(isPalindrome("Was it a car or a cat I saw?")).to.equal(true);
});

it('isPalindrome("12321") should return true', function() {
  expect(isPalindrome("12321")).to.equal(true);
});

it('isPalindrome("123456") should return false', function() {
  expect(isPalindrome("123456")).to.equal(false);
});

it('isPalindrome("Able , was I saw eLba") should return true', function() {
  expect(isPalindrome("Able , was I saw eLba")).to.equal(true);
});

it('isPalindrome("Hello, World!") should return false', function() {
  expect(isPalindrome("Hello, World!")).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
