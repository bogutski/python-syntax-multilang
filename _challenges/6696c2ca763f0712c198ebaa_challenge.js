// NAMEEN:
// NAMERU:Cоздание палиндрома из строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `makePalindrome` принимает строку `str` в качестве параметра.

Строка `str` состоит только из строчных букв и не является пустой строкой.

Функция должна вернуть новую строку, которая является палиндромом строки `str`.

Для этого к строке `str` нужно добавить ее же в обратном порядке.

Пример запуска функции:
```javascript
makePalindrome("cat") // "cattac"
makePalindrome("dog") // "doggod"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function makePalindrome(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return str + newStr;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function makePalindrome', () => {
  expect(makePalindrome).to.be.a('function');
});

it('makePalindrome("cat") should return "cattac"', () => {
  expect(makePalindrome("cat")).to.be.equal("cattac");
});

it('makePalindrome("dog") should return "doggod"', () => {
  expect(makePalindrome("dog")).to.be.equal("doggod");
});

it('makePalindrome("racecar") should return "racecarracecar"', () => {
  expect(makePalindrome("racecar")).to.be.equal("racecarracecar");
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
