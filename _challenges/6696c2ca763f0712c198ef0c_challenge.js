// NAMEEN:
// NAMERU:Перевернуть последнее слово

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseOnlyLastWord`, которая принимает строку с одним или несколькими словами.

Функция должна вернуть строку, в которой только последнее слово перевернуто.

Если в строке только одно слово, это можно определить по наличию пробелов, то функция должна вернуть одно перевернутое слово.


Примеры запуска функции:
```javascript
reverseOnlyLastWord('');   // ''
reverseOnlyLastWord('123');   // '321'
reverseOnlyLastWord('olleH');    // 'Hello'
reverseOnlyLastWord('Hi there 12345');  // 'Hi there 54321'
reverseOnlyLastWord('Hello, my initials are .R.A'); // 'Hello, my initials are A.R.'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseOnlyLastWord(str){
  let result = '';
  let lastWord = '';
  let lastSpace = str.lastIndexOf(' ');
  for(let i = 0; i < str.length; i++){
    if(i > lastSpace) lastWord = str[i] + lastWord;
    else result += str[i];
  }
  return result +lastWord;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseOnlyLastWord', () => {
  expect(reverseOnlyLastWord).to.be.a('function');
});

it("reverseOnlyLastWord('Hello my name is nhoJ') returns 'Hello my name is John'", () => {
  expect(reverseOnlyLastWord('Hello my name is nhoJ')).to.equal('Hello my name is John');
});

it("reverseOnlyLastWord('Hello dlrow') returns 'Hello world'", () => {
  expect(reverseOnlyLastWord('Hello dlrow')).to.equal('Hello world');
});

it("reverseOnlyLastWord('Hi there 12345') returns 'Hi there 54321'", () => {
  expect(reverseOnlyLastWord('Hi there 12345')).to.equal('Hi there 54321');
});

it("reverseOnlyLastWord('olleH') returns 'Hello'", () => {
  expect(reverseOnlyLastWord('olleH')).to.equal('Hello');
});

it("reverseOnlyLastWord('0987654321') returns '1234567890'", () => {
  expect(reverseOnlyLastWord('0987654321')).to.equal('1234567890');
});

it("reverseOnlyLastWord('') returns ''", () => {
  expect(reverseOnlyLastWord('')).to.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
