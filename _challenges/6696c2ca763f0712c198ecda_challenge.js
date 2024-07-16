// NAMEEN:
// NAMERU:Количество букв и остальных символов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `numOfLettersAndOther`, которая принимает строку и возвращает количество `букв` и количество `остальных символов` в строке.

Функция должна вернуть:
* `String is empty` - если строка пустая
* `Letters: ${count}, other symbols: ${count}` - если строка не пустая


Примеры запуска функции:
```javascript
numOfLettersAndOther('')                  // 'String is empty'
numOfLettersAndOther('Hello World!')      // 'Letters: 10, other symbols: 2'
numOfLettersAndOther(' 123 !@# {[()]} ')  // 'Letters: 0, other symbols: 16'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numOfLettersAndOther(str){
  if(str.length === 0) return 'String is empty';
  let count = 0;
  for (let i = 0; i < str.length; i++){
    if(str[i] === str[i].toLowerCase() && str[i] === str[i].toUpperCase()) count++;
  }
  return `Letters: ${str.length - count}, other symbols: ${count}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numOfLettersAndOther', () => {
  expect(numOfLettersAndOther).to.be.a('function');
});

it("numOfLettersAndOther('Hello World!') should return 'Letters: 10, other symbols: 2'", () => {
  expect(numOfLettersAndOther('Hello World!')).to.equal('Letters: 10, other symbols: 2');
});

it("numOfLettersAndOther(' 1W3e5 8!R0 %^') should return 'Letters: 3, other symbols: 11'", () => {
  expect(numOfLettersAndOther(' 1W3e5 8!R0 %^')).to.equal('Letters: 3, other symbols: 11');
});

it("numOfLettersAndOther('aBcDeFgHi') should return 'Letters: 9, other symbols: 0'", () => {
  expect(numOfLettersAndOther('aBcDeFgHi')).to.equal('Letters: 9, other symbols: 0');
});

it("numOfLettersAndOther(' 2 5 47$3?>,23 *&#!') should return 'Letters: 0, other symbols: 19'", () => {
  expect(numOfLettersAndOther(' 2 5 47$3?>,23 *&#!')).to.equal('Letters: 0, other symbols: 19');
});

it("numOfLettersAndOther('') should return 'String is empty'", () => {
  expect(numOfLettersAndOther('')).to.equal('String is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
