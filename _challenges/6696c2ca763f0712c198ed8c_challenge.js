// NAMEEN:
// NAMERU:Удалить пробелы в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `deleteSpace`, которая принимает строку `str` и возвращает новую строку с тем же текстом что в
 `str`, но без пробелов.


Примеры запуска функции:
```javascript
deleteSpace('two strings'); // 'twostrings'
deleteSpace(' a very  long word'); // 'averylongword'
deleteSpace(' '); // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function deleteSpace(str) {
  let res = '';
  for(let i = 0; i < str.length; i++){
    if(str[i] !== ' ') res += str[i];
  }
  return res;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function deleteSpace', () => {
  expect(deleteSpace).to.be.a('function');
});

it("deleteSpace('two strings') should return 'twostrings'", () => {
  expect(deleteSpace('two strings')).to.equal('twostrings');
});

it("deleteSpace(' a very  long word') should return 'averylongword'", () => {
  expect(deleteSpace(' a very  long word')).to.equal('averylongword');
});

it("deleteSpace(' ') should return ''", () => {
  expect(deleteSpace(' ')).to.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
