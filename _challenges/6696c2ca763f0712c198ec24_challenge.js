// NAMEEN:
// NAMERU:Индексы вхождений элемента в строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `indexOfOccurrences`, которая принимает строку и символ.

Функция должна вернуть строку, в которой через пробел перечислены индексы вхождений символа в строку. В конце пробела быть не должно.

Например, `indexOfOccurrences('abc abc', 'a')` должна вернуть `'0 4'`, потому что символ `a` встречается в строке на индексах `0` и `4`.

В случае, если строка или символ пустые, функция должна вернуть пустую строку.

Примеры запуска функции:
```javascript
indexOfOccurrences('hello', 'l'); // '2 3'
indexOfOccurrences('abcaacba', 'a'); // '0 3 4 7'
indexOfOccurrences('', 'a'); // ''
indexOfOccurrences('abc', ''); // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function indexOfOccurrences(str, el) {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] === el) {
      result += i + ' ';
    }
  }
  return result.trim();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function indexOfOccurrences', () => {
  expect(indexOfOccurrences).to.be.a('function');
});

it("indexOfOccurrences('hello world', 'l') should return '2 3 9'", () => {
  expect(indexOfOccurrences('hello world', 'l')).to.be.equal('2 3 9');
});

it("indexOfOccurrences('abalabahaha', 'a') should return '0 2 4 6 8 10'", () => {
  expect(indexOfOccurrences('abalabahaha', 'a')).to.be.equal('0 2 4 6 8 10');
});

it("indexOfOccurrences('aaaaa', 'a') should return '0 1 2 3 4'", () => {
  expect(indexOfOccurrences('aaaaa', 'a')).to.be.equal('0 1 2 3 4');
});

it("indexOfOccurrences('abc', '') should return ''", () => {
  expect(indexOfOccurrences('abc', '')).to.be.equal('');
});

it("indexOfOccurrences('', 'a') should return ''", () => {
  expect(indexOfOccurrences('', 'a')).to.be.equal('');
});

it("indexOfOccurrences('', '') should return ''", () => {
  expect(indexOfOccurrences('', '')).to.be.equal('');
});

it("indexOfOccurrences('123123', '1') should return '0 3'", () => {
  expect(indexOfOccurrences('123123', '1')).to.be.equal('0 3');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
