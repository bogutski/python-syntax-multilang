// NAMEEN:
// NAMERU:Перевернуть строку и удалить пробелы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseWithoutSpaces`, которая принимает строку и возвращает ее в обратном порядке, но без пробелов.

Если строка пустая, то функция должна вернуть пустую строку.

Примеры запуска функции:
```js
reverseWithoutSpaces('Hello World!'); // '!dlroWolleH'
reverseWithoutSpaces(' abc '); // 'cba'
reverseWithoutSpaces('1 2 3'); // '321'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseWithoutSpaces(str) {
  let newStr = '';
  for(let i = str.length - 1; i >= 0; i--){
    if(str[i] !== ' ') newStr += str[i];
  }
  return newStr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseWithoutSpaces', () => {
  expect(reverseWithoutSpaces).to.be.a('function');
});

it("reverseWithoutSpaces('Hello World!') should return '!dlroWolleH'", () => {
  expect(reverseWithoutSpaces('Hello World!')).to.equal('!dlroWolleH');
});

it("reverseWithoutSpaces('a b c d') should return 'dcba'", () => {
  expect(reverseWithoutSpaces('a b c d')).to.equal('dcba');
});

it("reverseWithoutSpaces('Anna, John, Peter') should return 'reteP,nhoJ,annA'", () => {
  expect(reverseWithoutSpaces('Anna, John, Peter')).to.equal('reteP,nhoJ,annA');
});

it("reverseWithoutSpaces('1 2 3 4 5 6 7 8 9 0') should return '0987654321'", () => {
  expect(reverseWithoutSpaces('1 2 3 4 5 6 7 8 9 0')).to.equal('0987654321');
});

it("reverseWithoutSpaces('apple') should return 'elppa'", () => {
  expect(reverseWithoutSpaces('apple')).to.equal('elppa');
});

it("reverseWithoutSpaces('') should return ''", () => {
  expect(reverseWithoutSpaces('')).to.equal('');
});

it("reverseWithoutSpaces(' blue red green ') should return 'neergdereulb'", () => {
  expect(reverseWithoutSpaces(' blue red green ')).to.equal('neergdereulb');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
