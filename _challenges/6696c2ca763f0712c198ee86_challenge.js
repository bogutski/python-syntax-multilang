// NAMEEN:
// NAMERU:Поменять порядок слов в строке на обратный

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseLocationOfWords`, которая принимает строку слов, разделенных одним пробелом.

Функция должна вернуть строку, в которой слова будут расположены в обратном порядке.

Например, если строка `one two three`, то функция должна вернуть строку `three two one`.

В начале и в конце строки пробелов быть не должно.


Примеры запуска функции:
```javascript
reverseLocationOfWords('one two three four') // 'four three two one'
reverseLocationOfWords('1 2 3 4 5')          // '5 4 3 2 1'
reverseLocationOfWords('123 456')            // '456 123'
reverseLocationOfWords('OneWord')            // 'OneWord'
reverseLocationOfWords('')                   // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseLocationOfWords(str){
  let newString = '';
  let chunk = '';
  for (let i = 0; i < str.length ; i++) {
    if(str[i] === ' '){
      newString = chunk + ' ' + newString;
      chunk = '';
    } else chunk += str[i];
  }
  return (chunk + ' ' + newString).trim();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseLocationOfWords', () => {
  expect(reverseLocationOfWords).to.be.a('function');
});

it("reverseLocationOfWords('one two three four five') returns 'five four three two one'", () => {
  expect(reverseLocationOfWords('one two three four five')).to.equal('five four three two one');
});

it("reverseLocationOfWords('1 2 3 4 5 6 7 8 9 0') returns '0 9 8 7 6 5 4 3 2 1'", () => {
  expect(reverseLocationOfWords('1 2 3 4 5 6 7 8 9 0')).to.equal('0 9 8 7 6 5 4 3 2 1');
});

it("reverseLocationOfWords('!1 @2 #3 $4 %5') returns '%5 $4 #3 @2 !1'", () => {
  expect(reverseLocationOfWords('!1 @2 #3 $4 %5')).to.equal('%5 $4 #3 @2 !1');
});

it("reverseLocationOfWords('OneBigWord') returns 'OneBigWord'", () => {
  expect(reverseLocationOfWords('OneBigWord')).to.equal('OneBigWord');
});

it("reverseLocationOfWords('') returns ''", () => {
  expect(reverseLocationOfWords('')).to.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
