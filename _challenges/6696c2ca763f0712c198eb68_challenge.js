// NAMEEN:
// NAMERU:Перевернуть строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseString`, которая принимает строку и возвращает ее в обратном порядке.

Если строка пустая, верните пустую строку.

Пример запуска функции:
```javascript
reverseString('hello'); // 'olleh'
reverseString('Howdy'); // 'ydwoH'
reverseString('Greetings from California'); // 'ainrofilaC morf sgniteerG'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseString(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr
}

console.log(reverseString('hello'));
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseString', () => {
  expect(reverseString).to.be.a('function');
});

it("reverseString('hello') should return 'olleh'", () => {
  expect(reverseString('hello')).to.equal('olleh');
});

it("reverseString('Howdy') should return 'ydwoH'", () => {
  expect(reverseString('Howdy')).to.equal('ydwoH');
});

it("reverseString('Greetings from California') should return 'ainrofilaC morf sgniteerG'", () => {
  expect(reverseString('Greetings from California')).to.equal('ainrofilaC morf sgniteerG');
});

it("reverseString('') should return ''", () => {
  expect(reverseString('')).to.equal('');
});

it("reverseString('a') should return 'a'", () => {
  expect(reverseString('a')).to.equal('a');
});

it("reverseString('123456789') should return '987654321'", () => {
  expect(reverseString('123456789')).to.equal('987654321');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
