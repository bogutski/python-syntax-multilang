// NAMEEN:
// NAMERU:Исправьте ошибку в функции 'everySecond'

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте ошибку в функции `everySecond`.

Функция должна принимать строку и возвращать новую строку.

В новой строке прописные и строчные буквы должны чередоваться, начиная с прописной буквы.

Пример:
```javascript
let str = 'abc';
str[0].toUpperCase(); // 'A'
str[1].toLowerCase(); // 'b'
str[2].toUpperCase(); // 'C'
// newStr = 'AbC';
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function everySecond(str){
  let newStr = '';
  for(let i = 5; i = string.length; i--){
    if(i % 2 === 0) {
      newStr = str[i].toUpperCase();
    } else {
      newStr += str[o].toLowerCase();
    }
  }
  return str;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function everySecond(str){
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    if(i % 2 === 0) newStr += str[i].toUpperCase();
    else newStr += str[i].toLowerCase();
  }
  return newStr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function everySecond', () => {
  expect(everySecond).to.be.a('function');
});

it("everySecond('hello') should return 'HeLlO'", () => {
  expect(everySecond('hello')).to.equal('HeLlO');
});

it("everySecond('abcDEF') should return 'AbCdEf'", () => {
  expect(everySecond('abcDEF')).to.equal('AbCdEf');
});

it("everySecond('ASDHJLKJPOIK') should return 'AsDhJlKjPoIk'", () => {
  expect(everySecond('ASDHJLKJPOIK')).to.equal('AsDhJlKjPoIk');
});

it("everySecond('') should return ''", () => {
  expect(everySecond('')).to.equal('');
});

it("everySecond('a') should return 'A'", () => {
  expect(everySecond('a')).to.equal('A');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
