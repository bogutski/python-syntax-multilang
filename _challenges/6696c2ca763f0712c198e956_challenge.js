// NAMEEN:
// NAMERU:Является ли строка палиндромом?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `palindrome`, которая принимает строку и возвращает `true`, если строка является палиндромом, и `false`, если нет.

`Палиндром` - это строка, которая читается одинаково слева направо и справа налево.

Пустая строка проверятся не будет.

Примеры палиндромов:
* `racecar`
* `kayak`
* `level`

Примеры запуска функции:
```javascript
palindrome('racecar'); // true
palindrome('kayak'); // true
palindrome('hello'); // false
palindrome('apple'); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function palindrome(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed === str;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function palindrome', () => {
  expect(palindrome).to.be.a('function');
});

it("palindrome('racecar') should return true", () => {
  expect(palindrome('racecar')).to.be.true;
});

it("palindrome('kayak') should return true", () => {
  expect(palindrome('kayak')).to.be.true;
});

it("palindrome('hello') should return false", () => {
  expect(palindrome('hello')).to.be.false;
});

it("palindrome('orange') should return false", () => {
  expect(palindrome('orange')).to.be.false;
});

it("palindrome('LeVeL') should return true", () => {
  expect(palindrome('LeVeL')).to.be.true;
});

it("palindrome('KayAk') should return false", () => {
  expect(palindrome('KayAk')).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
