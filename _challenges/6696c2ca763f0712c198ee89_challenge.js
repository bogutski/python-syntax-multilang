// NAMEEN:
// NAMERU:Перевернуть только первое слово в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseOnlyFirstWord`, которая принимает строку с одним или несколькими словами.

Функция должна перевернуть только первое слово и вернуть перевернутое слово и остаток строки.

Например, если входная строка - `'one two'`, то функция должна вернуть строку `'eno two'`.

Каждое слово разделено одним пробелом. Если в строке одно слово, то функция должна вернуть только это перевернутое слово.


Примеры запуска функции:
```javascript
reverseOnlyFirstWord('one two three') // 'eno two three'
reverseOnlyFirstWord('123 numbers') // '321 numbers'
reverseOnlyFirstWord('Hello') // 'olleH'
reverseOnlyFirstWord('') // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseOnlyFirstWord(str){
  let result = '';
  let firstWord = '';
  let firstSpace = str.indexOf(' ');
  for(let i = 0; i < str.length; i++){
    if(str.includes(' ') && i >= firstSpace) result += str[i];
    else firstWord = str[i] + firstWord;
  }
  return firstWord + result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseOnlyFirstWord', () => {
  expect(reverseOnlyFirstWord).to.be.a('function');
});

it("reverseOnlyFirstWord('Hello world') returns 'olleH world'", () => {
  expect(reverseOnlyFirstWord('Hello world')).to.equal('olleH world');
});

it("reverseOnlyFirstWord('Hello') returns 'olleH'", () => {
  expect(reverseOnlyFirstWord('Hello')).to.equal('olleH');
});

it("reverseOnlyFirstWord('one two three') returns 'eno two three'", () => {
  expect(reverseOnlyFirstWord('one two three')).to.equal('eno two three');
});

it("reverseOnlyFirstWord('12345 numbers') returns '54321 numbers'", () => {
  expect(reverseOnlyFirstWord('12345 numbers')).to.equal('54321 numbers');
});

it("reverseOnlyFirstWord('') returns ''", () => {
  expect(reverseOnlyFirstWord('')).to.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
