// NAMEEN:
// NAMERU:Перевернуть строку и поменять регистр букв

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseStrAndCase`, которая принимает строку и возвращает новую строку.

Новая строка должна быть перевернутой и каждая буква должна быть в противоположном регистре.

Например: строка `aBc` должна превратиться в `CbA`.

В случае пустой строки функция должна вернуть пустую строку.


Пример запуска функции:
```js
reverseStrAndCase('Hi There'); // => 'EREHt Ih'
reverseStrAndCase('cAt');   // => 'TaC'
reverseStrAndCase('pAsV');  // => 'vSaP'
reverseStrAndCase('123');   // => '321'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseStrAndCase(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === str[i].toLowerCase()) newStr += str[i].toUpperCase();
    else newStr += str[i].toLowerCase();
  }
  return newStr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseStrAndCase', () => {
  expect(reverseStrAndCase).to.be.a('function');
});

it('reverseStrAndCase("hello") should return "OLLEH"', () => {
  expect(reverseStrAndCase('hello')).to.equal('OLLEH');
});

it('reverseStrAndCase("UPPERCASE") should return "esacreppu"', () => {
  expect(reverseStrAndCase('UPPERCASE')).to.equal('esacreppu');
});

it('reverseStrAndCase("JaVaScRiPt") should return "TpIrCsAvAj"', () => {
  expect(reverseStrAndCase('JaVaScRiPt')).to.equal('TpIrCsAvAj');
});

it('reverseStrAndCase("1234567890") should return "0987654321"', () => {
  expect(reverseStrAndCase('1234567890')).to.equal('0987654321');
});

it('reverseStrAndCase("HeLLo WoRlD") should return "dLrOw OllEh"', () => {
  expect(reverseStrAndCase('HeLLo WoRlD')).to.equal('dLrOw OllEh');
});

it('reverseStrAndCase("") should return ""', () => {
  expect(reverseStrAndCase('')).to.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
